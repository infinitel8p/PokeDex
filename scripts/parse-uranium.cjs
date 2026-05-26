#!/usr/bin/env node
/**
 * Pokémon Uranium wiki scraper - fetches each base Pokémon's individual page
 * from the Fandom wiki via the MediaWiki API.
 *
 * Emits `src/data/uranium-pokemon.ts` in the existing data shape:
 *   { name, id, sprite, artwork, types, altForm }
 *
 * Mega and Nuclear variants share a wiki page with their base form (Mega
 * pages redirect to the base; Nuclear info is inline). The parser detects
 * these via `image2`/`caption2` fields and emits a separate entry per form
 * with the right altForm link.
 *
 * Polite ~200ms throttle. Disk cache at /tmp/uranium-cache/ so re-runs are
 * instant. Total cold scrape: ~45 seconds for ~200 pages.
 *
 * Seed list comes from the existing data file so we don't need to scrape a
 * "List of Pokémon" page - just refresh what's already known. Update the
 * seed file by hand if Pokémon Uranium ships new content.
 *
 * Run from repo root:
 *   node scripts/parse-uranium.cjs
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

const WIKI_API = "https://pokemonuranium.fandom.com/api.php";
const CACHE_DIR = "/tmp/uranium-cache";
const SEED_PATH = path.resolve(__dirname, "../src/data/uranium-pokemon.ts");
const OUTPUT_PATH = SEED_PATH;
const THROTTLE_MS = 200;
const USER_AGENT = "Mozilla/5.0 (compatible; PokeDex-maintenance/1.0; +https://github.com/infinitel8p/PokeDex)";

// Sprite URL pattern matches the existing dataset which hot-links from the
// user's own PokeDexSprites repo. Forms have their own subfolder.
const SPRITE_REPO = "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium";
const iconUrl = (id) => `${SPRITE_REPO}/Sprites/Icon${id}.gif`;
const artworkBase = (id) => `${SPRITE_REPO}/Pokemon/${id}Popkas.png`;
const artworkMega = (id, slot) => `${SPRITE_REPO}/Mega/${id}_${slot}Popkas.png`;
const artworkNuclear = (id) => `${SPRITE_REPO}/Nuclear/N${id}Popkas.png`;

// ── HTTP layer with on-disk cache ────────────────────────────────────────────

if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR, { recursive: true });

function cacheKey(url) {
    return url.replace(/[^\w.-]/g, "_");
}

function fetchUrl(url) {
    const cachePath = path.join(CACHE_DIR, cacheKey(url));
    if (fs.existsSync(cachePath)) {
        return Promise.resolve(fs.readFileSync(cachePath, "utf8"));
    }
    return new Promise((resolve, reject) => {
        const req = https.get(url, { headers: { "User-Agent": USER_AGENT } }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                resolve(fetchUrl(res.headers.location));
                return;
            }
            if (res.statusCode !== 200) {
                reject(new Error(`HTTP ${res.statusCode} for ${url}`));
                return;
            }
            const chunks = [];
            res.on("data", (c) => chunks.push(c));
            res.on("end", () => {
                const body = Buffer.concat(chunks).toString("utf8");
                fs.writeFileSync(cachePath, body, "utf8");
                resolve(body);
            });
        });
        req.on("error", reject);
        req.setTimeout(15000, () => req.destroy(new Error(`timeout: ${url}`)));
    });
}

async function fetchWikitext(title) {
    const url = `${WIKI_API}?action=parse&page=${encodeURIComponent(title)}&format=json&prop=wikitext&redirects=1`;
    const body = await fetchUrl(url);
    const data = JSON.parse(body);
    if (data.error) throw new Error(`API error: ${data.error.code} - ${data.error.info}`);
    return data.parse?.wikitext?.["*"] || "";
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ── Template parsing (lifted from parse-insurgence.cjs, same logic) ──────────

function parseTemplateFields(block) {
    const fields = {};
    const inner = block.replace(/^\{\{[^|}]+\|/, "").replace(/}}$/, "");
    const parts = [];
    let depth = 0;
    let buffer = "";
    for (let i = 0; i < inner.length; i++) {
        const c = inner[i];
        const next = inner[i + 1];
        if (c === "{" && next === "{") { depth++; buffer += "{{"; i++; continue; }
        if (c === "}" && next === "}") { depth--; buffer += "}}"; i++; continue; }
        if (c === "[" && next === "[") { depth++; buffer += "[["; i++; continue; }
        if (c === "]" && next === "]") { depth--; buffer += "]]"; i++; continue; }
        if (c === "|" && depth === 0) { parts.push(buffer); buffer = ""; continue; }
        buffer += c;
    }
    if (buffer) parts.push(buffer);

    let positionalIdx = 1;
    for (const rawPart of parts) {
        const part = rawPart.replace(/^\s+/, "");
        const eq = part.indexOf("=");
        const keyCandidate = eq !== -1 ? part.slice(0, eq).trim() : "";
        if (eq !== -1 && /^[A-Za-z][\w-]*$/.test(keyCandidate)) {
            fields[keyCandidate] = part.slice(eq + 1).trim();
        } else {
            const trimmed = part.trimEnd();
            if (trimmed) {
                fields[String(positionalIdx)] = trimmed;
                positionalIdx++;
            }
        }
    }
    return fields;
}

function findTemplate(text, name) {
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp("\\{\\{\\s*(?:Template:)?" + escaped, "i");
    const start = text.search(re);
    if (start === -1) return null;
    let depth = 0;
    for (let i = start; i < text.length; i++) {
        const c = text[i];
        const next = text[i + 1];
        if (c === "{" && next === "{") { depth++; i++; }
        else if (c === "}" && next === "}") { depth--; i++; if (depth === 0) return text.slice(start, i + 1); }
    }
    return null;
}

/** Strip HTML comments from wikitext. They're invisible in the rendered article and
 *  can contain `|` characters that would otherwise confuse the template field parser
 *  (e.g. `<!-- | type2 = -->` inside Magikarp's infobox would split type1 mid-value). */
