import type { LocalizedName } from "../types/pokemon";

const STORAGE_KEY = "pokedex-recent";
const NAMES_STORAGE_KEY = "pokedex-recent-names";
const MAX_ENTRIES = 6;
export const RECENT_CHANGE_EVENT = "pokedex:recent";

export type RecentNamesMap = Record<string, LocalizedName[]>;

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

export function getRecentNamesMap(): RecentNamesMap {
    if (typeof window === "undefined") return {};
    try {
        const raw = window.localStorage.getItem(NAMES_STORAGE_KEY);
        if (!raw) return {};
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
        const out: RecentNamesMap = {};
        for (const [key, value] of Object.entries(parsed as Record<string, unknown>)) {
            if (Array.isArray(value)) {
                out[key] = value.filter(
                    (v): v is LocalizedName =>
                        !!v && typeof v === "object" && "name" in v && "language" in v
                );
            }
        }
        return out;
    } catch {
        return {};
    }
}

export function pushRecentSearch(name: string, names?: LocalizedName[]) {
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

    if (names && names.length > 0) {
        const map = getRecentNamesMap();
        map[lower] = names;
        const keep = new Set(trimmed.map((n) => n.toLowerCase()));
        for (const key of Object.keys(map)) {
            if (!keep.has(key)) delete map[key];
        }
        try {
            window.localStorage.setItem(NAMES_STORAGE_KEY, JSON.stringify(map));
        } catch {
            // ignore
        }
    }

    window.dispatchEvent(new CustomEvent<string[]>(RECENT_CHANGE_EVENT, { detail: trimmed }));
}

export function clearRecentSearches() {
    try {
        window.localStorage.removeItem(STORAGE_KEY);
        window.localStorage.removeItem(NAMES_STORAGE_KEY);
    } catch {
        // ignore
    }
    window.dispatchEvent(new CustomEvent<string[]>(RECENT_CHANGE_EVENT, { detail: [] }));
}
