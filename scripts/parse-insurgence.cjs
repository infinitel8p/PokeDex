#!/usr/bin/env node
/**
 * Insurgence wiki scraper - fetches every Delta Pokémon's individual page via
 * `?action=raw` (wikitext format) and extracts the structured data: infobox,
 * stats, pokédex flavor, evolution chain, learnset. Also pulls the Mega
 * Evolution page for the unofficial mega forms.
 *
 * Polite ~200ms throttle between requests. Disk cache at /tmp/insurgence-cache/
 * so re-runs are instant. Total cold scrape: ~45 seconds for 198 Deltas + megas.
 *
 * Run from repo root:
 *   node scripts/parse-insurgence.cjs
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

const WIKI_HOST = "wiki.p-insurgence.com";
const WIKI_BASE = `https://${WIKI_HOST}`;
const LIST_URL = `${WIKI_BASE}/Delta_Pok%C3%A9mon`;
const MEGA_URL = `${WIKI_BASE}/Mega_Evolution`;
const CACHE_DIR = "/tmp/insurgence-cache";
const OUTPUT_PATH = path.resolve(__dirname, "../src/data/insurgence-pokemon.ts");
const THROTTLE_MS = 200;
const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36";

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
            // Follow redirects manually
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                const next = res.headers.location.startsWith("http")
                    ? res.headers.location
                    : WIKI_BASE + res.headers.location;
                resolve(fetchUrl(next));
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

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ── Wikitext template parsing ────────────────────────────────────────────────

/** Extract the key=value pairs from a `{{TemplateName|...}}` block.
 *  Handles multi-line templates and ignores nested template invocations. */
