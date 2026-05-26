export type CrtEffectToggle = "on" | "off";

export type CrtEffectKey =
    | "scanlines"
    | "vignette"
    | "chromatic"
    | "flicker"
    | "dotMatrix";

export type CrtEffects = Record<CrtEffectKey, CrtEffectToggle>;

export const DEFAULT_CRT_EFFECTS: CrtEffects = {
    scanlines: "on",
    vignette: "on",
    chromatic: "on",
    flicker: "on",
    dotMatrix: "on",
};

const STORAGE_KEY = "pokedex-crt-effects";
export const CRT_EFFECTS_CHANGE_EVENT = "pokedex:crt-effects";

const KEYS: ReadonlyArray<CrtEffectKey> = [
    "scanlines",
    "vignette",
    "chromatic",
    "flicker",
    "dotMatrix",
];

function isValidToggle(value: unknown): value is CrtEffectToggle {
    return value === "on" || value === "off";
}

export function getCrtEffects(): CrtEffects {
    if (typeof window === "undefined") return { ...DEFAULT_CRT_EFFECTS };
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return { ...DEFAULT_CRT_EFFECTS };
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
            return { ...DEFAULT_CRT_EFFECTS };
        }
        const out: CrtEffects = { ...DEFAULT_CRT_EFFECTS };
        for (const key of KEYS) {
            const v = (parsed as Record<string, unknown>)[key];
            if (isValidToggle(v)) out[key] = v;
        }
        return out;
    } catch {
        return { ...DEFAULT_CRT_EFFECTS };
    }
}

export function setCrtEffect(key: CrtEffectKey, value: CrtEffectToggle) {
    const next = getCrtEffects();
    next[key] = value;
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
        // ignore
    }
    applyCrtEffectsCss(next);
    window.dispatchEvent(
        new CustomEvent<CrtEffects>(CRT_EFFECTS_CHANGE_EVENT, { detail: next })
    );
}

export function applyCrtEffectsCss(effects: CrtEffects) {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.toggle("crt-no-dots", effects.dotMatrix === "off");
    root.classList.toggle("crt-flicker-on", effects.flicker === "on");
}
