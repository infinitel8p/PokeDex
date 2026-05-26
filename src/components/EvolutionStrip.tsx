import { EvolutionEntry } from "../types/pokemon";
import { pickSpeciesName, useLanguage } from "../lib/i18n";

interface Props {
    chain: EvolutionEntry[];
    onPick: (name: string) => void;
}

function capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

const EvolutionStrip: React.FC<Props> = ({ chain, onPick }) => {
    const { lang, t, tf } = useLanguage();
    if (!chain || chain.length <= 1) return null;

    return (
        <section className="border-2 border-divider/60">
            <header className="flex items-stretch bg-indigo-600 text-white">
                <div className="flex items-center justify-center px-3 py-1.5 font-display text-sm font-bold tabular-nums border-r-2 border-white/25">
                    {chain.length}
                </div>
                <div className="flex-1 flex items-center justify-between px-3 py-1.5">
                    <span className="font-display text-xs font-bold tracking-[0.18em] uppercase">
                        {t("evolution.title")}
                    </span>
                    <span className="font-display text-[0.625rem] tabular-nums tracking-[0.28em] opacity-80">
                        {t("evolution.tapToScan")}
                    </span>
                </div>
            </header>
            <div className="px-3 py-3 flex flex-wrap gap-2 items-end">
                {chain.map((entry) => {
                    const localized = pickSpeciesName(entry.names, lang, capitalize(entry.name));
                    return (
                        <button
                            key={entry.name}
                            type="button"
                            onClick={() => onPick(entry.name)}
                            className={`group flex flex-col items-center gap-1 px-2 py-1 border-2 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${
                                entry.is_current
                                    ? "border-red-500 bg-red-500/10"
                                    : "border-divider/40 hover:border-red-500/60"
                            }`}
                            aria-current={entry.is_current ? "true" : undefined}
                            aria-label={tf("evolution.scanAria", { name: localized })}
                        >
                            <img
                                src={entry.sprite}
                                alt=""
                                className="h-14 w-14 object-contain"
                                loading="lazy"
                            />
                            <span
                                className={`font-display text-[0.625rem] tabular-nums tracking-[0.18em] uppercase ${
                                    entry.is_current ? "text-red-500" : "text-muted"
                                }`}
                            >
                                {localized}
                            </span>
                        </button>
                    );
                })}
            </div>
        </section>
    );
};

export default EvolutionStrip;
