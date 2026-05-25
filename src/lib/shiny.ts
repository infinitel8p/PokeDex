export type ShinyPreference = "off" | "on";

const STORAGE_KEY = "pokedex-shiny";
export const SHINY_CHANGE_EVENT = "pokedex:shiny";

export function getShinyPreference(): ShinyPreference {
    if (typeof window === "undefined") return "off";
    try {
        const v = window.localStorage.getItem(STORAGE_KEY);
        return v === "on" ? "on" : "off";
    } catch {
        return "off";
    }
}

export function setShinyPreference(value: ShinyPreference) {
    try {
        window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
        // ignore
    }
    window.dispatchEvent(new CustomEvent<ShinyPreference>(SHINY_CHANGE_EVENT, { detail: value }));
}
