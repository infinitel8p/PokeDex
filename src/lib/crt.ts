export type CRTPreference = "on" | "off";

const STORAGE_KEY = "pokedex-crt";
export const CRT_CHANGE_EVENT = "pokedex:crt";

export function getCRTPreference(): CRTPreference {
    if (typeof window === "undefined") return "on";
    try {
        const value = window.localStorage.getItem(STORAGE_KEY);
        return value === "off" ? "off" : "on";
    } catch {
        return "on";
    }
}

export function applyCRTClass(value: CRTPreference) {
    if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("crt-on", value === "on");
    }
}

export function setCRTPreference(value: CRTPreference) {
    try {
        window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
        // Storage unavailable - pref applies in-memory only this session
    }
    applyCRTClass(value);
    window.dispatchEvent(new CustomEvent<CRTPreference>(CRT_CHANGE_EVENT, { detail: value }));
}