function parseTemplateFields(block) {
    const fields = {};
    // Strip the leading `{{TemplateName|` and trailing `}}`.
    const inner = block.replace(/^\{\{[^|}]+\|/, "").replace(/}}$/, "");
    // Split on top-level `|` (not inside nested `{{...}}` or `[[...]]`).
    const parts = [];
    let depth = 0;
    let buffer = "";
    for (let i = 0; i < inner.length; i++) {
        const c = inner[i];
        const next = inner[i + 1];
        if (c === "{" && next === "{") {
            depth++;
            buffer += "{{";
            i++;
            continue;
        }
        if (c === "}" && next === "}") {
            depth--;
            buffer += "}}";
            i++;
            continue;
        }
        if (c === "[" && next === "[") {
            depth++;
            buffer += "[[";
            i++;
            continue;
        }
        if (c === "]" && next === "]") {
            depth--;
            buffer += "]]";
            i++;
            continue;
        }
        if (c === "|" && depth === 0) {
            parts.push(buffer);
            buffer = "";
            continue;
        }
        buffer += c;
    }
    if (buffer) parts.push(buffer);

    let positionalIdx = 1;
    for (const rawPart of parts) {
        const part = rawPart.replace(/^\s+/, "");
        const eq = part.indexOf("=");
        const keyCandidate = eq !== -1 ? part.slice(0, eq).trim() : "";
        if (eq !== -1 && /^[A-Za-z][\w-]*$/.test(keyCandidate)) {
            const value = part.slice(eq + 1).trim();
            fields[keyCandidate] = value;
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

/** Find a template invocation in wikitext by name and return the full block including
 *  `{{Name|...}}`. Returns null if not found. Handles nested templates correctly.
 *  Tolerates an optional `Template:` namespace prefix (some wiki pages use it). */
function findTemplate(text, name) {
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp("\\{\\{\\s*(?:Template:)?" + escaped, "i");
    const start = text.search(re);
    if (start === -1) return null;

    let depth = 0;
    for (let i = start; i < text.length; i++) {
        const c = text[i];
        const next = text[i + 1];
        if (c === "{" && next === "{") {
            depth++;
            i++;
        } else if (c === "}" && next === "}") {
            depth--;
            i++;
            if (depth === 0) {
                return text.slice(start, i + 1);
            }
        }
    }
    return null;
}

/** Find all template invocations whose name matches the pattern.
 *  Returns an array of full blocks. */
function findAllTemplates(text, namePattern) {
    const re = new RegExp("\\{\\{\\s*(" + namePattern + ")", "ig");
    const blocks = [];
    let m;
    while ((m = re.exec(text)) !== null) {
        const start = m.index;
        let depth = 0;
        for (let i = start; i < text.length; i++) {
            const c = text[i];
            const next = text[i + 1];
            if (c === "{" && next === "{") {
                depth++;
                i++;
            } else if (c === "}" && next === "}") {
                depth--;
                i++;
                if (depth === 0) {
                    blocks.push(text.slice(start, i + 1));
                    re.lastIndex = i + 1;
                    break;
                }
            }
        }
    }
    return blocks;
}

// ── Per-page extractors ──────────────────────────────────────────────────────

function num(v) {
    if (v == null || v === "") return null;
    const n = parseFloat(String(v).replace(/[^\d.-]/g, ""));
    return Number.isFinite(n) ? n : null;
}

function cleanWikitext(s) {
    if (!s) return "";
    return String(s)
        // Drop image / file links entirely - they don't render as text.
        .replace(/\[\[(?:Image|File):[^\]]+\]\]/gi, "")
        // [[Target|Display]] → Display, [[Target]] → Target.
        .replace(/\[\[(?:[^|\]]+\|)?([^\]]+)\]\]/g, "$1")
        // {{color2|color|page|displaytext}} and similar - take the LAST positional arg
        // since wiki link templates put the displayed text last.
        .replace(/\{\{(?:color2?|p|2t)\|([^}]+)\}\}/gi, (_, args) => {
            const parts = args.split("|");
            return parts[parts.length - 1] || "";
        })
        // Any other template: take the first arg as a heuristic fallback.
        .replace(/\{\{[^|}]+\|([^}]+)\}\}/g, "$1")
        .replace(/'''([^']+)'''/g, "$1")
        .replace(/''([^']+)''/g, "$1")
        .replace(/<br\s*\/?>/g, " ")
        .replace(/&mdash;/g, "-")
        .replace(/&ndash;/g, "–")
        .replace(/\s+/g, " ")
        .trim();
}

function extractInfobox(wikitext) {
    const block = findTemplate(wikitext, "Pokémon Infobox") || findTemplate(wikitext, "Pokemon Infobox");
    if (!block) return null;
    const f = parseTemplateFields(block);
    const types = [f.type1, f.type2].filter(Boolean);
    return {
        name: cleanWikitext(f.name),
        species: cleanWikitext(f.species),
        ndex: f.ndex ? String(parseInt(f.ndex, 10)) : null,
        types,
        heightM: num(f["height-m"]),
        heightFtIn: f["height-ftin"] || null,
        weightKg: num(f["weight-kg"]),
        weightLbs: num(f["weight-lbs"]),
        abilityPrimary: cleanWikitext(f.ability1) || null,
        abilitySecondary: cleanWikitext(f.ability2) || null,
        abilityHidden: cleanWikitext(f.abilityd) || null,
        catchRate: num(f.catchrate),
        eggGroup1: cleanWikitext(f.egggroup1) || null,
        eggGroup2: cleanWikitext(f.egggroup2) || null,
        eggCycles: num(f.eggcycles),
        genderCode: num(f.gendercode),
    };
}

function extractStats(wikitext) {
    const block = findTemplate(wikitext, "Stats");
    if (!block) return null;
    const f = parseTemplateFields(block);
    const stat = (k) => num(f[k]);
    const hp = stat("HP");
    const attack = stat("Attack");
    const defense = stat("Defense");
    const spAtk = stat("SpAtk");
    const spDef = stat("SpDef");
    const speed = stat("Speed");
    if ([hp, attack, defense, spAtk, spDef, speed].some((v) => v == null)) return null;
    return { hp, attack, defense, spAtk, spDef, speed };
}

function extractFlavor(wikitext) {
    const block = findTemplate(wikitext, "Dex");
    if (!block) return null;
    const f = parseTemplateFields(block);
    // Flavor text is the first positional arg after `type1=` / `type2=`.
    const text = f["1"] || f["2"] || f["3"];
    return text ? cleanWikitext(text) : null;
}

function extractEvolution(wikitext) {
    let block = findTemplate(wikitext, "Evobox-3")
        || findTemplate(wikitext, "Evobox-2")
        || findTemplate(wikitext, "Evobox-1");
    if (!block) return null;
    const f = parseTemplateFields(block);
    const stages = [];
    for (let i = 1; i <= 4; i++) {
        const name = f[`name${i}`];
        if (!name) continue;
        const types = [f[`type1-${i}`], f[`type2-${i}`]].filter(Boolean);
        const stageObj = {
            dex: f[`no${i}`] || null,
            name: cleanWikitext(name),
            types,
        };
        if (i > 1 && f[`evo${i - 1}`]) {
            stageObj.condition = cleanWikitext(f[`evo${i - 1}`]);
        }
        stages.push(stageObj);
    }
    return stages.length > 1 ? stages : null;
}

function extractLearnset(wikitext) {
    const learnset = { levelUp: [], tm: [], breed: [], tutor: [] };

    for (const block of findAllTemplates(wikitext, "Learnlist/level6|learnlist/level6")) {
        const f = parseTemplateFields(block);
        if (!f["1"] || !f["2"]) continue;
        learnset.levelUp.push({
            level: f["1"],
            name: f["2"],
            type: f["3"] || "",
            category: f["4"] || "",
            power: num(f["5"]),
            accuracy: num(f["6"]),
            pp: num(f["7"]),
        });
    }

    for (const block of findAllTemplates(wikitext, "Learnlist/tm6|learnlist/tm6")) {
        const f = parseTemplateFields(block);
        if (!f["1"] || !f["2"]) continue;
        learnset.tm.push({
            tm: f["1"],
            name: f["2"],
            type: f["3"] || "",
            category: f["4"] || "",
            power: num(f["5"]),
            accuracy: num(f["6"]),
            pp: num(f["7"]),
        });
    }

    for (const block of findAllTemplates(wikitext, "Learnlist/breed6|learnlist/breed6")) {
        const f = parseTemplateFields(block);
        if (!f["1"]) continue;
        learnset.breed.push({
            name: f["1"],
            type: f["2"] || "",
            category: f["3"] || "",
            power: num(f["4"]),
            accuracy: num(f["5"]),
            pp: num(f["6"]),
        });
    }

    for (const block of findAllTemplates(wikitext, "Learnlist/tutor6|learnlist/tutor6")) {
        const f = parseTemplateFields(block);
        if (!f["1"]) continue;
        learnset.tutor.push({
            name: f["1"],
            type: f["2"] || "",
            category: f["3"] || "",
            power: num(f["4"]),
            accuracy: num(f["5"]),
            pp: num(f["6"]),
        });
    }

    return learnset;
}

// Sprite/artwork URLs are still extracted from the list page's HTML since wikitext
// stores image references as bare filenames that need resolution. We already
// downloaded the list page in the prior parser run, so reuse its image map.
function buildSpriteMap(listHtml) {
    const map = new Map();
    const rowRe = /<tr[^>]*id="(Delta_[^"]+)"[^>]*>([\s\S]*?)<\/tr>/g;
    let m;
    while ((m = rowRe.exec(listHtml)) !== null) {
        const body = m[2];
        const img = body.match(/<img[^>]+src="([^"]+\/(\d+)\.png[^"]*)"/);
        if (!img) continue;
        const dex = String(parseInt(img[2], 10));
        let url = img[1].replace("/thumb/", "/").replace(/\/\d+px-[^/]+$/, "");
        if (!url.startsWith("http")) url = WIKI_BASE + url;
        if (!map.has(dex)) map.set(dex, url);
    }
    return map;
}

