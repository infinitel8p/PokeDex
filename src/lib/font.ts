export type FontPreference = "pixelify" | "crisp" | "arcade";

export const FONT_OPTIONS: ReadonlyArray<{ value: FontPreference; label: string; hint: string }> = [
    { value: "pixelify", label: "Pixelify", hint: "Chunky pixel - the default" },
    { value: "crisp", label: "Crisp", hint: "Modern sans - most readable" },
    { value: "arcade", label: "Arcade", hint: "Retro CRT terminal" },
];

const STORAGE_KEY = "pokedex-font";
export const FONT_CHANGE_EVENT = "pokedex:font";

export function getFontPreference(): FontPreference {
    if (typeof window === "undefined") return "pixelify";
    try {
        const value = window.localStorage.getItem(STORAGE_KEY);
        if (value === "pixelify" || value === "crisp" || value === "arcade") return value;
    } catch {
        // ignore
    }
    return "pixelify";
}

export function applyFontClass(value: FontPreference) {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.remove("font-pixelify", "font-crisp", "font-arcade");
    root.classList.add(`font-${value}`);
}

export function setFontPreference(value: FontPreference) {
    try {
        window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
        // ignore
    }
    applyFontClass(value);
    window.dispatchEvent(new CustomEvent<FontPreference>(FONT_CHANGE_EVENT, { detail: value }));
}
