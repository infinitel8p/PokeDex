import { useState, useEffect, useMemo, useRef } from "react";
import { flushSync } from "react-dom";
import { invoke } from "@tauri-apps/api/core";
import { AnimatePresence, motion, Variants } from "framer-motion";
import "./App.css";
import HoloArtwork from "./components/HoloArtwork";
import Search from "./components/Search";
import StatusBar from "./components/StatusBar";
import {
    classifySearchError,
    getTypeColor,
    Pokemon,
    WeaknessMultiplier,
    WeaknessEntry,
} from "./types/pokemon";

const SECTION_META: Record<
    WeaknessMultiplier,
    { label: string; headerClass: string; dividerClass: string; tooltip: string }
> = {
    "2x": {
        label: "Weaknesses",
        headerClass: "bg-red-600 text-white",
        dividerClass: "border-white/25",
        tooltip: "Takes double damage from these types",
    },
    "0.5x": {
        label: "Resistances",
        headerClass: "bg-amber-500 text-stone-900",
        dividerClass: "border-black/15",
        tooltip: "Takes half damage from these types",
    },
    "0x": {
        label: "Immunities",
        headerClass: "bg-slate-600 text-white",
        dividerClass: "border-white/25",
        tooltip: "Takes no damage from these types",
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

const LOADING_MESSAGES = [
    "Scanning…",
    "Analyzing types…",
    "Calculating matchups…",
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
    const requestIdRef = useRef(0);
    const examples = useMemo(() => pickRandomExamples(EXAMPLE_POKEMON, 3), []);

    useEffect(() => {
        if (!loading) return;
        setLoadingMessageIndex(0);
        const interval = window.setInterval(() => {
            setLoadingMessageIndex((i) => (i + 1) % LOADING_MESSAGES.length);
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
                    setError(
                        `No Pokémon called "${truncateQuery(classified.query)}". Check the spelling, or search by number (e.g. 25 for Pikachu).`
                    );
                    break;
                case "network":
                    setError(
                        "Couldn't reach the Pokémon database. Check your internet connection."
                    );
                    break;
                default:
                    setError("Something went wrong. Try searching again.");
                    break;
            }
            setPokemonData(null);
        } finally {
            if (myId === requestIdRef.current) {
                setLoading(false);
            }
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
            return { multiplier, ...meta, entries };
        })
        : [];

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
                                alt="Loading"
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
                                    {LOADING_MESSAGES[loadingMessageIndex]}
                                </motion.p>
                            </AnimatePresence>
                        </motion.div>
                    )}

                    {viewKey === "result" && pokemonData && (
                        <motion.div key="result" {...stateTransition}>
                            <header className="px-4 pt-4">
                                <div className="flex items-start justify-between gap-3 border-2 border-red-500 px-4 py-3">
                                    <div className="flex-1 min-w-0">
                                        <p className="font-display text-xs text-red-500 tabular-nums tracking-[0.18em] uppercase">
                                            № {pokemonData.id.toString().padStart(4, "0")}
                                        </p>
                                        <h1
                                            className="font-display text-4xl font-bold capitalize mt-1 leading-[0.95] break-words tracking-tight"
                                            style={{ viewTransitionName: "pokemon-name" }}
                                        >
                                            {capitalize(pokemonData.name)}
                                        </h1>
                                        <div className="mt-3 flex flex-wrap gap-1.5">
                                            <span className="sr-only">Type: </span>
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
                                    {pokemonData.sprites?.other?.["official-artwork"]?.front_default ? (
                                        <div className="scan-sweep h-32 w-32 flex-shrink-0 -mt-2 -mr-2">
                                            <HoloArtwork
                                                src={pokemonData.sprites.other["official-artwork"].front_default}
                                                alt={`${capitalize(pokemonData.name)} official artwork`}
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            aria-hidden="true"
                                            className="h-32 w-32 flex-shrink-0 -mt-2 -mr-2 border-2 border-divider/40 flex items-center justify-center font-display text-3xl text-faint"
                                        >
                                            ?
                                        </div>
                                    )}
                                </div>
                            </header>

                            <div className="mt-4 px-4 space-y-2.5">
                                {weaknessSections.length === 0 ? (
                                    <p className="text-sm text-center text-faint py-6 border-2 border-divider/60">
                                        No matchup data available.
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
                                                        None
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
                                <p className="text-[0.625rem] text-faint italic text-center px-6 pt-2 pb-1">
                                    Based on core-series type effectiveness.
                                </p>
                            </div>
                        </motion.div>
                    )}

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
                                        Makes winning easy
                                    </motion.p>
                                </motion.div>

                                <motion.div
                                    variants={heroFade}
                                    initial="hidden"
                                    animate="show"
                                    transition={{ delay: 0.2, duration: 0.4, ease: EASE_OUT_QUINT }}
                                    className="mt-10"
                                >
                                    <Search onSearch={searchPokemon} autoFocus />
                                </motion.div>

                                <motion.div
                                    variants={heroFade}
                                    initial="hidden"
                                    animate="show"
                                    transition={{ delay: 0.32, duration: 0.4, ease: EASE_OUT_QUINT }}
                                    className="mt-5"
                                >
                                    <p className="font-display text-[0.625rem] text-faint tabular-nums tracking-[0.28em] uppercase text-center mb-2">
                                        Try one
                                    </p>
                                    <div className="grid grid-cols-3 gap-1.5">
                                        {examples.map((ex) => (
                                            <button
                                                key={ex}
                                                type="button"
                                                onClick={() => searchPokemon(ex.toLowerCase())}
                                                className="group inline-flex items-center justify-center gap-1 py-1.5 px-2 font-display text-xs font-bold uppercase tracking-[0.18em] text-fg border-2 border-divider/60 hover:border-red-500 hover:bg-red-500 hover:text-white transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                                            >
                                                <span aria-hidden="true" className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 -ml-3 transition-opacity">▸</span>
                                                {ex}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                </section>
            </div>

            {viewKey !== "empty" && (
                <section className="flex-shrink-0 px-6 pb-4">
                    <hr className="mb-6 border-divider/40" />
                    <Search onSearch={searchPokemon} />
                </section>
            )}
        </main>
    );
}

export default App;