// ── Main scrape ──────────────────────────────────────────────────────────────

async function main() {
    console.log("Fetching list page...");
    const listHtml = await fetchUrl(LIST_URL);
    const spriteMap = buildSpriteMap(listHtml);

    // Extract article links from the list page.
    const linkRe = /<a href="\/(Delta_[^"#]+_\(Pok%C3%A9mon\))" title="(Delta [^"]+) \(Pokémon\)">/g;
    const articles = new Map();
    let lm;
    while ((lm = linkRe.exec(listHtml)) !== null) {
        const slug = lm[1];
        const niceName = lm[2];
        if (!articles.has(slug)) articles.set(slug, niceName);
    }
    console.log(`Found ${articles.size} Delta article links.`);

    const entries = [];
    let i = 0;
    for (const [slug, niceName] of articles) {
        i++;
        process.stdout.write(`\r[${i}/${articles.size}] ${niceName.padEnd(30)}`);
        try {
            const url = `${WIKI_BASE}/${slug}?action=raw`;
            const wt = await fetchUrl(url);
            const info = extractInfobox(wt);
            if (!info || !info.ndex) {
                console.warn(`\n  skipped (no infobox): ${niceName}`);
                continue;
            }
            const stats = extractStats(wt);
            const flavor = extractFlavor(wt);
            const evolution = extractEvolution(wt);
            const learnset = extractLearnset(wt);
            const spriteUrl = `https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Insurgence/Pokemon/${parseInt(info.ndex, 10)}.png`;

            entries.push({
                id: info.ndex,
                name: info.name || niceName,
                species: info.species || undefined,
                types: info.types,
                abilities: {
                    primary: info.abilityPrimary,
                    secondary: info.abilitySecondary,
                    hidden: info.abilityHidden,
                },
                heightM: info.heightM,
                heightFtIn: info.heightFtIn,
                weightKg: info.weightKg,
                weightLbs: info.weightLbs,
                catchRate: info.catchRate,
                eggGroup1: info.eggGroup1,
                eggGroup2: info.eggGroup2,
                eggCycles: info.eggCycles,
                genderCode: info.genderCode,
                flavorText: flavor,
                stats,
                evolution,
                learnset,
                sprite: spriteUrl,
                artwork: spriteUrl,
                altForm: null,
                isMega: false,
            });
        } catch (e) {
            console.warn(`\n  failed: ${niceName} - ${e.message}`);
        }
        await sleep(THROTTLE_MS);
    }
    process.stdout.write("\n");
    console.log(`Parsed ${entries.length} entries.`);

    // Sort by dex number.
    entries.sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10));

    // Generate TS output.
    const header = `// Auto-generated from https://wiki.p-insurgence.com via scripts/parse-insurgence.cjs.
// Do not edit by hand - re-run the parser to refresh data.
// Sprite URLs are hotlinked from the wiki; if the wiki migrates images,
// re-run the parser or swap to self-hosted URLs.

export interface InsurgenceMove {
    name: string;
    type: string;
    category: string;
    power: number | null;
    accuracy: number | null;
    pp: number | null;
}

export interface InsurgenceLevelMove extends InsurgenceMove {
    level: string;
}

export interface InsurgenceTMMove extends InsurgenceMove {
    tm: string;
}

export interface InsurgenceLearnset {
    levelUp: InsurgenceLevelMove[];
    tm: InsurgenceTMMove[];
    breed: InsurgenceMove[];
    tutor: InsurgenceMove[];
}

export interface InsurgenceAbilities {
    primary: string | null;
    secondary: string | null;
    hidden: string | null;
}

export interface InsurgenceStats {
    hp: number;
    attack: number;
    defense: number;
    spAtk: number;
    spDef: number;
    speed: number;
}

export interface InsurgenceEvolutionStage {
    dex: string | null;
    name: string;
    types: string[];
    condition?: string;
}

export interface InsurgencePokemon {
    id: string;
    name: string;
    species?: string;
    types: string[];
    abilities: InsurgenceAbilities;
    heightM: number | null;
    heightFtIn: string | null;
    weightKg: number | null;
    weightLbs: number | null;
    catchRate: number | null;
    eggGroup1: string | null;
    eggGroup2: string | null;
    eggCycles: number | null;
    genderCode: number | null;
    flavorText: string | null;
    stats: InsurgenceStats | null;
    evolution: InsurgenceEvolutionStage[] | null;
    learnset: InsurgenceLearnset;
    sprite: string;
    artwork: string;
    altForm: string | null;
    isMega: boolean;
}

export const INSURGENCE_POKEMON: InsurgencePokemon[] = ${JSON.stringify(entries, null, 2)};
`;

    fs.writeFileSync(OUTPUT_PATH, header, "utf8");
    console.log(`Wrote ${OUTPUT_PATH} (${(fs.statSync(OUTPUT_PATH).size / 1024).toFixed(1)} KB)`);
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
