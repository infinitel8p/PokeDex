import { useEffect, useState } from "react";
import { TRANSLATIONS, type TranslationKey } from "../data/translations";

export type Language =
    | "en"
    | "fr"
    | "de"
    | "es"
    | "it"
    | "ja"
    | "ko"
    | "zh-Hans"
    | "zh-Hant";

const STORAGE_KEY = "pokedex-language";
export const LANGUAGE_CHANGE_EVENT = "pokedex:language";

export interface LanguageOption {
    value: Language;
    label: string;
    apiCodes: ReadonlyArray<string>;
}

export const LANGUAGE_OPTIONS: ReadonlyArray<LanguageOption> = [
    { value: "en", label: "English", apiCodes: ["en"] },
    { value: "fr", label: "Français", apiCodes: ["fr"] },
    { value: "de", label: "Deutsch", apiCodes: ["de"] },
    { value: "es", label: "Español", apiCodes: ["es"] },
    { value: "it", label: "Italiano", apiCodes: ["it"] },
    { value: "ja", label: "日本語", apiCodes: ["ja", "ja-Hrkt", "roomaji"] },
    { value: "ko", label: "한국어", apiCodes: ["ko"] },
    { value: "zh-Hans", label: "简体中文", apiCodes: ["zh-Hans", "zh-Hant"] },
    { value: "zh-Hant", label: "繁體中文", apiCodes: ["zh-Hant", "zh-Hans"] },
];

const LANGUAGE_VALUES = new Set<Language>(LANGUAGE_OPTIONS.map((o) => o.value));

function isLanguage(value: unknown): value is Language {
    return typeof value === "string" && LANGUAGE_VALUES.has(value as Language);
}

function matchSystemLocale(tag: string): Language | null {
    if (!tag) return null;
    const lower = tag.toLowerCase();
    const prefix = lower.split(/[-_]/)[0];

    if (prefix === "zh") {
        if (/(^|[-_])hant\b/.test(lower)) return "zh-Hant";
        if (/(^|[-_])hans\b/.test(lower)) return "zh-Hans";
        if (/[-_](tw|hk|mo)\b/.test(lower)) return "zh-Hant";
        return "zh-Hans";
    }

    switch (prefix) {
        case "en": return "en";
        case "fr": return "fr";
        case "de": return "de";
        case "es": return "es";
        case "it": return "it";
        case "ja": return "ja";
        case "ko": return "ko";
        default: return null;
    }
}

function detectSystemLanguage(): Language {
    if (typeof navigator === "undefined") return "en";
    const candidates: string[] = navigator.languages
        ? Array.from(navigator.languages)
        : navigator.language
            ? [navigator.language]
            : [];
    for (const candidate of candidates) {
        const matched = matchSystemLocale(candidate);
        if (matched) return matched;
    }
    return "en";
}

export function getLanguagePreference(): Language {
    if (typeof window === "undefined") return "en";
    try {
        const value = window.localStorage.getItem(STORAGE_KEY);
        if (isLanguage(value)) return value;
    } catch {
        // ignore
    }
    return detectSystemLanguage();
}

export function setLanguagePreference(value: Language) {
    try {
        window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
        // ignore
    }
    if (typeof document !== "undefined") {
        document.documentElement.lang = value;
    }
    window.dispatchEvent(new CustomEvent<Language>(LANGUAGE_CHANGE_EVENT, { detail: value }));
}

export function applyLanguageAttr(value: Language) {
    if (typeof document !== "undefined") {
        document.documentElement.lang = value;
    }
}

/** Look up a UI string for the given language, falling back to English. */
export function translate(key: TranslationKey, lang: Language): string {
    const dict = TRANSLATIONS[lang] ?? TRANSLATIONS.en;
    return dict[key] ?? TRANSLATIONS.en[key] ?? key;
}

/** Resolve `{var}` placeholders inside a translated string. */
export function format(template: string, vars: Record<string, string | number>): string {
    return template.replace(/\{(\w+)\}/g, (_, name) => {
        const value = vars[name];
        return value != null ? String(value) : `{${name}}`;
    });
}

export function useLanguage(): {
    lang: Language;
    t: (key: TranslationKey) => string;
    tf: (key: TranslationKey, vars: Record<string, string | number>) => string;
} {
    const [lang, setLang] = useState<Language>(() => getLanguagePreference());

    useEffect(() => {
        const onChange = (e: Event) => setLang((e as CustomEvent<Language>).detail);
        window.addEventListener(LANGUAGE_CHANGE_EVENT, onChange);
        return () => window.removeEventListener(LANGUAGE_CHANGE_EVENT, onChange);
    }, []);

    return {
        lang,
        t: (key) => translate(key, lang),
        tf: (key, vars) => format(translate(key, lang), vars),
    };
}

export function pickSpeciesName(
    names: ReadonlyArray<{ name?: string; language?: { name?: string } | null } | null | undefined> | undefined,
    lang: Language,
    fallback: string
): string {
    if (!names || names.length === 0) return fallback;
    const option = LANGUAGE_OPTIONS.find((o) => o.value === lang);
    const codes = option?.apiCodes ?? ["en"];
    for (const code of codes) {
        const hit = names.find((n) => n?.language?.name === code);
        if (hit?.name) return hit.name;
    }
    const en = names.find((n) => n?.language?.name === "en");
    return en?.name || fallback;
}

function normalizeFlavorText(s: string): string {
    return s.replace(/[\n\r\f­]/g, " ").replace(/\s+/g, " ").trim();
}

export function pickFlavorText(
    entries:
        | ReadonlyArray<{ flavor_text?: string; language?: { name?: string } | null } | null | undefined>
        | undefined,
    lang: Language
): string | null {
    if (!entries || entries.length === 0) return null;
    const option = LANGUAGE_OPTIONS.find((o) => o.value === lang);
    const codes = option?.apiCodes ?? ["en"];
    for (const code of codes) {
        const hit = entries.find((e) => e?.language?.name === code);
        if (hit?.flavor_text) return normalizeFlavorText(hit.flavor_text);
    }
    const en = entries.find((e) => e?.language?.name === "en");
    return en?.flavor_text ? normalizeFlavorText(en.flavor_text) : null;
}
