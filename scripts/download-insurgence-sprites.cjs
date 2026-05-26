#!/usr/bin/env node
/**
 * One-shot sprite downloader for the Insurgence dataset.
 *
 * Reads the current `src/data/insurgence-pokemon.ts`, fetches each entry's
 * wiki-hosted image, and saves them as `{dex}.png`.
 *
 * Output path:
 *   SPRITE_OUT env var if set, otherwise `../PokeDexSprites/Insurgence/Pokemon`
 *
 * Run from repo root:
 *   node scripts/download-insurgence-sprites.cjs
 *
 *   # or with an explicit destination:
 *   SPRITE_OUT=D:/Coding/PokeDexSprites/Insurgence/Pokemon node scripts/...
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

const DATA_PATH = path.resolve(__dirname, "../src/data/insurgence-pokemon.ts");
const OUT_DIR = process.env.SPRITE_OUT
    ? path.resolve(process.env.SPRITE_OUT)
    : path.resolve(__dirname, "../../PokeDexSprites/Insurgence/Pokemon");
const THROTTLE_MS = 200;
const USER_AGENT = "Mozilla/5.0 (compatible; PokeDex-maintenance/1.0; +https://github.com/infinitel8p/PokeDex)";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function downloadTo(url, destPath) {
    return new Promise((resolve, reject) => {
        const req = https.get(url, { headers: { "User-Agent": USER_AGENT } }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                const next = res.headers.location.startsWith("http")
                    ? res.headers.location
                    : new URL(res.headers.location, url).toString();
                resolve(downloadTo(next, destPath));
                return;
            }
            if (res.statusCode !== 200) {
                reject(new Error(`HTTP ${res.statusCode} for ${url}`));
                return;
            }
            const chunks = [];
            res.on("data", (c) => chunks.push(c));
            res.on("end", () => {
                fs.writeFileSync(destPath, Buffer.concat(chunks));
                resolve();
            });
        });
        req.on("error", reject);
        req.setTimeout(15000, () => req.destroy(new Error(`timeout: ${url}`)));
    });
}

function loadEntries() {
    const src = fs.readFileSync(DATA_PATH, "utf8");
    // Pull the JSON array literal out of the TS file.
    const match = src.match(/INSURGENCE_POKEMON: InsurgencePokemon\[\] = (\[[\s\S]+?\]);/);
    if (!match) throw new Error("Couldn't locate INSURGENCE_POKEMON array in insurgence-pokemon.ts");
    return JSON.parse(match[1]);
}

async function main() {
    fs.mkdirSync(OUT_DIR, { recursive: true });
    console.log("Destination:", OUT_DIR);

    const entries = loadEntries();
    // One image per dex id — entries can share an id (rare across Delta, but defend anyway).
    const byDex = new Map();
    for (const e of entries) {
        if (e.sprite && !byDex.has(e.id)) byDex.set(e.id, e.sprite);
    }
    console.log(`Unique dex IDs to download: ${byDex.size}`);

    let downloaded = 0;
    let skipped = 0;
    let failed = 0;
    let i = 0;
    for (const [dex, url] of byDex) {
        i++;
        const destPath = path.join(OUT_DIR, `${dex}.png`);
        process.stdout.write(`\r[${i}/${byDex.size}] #${dex}`.padEnd(35));
        if (fs.existsSync(destPath) && fs.statSync(destPath).size > 0) {
            skipped++;
            continue;
        }
        try {
            await downloadTo(url, destPath);
            downloaded++;
        } catch (e) {
            console.warn(`\n  failed: #${dex} ← ${url} (${e.message})`);
            failed++;
        }
        await sleep(THROTTLE_MS);
    }
    process.stdout.write("\n");
    console.log(`Downloaded: ${downloaded}   Already present: ${skipped}   Failed: ${failed}`);
    console.log(`\nNext steps:`);
    console.log(`  1. cd ${OUT_DIR.includes("PokeDexSprites") ? path.dirname(path.dirname(OUT_DIR)) : "your PokeDexSprites repo"}`);
    console.log(`  2. git add Insurgence && git commit && git push`);
    console.log(`  3. cd back into PokeDex and run: node scripts/parse-insurgence.cjs`);
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
