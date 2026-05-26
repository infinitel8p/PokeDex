#!/usr/bin/env node
/**
 * Automated screenshot capture.
 *
 * One-time setup:
 *   pnpm add -D playwright
 *   pnpm exec playwright install chromium
 *
 * Run:
 *   pnpm dev                       # in one terminal — starts Vite at :1420
 *   node scripts/screenshots.cjs   # in another — runs the capture
 *
 * Output: docs/screenshots/*.png  (overwrites existing).
 */

const path = require("path");

const VITE_URL = process.env.SCREENSHOT_URL || "http://localhost:1420/";
const OUT_DIR = path.resolve(__dirname, "../docs/screenshots");
const ANIM_SETTLE_MS = 900; // generous wait for the route-enter + stagger animations

// ── Mock Pokemon data for the canned search responses ────────────────────────

const TYPE_ICON = (id) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${id}.png`;
const TYPE_ID = {
    normal: 1, fighting: 2, flying: 3, poison: 4, ground: 5, rock: 6, bug: 7,
    ghost: 8, steel: 9, fire: 10, water: 11, grass: 12, electric: 13, psychic: 14,
    ice: 15, dragon: 16, dark: 17, fairy: 18,
};

const ARTWORK = (id) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

const weak = (names) =>
    names.map((n) => ({ type: n, icon: TYPE_ICON(TYPE_ID[n]) }));

const CHARIZARD = {
    id: 6,
    name: "charizard",
    types: [
        { slot: 1, type: { name: "fire", url: "" } },
        { slot: 2, type: { name: "flying", url: "" } },
    ],
    stats: [
        { base_stat: 78, stat: { name: "hp", url: "" } },
        { base_stat: 84, stat: { name: "attack", url: "" } },
        { base_stat: 78, stat: { name: "defense", url: "" } },
        { base_stat: 109, stat: { name: "special-attack", url: "" } },
        { base_stat: 85, stat: { name: "special-defense", url: "" } },
        { base_stat: 100, stat: { name: "speed", url: "" } },
    ],
    sprites: {
        other: {
            "official-artwork": { front_default: ARTWORK(6), front_shiny: ARTWORK(6) },
            home: { front_default: ARTWORK(6) },
        },
        front_default: ARTWORK(6),
    },
    cries: {
        latest: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/6.ogg",
        legacy: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/6.ogg",
    },
    weaknesses: {
        "2x": weak(["rock", "electric", "water"]),
        "0.5x": weak(["grass", "fighting", "fire", "bug", "steel", "fairy"]),
        "0x": weak(["ground"]),
    },
    evolution: [
        { name: "charmander", sprite: ARTWORK(4), is_current: false },
        { name: "charmeleon", sprite: ARTWORK(5), is_current: false },
        { name: "charizard", sprite: ARTWORK(6), is_current: true },
    ],
    names: [
        { name: "Charizard", language: { name: "en", url: "" } },
        { name: "Dracaufeu", language: { name: "fr", url: "" } },
        { name: "Glurak", language: { name: "de", url: "" } },
        { name: "Charizard", language: { name: "es", url: "" } },
        { name: "Charizard", language: { name: "it", url: "" } },
        { name: "リザードン", language: { name: "ja", url: "" } },
        { name: "リザードン", language: { name: "ja-Hrkt", url: "" } },
        { name: "리자몽", language: { name: "ko", url: "" } },
        { name: "喷火龙", language: { name: "zh-Hans", url: "" } },
        { name: "噴火龍", language: { name: "zh-Hant", url: "" } },
    ],
    flavor_text: [
        {
            flavor_text: "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
            language: { name: "en", url: "" },
            version: { name: "red", url: "" },
        },
        {
            flavor_text: "口から ほのおを はく ほど こうふんすると しっぽの ほのおが あおじろく もえあがる。",
            language: { name: "ja", url: "" },
            version: { name: "red", url: "" },
        },
    ],
};

const MOCK_DATA = { charizard: CHARIZARD, "6": CHARIZARD };

// ── Init script: stub Tauri + Math.random before any page code runs ──────────

const initScript = `
(() => {
    const MOCK_DATA = ${JSON.stringify(MOCK_DATA)};

    window.__TAURI_INTERNALS__ = {
        invoke: (cmd, args) => {
            if (cmd === "search_pokemon") {
                const key = String(args?.name ?? "").toLowerCase();
                const data = MOCK_DATA[key];
                if (data) return Promise.resolve(JSON.stringify(data));
                return Promise.reject(\`unmocked pokemon: \${key}\`);
            }
            if (cmd === "close_splashscreen") return Promise.resolve(null);
            if (cmd === "clear_cache") return Promise.resolve(null);
            console.warn("[screenshot mock] unhandled invoke:", cmd, args);
            return Promise.resolve(null);
        },
        transformCallback: (cb) => {
            const id = Math.floor(Math.random() * 1e9);
            // The frontend doesn't use callback-style invokes here, so this is a no-op stub.
            return id;
        },
    };

    // Deterministic shuffle for the example-chip picker and any other Math.random consumers.
    let seed = 1;
    Math.random = () => {
        seed = (seed * 1103515245 + 12345) & 0x7fffffff;
        return seed / 0x7fffffff;
    };
})();
`;

// ── Capture orchestration ────────────────────────────────────────────────────

async function main() {
    let chromium;
    try {
        chromium = require("playwright").chromium;
    } catch {
        console.error("Playwright not installed. Run: pnpm add -D playwright && pnpm exec playwright install chromium");
        process.exit(1);
    }

    const fs = require("fs");
    if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

    const browser = await chromium.launch();
    const context = await browser.newContext({
        viewport: { width: 500, height: 900 },
        deviceScaleFactor: 2,
        reducedMotion: "no-preference",
        // Force English UI regardless of host OS locale so the captures are
        // reproducible. lib/i18n.ts auto-detect reads navigator.languages.
        locale: "en-US",
        // Force the brand-iconic dark theme. getInitialTheme() in lib/theme.ts
        // picks this up via matchMedia on first launch when localStorage is empty.
        colorScheme: "dark",
    });
    await context.addInitScript({ content: initScript });

    const page = await context.newPage();
    page.on("pageerror", (e) => console.error("  pageerror:", e.message));
    page.on("console", (msg) => {
        if (msg.type() === "error" || msg.type() === "warning") {
            console.warn("  browser:", msg.text());
        }
    });

    const settle = async () => page.waitForTimeout(ANIM_SETTLE_MS);
    const shot = async (name) => {
        const out = path.join(OUT_DIR, name);
        await page.screenshot({ path: out });
        console.log("  wrote", path.relative(process.cwd(), out));
    };

    const search = async (term) => {
        await page.fill("input#pokemon-input", term);
        await page.press("input#pokemon-input", "Enter");
        // The result render goes through a view transition + framer-motion enter.
        await page.waitForTimeout(600);
        await settle();
    };

    try {
        // ── 1. Home empty state ──────────────────────────────────────────────
        console.log("Loading home...");
        await page.goto(VITE_URL, { waitUntil: "domcontentloaded" });
        await settle();
        await shot("home-empty.png");

        // ── 2. Result card (English) ─────────────────────────────────────────
        console.log("Searching Charizard...");
        await search("charizard");
        await shot("result-charizard.png");

        // ── 3. Uranium result (local data, no mock needed) ───────────────────
        console.log("Capturing Uranium...");
        await page.goto(VITE_URL + "uranium", { waitUntil: "domcontentloaded" });
        await settle();
        await page.fill("input#pokemon-input", "Orchynx");
        await page.press("input#pokemon-input", "Enter");
        await page.waitForTimeout(600);
        await settle();
        await shot("uranium-result.png");

        // ── 4. Insurgence result (also local data) ───────────────────────────
        console.log("Capturing Insurgence...");
        await page.goto(VITE_URL + "insurgence", { waitUntil: "domcontentloaded" });
        await settle();
        await page.fill("input#pokemon-input", "Delta Charizard");
        await page.press("input#pokemon-input", "Enter");
        await page.waitForTimeout(600);
        await settle();
        await shot("insurgence-result.png");

        // ── 5. Settings (language picker visible) ────────────────────────────
        console.log("Capturing Settings...");
        await page.goto(VITE_URL + "settings", { waitUntil: "domcontentloaded" });
        await settle();
        await shot("settings-language.png");

        // ── 5. Switch to Japanese, then a fresh Charizard search ─────────────
        console.log("Switching to Japanese + re-capturing Charizard...");
        await page.click('button[lang="ja"]');
        await page.waitForTimeout(400);
        await page.goto(VITE_URL, { waitUntil: "domcontentloaded" });
        await settle();
        await search("charizard");
        await shot("result-japanese.png");

        // ── 6. Reset language back to English so re-runs from a fresh
        await page.goto(VITE_URL + "settings", { waitUntil: "domcontentloaded" });
        await settle();
        await page.click('button[lang="en"]').catch(() => {});

        console.log("\nDone. All screenshots in docs/screenshots/");
    } finally {
        await browser.close();
    }
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
