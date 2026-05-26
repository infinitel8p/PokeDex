import { ReactNode } from "react";
import { invoke } from "@tauri-apps/api/core";
import { PreferenceToggle } from "../components/PreferenceToggle";
import StatusBar from "../components/StatusBar";
import type { TranslationKey } from "../data/translations";
import { CRTPreference, getCRTPreference, setCRTPreference } from "../lib/crt";
import { CrySource, getCrySource, setCrySource } from "../lib/cry-source";
import { FontPreference, FONT_OPTIONS, getFontPreference, setFontPreference } from "../lib/font";
import {
    Language,
    LANGUAGE_OPTIONS,
    getLanguagePreference,
    setLanguagePreference,
    useLanguage,
} from "../lib/i18n";
import { clearRecentSearches } from "../lib/recent";
import { ShinyPreference, getShinyPreference, setShinyPreference } from "../lib/shiny";
import { SpriteStyle, SPRITE_STYLE_OPTIONS, getSpriteStyle, setSpriteStyle } from "../lib/sprite-style";
import { getInitialTheme, setTheme, Theme } from "../lib/theme";

const FONT_LABEL_KEY: Record<FontPreference, TranslationKey> = {
    pixelify: "settings.fontPixelify",
    crisp: "settings.fontCrisp",
    arcade: "settings.fontArcade",
};

const SPRITE_LABEL_KEY: Record<SpriteStyle, TranslationKey> = {
    artwork: "settings.spriteArtwork",
    home: "settings.spriteHome",
    showdown: "settings.spriteAnimated",
    gen5: "settings.spriteGen5",
    gen4: "settings.spriteGen4",
    gen1: "settings.spriteGen1",
};

const UPCOMING_KEYS: ReadonlyArray<{ labelKey: TranslationKey; hintKey: TranslationKey }> = [
    { labelKey: "settings.upcomingGen", hintKey: "settings.upcomingGenHint" },
    { labelKey: "settings.upcomingTeams", hintKey: "settings.upcomingTeamsHint" },
];

interface SettingsRowProps {
    labelKey: TranslationKey;
    hintKey: TranslationKey;
    stacked?: boolean;
    children: ReactNode;
}

const SettingsRow = ({ labelKey, hintKey, stacked, children }: SettingsRowProps) => {
    const { t } = useLanguage();
    const containerClass = stacked
        ? "border-2 border-divider/60 px-3 py-3 space-y-2.5"
        : "flex items-center justify-between gap-3 border-2 border-divider/60 px-3 py-3";
    return (
        <li className={containerClass}>
            <div className="min-w-0">
                <p className="font-display text-sm font-bold uppercase tracking-[0.18em]">
                    {t(labelKey)}
                </p>
                <p className="text-xs text-muted mt-0.5">{t(hintKey)}</p>
            </div>
            {children}
        </li>
    );
};

const CLEAR_BUTTON_CLASS =
    "shrink-0 font-display text-[0.625rem] tabular-nums tracking-[0.28em] uppercase px-3 py-1.5 border-2 border-divider/60 text-muted hover:text-fg hover:border-red-500 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

