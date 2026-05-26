// Type effectiveness chart for Pokémon Uranium.
// Standard Gen 6+ chart plus the Nuclear type (super-effective vs all
// except Steel and itself, weak to Poison/Steel/Fairy).
//
// Format: attacker -> defender -> multiplier. Default is 1.0 if not listed.

export const URANIUM_TYPES = [
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy",
    "Nuclear",
] as const;

export type UraniumType = (typeof URANIUM_TYPES)[number];

const CHART: Record<UraniumType, Partial<Record<UraniumType, number>>> = {
    Normal: { Rock: 0.5, Ghost: 0, Steel: 0.5 },
    Fire: { Fire: 0.5, Water: 0.5, Grass: 2, Ice: 2, Bug: 2, Rock: 0.5, Dragon: 0.5, Steel: 2 },
    Water: { Fire: 2, Water: 0.5, Grass: 0.5, Ground: 2, Rock: 2, Dragon: 0.5 },
    Electric: { Water: 2, Electric: 0.5, Grass: 0.5, Ground: 0, Flying: 2, Dragon: 0.5 },
    Grass: { Fire: 0.5, Water: 2, Grass: 0.5, Poison: 0.5, Ground: 2, Flying: 0.5, Bug: 0.5, Rock: 2, Dragon: 0.5, Steel: 0.5 },
    Ice: { Fire: 0.5, Water: 0.5, Grass: 2, Ice: 0.5, Ground: 2, Flying: 2, Dragon: 2, Steel: 0.5 },
    Fighting: { Normal: 2, Ice: 2, Poison: 0.5, Flying: 0.5, Psychic: 0.5, Bug: 0.5, Rock: 2, Ghost: 0, Dark: 2, Steel: 2, Fairy: 0.5 },
    Poison: { Grass: 2, Poison: 0.5, Ground: 0.5, Rock: 0.5, Ghost: 0.5, Steel: 0, Fairy: 2, Nuclear: 2 },
    Ground: { Fire: 2, Electric: 2, Grass: 0.5, Poison: 2, Flying: 0, Bug: 0.5, Rock: 2, Steel: 2 },
    Flying: { Electric: 0.5, Grass: 2, Fighting: 2, Bug: 2, Rock: 0.5, Steel: 0.5 },
    Psychic: { Fighting: 2, Poison: 2, Psychic: 0.5, Dark: 0, Steel: 0.5 },
    Bug: { Fire: 0.5, Grass: 2, Fighting: 0.5, Poison: 0.5, Flying: 0.5, Psychic: 2, Ghost: 0.5, Dark: 2, Steel: 0.5, Fairy: 0.5, Nuclear: 0.5 },
    Rock: { Fire: 2, Ice: 2, Fighting: 0.5, Ground: 0.5, Flying: 2, Bug: 2, Steel: 0.5 },
    Ghost: { Normal: 0, Psychic: 2, Ghost: 2, Dark: 0.5 },
    Dragon: { Dragon: 2, Steel: 0.5, Fairy: 0, Nuclear: 0.5 },
    Dark: { Fighting: 0.5, Psychic: 2, Ghost: 2, Dark: 0.5, Fairy: 0.5 },
    Steel: { Fire: 0.5, Water: 0.5, Electric: 0.5, Ice: 2, Rock: 2, Steel: 0.5, Fairy: 2, Nuclear: 2 },
    Fairy: { Fire: 0.5, Fighting: 2, Poison: 0.5, Dragon: 2, Dark: 2, Steel: 0.5, Nuclear: 2 },
    // Nuclear is super-effective against every standard type, neutral vs nothing,
    // resisted only by Steel and itself.
    Nuclear: {
        Normal: 2, Fire: 2, Water: 2, Electric: 2, Grass: 2, Ice: 2,
        Fighting: 2, Poison: 2, Ground: 2, Flying: 2, Psychic: 2, Bug: 2,
        Rock: 2, Ghost: 2, Dragon: 2, Dark: 2, Fairy: 2,
        Steel: 0.5, Nuclear: 0.5,
    },
};

export interface UraniumMatchups {
    "2x": UraniumType[];
    "0.5x": UraniumType[];
    "0x": UraniumType[];
}

function getEffectiveness(attacker: UraniumType, defenders: readonly UraniumType[]): number {
    let mult = 1;
    for (const def of defenders) {
        const value = CHART[attacker]?.[def];
        if (value !== undefined) mult *= value;
    }
    return mult;
}

/**
 * For a defending Pokémon's types, compute which attacker types deal
 * super-effective (≥2x), resisted (≤0.5x but >0), or no damage (0x).
 */
export function calculateUraniumMatchups(defenderTypes: UraniumType[]): UraniumMatchups {
    const result: UraniumMatchups = { "2x": [], "0.5x": [], "0x": [] };
    for (const attacker of URANIUM_TYPES) {
        const eff = getEffectiveness(attacker, defenderTypes);
        if (eff === 0) result["0x"].push(attacker);
        else if (eff >= 2) result["2x"].push(attacker);
        else if (eff > 0 && eff <= 0.5) result["0.5x"].push(attacker);
    }
    return result;
}

// Canonical Pokémon-game palette for each type, used to colour the chips.
export const URANIUM_TYPE_COLORS: Record<UraniumType, { bg: string; fg: string }> = {
    Normal: { bg: "#a8a878", fg: "#1c1917" },
    Fire: { bg: "#f08030", fg: "#1c1917" },
    Water: { bg: "#6890f0", fg: "#1c1917" },
    Electric: { bg: "#f8d030", fg: "#1c1917" },
    Grass: { bg: "#78c850", fg: "#1c1917" },
    Ice: { bg: "#98d8d8", fg: "#1c1917" },
    Fighting: { bg: "#c03028", fg: "#ffffff" },
    Poison: { bg: "#a040a0", fg: "#ffffff" },
    Ground: { bg: "#e0c068", fg: "#1c1917" },
    Flying: { bg: "#a890f0", fg: "#1c1917" },
    Psychic: { bg: "#f85888", fg: "#1c1917" },
    Bug: { bg: "#a8b820", fg: "#1c1917" },
    Rock: { bg: "#b8a038", fg: "#1c1917" },
    Ghost: { bg: "#705898", fg: "#ffffff" },
    Dragon: { bg: "#7038f8", fg: "#ffffff" },
    Dark: { bg: "#705848", fg: "#ffffff" },
    Steel: { bg: "#b8b8d0", fg: "#1c1917" },
    Fairy: { bg: "#ee99ac", fg: "#1c1917" },
    Nuclear: { bg: "#56e07a", fg: "#0d2510" },
};
