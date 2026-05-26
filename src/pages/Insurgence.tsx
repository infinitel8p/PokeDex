import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import EvolutionStrip from "../components/EvolutionStrip";
import HoloArtwork from "../components/HoloArtwork";
import Search from "../components/Search";
import StatBars from "../components/StatBars";
import StatusBar from "../components/StatusBar";
import { INSURGENCE_POKEMON, InsurgencePokemon } from "../data/insurgence-pokemon";
import {
    calculateInsurgenceMatchups,
    INSURGENCE_TYPE_COLORS,
    InsurgenceType,
} from "../lib/insurgence-types";
import { useLanguage } from "../lib/i18n";
import type { TranslationKey } from "../data/translations";

const SECTION_META: Record<
    keyof ReturnType<typeof calculateInsurgenceMatchups>,
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

const SUGGESTION_POOL = [
    "Delta Bulbasaur",
    "Delta Charizard",
    "Delta Squirtle",
    "Delta Gardevoir",
    "Delta Pidgey",
    "Delta Scyther",
    "Delta Snorlax",
    "Delta Larvitar",
    "Delta Ralts",
    "Delta Metagross",
    "Delta Gallade",
    "Delta Volcarona",
    "Delta Aurorus",
    "Delta Goodra",
    "Delta Hoopa",
];

function pickRandom(pool: string[], count: number): string[] {
    const arr = [...pool];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, count);
}

