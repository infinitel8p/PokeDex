import { useState, useEffect, useMemo, useRef } from "react";
import { flushSync } from "react-dom";
import { invoke } from "@tauri-apps/api/core";
import { AnimatePresence, motion, Variants } from "framer-motion";
import "./App.css";
import EvolutionStrip from "./components/EvolutionStrip";
import HoloArtwork from "./components/HoloArtwork";
import Search from "./components/Search";
import StatBars from "./components/StatBars";
import StatusBar from "./components/StatusBar";
import { CRY_CHANGE_EVENT, CrySource, getCrySource, pickCryUrl } from "./lib/cry-source";
import { pickSpeciesName, useLanguage } from "./lib/i18n";
import {
    getRecentNamesMap,
    getRecentSearches,
    pushRecentSearch,
    RECENT_CHANGE_EVENT,
    type RecentNamesMap,
} from "./lib/recent";
import { getShinyPreference, SHINY_CHANGE_EVENT, ShinyPreference } from "./lib/shiny";
import { getSpriteStyle, getSpriteUrl, SPRITE_CHANGE_EVENT, SpriteStyle } from "./lib/sprite-style";
import type { TranslationKey } from "./data/translations";
import {
    classifySearchError,
    getTypeColor,
    Pokemon,
    WeaknessMultiplier,
    WeaknessEntry,
} from "./types/pokemon";

const MAX_POKEMON_ID = 1025;

const SECTION_META: Record<
    WeaknessMultiplier,
    { labelKey: TranslationKey; tooltipKey: TranslationKey; headerClass: string; dividerClass: string }
> = {
    "2x": {
        labelKey: "result.weaknesses",
        tooltipKey: "result.weaknessesTooltip",
        headerClass: "bg-red-600 text-white",
        dividerClass: "border-white/25",
    },
    "0.5x": {
        labelKey: "result.resistances",
        tooltipKey: "result.resistancesTooltip",
        headerClass: "bg-amber-500 text-stone-900",
        dividerClass: "border-black/15",
    },
    "0x": {
        labelKey: "result.immunities",
        tooltipKey: "result.immunitiesTooltip",
        headerClass: "bg-slate-600 text-white",
        dividerClass: "border-white/25",
    },
};

const EASE_OUT_QUINT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stateTransition = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
    transition: { duration: 0.22, ease: EASE_OUT_QUINT },
};

const EXAMPLE_POKEMON = [
    "Pikachu", "Charizard", "Mewtwo", "Eevee", "Snorlax",
    "Gengar", "Dragonite", "Gyarados", "Lapras", "Lucario",
    "Garchomp", "Gardevoir", "Greninja", "Sylveon", "Rayquaza",
    "Lugia", "Ho-Oh", "Bulbasaur", "Squirtle", "Charmander",
    "Tyranitar", "Salamence", "Metagross", "Mimikyu", "Jolteon",
    "Vaporeon", "Flareon", "Articuno", "Zapdos", "Moltres",
    "Magikarp", "Toxapex", "Ferrothorn", "Hydreigon", "Aegislash",
];

function pickRandomExamples(pool: string[], count: number): string[] {
    const arr = [...pool];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, count);
}

const LOADING_MESSAGE_KEYS: TranslationKey[] = [
    "loading.scanning",
    "loading.analyzing",
    "loading.calculating",
];

const heroFade: Variants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT_QUINT } },
};

const wordmarkContainer: Variants = {
    hidden: {},
    show: { transition: { delayChildren: 0.08, staggerChildren: 0.1 } },
};

const wordmarkLine: Variants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT_QUINT } },
};

function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const MAX_QUERY_DISPLAY = 24;

function truncateQuery(q: string): string {
    return q.length > MAX_QUERY_DISPLAY
        ? `${q.slice(0, MAX_QUERY_DISPLAY)}…`
        : q;
}