const Settings = () => {
    const { t } = useLanguage();
    return (
        <main className="h-screen flex flex-col pt-9 px-4 pb-4">
            <div className="pt-3">
                <StatusBar />
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto pt-8">
                <header className="text-center">
                    <h1 className="font-display text-3xl font-bold tracking-tight">{t("settings.title")}</h1>
                </header>

                <ul className="mt-8 space-y-1.5">
                    <SettingsRow labelKey="settings.language" hintKey="settings.languageHint" stacked>
                        <PreferenceToggle<Language>
                            initialValue={getLanguagePreference()}
                            onSelect={setLanguagePreference}
                            ariaLabelKey="settings.language"
                            layout="grid"
                            spacedCaps={false}
                            options={LANGUAGE_OPTIONS.map(({ value, label }) => ({
                                value,
                                label,
                                lang: value,
                            }))}
                        />
                    </SettingsRow>

                    <SettingsRow labelKey="settings.theme" hintKey="settings.themeHint">
                        <PreferenceToggle<Theme>
                            initialValue={getInitialTheme()}
                            onSelect={setTheme}
                            ariaLabelKey="settings.theme"
                            options={[
                                { value: "dark", labelKey: "settings.themeDark" },
                                { value: "light", labelKey: "settings.themeLight" },
                            ]}
                        />
                    </SettingsRow>

                    <SettingsRow labelKey="settings.crt" hintKey="settings.crtHint">
                        <PreferenceToggle<CRTPreference>
                            initialValue={getCRTPreference()}
                            onSelect={setCRTPreference}
                            ariaLabelKey="settings.crt"
                            options={[
                                { value: "on", labelKey: "settings.crtOn" },
                                { value: "off", labelKey: "settings.crtOff" },
                            ]}
                        />
                    </SettingsRow>

                    <SettingsRow labelKey="settings.font" hintKey="settings.fontHint">
                        <PreferenceToggle<FontPreference>
                            initialValue={getFontPreference()}
                            onSelect={setFontPreference}
                            ariaLabelKey="settings.font"
                            options={FONT_OPTIONS.map(({ value }) => ({
                                value,
                                labelKey: FONT_LABEL_KEY[value],
                            }))}
                        />
                    </SettingsRow>

                    <SettingsRow labelKey="settings.shiny" hintKey="settings.shinyHint">
                        <PreferenceToggle<ShinyPreference>
                            initialValue={getShinyPreference()}
                            onSelect={setShinyPreference}
                            ariaLabelKey="settings.shiny"
                            options={[
                                { value: "off", labelKey: "settings.shinyOff" },
                                { value: "on", labelKey: "settings.shinyOn" },
                            ]}
                        />
                    </SettingsRow>

                    <SettingsRow labelKey="settings.sprite" hintKey="settings.spriteHint" stacked>
                        <PreferenceToggle<SpriteStyle>
                            initialValue={getSpriteStyle()}
                            onSelect={setSpriteStyle}
                            ariaLabelKey="settings.sprite"
                            layout="grid"
                            options={SPRITE_STYLE_OPTIONS.map(({ value }) => ({
                                value,
                                labelKey: SPRITE_LABEL_KEY[value],
                            }))}
                        />
                    </SettingsRow>

                    <SettingsRow labelKey="settings.cry" hintKey="settings.cryHint">
                        <PreferenceToggle<CrySource>
                            initialValue={getCrySource()}
                            onSelect={setCrySource}
                            ariaLabelKey="settings.cry"
                            options={[
                                { value: "latest", labelKey: "settings.cryLatest" },
                                { value: "legacy", labelKey: "settings.cryLegacy" },
                            ]}
                        />
                    </SettingsRow>

                    <SettingsRow labelKey="settings.recent" hintKey="settings.recentHint">
                        <button
                            type="button"
                            onClick={() => clearRecentSearches()}
                            className={CLEAR_BUTTON_CLASS}
                        >
                            {t("settings.clear")}
                        </button>
                    </SettingsRow>

                    <SettingsRow labelKey="settings.cache" hintKey="settings.cacheHint">
                        <button
                            type="button"
                            onClick={() => { void invoke("clear_cache"); }}
                            className={CLEAR_BUTTON_CLASS}
                        >
                            {t("settings.clear")}
                        </button>
                    </SettingsRow>

                    {UPCOMING_KEYS.map(({ labelKey, hintKey }) => (
                        <li
                            key={labelKey}
                            className="flex items-center justify-between gap-3 border-2 border-divider/40 px-3 py-3 opacity-70"
                            aria-disabled="true"
                        >
                            <div className="min-w-0">
                                <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-muted">
                                    {t(labelKey)}
                                </p>
                                <p className="text-xs text-muted mt-0.5">{t(hintKey)}</p>
                            </div>
                            <span className="font-display text-[0.625rem] tabular-nums tracking-[0.28em] uppercase text-faint shrink-0 border border-divider/60 px-2 py-0.5">
                                {t("settings.soon")}
                            </span>
                        </li>
                    ))}
                </ul>

                <details className="mt-6 border-2 border-divider/60 group">
                    <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-3 px-3 py-3 transition-colors hover:bg-divider/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas">
                        <p className="font-display text-sm font-bold uppercase tracking-[0.18em]">
                            {t("settings.about")}
                        </p>
                        <span
                            aria-hidden="true"
                            className="font-display text-xs text-muted transition-transform group-open:rotate-180"
                        >
                            ▾
                        </span>
                    </summary>
                    <div className="border-t-2 border-divider/40 px-3 py-3 space-y-3 text-xs text-muted leading-relaxed">
                        <p>{t("settings.aboutText")}</p>
                        <div>
                            <p className="font-display text-[0.625rem] uppercase tracking-[0.28em] text-faint mb-1">
                                {t("settings.aboutMultipliers")}
                            </p>
                            <dl className="space-y-1">
                                <div className="flex items-baseline gap-2">
                                    <dt className="font-display font-bold tabular-nums text-red-500 w-10 shrink-0">2×</dt>
                                    <dd>{t("settings.aboutMult2x")}</dd>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <dt className="font-display font-bold tabular-nums text-amber-500 w-10 shrink-0">0.5×</dt>
                                    <dd>{t("settings.aboutMultHalf")}</dd>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <dt className="font-display font-bold tabular-nums text-fg w-10 shrink-0">0×</dt>
                                    <dd>{t("settings.aboutMult0x")}</dd>
                                </div>
                            </dl>
                        </div>
                        <p>{t("settings.aboutData")}</p>
                        <p className="font-display text-[0.625rem] uppercase tracking-[0.28em] text-faint pt-1">
                            {t("settings.aboutTip")}
                        </p>
                    </div>
                </details>
            </div>
        </main>
    );
};

export default Settings;