function normalize(s: string): string {
    return s
        .toLowerCase()
        .replace(/[.'’_-]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function findPokemon(query: string): InsurgencePokemon | null {
    const q = normalize(query);
    if (!q) return null;

    // Allow searching without the "Delta " prefix.
    let hit = INSURGENCE_POKEMON.find((p) => normalize(p.name) === q);
    if (hit) return hit;
    hit = INSURGENCE_POKEMON.find((p) => normalize(p.name) === "delta " + q);
    if (hit) return hit;

    if (/^\d+$/.test(q)) {
        const idMatch = q.replace(/^0+/, "") || "0";
        hit = INSURGENCE_POKEMON.find((p) => p.id.replace(/^0+/, "") === idMatch);
        if (hit) return hit;
    }
    hit = INSURGENCE_POKEMON.find((p) => normalize(p.name).startsWith(q));
    if (hit) return hit;
    hit = INSURGENCE_POKEMON.find((p) => normalize(p.name).startsWith("delta " + q));
    if (hit) return hit;
    return null;
}

const Insurgence = () => {
    const [submitted, setSubmitted] = useState<InsurgencePokemon | null>(null);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const examples = useMemo(() => pickRandom(SUGGESTION_POOL, 3), []);
    const { t, tf } = useLanguage();

    const submit = (raw: string) => {
        const trimmed = raw.trim();
        if (!trimmed) return;
        setLoading(true);
        window.setTimeout(() => {
            const hit = findPokemon(trimmed);
            if (hit) {
                setSubmitted(hit);
                setError("");
            } else {
                setSubmitted(null);
                const truncated = trimmed.slice(0, 24) + (trimmed.length > 24 ? "…" : "");
                setError(tf("error.insurgenceNotFound", { query: truncated }));
            }
            setLoading(false);
        }, 120);
    };

    useEffect(() => {
        const reset = () => {
            setSubmitted(null);
            setError("");
            setLoading(false);
        };
        window.addEventListener("pokedex:reset", reset);
        return () => window.removeEventListener("pokedex:reset", reset);
    }, []);

    const matchups = submitted
        ? calculateInsurgenceMatchups(submitted.types as InsurgenceType[])
        : null;

    const sections = matchups
        ? (Object.keys(SECTION_META) as Array<keyof typeof SECTION_META>).map((key) => {
              const meta = SECTION_META[key];
              return {
                  multiplier: key,
                  headerClass: meta.headerClass,
                  dividerClass: meta.dividerClass,
                  label: t(meta.labelKey),
                  tooltip: t(meta.tooltipKey),
                  entries: [...matchups[key]].sort(),
              };
          })
        : [];

    let viewKey: "loading" | "result" | "error" | "empty";
    if (loading) viewKey = "loading";
    else if (submitted) viewKey = "result";
    else if (error) viewKey = "error";
    else viewKey = "empty";

    return (
        <main className="h-dvh flex flex-col pt-[calc(var(--navbar-pad)+env(safe-area-inset-top))]">
            <div className="px-4 pt-3">
                <StatusBar />
            </div>

            <div className="relative flex-1 min-h-0">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 z-10 h-3 bg-linear-to-b from-canvas to-transparent"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-4 bg-linear-to-t from-canvas to-transparent"
                />
                <section className="h-full overflow-y-auto">
                    <AnimatePresence mode="wait" initial={false}>
                        {viewKey === "loading" && (
                            <motion.div
                                key="loading"
                                {...stateTransition}
                                className="flex h-full items-center justify-center"
                            >
                                <motion.div
                                    className="font-display text-[0.625rem] tabular-nums tracking-[0.28em] uppercase text-fg"
                                    animate={{ opacity: [0.4, 1, 0.4] }}
                                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    {t("loading.insurgence")}
                                </motion.div>
                            </motion.div>
                        )}

                        {viewKey === "result" && submitted && (
                            <motion.div key={submitted.name} {...stateTransition} className="px-4 pt-4">
                                <header className="border-2 border-fg px-4 py-3">
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex-1 min-w-0">
                                            <p className="font-display text-xs text-fg tabular-nums tracking-[0.18em] uppercase">
                                                <span aria-hidden="true" className="mr-1">Δ</span>
                                                № {submitted.id.padStart(3, "0")}
                                            </p>
                                            <h1 className="font-display text-4xl font-bold mt-1 leading-[0.95] break-words tracking-tight min-w-0">
                                                {submitted.name}
                                            </h1>
                                            <div className="mt-3 flex flex-wrap gap-1.5">
                                                {submitted.types.map((typeName) => {
                                                    const c = INSURGENCE_TYPE_COLORS[typeName as InsurgenceType];
                                                    return (
                                                        <span
                                                            key={typeName}
                                                            className="inline-flex items-center font-display text-[0.625rem] font-bold uppercase tracking-[0.28em] px-2 py-0.5 border-2"
                                                            style={{
                                                                background: c?.bg ?? "#666",
                                                                color: c?.fg ?? "#fff",
                                                                borderColor: c?.fg ?? "#fff",
                                                            }}
                                                        >
                                                            {typeName}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        <div className="h-32 w-32 shrink-0 -mt-2 -mr-2">
                                            <HoloArtwork
                                                src={submitted.artwork}
                                                alt={`${submitted.name} artwork`}
                                            />
                                        </div>
                                    </div>
                                    {submitted.flavorText && (
                                        <p className="mt-3 pt-3 border-t border-fg/30 text-xs text-muted italic leading-relaxed">
                                            {submitted.flavorText}
                                        </p>
                                    )}
                                </header>

                                <div className="mt-4 space-y-2.5">
                                    {sections.map((section, i) => (
                                        <motion.section
                                            key={section.multiplier}
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.32, delay: 0.05 + i * 0.06, ease: EASE_OUT_QUINT }}
                                            className="border-2 border-divider/60"
                                            title={section.tooltip}
                                        >
                                            <header className={`flex items-stretch ${section.headerClass}`}>
                                                <div className={`flex items-center justify-center px-3 py-1.5 font-display text-sm font-bold tabular-nums border-r-2 ${section.dividerClass}`}>
                                                    {section.multiplier}
                                                </div>
                                                <div className="flex-1 flex items-center justify-between px-3 py-1.5">
                                                    <span className="font-display text-xs font-bold tracking-[0.18em] uppercase">
                                                        {section.label}
                                                    </span>
                                                    <span className="font-display text-[0.625rem] tabular-nums tracking-[0.28em] opacity-80">
                                                        × {section.entries.length}
                                                    </span>
                                                </div>
                                            </header>
                                            <div className="px-3 py-2.5">
                                                {section.entries.length === 0 ? (
                                                    <p className="text-xs text-faint italic text-center py-1">{t("result.none")}</p>
                                                ) : (
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {section.entries.map((typeName) => {
                                                            const c = INSURGENCE_TYPE_COLORS[typeName];
                                                            return (
                                                                <span
                                                                    key={typeName}
                                                                    className="inline-flex items-center font-display text-[0.625rem] font-bold uppercase tracking-[0.28em] px-2 py-0.5 border-2"
                                                                    style={{ background: c.bg, color: c.fg, borderColor: c.fg }}
                                                                >
                                                                    {typeName}
                                                                </span>
                                                            );
                                                        })}
                                                    </div>
                                                )}
                                            </div>
                                        </motion.section>
                                    ))}
                                    {submitted.stats && (
                                        <StatBars
                                            stats={[
                                                { base_stat: submitted.stats.hp, stat: { name: "hp", url: "" } },
                                                { base_stat: submitted.stats.attack, stat: { name: "attack", url: "" } },
                                                { base_stat: submitted.stats.defense, stat: { name: "defense", url: "" } },
                                                { base_stat: submitted.stats.spAtk, stat: { name: "special-attack", url: "" } },
                                                { base_stat: submitted.stats.spDef, stat: { name: "special-defense", url: "" } },
                                                { base_stat: submitted.stats.speed, stat: { name: "speed", url: "" } },
                                            ]}
                                        />
                                    )}
                                    {submitted.evolution && submitted.evolution.length > 1 && (
                                        <EvolutionStrip
                                            chain={submitted.evolution.map((stage) => {
                                                // Look up sprite in our dataset by name — wiki doesn't expose per-stage sprite URLs.
                                                const match = INSURGENCE_POKEMON.find((p) => p.name === stage.name);
                                                return {
                                                    name: stage.name,
                                                    sprite: match?.artwork ?? "",
                                                    is_current: stage.name === submitted.name,
                                                };
                                            })}
                                            onPick={(name) => submit(name)}
                                        />
                                    )}
                                    <p className="text-[0.625rem] text-faint italic text-center px-6 pt-2 pb-1">
                                        {t("insurgence.disclaimer")}
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
                                <img src="/Insurgence.png" alt="" className="h-32 opacity-60" />
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
                                        <motion.img
                                            variants={wordmarkLine}
                                            src="/Insurgence.png"
                                            alt=""
                                            className="h-32 mx-auto object-contain"
                                        />
                                        <motion.h1
                                            variants={wordmarkLine}
                                            className="mt-4 font-display text-3xl font-bold tracking-tight"
                                        >
                                            {t("insurgence.title")}
                                        </motion.h1>
                                        <motion.p
                                            variants={wordmarkLine}
                                            className="mt-3 font-display text-[0.6875rem] text-fg tabular-nums tracking-[0.28em] uppercase"
                                        >
                                            {t("insurgence.subtitle")}
                                        </motion.p>
                                    </motion.div>

                                    <motion.div
                                        variants={heroFade}
                                        initial="hidden"
                                        animate="show"
                                        transition={{ delay: 0.2, duration: 0.4, ease: EASE_OUT_QUINT }}
                                        className="mt-10"
                                    >
                                        <Search
                                            onSearch={submit}
                                            autoFocus
                                            accent="neutral"
                                            placeholder={t("search.placeholderInsurgence")}
                                            transform={(s) => s.trim()}
                                        />
                                    </motion.div>

                                    <motion.div
                                        variants={heroFade}
                                        initial="hidden"
                                        animate="show"
                                        transition={{ delay: 0.32, duration: 0.4, ease: EASE_OUT_QUINT }}
                                        className="mt-5"
                                    >
                                        <p className="font-display text-[0.625rem] text-faint tabular-nums tracking-[0.28em] uppercase text-center mb-2">
                                            {t("home.tryOne")}
                                        </p>
                                        <div className="grid grid-cols-3 gap-1.5">
                                            {examples.map((ex) => (
                                                <button
                                                    key={ex}
                                                    type="button"
                                                    onClick={() => submit(ex)}
                                                    className="group inline-flex items-center justify-center gap-1 py-1.5 px-2 font-display text-xs font-bold uppercase tracking-[0.18em] text-fg border-2 border-divider/60 hover:border-fg hover:bg-fg hover:text-canvas transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-canvas overflow-hidden"
                                                    title={ex}
                                                >
                                                    <span aria-hidden="true" className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 -ml-3 transition-opacity shrink-0">Δ</span>
                                                    <span className="truncate min-w-0">{ex}</span>
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
                <section className="shrink-0 px-6 pb-[max(1rem,env(safe-area-inset-bottom))]">
                    <hr className="mb-6 border-divider/40" />
                    <Search
                        onSearch={submit}
                        accent="neutral"
                        placeholder={t("search.placeholderInsurgence")}
                        transform={(s) => s.trim()}
                    />
                </section>
            )}
        </main>
    );
};

export default Insurgence;
