import { PokemonStat } from "../types/pokemon";

interface Props {
    stats: PokemonStat[];
}

const STAT_LABEL: Record<string, string> = {
    "hp": "HP",
    "attack": "ATK",
    "defense": "DEF",
    "special-attack": "SP.A",
    "special-defense": "SP.D",
    "speed": "SPD",
};

const STAT_ORDER = ["hp", "attack", "defense", "special-attack", "special-defense", "speed"];

// 255 is the canonical max base stat (Blissey HP). Above 180 already feels exceptional.
const STAT_MAX = 200;

function statColor(value: number): string {
    if (value >= 130) return "bg-emerald-500";
    if (value >= 90) return "bg-lime-500";
    if (value >= 60) return "bg-amber-500";
    return "bg-red-500";
}

const StatBars: React.FC<Props> = ({ stats }) => {
    if (!stats || stats.length === 0) return null;

    const byName: Record<string, number> = {};
    for (const s of stats) {
        byName[s.stat.name] = s.base_stat;
    }
    const total = stats.reduce((sum, s) => sum + s.base_stat, 0);

    return (
        <section className="border-2 border-divider/60">
            <header className="flex items-stretch bg-slate-700 text-white">
                <div className="flex items-center justify-center px-3 py-1.5 font-display text-sm font-bold tabular-nums border-r-2 border-white/25">
                    BST
                </div>
                <div className="flex-1 flex items-center justify-between px-3 py-1.5">
                    <span className="font-display text-xs font-bold tracking-[0.18em] uppercase">
                        Base Stats
                    </span>
                    <span className="font-display text-[0.625rem] tabular-nums tracking-[0.28em] opacity-80">
                        Σ {total}
                    </span>
                </div>
            </header>
            <ul className="px-3 py-3 space-y-1.5">
                {STAT_ORDER.map((key) => {
                    const value = byName[key] ?? 0;
                    const pct = Math.min(100, (value / STAT_MAX) * 100);
                    return (
                        <li key={key} className="flex items-center gap-2">
                            <span className="font-display text-[0.6875rem] tabular-nums tracking-[0.18em] uppercase text-muted w-12 shrink-0">
                                {STAT_LABEL[key]}
                            </span>
                            <span className="font-display text-xs tabular-nums w-8 shrink-0 text-right">
                                {value}
                            </span>
                            <div className="flex-1 h-2 bg-divider/40 overflow-hidden relative">
                                <div
                                    className={`absolute inset-y-0 left-0 transition-[width] duration-500 ease-out ${statColor(value)}`}
                                    style={{ width: `${pct}%` }}
                                />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default StatBars;
