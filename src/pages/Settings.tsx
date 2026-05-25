import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import StatusBar from "../components/StatusBar";
import { CRTPreference, getCRTPreference, setCRTPreference } from "../lib/crt";
import { CrySource, getCrySource, setCrySource } from "../lib/cry-source";
import { FontPreference, FONT_OPTIONS, getFontPreference, setFontPreference } from "../lib/font";
import { clearRecentSearches } from "../lib/recent";
import { ShinyPreference, getShinyPreference, setShinyPreference } from "../lib/shiny";
import { SpriteStyle, SPRITE_STYLE_OPTIONS, getSpriteStyle, setSpriteStyle } from "../lib/sprite-style";
import { getInitialTheme, setTheme, Theme } from "../lib/theme";

const UPCOMING_SETTINGS = [
    {
        label: "Language",
        hint: "Search Pokémon in your preferred language",
    },
    {
        label: "Default generation",
        hint: "Limit matchups to a specific Pokémon generation",
    },
    {
        label: "Saved teams",
        hint: "Build a team and see combined weaknesses",
    },
];

const ThemeControl = () => {
    const [current, setCurrent] = useState<Theme>(getInitialTheme());

    const select = (theme: Theme) => {
        setTheme(theme);
        setCurrent(theme);
    };

    return (
        <div
            role="radiogroup"
            aria-label="Theme"
            className="shrink-0 inline-flex border-2 border-divider/60"
        >
            {(["dark", "light"] as const).map((option) => {
                const active = current === option;
                return (
                    <button
                        key={option}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => select(option)}
                        className={`font-display text-[0.625rem] tabular-nums tracking-[0.28em] uppercase px-3 py-1.5 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${
                            active
                                ? "bg-red-500 text-white"
                                : "text-muted hover:text-fg"
                        }`}
                    >
                        {option}
                    </button>
                );
            })}
        </div>
    );
};

