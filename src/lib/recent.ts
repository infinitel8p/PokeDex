const STORAGE_KEY = "pokedex-recent";
const MAX_ENTRIES = 6;
export const RECENT_CHANGE_EVENT = "pokedex:recent";

export function getRecentSearches(): string[] {
    if (typeof window === "undefined") return [];
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed.filter((x): x is string => typeof x === "string").slice(0, MAX_ENTRIES);
    } catch {
        return [];
    }
}

export function pushRecentSearch(name: string) {
    if (!name) return;
    const lower = name.toLowerCase().trim();
    if (!lower) return;
    const list = getRecentSearches().filter((n) => n.toLowerCase() !== lower);
    list.unshift(name);
    const trimmed = list.slice(0, MAX_ENTRIES);
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
    } catch {
        // ignore
    }
    window.dispatchEvent(new CustomEvent<string[]>(RECENT_CHANGE_EVENT, { detail: trimmed }));
}

export function clearRecentSearches() {
    try {
        window.localStorage.removeItem(STORAGE_KEY);
    } catch {
        // ignore
    }
    window.dispatchEvent(new CustomEvent<string[]>(RECENT_CHANGE_EVENT, { detail: [] }));
}