function stripComments(s) {
    return String(s).replace(/<!--[\s\S]*?-->/g, "");
}

// ── Seed list ────────────────────────────────────────────────────────────────

/** Extract the existing entry list from the current uranium-pokemon.ts so we
 *  know which names map to which dex IDs without scraping a separate list page.
 *  We collapse Mega/Nuclear variants down to their base form for the actual
 *  fetch (those redirect to the base on Fandom anyway). */
function loadSeed() {
    const src = fs.readFileSync(SEED_PATH, "utf8");
    const re = /\{\s*name:\s*"([^"]+)",\s*id:\s*"(\d+)",[^}]*?types:\s*\[([^\]]+)\][^}]*?altForm:\s*(null|"[^"]+")\s*\}/g;
    const entries = [];
    let m;
    while ((m = re.exec(src)) !== null) {
        const types = m[3].split(",").map((s) => s.trim().replace(/^"|"$/g, ""));
        entries.push({
            name: m[1],
            id: m[2],
            types,
            altForm: m[4] === "null" ? null : m[4].slice(1, -1),
        });
    }
    return entries;
}

/** Strip the "Mega " / "Nuclear " prefix to find the base Pokémon name to fetch
 *  from Fandom. Returns the prefix kind too so we know which form we're emitting. */
function parseFormName(name) {
    const nuclearMega = /^Mega Nuclear (.+)$/.exec(name);
    if (nuclearMega) return { base: nuclearMega[1], variant: "mega-nuclear" };
    const mega = /^Mega (.+)$/.exec(name);
    if (mega) return { base: mega[1], variant: "mega" };
    const nuclear = /^Nuclear (.+)$/.exec(name);
    if (nuclear) return { base: nuclear[1], variant: "nuclear" };
    return { base: name, variant: "base" };
}

// ── Extractors ───────────────────────────────────────────────────────────────

const TITLE_CASE_TYPES = new Set([
    "Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison",
    "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark",
    "Steel", "Fairy", "Nuclear",
]);

function normalizeType(s) {
    if (!s) return null;
    const trimmed = String(s).trim();
    if (!trimmed) return null;
    const cased = trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
    return TITLE_CASE_TYPES.has(cased) ? cased : null;
}

/** Extract per-form data from a Pokémon's wikitext page. Returns:
 *    { ndex, baseTypes, megaTypes, nuclearTypes, megaSlot, hasMega, hasNuclear, ... }
 *  Each form's types may differ - `image2`/`type1_alt`/etc. capture this. */
function extractFormData(wikitext) {
    const clean = stripComments(wikitext);
    const block = findTemplate(clean, "Pokemon Infobox") || findTemplate(clean, "Pokémon Infobox");
    if (!block) return null;
    const f = parseTemplateFields(block);
    const ndex = f.ndex ? String(parseInt(f.ndex, 10)).padStart(3, "0") : null;
    const baseTypes = [normalizeType(f.type1), normalizeType(f.type2)].filter(Boolean);

    // The Uranium wiki uses image2/caption2/image3/caption3 to describe alternate
    // forms on the same page. `caption*` is a free-text label like "Mega" or
    // "Nuclear". Form-specific types are sometimes in `type1-2`/`type2-2` (for the
    // 2nd form) or sometimes inferred - when no override exists we reuse baseTypes.
    const forms = [];
    for (let i = 2; i <= 4; i++) {
        const image = f[`image${i}`];
        const caption = (f[`caption${i}`] || "").trim();
        if (!image) continue;
        const t1 = normalizeType(f[`type1-${i}`] || f[`type1_${i}`]);
        const t2 = normalizeType(f[`type2-${i}`] || f[`type2_${i}`]);
        const formTypes = [t1, t2].filter(Boolean);
        forms.push({
            slot: i - 1, // matches the existing URL convention: 002_1Popkas.png for slot 1
            label: caption,
            image,
            types: formTypes.length ? formTypes : baseTypes.slice(),
        });
    }

    return { ndex, baseTypes, forms };
}

// ── Main scrape ──────────────────────────────────────────────────────────────

