export type WeaknessMultiplier = "2x" | "0.5x" | "0x";

export interface PokemonTypeRef {
    type: { name: string; url: string };
}

export interface WeaknessEntry {
    type: string;
    icon: string;
}

export type PokemonSprites = Record<string, unknown>;

export interface PokemonStat {
    base_stat: number;
    stat: { name: string; url: string };
}

export interface PokemonCries {
    latest?: string;
    legacy?: string;
}

export interface EvolutionEntry {
    name: string;
    sprite: string;
    is_current: boolean;
}

export interface Pokemon {
    id: number;
    name: string;
    types: PokemonTypeRef[];
    stats: PokemonStat[];
    sprites: PokemonSprites;
    cries?: PokemonCries;
    weaknesses: Partial<Record<WeaknessMultiplier, WeaknessEntry[]>>;
    evolution: EvolutionEntry[];
}

export const TYPE_COLORS: Record<string, { bg: string; fg: string }> = {
    normal: { bg: "#a8a878", fg: "#1c1917" },
    fire: { bg: "#f08030", fg: "#1c1917" },
    water: { bg: "#6890f0", fg: "#1c1917" },
    electric: { bg: "#f8d030", fg: "#1c1917" },
    grass: { bg: "#78c850", fg: "#1c1917" },
    ice: { bg: "#98d8d8", fg: "#1c1917" },
    fighting: { bg: "#c03028", fg: "#ffffff" },
    poison: { bg: "#a040a0", fg: "#ffffff" },
    ground: { bg: "#e0c068", fg: "#1c1917" },
    flying: { bg: "#a890f0", fg: "#1c1917" },
    psychic: { bg: "#f85888", fg: "#1c1917" },
    bug: { bg: "#a8b820", fg: "#1c1917" },
    rock: { bg: "#b8a038", fg: "#1c1917" },
    ghost: { bg: "#705898", fg: "#ffffff" },
    dragon: { bg: "#7038f8", fg: "#ffffff" },
    dark: { bg: "#705848", fg: "#ffffff" },
    steel: { bg: "#b8b8d0", fg: "#1c1917" },
    fairy: { bg: "#ee99ac", fg: "#1c1917" },
};

export function getTypeColor(type: string): { bg: string; fg: string } {
    return TYPE_COLORS[type.toLowerCase()] ?? { bg: "#6b7280", fg: "#ffffff" };
}

export type SearchError =
    | { kind: "not_found"; query: string }
    | { kind: "network" }
    | { kind: "unknown"; message: string };

export function classifySearchError(raw: unknown, query: string): SearchError {
    const message = typeof raw === "string" ? raw : raw instanceof Error ? raw.message : String(raw);
    const lower = message.toLowerCase();
    if (lower.includes("not found")) {
        return { kind: "not_found", query };
    }
    if (lower.includes("connect") || lower.includes("fetch") || lower.includes("network")) {
        return { kind: "network" };
    }
    return { kind: "unknown", message };
}