const FontControl = () => {
    const [current, setCurrent] = useState<FontPreference>(() => getFontPreference());

    const select = (value: FontPreference) => {
        setFontPreference(value);
        setCurrent(value);
    };

    return (
        <div
            role="radiogroup"
            aria-label="Font"
            className="shrink-0 inline-flex border-2 border-divider/60"
        >
            {FONT_OPTIONS.map(({ value, label }) => {
                const active = current === value;
                return (
                    <button
                        key={value}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => select(value)}
                        className={`font-display text-[0.625rem] tabular-nums tracking-[0.28em] uppercase px-3 py-1.5 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${
                            active
                                ? "bg-red-500 text-white"
                                : "text-muted hover:text-fg"
                        }`}
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
};

const CrySourceControl = () => {
    const [current, setCurrent] = useState<CrySource>(() => getCrySource());

    const select = (value: CrySource) => {
        setCrySource(value);
        setCurrent(value);
    };

    return (
        <div
            role="radiogroup"
            aria-label="Cry source"
            className="shrink-0 inline-flex border-2 border-divider/60"
        >
            {(["latest", "legacy"] as const).map((option) => {
                const active = current === option;
                return (
                    <button
                        key={option}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => select(option)}
                        className={`font-display text-[0.625rem] tabular-nums tracking-[0.28em] uppercase px-3 py-1.5 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${
                            active ? "bg-red-500 text-white" : "text-muted hover:text-fg"
                        }`}
                    >
                        {option}
                    </button>
                );
            })}
        </div>
    );
};

const SpriteStyleControl = () => {
    const [current, setCurrent] = useState<SpriteStyle>(() => getSpriteStyle());

    const select = (value: SpriteStyle) => {
        setSpriteStyle(value);
        setCurrent(value);
    };

    return (
        <div
            role="radiogroup"
            aria-label="Sprite style"
            className="grid grid-cols-3 gap-1.5 w-full"
        >
            {SPRITE_STYLE_OPTIONS.map(({ value, label }) => {
                const active = current === value;
                return (
                    <button
                        key={value}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => select(value)}
                        className={`font-display text-[0.625rem] tabular-nums tracking-[0.28em] uppercase px-2 py-1.5 border-2 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${
                            active
                                ? "bg-red-500 text-white border-red-500"
                                : "text-muted hover:text-fg border-divider/60"
                        }`}
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
};

const ShinyControl = () => {
    const [current, setCurrent] = useState<ShinyPreference>(() => getShinyPreference());

    const select = (value: ShinyPreference) => {
        setShinyPreference(value);
        setCurrent(value);
    };

    return (
        <div
            role="radiogroup"
            aria-label="Shiny artwork"
            className="shrink-0 inline-flex border-2 border-divider/60"
        >
            {(["off", "on"] as const).map((option) => {
                const active = current === option;
                return (
                    <button
                        key={option}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => select(option)}
                        className={`font-display text-[0.625rem] tabular-nums tracking-[0.28em] uppercase px-3 py-1.5 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${
                            active ? "bg-red-500 text-white" : "text-muted hover:text-fg"
                        }`}
                    >
                        {option}
                    </button>
                );
            })}
        </div>
    );
};

const CRTControl = () => {
    const [current, setCurrent] = useState<CRTPreference>(() => getCRTPreference());

    const select = (value: CRTPreference) => {
        setCRTPreference(value);
        setCurrent(value);
    };

    return (
        <div
            role="radiogroup"
            aria-label="CRT effect"
            className="shrink-0 inline-flex border-2 border-divider/60"
        >
            {(["on", "off"] as const).map((option) => {
                const active = current === option;
                return (
                    <button
                        key={option}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => select(option)}
                        className={`font-display text-[0.625rem] tabular-nums tracking-[0.28em] uppercase px-3 py-1.5 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${
                            active
                                ? "bg-red-500 text-white"
                                : "text-muted hover:text-fg"
                        }`}
                    >
                        {option}
                    </button>
                );
            })}
        </div>
    );
};

const Settings = () => {
    return (
        <main className="h-screen flex flex-col pt-9 px-4 pb-4">
            <div className="pt-3">
                <StatusBar />
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto pt-8">
                <header className="text-center">
                    <h1 className="font-display text-3xl font-bold tracking-tight">Settings</h1>
                </header>

                <ul className="mt-8 space-y-1.5">
                    <li className="flex items-center justify-between gap-3 border-2 border-divider/60 px-3 py-3">
                        <div className="min-w-0">
                            <p className="font-display text-sm font-bold uppercase tracking-[0.18em]">
                                Theme
                            </p>
                            <p className="text-xs text-muted mt-0.5">
                                Light or dark Pokédex screen
                            </p>
                        </div>
                        <ThemeControl />
                    </li>
                    <li className="flex items-center justify-between gap-3 border-2 border-divider/60 px-3 py-3">
                        <div className="min-w-0">
                            <p className="font-display text-sm font-bold uppercase tracking-[0.18em]">
                                CRT effect
                            </p>
                            <p className="text-xs text-muted mt-0.5">
                                Scanlines, phosphor edges, vignette
                            </p>
                        </div>
                        <CRTControl />
                    </li>
                    <li className="flex items-center justify-between gap-3 border-2 border-divider/60 px-3 py-3">
                        <div className="min-w-0">
                            <p className="font-display text-sm font-bold uppercase tracking-[0.18em]">
                                Font
                            </p>
                            <p className="text-xs text-muted mt-0.5">
                                Pixel · clean · retro CRT
                            </p>
                        </div>
                        <FontControl />
                    </li>
                    <li className="flex items-center justify-between gap-3 border-2 border-divider/60 px-3 py-3">
                        <div className="min-w-0">
                            <p className="font-display text-sm font-bold uppercase tracking-[0.18em]">
                                Shiny artwork
                            </p>
                            <p className="text-xs text-muted mt-0.5">
                                Prefer shiny sprites when available
                            </p>
                        </div>
                        <ShinyControl />
                    </li>
                    <li className="border-2 border-divider/60 px-3 py-3 space-y-2.5">
                        <div className="min-w-0">
                            <p className="font-display text-sm font-bold uppercase tracking-[0.18em]">
                                Sprite style
                            </p>
                            <p className="text-xs text-muted mt-0.5">
                                Which sprite source to show
                            </p>
                        </div>
                        <SpriteStyleControl />
                    </li>
                    <li className="flex items-center justify-between gap-3 border-2 border-divider/60 px-3 py-3">
                        <div className="min-w-0">
                            <p className="font-display text-sm font-bold uppercase tracking-[0.18em]">
                                Cry source
                            </p>
                            <p className="text-xs text-muted mt-0.5">
                                Latest game cry vs Gen 1-5 legacy beep
                            </p>
                        </div>
                        <CrySourceControl />
                    </li>
                    <li className="flex items-center justify-between gap-3 border-2 border-divider/60 px-3 py-3">
                        <div className="min-w-0">
                            <p className="font-display text-sm font-bold uppercase tracking-[0.18em]">
                                Recent searches
                            </p>
                            <p className="text-xs text-muted mt-0.5">
                                Quick access to your last lookups
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => clearRecentSearches()}
                            className="shrink-0 font-display text-[0.625rem] tabular-nums tracking-[0.28em] uppercase px-3 py-1.5 border-2 border-divider/60 text-muted hover:text-fg hover:border-red-500 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                        >
                            Clear
                        </button>
                    </li>
                    <li className="flex items-center justify-between gap-3 border-2 border-divider/60 px-3 py-3">
                        <div className="min-w-0">
                            <p className="font-display text-sm font-bold uppercase tracking-[0.18em]">
                                API cache
                            </p>
                            <p className="text-xs text-muted mt-0.5">
                                Clear cached PokéAPI responses (forces re-fetch)
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => { void invoke("clear_cache"); }}
                            className="shrink-0 font-display text-[0.625rem] tabular-nums tracking-[0.28em] uppercase px-3 py-1.5 border-2 border-divider/60 text-muted hover:text-fg hover:border-red-500 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                        >
                            Clear
                        </button>
                    </li>
                    {UPCOMING_SETTINGS.map((item) => (
                        <li
                            key={item.label}
                            className="flex items-center justify-between gap-3 border-2 border-divider/40 px-3 py-3 opacity-70"
                            aria-disabled="true"
                        >
                            <div className="min-w-0">
                                <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-muted">
                                    {item.label}
                                </p>
                                <p className="text-xs text-muted mt-0.5">
                                    {item.hint}
                                </p>
                            </div>
                            <span className="font-display text-[0.625rem] tabular-nums tracking-[0.28em] uppercase text-faint shrink-0 border border-divider/60 px-2 py-0.5">
                                Soon
                            </span>
                        </li>
                    ))}
                </ul>

                <details className="mt-6 border-2 border-divider/60 group">
                    <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-3 px-3 py-3 transition-colors hover:bg-divider/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas">
                        <p className="font-display text-sm font-bold uppercase tracking-[0.18em]">
                            About PokéDex
                        </p>
                        <span
                            aria-hidden="true"
                            className="font-display text-xs text-muted transition-transform group-open:rotate-180"
                        >
                            ▾
                        </span>
                    </summary>
                    <div className="border-t-2 border-divider/40 px-3 py-3 space-y-3 text-xs text-muted leading-relaxed">
                        <p>
                            A type matchup oracle for Pokémon battles. Type any name or number to see what beats it.
                        </p>
                        <div>
                            <p className="font-display text-[0.625rem] uppercase tracking-[0.28em] text-faint mb-1">
                                Multipliers
                            </p>
                            <dl className="space-y-1">
                                <div className="flex items-baseline gap-2">
                                    <dt className="font-display font-bold tabular-nums text-red-500 w-10 shrink-0">2×</dt>
                                    <dd>Takes double damage from these types</dd>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <dt className="font-display font-bold tabular-nums text-amber-500 w-10 shrink-0">0.5×</dt>
                                    <dd>Takes half damage from these types</dd>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <dt className="font-display font-bold tabular-nums text-fg w-10 shrink-0">0×</dt>
                                    <dd>Takes no damage from these types</dd>
                                </div>
                            </dl>
                        </div>
                        <p>
                            Data from <span className="font-display tracking-wider text-fg">PokéAPI</span>. Multipliers reflect core-series mechanics — other Pokémon games may differ.
                        </p>
                        <p className="font-display text-[0.625rem] uppercase tracking-[0.28em] text-faint pt-1">
                            Tip · Press any letter to focus search
                        </p>
                    </div>
                </details>
            </div>
        </main>
    );
};

export default Settings;