async function main() {
    console.log("Loading seed list from existing uranium-pokemon.ts...");
    const seed = loadSeed();
    console.log(`Seed has ${seed.length} entries.`);

    // Collapse to unique base form pages to fetch.
    const basePages = new Map(); // base name -> dex id
    for (const e of seed) {
        const { base } = parseFormName(e.name);
        if (!basePages.has(base)) basePages.set(base, e.id);
    }
    console.log(`Unique base pages to fetch: ${basePages.size}.`);

    // Fetch all pages and remember their parsed form data.
    const pageData = new Map(); // base name -> { ndex, baseTypes, forms }
    let i = 0;
    for (const [base, expectedDex] of basePages) {
        i++;
        process.stdout.write(`\r[${i}/${basePages.size}] ${base.padEnd(30)}`);
        try {
            const wt = await fetchWikitext(base);
            const data = extractFormData(wt);
            if (!data || !data.ndex) {
                console.warn(`\n  skipped (no infobox): ${base}`);
                continue;
            }
            // Sanity-check against the seed's dex id - they should agree.
            if (data.ndex !== expectedDex) {
                console.warn(`\n  dex mismatch for ${base}: wiki=${data.ndex}, seed=${expectedDex}`);
            }
            pageData.set(base, data);
        } catch (e) {
            console.warn(`\n  failed: ${base} - ${e.message}`);
        }
        await sleep(THROTTLE_MS);
    }
    process.stdout.write("\n");
    console.log(`Fetched ${pageData.size}/${basePages.size} pages.`);

    // Re-emit entries in the existing data shape, preserving order from the seed.
    const out = [];
    for (const e of seed) {
        const { base, variant } = parseFormName(e.name);
        const data = pageData.get(base);
        if (!data) {
            // Fall back to existing seed data if the fetch failed.
            out.push({
                name: e.name,
                id: e.id,
                sprite: iconUrl(e.id),
                artwork: variant === "nuclear" ? artworkNuclear(e.id) : artworkBase(e.id),
                types: e.types,
                altForm: e.altForm,
            });
            continue;
        }
        let types = data.baseTypes.slice();
        let artwork = artworkBase(e.id);

        // For variants: only trust the wiki's form-specific types when it provides a
        // complete spec (≥2 types). Some wiki entries only list the CHANGED type for a
        // variant, expecting the base-form's other type to carry over - that would lose
        // information here. When wiki data is incomplete, keep the seed's authoritative
        // types for the variant.
        const acceptWikiTypes = (formTypes) =>
            Array.isArray(formTypes) && formTypes.length >= 2;

        if (variant === "mega") {
            const megaForm = data.forms.find((f) => /Mega/i.test(f.label) && !/Nuclear/i.test(f.label));
            if (megaForm) {
                types = acceptWikiTypes(megaForm.types) ? megaForm.types : e.types;
                artwork = artworkMega(e.id, megaForm.slot);
            } else {
                types = e.types;
            }
        } else if (variant === "mega-nuclear") {
            const mnForm = data.forms.find((f) => /Mega.*Nuclear|Nuclear.*Mega/i.test(f.label));
            types = acceptWikiTypes(mnForm?.types) ? mnForm.types : e.types;
            artwork = artworkNuclear(e.id);
        } else if (variant === "nuclear") {
            const nForm = data.forms.find((f) => /Nuclear/i.test(f.label) && !/Mega/i.test(f.label));
            types = acceptWikiTypes(nForm?.types) ? nForm.types : e.types;
            artwork = artworkNuclear(e.id);
        }

        out.push({
            name: e.name,
            id: e.id,
            sprite: iconUrl(e.id),
            artwork,
            types,
            altForm: e.altForm,
        });
    }

    // Generate the TS output, preserving the file's existing comment style.
    const header = `// Auto-generated from https://pokemonuranium.fandom.com via scripts/parse-uranium.cjs.
// Re-run that script to refresh - it preserves the existing entry order and uses
// the seed list to know which Mega / Nuclear variants to emit per dex ID.
// Sprite + artwork URLs hot-link from the PokeDexSprites companion repo.
export interface UraniumPokemon {
    name: string;
    id: string;
    sprite: string;
    artwork: string;
    types: string[];
    altForm: string | null;
}

export const URANIUM_POKEMON: UraniumPokemon[] = [
`;
    const body = out
        .map(
            (e) =>
                `    { name: ${JSON.stringify(e.name)}, id: ${JSON.stringify(e.id)}, sprite: ${JSON.stringify(e.sprite)}, artwork: ${JSON.stringify(e.artwork)}, types: ${JSON.stringify(e.types)}, altForm: ${e.altForm === null ? "null" : JSON.stringify(e.altForm)} },`
        )
        .join("\n");
    const footer = "\n];\n";

    fs.writeFileSync(OUTPUT_PATH, header + body + footer, "utf8");
    console.log(`Wrote ${OUTPUT_PATH} (${out.length} entries, ${(fs.statSync(OUTPUT_PATH).size / 1024).toFixed(1)} KB)`);
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