function App() {
    const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);
    const [recent, setRecent] = useState<string[]>(() => getRecentSearches());
    const [recentNames, setRecentNames] = useState<RecentNamesMap>(() => getRecentNamesMap());
    const [shiny, setShiny] = useState<ShinyPreference>(() => getShinyPreference());
    const [crySource, setCrySourceState] = useState<CrySource>(() => getCrySource());
    const [spriteStyle, setSpriteStyleState] = useState<SpriteStyle>(() => getSpriteStyle());
    const requestIdRef = useRef(0);
    const examples = useMemo(() => pickRandomExamples(EXAMPLE_POKEMON, 3), []);
    const { lang, t, tf } = useLanguage();

    // React to preference changes from Settings
    useEffect(() => {
        const onRecent = (e: Event) => {
            setRecent((e as CustomEvent<string[]>).detail);
            setRecentNames(getRecentNamesMap());
        };
        const onShiny = (e: Event) => setShiny((e as CustomEvent<ShinyPreference>).detail);
        const onCry = (e: Event) => setCrySourceState((e as CustomEvent<CrySource>).detail);
        const onSprite = (e: Event) => setSpriteStyleState((e as CustomEvent<SpriteStyle>).detail);
        window.addEventListener(RECENT_CHANGE_EVENT, onRecent);
        window.addEventListener(SHINY_CHANGE_EVENT, onShiny);
        window.addEventListener(CRY_CHANGE_EVENT, onCry);
        window.addEventListener(SPRITE_CHANGE_EVENT, onSprite);
        return () => {
            window.removeEventListener(RECENT_CHANGE_EVENT, onRecent);
            window.removeEventListener(SHINY_CHANGE_EVENT, onShiny);
            window.removeEventListener(CRY_CHANGE_EVENT, onCry);
            window.removeEventListener(SPRITE_CHANGE_EVENT, onSprite);
        };
    }, []);

    useEffect(() => {
        if (!loading) return;
        setLoadingMessageIndex(0);
        const interval = window.setInterval(() => {
            setLoadingMessageIndex((i) => (i + 1) % LOADING_MESSAGE_KEYS.length);
        }, 650);
        return () => window.clearInterval(interval);
    }, [loading]);

    async function searchPokemon(name: string) {
        const myId = ++requestIdRef.current;
        setLoading(true);
        setError("");
        try {
            const result = await invoke<string>("search_pokemon", { name });
            if (myId !== requestIdRef.current) return;
            const data = JSON.parse(result) as Pokemon;
            pushRecentSearch(data.name, data.names);
            const doc = document as Document & {
                startViewTransition?: (cb: () => void) => unknown;
            };
            if (typeof doc.startViewTransition === "function") {
                doc.startViewTransition(() => {
                    flushSync(() => setPokemonData(data));
                });
            } else {
                setPokemonData(data);
            }
        } catch (err) {
            if (myId !== requestIdRef.current) return;
            const classified = classifySearchError(err, name);
            switch (classified.kind) {
                case "not_found":
                    setError(tf("error.notFound", { query: truncateQuery(classified.query) }));
                    break;
                case "network":
                    setError(t("error.network"));
                    break;
                default:
                    setError(t("error.unknown"));
                    break;
            }
            setPokemonData(null);
        } finally {
            if (myId === requestIdRef.current) {
                setLoading(false);
            }
        }
    }

    function randomSearch() {
        const id = Math.floor(Math.random() * MAX_POKEMON_ID) + 1;
        searchPokemon(String(id));
    }

    function playCry(cries: { latest?: string; legacy?: string } | undefined) {
        const url = pickCryUrl(cries, crySource);
        if (!url) return;
        try {
            const audio = new Audio(url);
            audio.volume = 0.5;
            void audio.play();
        } catch {
            // ignore
        }
    }

    useEffect(() => {
        const reset = () => {
            requestIdRef.current++;
            setPokemonData(null);
            setError("");
            setLoading(false);
        };
        window.addEventListener("pokedex:reset", reset);
        return () => window.removeEventListener("pokedex:reset", reset);
    }, []);

    useEffect(() => {
        const startedAt = performance.now();
        const MIN_DISPLAY_MS = 600;
        const MAX_DISPLAY_MS = 3000;

        const close = () => {
            const elapsed = performance.now() - startedAt;
            const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
            window.setTimeout(() => {
                invoke("close_splashscreen");
            }, remaining);
        };

        const fontsReady = document.fonts?.ready ?? Promise.resolve();
        const safetyTimeout = new Promise<void>((resolve) => {
            window.setTimeout(resolve, MAX_DISPLAY_MS);
        });

        Promise.race([fontsReady, safetyTimeout]).then(close);
    }, []);

    const weaknessSections = pokemonData?.weaknesses
        ? (Object.keys(SECTION_META) as WeaknessMultiplier[]).map((multiplier) => {
            const meta = SECTION_META[multiplier];
            const entries = [...(pokemonData.weaknesses[multiplier] ?? [])].sort(
                (a, b) => a.type.localeCompare(b.type)
            );
            return {
                multiplier,
                headerClass: meta.headerClass,
                dividerClass: meta.dividerClass,
                label: t(meta.labelKey),
                tooltip: t(meta.tooltipKey),
                entries,
            };
        })
        : [];

    const displayName = pokemonData
        ? pickSpeciesName(pokemonData.names, lang, capitalize(pokemonData.name))
        : "";

    let viewKey: "loading" | "result" | "error" | "empty";
    if (loading) viewKey = "loading";
    else if (pokemonData) viewKey = "result";
    else if (error) viewKey = "error";
    else viewKey = "empty";

    return (
        <main className="h-screen flex flex-col pt-9">
            <div className="px-4 pt-3">
                <StatusBar />
            </div>
            <div className="relative flex-1 min-h-0">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 z-10 h-3 bg-gradient-to-b from-canvas to-transparent"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-4 bg-gradient-to-t from-canvas to-transparent"
                />
                <section
                    className="h-full overflow-y-auto"
                    aria-live="polite"
                    aria-busy={loading}
                >
                <AnimatePresence mode="wait" initial={false}>
                    {viewKey === "loading" && (
                        <motion.div
                            key="loading"
                            {...stateTransition}
                            className="flex h-full flex-col items-center justify-center gap-6"
                        >
                            <motion.img
                                src="/loading.png"
                                alt=""
                                aria-hidden="true"
                                className="h-40"
                                animate={{
                                    opacity: [0.55, 1, 0.55],
                                    scale: [0.98, 1.02, 0.98],
                                }}
                                transition={{
                                    duration: 1.4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={loadingMessageIndex}
                                    initial={{ opacity: 0, y: 4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -4 }}
                                    transition={{ duration: 0.22, ease: EASE_OUT_QUINT }}
                                    className="font-display text-[0.625rem] tabular-nums tracking-[0.28em] uppercase text-muted"
                                >
                                    {t(LOADING_MESSAGE_KEYS[loadingMessageIndex])}
                                </motion.p>
                            </AnimatePresence>
                        </motion.div>
                    )}

                    {viewKey === "result" && pokemonData && (() => {
                        const artworkUrl = getSpriteUrl(
                            pokemonData.sprites,
                            spriteStyle,
                            shiny === "on"
                        );
                        return (
                        <motion.div key="result" {...stateTransition}>
                            <header className="px-4 pt-4">
                                <div className="flex items-start justify-between gap-3 border-2 border-red-500 px-4 py-3">
                                    <div className="flex-1 min-w-0">
                                        <p className="font-display text-xs text-red-500 tabular-nums tracking-[0.18em] uppercase">
                                            № {pokemonData.id.toString().padStart(4, "0")}
                                        </p>
                                        <div className="flex items-baseline gap-2 mt-1">
                                            <h1
                                                className="font-display text-4xl font-bold leading-[0.95] break-words tracking-tight min-w-0"
                                                style={{ viewTransitionName: "pokemon-name" }}
                                            >
                                                {displayName}
                                            </h1>
                                            {(pokemonData.cries?.latest || pokemonData.cries?.legacy) && (
                                                <button
                                                    type="button"
                                                    onClick={() => playCry(pokemonData.cries)}
                                                    className="shrink-0 inline-flex items-center justify-center h-6 w-6 text-muted hover:text-red-500 transition-all duration-150 active:scale-90 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                                                    aria-label={tf("result.playCry", { name: displayName })}
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="h-4 w-4"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M11 5L6 9H2v6h4l5 4V5z" />
                                                        <path d="M15.54 8.46a5 5 0 010 7.07" />
                                                        <path d="M19.07 4.93a10 10 0 010 14.14" />
                                                    </svg>
                                                </button>
                                            )}
                                        </div>
                                        <div className="mt-3 flex flex-wrap gap-1.5">
                                            <span className="sr-only">{t("result.typeSrLabel")} </span>
                                            {pokemonData.types.map((t) => {
                                                const color = getTypeColor(t.type.name);
                                                return (
                                                    <span
                                                        key={t.type.name}
                                                        className="inline-flex items-center font-display text-[0.625rem] font-bold uppercase tracking-[0.28em] px-2 py-0.5 border-2"
                                                        style={{
                                                            background: color.bg,
                                                            color: color.fg,
                                                            borderColor: color.fg,
                                                        }}
                                                    >
                                                        {t.type.name}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    {artworkUrl ? (
                                        <div className="scan-sweep h-32 w-32 shrink-0 -mt-2 -mr-2">
                                            <HoloArtwork
                                                src={artworkUrl}
                                                alt={`${displayName}${shiny === "on" ? " ✦" : ""}`}
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            aria-hidden="true"
                                            className="h-32 w-32 shrink-0 -mt-2 -mr-2 border-2 border-divider/40 flex items-center justify-center font-display text-3xl text-faint"
                                        >
                                            ?
                                        </div>
                                    )}
                                </div>
                            </header>

                            <div className="mt-4 px-4 space-y-2.5">
                                {weaknessSections.length === 0 ? (
                                    <p className="text-sm text-center text-faint py-6 border-2 border-divider/60">
                                        {t("result.noMatchupData")}
                                    </p>
                                ) : (
                                    weaknessSections.map((section, index) => (
                                        <motion.section
                                            key={section.multiplier}
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.32,
                                                delay: 0.05 + index * 0.06,
                                                ease: EASE_OUT_QUINT,
                                            }}
                                            className="border-2 border-divider/60"
                                            aria-labelledby={`section-${section.multiplier}`}
                                        >
                                            <header
                                                className={`flex items-stretch ${section.headerClass}`}
                                                title={section.tooltip}
                                            >
                                                <div
                                                    className={`flex items-center justify-center px-3 py-1.5 font-display text-sm font-bold tabular-nums border-r-2 ${section.dividerClass}`}
                                                >
                                                    {section.multiplier}
                                                </div>
                                                <h2
                                                    id={`section-${section.multiplier}`}
                                                    className="flex-1 flex items-center justify-between px-3 py-1.5"
                                                >
                                                    <span className="font-display text-xs font-bold tracking-[0.18em] uppercase">
                                                        {section.label}
                                                    </span>
                                                    <span className="font-display text-[0.625rem] tabular-nums tracking-[0.28em] opacity-80">
                                                        × {section.entries.length}
                                                    </span>
                                                </h2>
                                            </header>
                                            <div className="px-3 py-3">
                                                {section.entries.length === 0 ? (
                                                    <p className="text-xs text-faint italic text-center py-1">
                                                        {t("result.none")}
                                                    </p>
                                                ) : (
                                                    <div className="flex flex-wrap gap-2">
                                                        {section.entries.map((entry: WeaknessEntry) => (
                                                            <img
                                                                key={entry.type}
                                                                src={entry.icon}
                                                                alt={entry.type}
                                                                className="h-8"
                                                            />
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </motion.section>
                                    ))
                                )}
                                <StatBars stats={pokemonData.stats} />
                                <EvolutionStrip
                                    chain={pokemonData.evolution}
                                    onPick={(name) => searchPokemon(name.toLowerCase())}
                                />
                                <p className="text-[0.625rem] text-faint italic text-center px-6 pt-2 pb-1">
                                    {t("result.disclaimer")}
                                </p>
                            </div>
                        </motion.div>
                        );
                    })()}

                    {viewKey === "error" && (
                        <motion.div
                            key="error"
                            {...stateTransition}
                            className="flex h-full flex-col items-center justify-center px-6"
                        >
                            <img src="/error_404.png" alt="" className="h-40" />
                            <p
                                role="alert"
                                className="text-red-500 mt-6 max-w-xs text-center text-sm"
                            >
                                {error}
                            </p>
                        </motion.div>
                    )}

                    {viewKey === "empty" && (
                        <motion.div
                            key="empty"
                            {...stateTransition}
                            className="h-full flex flex-col px-6 pt-4 pb-8"
                        >
                            <div className="flex-1 flex flex-col justify-center">
                                <motion.div
                                    variants={wordmarkContainer}
                                    initial="hidden"
                                    animate="show"
                                    className="text-center"
                                >
                                    <h1 className="font-display font-bold text-7xl leading-[0.82] tracking-tight">
                                        <motion.span variants={wordmarkLine} className="block">
                                            Poké
                                        </motion.span>
                                        <motion.span variants={wordmarkLine} className="block text-red-500">
                                            Dex
                                        </motion.span>
                                    </h1>
                                    <motion.p
                                        variants={wordmarkLine}
                                        className="mt-5 font-display text-[0.6875rem] text-muted tabular-nums tracking-[0.28em] uppercase"
                                    >
                                        {t("home.tagline")}
                                    </motion.p>
                                </motion.div>

                                <motion.div
                                    variants={heroFade}
                                    initial="hidden"
                                    animate="show"
                                    transition={{ delay: 0.2, duration: 0.4, ease: EASE_OUT_QUINT }}
                                    className="mt-10 flex items-stretch gap-1.5"
                                >
                                    <div className="flex-1 min-w-0">
                                        <Search onSearch={searchPokemon} autoFocus />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={randomSearch}
                                        aria-label={t("home.randomAria")}
                                        title={t("home.randomAria")}
                                        className="shrink-0 border-2 border-divider/70 hover:border-red-500 px-3 text-fg hover:text-red-500 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas font-display text-lg leading-none"
                                    >
                                        🎲
                                    </button>
                                </motion.div>

                                <motion.div
                                    variants={heroFade}
                                    initial="hidden"
                                    animate="show"
                                    transition={{ delay: 0.32, duration: 0.4, ease: EASE_OUT_QUINT }}
                                    className="mt-5"
                                >
                                    <p className="font-display text-[0.625rem] text-faint tabular-nums tracking-[0.28em] uppercase text-center mb-2">
                                        {recent.length > 0 ? t("home.recent") : t("home.tryOne")}
                                    </p>
                                    <div className="grid grid-cols-3 gap-1.5">
                                        {(recent.length > 0 ? recent : examples).slice(0, 3).map((ex) => {
                                            const label = recent.length > 0
                                                ? pickSpeciesName(recentNames[ex.toLowerCase()], lang, capitalize(ex))
                                                : capitalize(ex);
                                            return (
                                                <button
                                                    key={ex}
                                                    type="button"
                                                    onClick={() => searchPokemon(ex.toLowerCase())}
                                                    className="group inline-flex items-center justify-center gap-1 py-1.5 px-2 font-display text-xs font-bold uppercase tracking-[0.18em] text-fg border-2 border-divider/60 hover:border-red-500 hover:bg-red-500 hover:text-white transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas overflow-hidden"
                                                    title={label}
                                                >
                                                    <span aria-hidden="true" className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 -ml-3 transition-opacity shrink-0">▸</span>
                                                    <span className="truncate min-w-0">{label}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                </section>
            </div>

            {viewKey !== "empty" && (
                <section className="shrink-0 px-6 pb-4">
                    <hr className="mb-6 border-divider/40" />
                    <Search onSearch={searchPokemon} />
                </section>
            )}
        </main>
    );
}

export default App;
