export type CrySource = "latest" | "legacy";

const STORAGE_KEY = "pokedex-cry-source";
export const CRY_CHANGE_EVENT = "pokedex:cry-source";

export function getCrySource(): CrySource {
    if (typeof window === "undefined") return "latest";
    try {
        const v = window.localStorage.getItem(STORAGE_KEY);
        return v === "legacy" ? "legacy" : "latest";
    } catch {
        return "latest";
    }
}

export function setCrySource(value: CrySource) {
    try {
        window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
        // ignore
    }
    window.dispatchEvent(new CustomEvent<CrySource>(CRY_CHANGE_EVENT, { detail: value }));
}

/** Pick the preferred cry URL, falling back to the other when the preferred one is missing. */
export function pickCryUrl(
    cries: { latest?: string; legacy?: string } | undefined,
    pref: CrySource
): string | undefined {
    if (!cries) return undefined;
    const primary = pref === "latest" ? cries.latest : cries.legacy;
    const fallback = pref === "latest" ? cries.legacy : cries.latest;
    return primary || fallback;
}
