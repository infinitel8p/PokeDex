export type SpriteStyle = "artwork" | "home" | "showdown" | "gen5" | "gen4" | "gen1";

export const SPRITE_STYLE_OPTIONS: ReadonlyArray<{
    value: SpriteStyle;
    label: string;
    hint: string;
}> = [
    { value: "artwork", label: "Artwork", hint: "Official high-res art (default)" },
    { value: "home", label: "Home", hint: "Pokémon Home 3D render" },
    { value: "showdown", label: "Animated", hint: "Showdown animated GIF" },
    { value: "gen5", label: "Gen 5", hint: "Black/White animated pixel" },
    { value: "gen4", label: "Gen 4", hint: "Diamond/Pearl pixel" },
    { value: "gen1", label: "Gen 1", hint: "Red/Blue classic pixel" },
];

const STORAGE_KEY = "pokedex-sprite-style";
export const SPRITE_CHANGE_EVENT = "pokedex:sprite-style";

export function getSpriteStyle(): SpriteStyle {
    if (typeof window === "undefined") return "artwork";
    try {
        const v = window.localStorage.getItem(STORAGE_KEY);
        if (v === "artwork" || v === "home" || v === "showdown" || v === "gen5" || v === "gen4" || v === "gen1") {
            return v;
        }
    } catch {
        // ignore
    }
    return "artwork";
}

export function setSpriteStyle(value: SpriteStyle) {
    try {
        window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
        // ignore
    }
    window.dispatchEvent(new CustomEvent<SpriteStyle>(SPRITE_CHANGE_EVENT, { detail: value }));
}

/** Extract the sprite URL for the given style + shiny preference, with fallbacks. */
export function getSpriteUrl(
    sprites: unknown,
    style: SpriteStyle,
    shiny: boolean
): string | undefined {
    if (!sprites || typeof sprites !== "object") return undefined;
    const s = sprites as Record<string, any>;
    const other = s.other ?? {};
    const versions = s.versions ?? {};

    const pickShiny = (group: any, shinyKey = "front_shiny", defaultKey = "front_default"): string | undefined => {
        if (!group) return undefined;
        if (shiny && group[shinyKey]) return group[shinyKey];
        return group[defaultKey] ?? group[shinyKey];
    };

    let url: string | undefined;
    switch (style) {
        case "artwork":
            url = pickShiny(other["official-artwork"]);
            break;
        case "home":
            url = pickShiny(other.home);
            break;
        case "showdown":
            url = pickShiny(other.showdown);
            break;
        case "gen5": {
            const bw = versions["generation-v"]?.["black-white"];
            url = pickShiny(bw?.animated) ?? pickShiny(bw);
            break;
        }
        case "gen4":
            url = pickShiny(versions["generation-iv"]?.["diamond-pearl"]);
            break;
        case "gen1":
            // Gen 1 has no shiny - always default
            url = versions["generation-i"]?.["red-blue"]?.front_default;
            break;
    }

    // Final fallback: official artwork → front_default
    if (!url) {
        url = pickShiny(other["official-artwork"]) ?? s.front_default;
    }
    return url;
}
