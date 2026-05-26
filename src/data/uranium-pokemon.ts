// Auto-generated from https://pokemonuranium.fandom.com via scripts/parse-uranium.cjs.
// Re-run that script to refresh - it preserves the existing entry order and uses
// the seed list to know which Mega / Nuclear variants to emit per dex ID.
// Sprite + artwork URLs hot-link from the PokeDexSprites companion repo.

export interface UraniumStats {
    hp: number;
    attack: number;
    defense: number;
    spAtk: number;
    spDef: number;
    speed: number;
}

export interface UraniumEvolutionStage {
    dex: string | null;
    name: string;
    types: string[];
    sprite: string;
    condition?: string;
}

export interface UraniumPokemon {
    name: string;
    id: string;
    sprite: string;
    artwork: string;
    types: string[];
    altForm: string | null;
    flavorText: string | null;
    stats: UraniumStats | null;
    evolution: UraniumEvolutionStage[] | null;
}

export const URANIUM_POKEMON: UraniumPokemon[] = [
  {
    "name": "Orchynx",
    "id": "001",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon001.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/001Popkas.png",
    "types": [
      "Grass",
      "Steel"
    ],
    "altForm": null,
    "flavorText": "Metal plates underneath its fur protect it from harm. It replenishes its energy by basking in the sun's rays.",
    "stats": {
      "hp": 50,
      "attack": 55,
      "defense": 55,
      "spAtk": 70,
      "spDef": 70,
      "speed": 50
    },
    "evolution": [
      {
        "dex": "001",
        "name": "Orchynx",
        "types": [
          "Grass",
          "Steel"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/001Popkas.png"
      },
      {
        "dex": "002",
        "name": "Metalynx",
        "types": [
          "Grass",
          "Steel"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/002Popkas.png",
        "condition": "Rare Candy Level 28"
      },
      {
        "dex": "002_1",
        "name": "Mega Metalynx",
        "types": [
          "Grass",
          "Steel"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/002_1Popkas.png",
        "condition": "Metalynxite Mega Evolution"
      }
    ]
  },
  {
    "name": "Mega Metalynx",
    "id": "002",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon002.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/002_1Popkas.png",
    "types": [
      "Grass",
      "Steel"
    ],
    "altForm": null,
    "flavorText": "METALYNX stalk their prey in packs. Their brutally sharp tail blades are their main weapon.",
    "stats": {
      "hp": 85,
      "attack": 95,
      "defense": 115,
      "spAtk": 70,
      "spDef": 100,
      "speed": 65
    },
    "evolution": [
      {
        "dex": "001",
        "name": "Orchynx",
        "types": [
          "Grass",
          "Steel"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/001Popkas.png"
      },
      {
        "dex": "002",
        "name": "Metalynx",
        "types": [
          "Grass",
          "Steel"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/002Popkas.png",
        "condition": "Rare Candy Level 28"
      },
      {
        "dex": "002_1",
        "name": "Mega Metalynx",
        "types": [
          "Grass",
          "Steel"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/002_1Popkas.png",
        "condition": "Metalynxite Mega Evolution"
      }
    ]
  },
  {
    "name": "Metalynx",
    "id": "002",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon002.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/002Popkas.png",
    "types": [
      "Grass",
      "Steel"
    ],
    "altForm": "Mega Metalynx",
    "flavorText": "METALYNX stalk their prey in packs. Their brutally sharp tail blades are their main weapon.",
    "stats": {
      "hp": 85,
      "attack": 95,
      "defense": 115,
      "spAtk": 70,
      "spDef": 100,
      "speed": 65
    },
    "evolution": [
      {
        "dex": "001",
        "name": "Orchynx",
        "types": [
          "Grass",
          "Steel"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/001Popkas.png"
      },
      {
        "dex": "002",
        "name": "Metalynx",
        "types": [
          "Grass",
          "Steel"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/002Popkas.png",
        "condition": "Rare Candy Level 28"
      },
      {
        "dex": "002_1",
        "name": "Mega Metalynx",
        "types": [
          "Grass",
          "Steel"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/002_1Popkas.png",
        "condition": "Metalynxite Mega Evolution"
      }
    ]
  },
  {
    "name": "Raptorch",
    "id": "003",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon003.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/003Popkas.png",
    "types": [
      "Fire",
      "Ground"
    ],
    "altForm": null,
    "flavorText": "RAPTORCH are energetic Pokémon that require constant attention, or they will start setting their surroundings on fire.",
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 45,
      "spAtk": 65,
      "spDef": 50,
      "speed": 70
    },
    "evolution": [
      {
        "dex": "003",
        "name": "Raptorch",
        "types": [
          "Fire",
          "Ground"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/003Popkas.png"
      },
      {
        "dex": "004",
        "name": "Archilles",
        "types": [
          "Fire",
          "Ground"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/004Popkas.png",
        "condition": "Rare Candy Level 29"
      },
      {
        "dex": "004_1",
        "name": "Mega Archilles",
        "types": [
          "Fire",
          "Ground"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/004_1Popkas.png",
        "condition": "Archillesite Mega Evolution"
      }
    ]
  },
  {
    "name": "Mega Archilles",
    "id": "004",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon004.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/004_1Popkas.png",
    "types": [
      "Fire",
      "Ground"
    ],
    "altForm": null,
    "flavorText": "With a specialized saddle and reins, ARCHILLES can be ridden. Make sure that you have earned its trust first.",
    "stats": {
      "hp": 75,
      "attack": 90,
      "defense": 80,
      "spAtk": 90,
      "spDef": 80,
      "speed": 125
    },
    "evolution": [
      {
        "dex": "003",
        "name": "Raptorch",
        "types": [
          "Fire",
          "Ground"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/003Popkas.png"
      },
      {
        "dex": "004",
        "name": "Archilles",
        "types": [
          "Fire",
          "Ground"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/004Popkas.png",
        "condition": "Rare Candy Level 29"
      },
      {
        "dex": "004_1",
        "name": "Mega Archilles",
        "types": [
          "Fire",
          "Ground"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/004_1Popkas.png",
        "condition": "Archillesite Mega Evolution"
      }
    ]
  },
  {
    "name": "Archilles",
    "id": "004",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon004.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/004Popkas.png",
    "types": [
      "Fire",
      "Ground"
    ],
    "altForm": "Mega Archilles",
    "flavorText": "With a specialized saddle and reins, ARCHILLES can be ridden. Make sure that you have earned its trust first.",
    "stats": {
      "hp": 75,
      "attack": 90,
      "defense": 80,
      "spAtk": 90,
      "spDef": 80,
      "speed": 125
    },
    "evolution": [
      {
        "dex": "003",
        "name": "Raptorch",
        "types": [
          "Fire",
          "Ground"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/003Popkas.png"
      },
      {
        "dex": "004",
        "name": "Archilles",
        "types": [
          "Fire",
          "Ground"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/004Popkas.png",
        "condition": "Rare Candy Level 29"
      },
      {
        "dex": "004_1",
        "name": "Mega Archilles",
        "types": [
          "Fire",
          "Ground"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/004_1Popkas.png",
        "condition": "Archillesite Mega Evolution"
      }
    ]
  },
  {
    "name": "Eletux",
    "id": "005",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon005.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/005Popkas.png",
    "types": [
      "Water",
      "Electric"
    ],
    "altForm": null,
    "flavorText": "ELETUX is capable of generating strong magnetic fields around its feet and tail that allow it to walk on water.",
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 65,
      "spAtk": 50,
      "spDef": 65,
      "speed": 45
    },
    "evolution": [
      {
        "dex": "005",
        "name": "Eletux",
        "types": [
          "Water",
          "Electric"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/005Popkas.png"
      },
      {
        "dex": "006",
        "name": "Electruxo",
        "types": [
          "Water",
          "Electric"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/006Popkas.png",
        "condition": "Rare Candy Level 27"
      },
      {
        "dex": "006_1",
        "name": "Mega Electruxo",
        "types": [
          "Water",
          "Electric"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/006_1Popkas.png",
        "condition": "Electruxolite Mega Evolution"
      }
    ]
  },
  {
    "name": "Mega Electruxo",
    "id": "006",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon006.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/006_1Popkas.png",
    "types": [
      "Water",
      "Electric"
    ],
    "altForm": null,
    "flavorText": "ELECTRUXO can use the magnetic waves they generate as radar. This allows them to see even in pitch darkness.",
    "stats": {
      "hp": 95,
      "attack": 80,
      "defense": 95,
      "spAtk": 90,
      "spDef": 105,
      "speed": 85
    },
    "evolution": [
      {
        "dex": "005",
        "name": "Eletux",
        "types": [
          "Water",
          "Electric"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/005Popkas.png"
      },
      {
        "dex": "006",
        "name": "Electruxo",
        "types": [
          "Water",
          "Electric"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/006Popkas.png",
        "condition": "Rare Candy Level 27"
      },
      {
        "dex": "006_1",
        "name": "Mega Electruxo",
        "types": [
          "Water",
          "Electric"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/006_1Popkas.png",
        "condition": "Electruxolite Mega Evolution"
      }
    ]
  },
  {
    "name": "Electruxo",
    "id": "006",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon006.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/006Popkas.png",
    "types": [
      "Water",
      "Electric"
    ],
    "altForm": "Mega Electruxo",
    "flavorText": "ELECTRUXO can use the magnetic waves they generate as radar. This allows them to see even in pitch darkness.",
    "stats": {
      "hp": 95,
      "attack": 80,
      "defense": 95,
      "spAtk": 90,
      "spDef": 105,
      "speed": 85
    },
    "evolution": [
      {
        "dex": "005",
        "name": "Eletux",
        "types": [
          "Water",
          "Electric"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/005Popkas.png"
      },
      {
        "dex": "006",
        "name": "Electruxo",
        "types": [
          "Water",
          "Electric"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/006Popkas.png",
        "condition": "Rare Candy Level 27"
      },
      {
        "dex": "006_1",
        "name": "Mega Electruxo",
        "types": [
          "Water",
          "Electric"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/006_1Popkas.png",
        "condition": "Electruxolite Mega Evolution"
      }
    ]
  },
  {
    "name": "Nuclear Chyinmunk",
    "id": "007",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon007.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N007Popkas.png",
    "types": [
      "Normal",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "The length of a CHYINMUNK's stripes determines its authority in a group. If it spots a predator, it shrieks loudly to warn the others.",
    "stats": {
      "hp": 35,
      "attack": 40,
      "defense": 50,
      "spAtk": 55,
      "spDef": 50,
      "speed": 55
    },
    "evolution": null
  },
  {
    "name": "Chyinmunk",
    "id": "007",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon007.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/007Popkas.png",
    "types": [
      "Normal"
    ],
    "altForm": "Nuclear Chyinmunk",
    "flavorText": "The length of a CHYINMUNK's stripes determines its authority in a group. If it spots a predator, it shrieks loudly to warn the others.",
    "stats": {
      "hp": 35,
      "attack": 40,
      "defense": 50,
      "spAtk": 55,
      "spDef": 50,
      "speed": 55
    },
    "evolution": null
  },
  {
    "name": "Kinetmunk",
    "id": "008",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon008.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/008Popkas.png",
    "types": [
      "Normal",
      "Electric"
    ],
    "altForm": null,
    "flavorText": "Kinetmunk digs intricate tunnels that can stretch for miles underground. They use small electrical pulses to relax their muscles, allowing them to run faster.",
    "stats": {
      "hp": 65,
      "attack": 45,
      "defense": 70,
      "spAtk": 75,
      "spDef": 70,
      "speed": 90
    },
    "evolution": null
  },
  {
    "name": "Kinetmunk",
    "id": "008",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon008.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/008Popkas.png",
    "types": [
      "Normal",
      "Electric"
    ],
    "altForm": "Kinetmunk",
    "flavorText": "Kinetmunk digs intricate tunnels that can stretch for miles underground. They use small electrical pulses to relax their muscles, allowing them to run faster.",
    "stats": {
      "hp": 65,
      "attack": 45,
      "defense": 70,
      "spAtk": 75,
      "spDef": 70,
      "speed": 90
    },
    "evolution": null
  },
  {
    "name": "Birbie",
    "id": "009",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon009.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/009Popkas.png",
    "types": [
      "Normal",
      "Flying"
    ],
    "altForm": null,
    "flavorText": "It defends itself by dazzling opponents by flashing its brightly colored plumage. They are known for their elaborate mating dances.",
    "stats": {
      "hp": 50,
      "attack": 36,
      "defense": 30,
      "spAtk": 55,
      "spDef": 50,
      "speed": 43
    },
    "evolution": null
  },
  {
    "name": "Aveden",
    "id": "010",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon010.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/010Popkas.png",
    "types": [
      "Normal",
      "Flying"
    ],
    "altForm": null,
    "flavorText": "The blue feathers on its chest reflect light. They use flashes to communicate with one another in the forest canopy.",
    "stats": {
      "hp": 62,
      "attack": 50,
      "defense": 42,
      "spAtk": 77,
      "spDef": 62,
      "speed": 65
    },
    "evolution": null
  },
  {
    "name": "Splendifowl",
    "id": "011",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon011.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/011Popkas.png",
    "types": [
      "Normal",
      "Flying"
    ],
    "altForm": null,
    "flavorText": "Its spectacular plumage makes it a frequent target of poachers. However, due to the heavy feathers, it's not a great flyer.",
    "stats": {
      "hp": 80,
      "attack": 65,
      "defense": 55,
      "spAtk": 105,
      "spDef": 80,
      "speed": 93
    },
    "evolution": null
  },
  {
    "name": "Cubbug",
    "id": "012",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon012.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/012Popkas.png",
    "types": [
      "Bug"
    ],
    "altForm": null,
    "flavorText": "It shares characteristics with bug and mammal Pokémon. Being in its presence has a calming effect.",
    "stats": {
      "hp": 45,
      "attack": 53,
      "defense": 70,
      "spAtk": 40,
      "spDef": 60,
      "speed": 42
    },
    "evolution": null
  },
  {
    "name": "Cubblfly",
    "id": "013",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon013.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/013Popkas.png",
    "types": [
      "Bug",
      "Fairy"
    ],
    "altForm": null,
    "flavorText": "It scatters pollen and seeds in order to help flowers grow. It always smells like flower petals.",
    "stats": {
      "hp": 55,
      "attack": 63,
      "defense": 90,
      "spAtk": 50,
      "spDef": 80,
      "speed": 42
    },
    "evolution": null
  },
  {
    "name": "Nimflora",
    "id": "014",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon014.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/014Popkas.png",
    "types": [
      "Bug",
      "Fairy"
    ],
    "altForm": null,
    "flavorText": "Its presence causes plants to flourish. You can tell where it makes its nest because it is always surrounded by flowers.",
    "stats": {
      "hp": 75,
      "attack": 103,
      "defense": 80,
      "spAtk": 70,
      "spDef": 70,
      "speed": 92
    },
    "evolution": null
  },
  {
    "name": "Barewl",
    "id": "015",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon015.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/015Popkas.png",
    "types": [
      "Steel",
      "Rock"
    ],
    "altForm": null,
    "flavorText": "Incredibly dense metals make up BAREWL's body. They are much heavier than they look. They live in dark caves and feed on rocks and metal ore.",
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 90,
      "spAtk": 40,
      "spDef": 55,
      "speed": 35
    },
    "evolution": null
  },
  {
    "name": "Dearewl",
    "id": "016",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon016.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/016Popkas.png",
    "types": [
      "Steel",
      "Rock"
    ],
    "altForm": null,
    "flavorText": "It is a stubborn Pokémon that will always stand its ground, even against a much larger opponent. it uses its horn to dig for metal ore.",
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 120,
      "spAtk": 50,
      "spDef": 65,
      "speed": 45
    },
    "evolution": null
  },
  {
    "name": "Gararewl",
    "id": "017",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon017.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/017Popkas.png",
    "types": [
      "Steel"
    ],
    "altForm": null,
    "flavorText": "GARAREWL often have to leave the cave that they grew up in as BAREWL, because caves are seldom able to accommodate its massive size.",
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 140,
      "spAtk": 65,
      "spDef": 85,
      "speed": 55
    },
    "evolution": null
  },
  {
    "name": "Grozard",
    "id": "018",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon018.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/018Popkas.png",
    "types": [
      "Ground"
    ],
    "altForm": null,
    "flavorText": "Its snakelike body is almost always partially underground. The tunnels they dig make traveling caves hazardous.",
    "stats": {
      "hp": 25,
      "attack": 45,
      "defense": 25,
      "spAtk": 55,
      "spDef": 45,
      "speed": 85
    },
    "evolution": null
  },
  {
    "name": "Terlard",
    "id": "019",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon019.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/019Popkas.png",
    "types": [
      "Ground",
      "Dragon"
    ],
    "altForm": null,
    "flavorText": "TERLARD's two heads have completely independent brains. That they ever manage to coordinate at all is a miracle.",
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 65,
      "spAtk": 85,
      "spDef": 70,
      "speed": 95
    },
    "evolution": null
  },
  {
    "name": "Nuclear Tonemy",
    "id": "020",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon020.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N020Popkas.png",
    "types": [
      "Poison"
    ],
    "altForm": null,
    "flavorText": "New trainers traveling through caves are advised to bring along antidotes against a TONEMY's poison, which causes great pain if it isn't treated immediately.",
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 45,
      "spAtk": 40,
      "spDef": 45,
      "speed": 95
    },
    "evolution": null
  },
  {
    "name": "Tonemy",
    "id": "020",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon020.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/020Popkas.png",
    "types": [
      "Poison"
    ],
    "altForm": "Nuclear Tonemy",
    "flavorText": "New trainers traveling through caves are advised to bring along antidotes against a TONEMY's poison, which causes great pain if it isn't treated immediately.",
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 45,
      "spAtk": 40,
      "spDef": 45,
      "speed": 95
    },
    "evolution": null
  },
  {
    "name": "Nuclear Tofurang",
    "id": "021",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon021.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N021Popkas.png",
    "types": [
      "Poison"
    ],
    "altForm": null,
    "flavorText": "Unable to fly or move swiftly like TONEMY, TOFURANG instead catch their prey by exhaling a poison gas that makes Pokémon sluggish.",
    "stats": {
      "hp": 100,
      "attack": 60,
      "defense": 85,
      "spAtk": 40,
      "spDef": 85,
      "speed": 60
    },
    "evolution": null
  },
  {
    "name": "Tofurang",
    "id": "021",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon021.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/021Popkas.png",
    "types": [
      "Poison"
    ],
    "altForm": "Nuclear Tofurang",
    "flavorText": "Unable to fly or move swiftly like TONEMY, TOFURANG instead catch their prey by exhaling a poison gas that makes Pokémon sluggish.",
    "stats": {
      "hp": 100,
      "attack": 60,
      "defense": 85,
      "spAtk": 40,
      "spDef": 85,
      "speed": 60
    },
    "evolution": null
  },
  {
    "name": "Dunsparce",
    "id": "022",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon022.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/022Popkas.png",
    "types": [
      "Normal"
    ],
    "altForm": null,
    "flavorText": "Its drill-tipped tail is used to burrow into the ground backwards. This Pokémon is known to make its nest in complex shapes deep under the ground.",
    "stats": {
      "hp": 100,
      "attack": 70,
      "defense": 70,
      "spAtk": 65,
      "spDef": 65,
      "speed": 45
    },
    "evolution": null
  },
  {
    "name": "Dunseraph",
    "id": "023",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon023.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/023Popkas.png",
    "types": [
      "Dragon",
      "Flying"
    ],
    "altForm": null,
    "flavorText": "Said to be descended from a DUNSPARCE that climbed Sky Pillar. It can alter the air pressure at will.",
    "stats": {
      "hp": 150,
      "attack": 80,
      "defense": 80,
      "spAtk": 100,
      "spDef": 75,
      "speed": 75
    },
    "evolution": null
  },
  {
    "name": "Fortog",
    "id": "024",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon024.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/024Popkas.png",
    "types": [
      "Water",
      "Poison"
    ],
    "altForm": null,
    "flavorText": "This Pokémon is rarely seen walking because of its weight. Rather, it rolls to get anywhere. They are often found at the bottoms of lakes.",
    "stats": {
      "hp": 65,
      "attack": 50,
      "defense": 40,
      "spAtk": 65,
      "spDef": 80,
      "speed": 35
    },
    "evolution": null
  },
  {
    "name": "Folerog",
    "id": "025",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon025.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/025Popkas.png",
    "types": [
      "Water",
      "Poison"
    ],
    "altForm": null,
    "flavorText": "FOLEROG can't swim but they need to remain damp to survive, so they are found in grasslands next to rivers and lakes.",
    "stats": {
      "hp": 80,
      "attack": 60,
      "defense": 60,
      "spAtk": 75,
      "spDef": 90,
      "speed": 50
    },
    "evolution": null
  },
  {
    "name": "Blubelrog",
    "id": "026",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon026.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/026Popkas.png",
    "types": [
      "Water",
      "Poison"
    ],
    "altForm": null,
    "flavorText": "BLUBELROG are the masters of the calm water. They normally live together in and around freshwater lakes.",
    "stats": {
      "hp": 105,
      "attack": 70,
      "defense": 75,
      "spAtk": 105,
      "spDef": 115,
      "speed": 65
    },
    "evolution": null
  },
  {
    "name": "Nuclear Magikarp",
    "id": "027",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon027.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N027Popkas.png",
    "types": [
      "Water",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "Its swimming muscles are weak, so it is easily washed away by currents. In places where water pools, you can see many MAGIKARP deposited there by flow.",
    "stats": {
      "hp": 20,
      "attack": 10,
      "defense": 55,
      "spAtk": 15,
      "spDef": 20,
      "speed": 80
    },
    "evolution": [
      {
        "dex": "027",
        "name": "Magikarp",
        "types": [
          "Water"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/027Popkas.png"
      },
      {
        "dex": "028",
        "name": "Gyarados",
        "types": [
          "Water",
          "Flying"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/028Popkas.png",
        "condition": "Rare Candy Level 20"
      },
      {
        "dex": "028_1",
        "name": "Mega Gyarados",
        "types": [
          "Water",
          "Dark"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/028_1Popkas.png",
        "condition": "Gyaradosite Mega Evolution"
      }
    ]
  },
  {
    "name": "Magikarp",
    "id": "027",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon027.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/027Popkas.png",
    "types": [
      "Water"
    ],
    "altForm": "Nuclear Magikarp",
    "flavorText": "Its swimming muscles are weak, so it is easily washed away by currents. In places where water pools, you can see many MAGIKARP deposited there by flow.",
    "stats": {
      "hp": 20,
      "attack": 10,
      "defense": 55,
      "spAtk": 15,
      "spDef": 20,
      "speed": 80
    },
    "evolution": [
      {
        "dex": "027",
        "name": "Magikarp",
        "types": [
          "Water"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/027Popkas.png"
      },
      {
        "dex": "028",
        "name": "Gyarados",
        "types": [
          "Water",
          "Flying"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/028Popkas.png",
        "condition": "Rare Candy Level 20"
      },
      {
        "dex": "028_1",
        "name": "Mega Gyarados",
        "types": [
          "Water",
          "Dark"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/028_1Popkas.png",
        "condition": "Gyaradosite Mega Evolution"
      }
    ]
  },
  {
    "name": "Mega Nuclear Gyarados",
    "id": "028",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon028.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N028Popkas.png",
    "types": [
      "Water",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "It is an extremely vicious and violent POKEMON. When humans begin to fight, it will appear and burn everything to the ground with intensely hot flames.",
    "stats": {
      "hp": 95,
      "attack": 125,
      "defense": 79,
      "spAtk": 60,
      "spDef": 100,
      "speed": 81
    },
    "evolution": [
      {
        "dex": "027",
        "name": "Magikarp",
        "types": [
          "Water"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/027Popkas.png"
      },
      {
        "dex": "028",
        "name": "Gyarados",
        "types": [
          "Water",
          "Flying"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/028Popkas.png",
        "condition": "Rare Candy Level 20"
      },
      {
        "dex": "028_1",
        "name": "Mega Gyarados",
        "types": [
          "Water",
          "Dark"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/028_1Popkas.png",
        "condition": "Gyaradosite Mega Evolution"
      }
    ]
  },
  {
    "name": "Mega Gyarados",
    "id": "028",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon028.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/028_1Popkas.png",
    "types": [
      "Water",
      "Dark"
    ],
    "altForm": "Mega Nuclear Gyarados",
    "flavorText": "It is an extremely vicious and violent POKEMON. When humans begin to fight, it will appear and burn everything to the ground with intensely hot flames.",
    "stats": {
      "hp": 95,
      "attack": 125,
      "defense": 79,
      "spAtk": 60,
      "spDef": 100,
      "speed": 81
    },
    "evolution": [
      {
        "dex": "027",
        "name": "Magikarp",
        "types": [
          "Water"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/027Popkas.png"
      },
      {
        "dex": "028",
        "name": "Gyarados",
        "types": [
          "Water",
          "Flying"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/028Popkas.png",
        "condition": "Rare Candy Level 20"
      },
      {
        "dex": "028_1",
        "name": "Mega Gyarados",
        "types": [
          "Water",
          "Dark"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/028_1Popkas.png",
        "condition": "Gyaradosite Mega Evolution"
      }
    ]
  },
  {
    "name": "Gyarados",
    "id": "028",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon028.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/028Popkas.png",
    "types": [
      "Water",
      "Flying"
    ],
    "altForm": "Mega Gyarados",
    "flavorText": "It is an extremely vicious and violent POKEMON. When humans begin to fight, it will appear and burn everything to the ground with intensely hot flames.",
    "stats": {
      "hp": 95,
      "attack": 125,
      "defense": 79,
      "spAtk": 60,
      "spDef": 100,
      "speed": 81
    },
    "evolution": [
      {
        "dex": "027",
        "name": "Magikarp",
        "types": [
          "Water"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/027Popkas.png"
      },
      {
        "dex": "028",
        "name": "Gyarados",
        "types": [
          "Water",
          "Flying"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/028Popkas.png",
        "condition": "Rare Candy Level 20"
      },
      {
        "dex": "028_1",
        "name": "Mega Gyarados",
        "types": [
          "Water",
          "Dark"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/028_1Popkas.png",
        "condition": "Gyaradosite Mega Evolution"
      }
    ]
  },
  {
    "name": "Feleng",
    "id": "029",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon029.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/029Popkas.png",
    "types": [
      "Normal"
    ],
    "altForm": null,
    "flavorText": "Although FELENG is small and weak, it can manipulate other POKéMON just by giving them a pleading look and meowing cutely.",
    "stats": {
      "hp": 50,
      "attack": 70,
      "defense": 45,
      "spAtk": 35,
      "spDef": 35,
      "speed": 50
    },
    "evolution": null
  },
  {
    "name": "Felunge",
    "id": "030",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon030.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/030Popkas.png",
    "types": [
      "Normal"
    ],
    "altForm": null,
    "flavorText": "FELUNGE are expert hunters, able to see in very low light and move without a sound. Many people keep them to deter pests such as CHYINMUNK.",
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 70,
      "spAtk": 45,
      "spDef": 37,
      "speed": 95
    },
    "evolution": null
  },
  {
    "name": "Feliger",
    "id": "031",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon031.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/031Popkas.png",
    "types": [
      "Normal"
    ],
    "altForm": null,
    "flavorText": "Many trainers are disappointed when FELUNGE evolves because it gets fat and lazy. It can crush foes under its enormous body mass.",
    "stats": {
      "hp": 120,
      "attack": 155,
      "defense": 105,
      "spAtk": 35,
      "spDef": 95,
      "speed": 65
    },
    "evolution": null
  },
  {
    "name": "Mankey",
    "id": "032",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon032.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/032Popkas.png",
    "types": [
      "Fighting"
    ],
    "altForm": null,
    "flavorText": "When it starts shaking and its nasal breathing turns rough, it's a sure sign of anger. However, since this happens instantly, there is no time to flee.",
    "stats": {
      "hp": 40,
      "attack": 80,
      "defense": 35,
      "spAtk": 35,
      "spDef": 45,
      "speed": 70
    },
    "evolution": null
  },
  {
    "name": "Primeape",
    "id": "033",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon033.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/033Popkas.png",
    "types": [
      "Fighting"
    ],
    "altForm": null,
    "flavorText": "When it becomes furious, its blood circulation becomes more robust, and its muscles are made stronger. But it also becomes much less intelligent.",
    "stats": {
      "hp": 65,
      "attack": 105,
      "defense": 60,
      "spAtk": 60,
      "spDef": 70,
      "speed": 95
    },
    "evolution": null
  },
  {
    "name": "Empirilla",
    "id": "034",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon034.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/034Popkas.png",
    "types": [
      "Fighting"
    ],
    "altForm": null,
    "flavorText": "When PRIMEAPE beats its rivals, it wins the right to wear the Jungle Crown, evolving it to the noble EMPIRILLA, much stronger and more intelligent.",
    "stats": {
      "hp": 80,
      "attack": 115,
      "defense": 70,
      "spAtk": 80,
      "spDef": 80,
      "speed": 95
    },
    "evolution": null
  },
  {
    "name": "Nuclear Owten",
    "id": "035",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon035.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N035Popkas.png",
    "types": [
      "Normal",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "OWTEN are mainly seen at night, when they are looking for berries and other individuals of its species. They are known for their lovely singing voice.",
    "stats": {
      "hp": 50,
      "attack": 60,
      "defense": 30,
      "spAtk": 40,
      "spDef": 35,
      "speed": 75
    },
    "evolution": null
  },
  {
    "name": "Owten",
    "id": "035",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon035.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/035Popkas.png",
    "types": [
      "Normal",
      "Flying"
    ],
    "altForm": "Nuclear Owten",
    "flavorText": "OWTEN are mainly seen at night, when they are looking for berries and other individuals of its species. They are known for their lovely singing voice.",
    "stats": {
      "hp": 50,
      "attack": 60,
      "defense": 30,
      "spAtk": 40,
      "spDef": 35,
      "speed": 75
    },
    "evolution": null
  },
  {
    "name": "Nuclear Eshouten",
    "id": "036",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon036.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N036Popkas.png",
    "types": [
      "Normal",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "ESHOUTEN are shy and elusive, found only at night around mountains. Their incredible eyesight allows them to see clearly up to a mile away.",
    "stats": {
      "hp": 75,
      "attack": 85,
      "defense": 55,
      "spAtk": 65,
      "spDef": 60,
      "speed": 110
    },
    "evolution": null
  },
  {
    "name": "Eshouten",
    "id": "036",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon036.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/036Popkas.png",
    "types": [
      "Normal",
      "Flying"
    ],
    "altForm": "Nuclear Eshouten",
    "flavorText": "ESHOUTEN are shy and elusive, found only at night around mountains. Their incredible eyesight allows them to see clearly up to a mile away.",
    "stats": {
      "hp": 75,
      "attack": 85,
      "defense": 55,
      "spAtk": 65,
      "spDef": 60,
      "speed": 110
    },
    "evolution": null
  },
  {
    "name": "Lotad",
    "id": "037",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon037.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/037Popkas.png",
    "types": [
      "Water",
      "Grass"
    ],
    "altForm": null,
    "flavorText": "This Pokémon lives in ponds with clean water. It is known to ferry small Pokémon across ponds by carrying them on the broad leaf on its head.",
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 30,
      "spAtk": 40,
      "spDef": 50,
      "speed": 30
    },
    "evolution": null
  },
  {
    "name": "Lombre",
    "id": "038",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon038.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/038Popkas.png",
    "types": [
      "Water",
      "Grass"
    ],
    "altForm": null,
    "flavorText": "In the evening, it takes great delight in popping out of rivers and startling people. it feeds on aquatic moss that grows on rocks in the riverbed.",
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 50,
      "spAtk": 60,
      "spDef": 70,
      "speed": 50
    },
    "evolution": null
  },
  {
    "name": "Ludicolo",
    "id": "039",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon039.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/039Popkas.png",
    "types": [
      "Water",
      "Grass"
    ],
    "altForm": null,
    "flavorText": "When it hears festive music, all the cells in its body become stimulated, and it begins moving in rhythm. it does not quail even when it faces a tough opponent.",
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 70,
      "spAtk": 90,
      "spDef": 100,
      "speed": 70
    },
    "evolution": null
  },
  {
    "name": "Smore",
    "id": "040",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon040.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/040Popkas.png",
    "types": [
      "Bug"
    ],
    "altForm": null,
    "flavorText": "If a SMORE approaches your picnic, it's not trying to steal your food, it just wants attention. Still, some people are afraid of them.",
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 40,
      "spAtk": 70,
      "spDef": 40,
      "speed": 45
    },
    "evolution": null
  },
  {
    "name": "Firoke",
    "id": "041",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon041.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/041Popkas.png",
    "types": [
      "Bug",
      "Fire"
    ],
    "altForm": null,
    "flavorText": "Its belly is filled with super hot lava that it sprays at its opponent through the nozzle on its abdomen. Its aim is precise.",
    "stats": {
      "hp": 80,
      "attack": 60,
      "defense": 60,
      "spAtk": 100,
      "spDef": 60,
      "speed": 65
    },
    "evolution": null
  },
  {
    "name": "Brailip",
    "id": "042",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon042.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/042Popkas.png",
    "types": [
      "Water",
      "Psychic"
    ],
    "altForm": null,
    "flavorText": "This Pokémon is known for its intelligence. It can't swim fast, but it hides among coral reefs, using its psychic powers to detect others.",
    "stats": {
      "hp": 90,
      "attack": 35,
      "defense": 65,
      "spAtk": 75,
      "spDef": 80,
      "speed": 45
    },
    "evolution": null
  },
  {
    "name": "Brainoar",
    "id": "043",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon043.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/043Popkas.png",
    "types": [
      "Water",
      "Psychic"
    ],
    "altForm": null,
    "flavorText": "Called \"The sage of the sea\", BRAINOAR is said to possess all the wisdom of the ocean. It is calm and dislikes fighting.",
    "stats": {
      "hp": 105,
      "attack": 35,
      "defense": 85,
      "spAtk": 100,
      "spDef": 140,
      "speed": 65
    },
    "evolution": null
  },
  {
    "name": "Nuclear Ekans",
    "id": "044",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon044.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N044Popkas.png",
    "types": [
      "Poison",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "An EKANS curls itself up in a spiral while it rests. This position allows it to quickly respond to an enemy from any direction with a threat from its upraised head.",
    "stats": {
      "hp": 35,
      "attack": 60,
      "defense": 45,
      "spAtk": 40,
      "spDef": 55,
      "speed": 55
    },
    "evolution": [
      {
        "dex": "044",
        "name": "Ekans",
        "types": [
          "Poison"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/044Popkas.png"
      },
      {
        "dex": "045",
        "name": "Arbok",
        "types": [
          "Poison"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/045Popkas.png",
        "condition": "Rare Candy Level 22"
      },
      {
        "dex": "045_1",
        "name": "Mega Arbok",
        "types": [
          "Poison",
          "Dark"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/045_1Popkas.png",
        "condition": "Arbokite Mega Evolution"
      }
    ]
  },
  {
    "name": "Ekans",
    "id": "044",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon044.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/044Popkas.png",
    "types": [
      "Poison"
    ],
    "altForm": "Nuclear Ekans",
    "flavorText": "An EKANS curls itself up in a spiral while it rests. This position allows it to quickly respond to an enemy from any direction with a threat from its upraised head.",
    "stats": {
      "hp": 35,
      "attack": 60,
      "defense": 45,
      "spAtk": 40,
      "spDef": 55,
      "speed": 55
    },
    "evolution": [
      {
        "dex": "044",
        "name": "Ekans",
        "types": [
          "Poison"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/044Popkas.png"
      },
      {
        "dex": "045",
        "name": "Arbok",
        "types": [
          "Poison"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/045Popkas.png",
        "condition": "Rare Candy Level 22"
      },
      {
        "dex": "045_1",
        "name": "Mega Arbok",
        "types": [
          "Poison",
          "Dark"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/045_1Popkas.png",
        "condition": "Arbokite Mega Evolution"
      }
    ]
  },
  {
    "name": "Mega Nuclear Arbok",
    "id": "045",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon045.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N045Popkas.png",
    "types": [
      "Poison",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "This POKéMON has a terrifically strong constricting power. It can even flatten steel oil drums. Once it wraps its body around its foe, escaping is impossible.",
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 70,
      "spAtk": 65,
      "spDef": 80,
      "speed": 80
    },
    "evolution": [
      {
        "dex": "044",
        "name": "Ekans",
        "types": [
          "Poison"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/044Popkas.png"
      },
      {
        "dex": "045",
        "name": "Arbok",
        "types": [
          "Poison"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/045Popkas.png",
        "condition": "Rare Candy Level 22"
      },
      {
        "dex": "045_1",
        "name": "Mega Arbok",
        "types": [
          "Poison",
          "Dark"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/045_1Popkas.png",
        "condition": "Arbokite Mega Evolution"
      }
    ]
  },
  {
    "name": "Mega Arbok",
    "id": "045",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon045.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/045_1Popkas.png",
    "types": [
      "Poison",
      "Dark"
    ],
    "altForm": "Mega Nuclear Arbok",
    "flavorText": "This POKéMON has a terrifically strong constricting power. It can even flatten steel oil drums. Once it wraps its body around its foe, escaping is impossible.",
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 70,
      "spAtk": 65,
      "spDef": 80,
      "speed": 80
    },
    "evolution": [
      {
        "dex": "044",
        "name": "Ekans",
        "types": [
          "Poison"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/044Popkas.png"
      },
      {
        "dex": "045",
        "name": "Arbok",
        "types": [
          "Poison"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/045Popkas.png",
        "condition": "Rare Candy Level 22"
      },
      {
        "dex": "045_1",
        "name": "Mega Arbok",
        "types": [
          "Poison",
          "Dark"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/045_1Popkas.png",
        "condition": "Arbokite Mega Evolution"
      }
    ]
  },
  {
    "name": "Arbok",
    "id": "045",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon045.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/045Popkas.png",
    "types": [
      "Poison"
    ],
    "altForm": "Mega Arbok",
    "flavorText": "This POKéMON has a terrifically strong constricting power. It can even flatten steel oil drums. Once it wraps its body around its foe, escaping is impossible.",
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 70,
      "spAtk": 65,
      "spDef": 80,
      "speed": 80
    },
    "evolution": [
      {
        "dex": "044",
        "name": "Ekans",
        "types": [
          "Poison"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/044Popkas.png"
      },
      {
        "dex": "045",
        "name": "Arbok",
        "types": [
          "Poison"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/045Popkas.png",
        "condition": "Rare Candy Level 22"
      },
      {
        "dex": "045_1",
        "name": "Mega Arbok",
        "types": [
          "Poison",
          "Dark"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/045_1Popkas.png",
        "condition": "Arbokite Mega Evolution"
      }
    ]
  },
  {
    "name": "Nuclear Tancoon",
    "id": "046",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon046.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N046Popkas.png",
    "types": [
      "Dark",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "TANCOON are mischievous, and are known to steal food from small Pokémon or journeying trainers.",
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 40,
      "spAtk": 45,
      "spDef": 55,
      "speed": 60
    },
    "evolution": null
  },
  {
    "name": "Tancoon",
    "id": "046",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon046.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/046Popkas.png",
    "types": [
      "Dark",
      "Normal"
    ],
    "altForm": "Nuclear Tancoon",
    "flavorText": "TANCOON are mischievous, and are known to steal food from small Pokémon or journeying trainers.",
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 40,
      "spAtk": 45,
      "spDef": 55,
      "speed": 60
    },
    "evolution": null
  },
  {
    "name": "Nuclear Tanscure",
    "id": "047",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon047.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N047Popkas.png",
    "types": [
      "Dark",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "In the wild TANSCURE live in packs. They cooperate with their packmates to hunt for food and care for TANCOON.",
    "stats": {
      "hp": 80,
      "attack": 85,
      "defense": 60,
      "spAtk": 55,
      "spDef": 80,
      "speed": 95
    },
    "evolution": null
  },
  {
    "name": "Tanscure",
    "id": "047",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon047.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/047Popkas.png",
    "types": [
      "Dark",
      "Normal"
    ],
    "altForm": "Nuclear Tanscure",
    "flavorText": "In the wild TANSCURE live in packs. They cooperate with their packmates to hunt for food and care for TANCOON.",
    "stats": {
      "hp": 80,
      "attack": 85,
      "defense": 60,
      "spAtk": 55,
      "spDef": 80,
      "speed": 95
    },
    "evolution": null
  },
  {
    "name": "Sponee",
    "id": "048",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon048.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/048Popkas.png",
    "types": [
      "Bug"
    ],
    "altForm": null,
    "flavorText": "SPONEE are covered by a bizarre sponge-like material. When dropped, they bounce.",
    "stats": {
      "hp": 40,
      "attack": 20,
      "defense": 45,
      "spAtk": 50,
      "spDef": 60,
      "speed": 55
    },
    "evolution": null
  },
  {
    "name": "Sponaree",
    "id": "049",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon049.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/049Popkas.png",
    "types": [
      "Bug",
      "Water"
    ],
    "altForm": null,
    "flavorText": "The sponge-like skin of this Pokémon is found in all parts of the ocean. How this Pokémon survives in salt water is a mystery.",
    "stats": {
      "hp": 88,
      "attack": 35,
      "defense": 68,
      "spAtk": 82,
      "spDef": 90,
      "speed": 70
    },
    "evolution": null
  },
  {
    "name": "Nuclear Pahar",
    "id": "050",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon050.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N050Popkas.png",
    "types": [
      "Fire",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "Pahar are intelligent and are commonly kept as pets. They can even be taught to talk, although not to the degree of Chatot.",
    "stats": {
      "hp": 45,
      "attack": 45,
      "defense": 50,
      "spAtk": 70,
      "spDef": 60,
      "speed": 60
    },
    "evolution": null
  },
  {
    "name": "Pahar",
    "id": "050",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon050.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/050Popkas.png",
    "types": [
      "Fire",
      "Flying"
    ],
    "altForm": "Nuclear Pahar",
    "flavorText": "Pahar are intelligent and are commonly kept as pets. They can even be taught to talk, although not to the degree of Chatot.",
    "stats": {
      "hp": 45,
      "attack": 45,
      "defense": 50,
      "spAtk": 70,
      "spDef": 60,
      "speed": 60
    },
    "evolution": null
  },
  {
    "name": "Nuclear Palij",
    "id": "051",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon051.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N051Popkas.png",
    "types": [
      "Fire",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "PALIJ's curiously-shaped feathers allow it to create friction in the air as it flaps its wings. Sparks trail off of its feathers when it flies.",
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 60,
      "spAtk": 90,
      "spDef": 80,
      "speed": 85
    },
    "evolution": null
  },
  {
    "name": "Palij",
    "id": "051",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon051.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/051Popkas.png",
    "types": [
      "Fire",
      "Flying"
    ],
    "altForm": "Nuclear Palij",
    "flavorText": "PALIJ's curiously-shaped feathers allow it to create friction in the air as it flaps its wings. Sparks trail off of its feathers when it flies.",
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 60,
      "spAtk": 90,
      "spDef": 80,
      "speed": 85
    },
    "evolution": null
  },
  {
    "name": "Nuclear Pajay",
    "id": "052",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon052.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N052Popkas.png",
    "types": [
      "Fire",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "Every year, massive flocks of PAHAR and PALIJ migrate from Tandor to the Orange Islands. A PAJAY leads each one.",
    "stats": {
      "hp": 80,
      "attack": 50,
      "defense": 60,
      "spAtk": 110,
      "spDef": 80,
      "speed": 100
    },
    "evolution": null
  },
  {
    "name": "Pajay",
    "id": "052",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon052.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/052Popkas.png",
    "types": [
      "Fire",
      "Flying"
    ],
    "altForm": "Nuclear Pajay",
    "flavorText": "Every year, massive flocks of PAHAR and PALIJ migrate from Tandor to the Orange Islands. A PAJAY leads each one.",
    "stats": {
      "hp": 80,
      "attack": 50,
      "defense": 60,
      "spAtk": 110,
      "spDef": 80,
      "speed": 100
    },
    "evolution": null
  },
  {
    "name": "Nuclear Jerbolta",
    "id": "053",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon053.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N053Popkas.png",
    "types": [
      "Electric",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "The spines on its back stand rigid when charged with electricity. It is popular with children and young trainers.",
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 45,
      "spAtk": 85,
      "spDef": 65,
      "speed": 110
    },
    "evolution": null
  },
  {
    "name": "Jerbolta",
    "id": "053",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon053.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/053Popkas.png",
    "types": [
      "Electric",
      "Ground"
    ],
    "altForm": "Nuclear Jerbolta",
    "flavorText": "The spines on its back stand rigid when charged with electricity. It is popular with children and young trainers.",
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 45,
      "spAtk": 85,
      "spDef": 65,
      "speed": 110
    },
    "evolution": null
  },
  {
    "name": "Comite",
    "id": "054",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon054.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/054Popkas.png",
    "types": [
      "Rock"
    ],
    "altForm": null,
    "flavorText": "It can retract its legs into its body and appear to be an ordinary rock. Stories say they arrived on an asteroid.",
    "stats": {
      "hp": 50,
      "attack": 30,
      "defense": 55,
      "spAtk": 75,
      "spDef": 40,
      "speed": 60
    },
    "evolution": null
  },
  {
    "name": "Cometeor",
    "id": "055",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon055.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/055Popkas.png",
    "types": [
      "Rock",
      "Psychic"
    ],
    "altForm": null,
    "flavorText": "It levitates in the air with powerful psychic energy. The crystals on its body flash many colors when it meets another of its kind.",
    "stats": {
      "hp": 75,
      "attack": 45,
      "defense": 65,
      "spAtk": 95,
      "spDef": 60,
      "speed": 75
    },
    "evolution": null
  },
  {
    "name": "Astronite",
    "id": "056",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon056.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/056Popkas.png",
    "types": [
      "Rock",
      "Psychic"
    ],
    "altForm": null,
    "flavorText": "Astronite can exist anywhere, even in the vacuum of space. They are said to roam across the universe, orbiting stars and colonizing asteroid fields.",
    "stats": {
      "hp": 80,
      "attack": 85,
      "defense": 85,
      "spAtk": 115,
      "spDef": 75,
      "speed": 105
    },
    "evolution": null
  },
  {
    "name": "Mareep",
    "id": "057",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon057.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/057Popkas.png",
    "types": [
      "Electric"
    ],
    "altForm": null,
    "flavorText": "Its fluffy wool rubs together and builds a static charge. The more energy is charged, the more brightly the lightbulb at the tip of its tail glows.",
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 40,
      "spAtk": 65,
      "spDef": 45,
      "speed": 35
    },
    "evolution": null
  },
  {
    "name": "Flaaffy",
    "id": "058",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon058.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/058Popkas.png",
    "types": [
      "Electric"
    ],
    "altForm": null,
    "flavorText": "Its fleece quality changes to generate strong static electricity with a small amount of wool. The bare, slick parts of its hide are shielded against electricity.",
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 55,
      "spAtk": 80,
      "spDef": 60,
      "speed": 45
    },
    "evolution": null
  },
  {
    "name": "Mega Ampharos",
    "id": "059",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon059.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/059_1Popkas.png",
    "types": [
      "Electric",
      "Dragon"
    ],
    "altForm": null,
    "flavorText": "It gives off so much light that it can be seen even from space. People in the old days used its light to send signals back and forth with others far away.",
    "stats": {
      "hp": 90,
      "attack": 75,
      "defense": 85,
      "spAtk": 115,
      "spDef": 90,
      "speed": 55
    },
    "evolution": null
  },
  {
    "name": "Ampharos",
    "id": "059",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon059.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/059Popkas.png",
    "types": [
      "Electric"
    ],
    "altForm": "Mega Ampharos",
    "flavorText": "It gives off so much light that it can be seen even from space. People in the old days used its light to send signals back and forth with others far away.",
    "stats": {
      "hp": 90,
      "attack": 75,
      "defense": 85,
      "spAtk": 115,
      "spDef": 90,
      "speed": 55
    },
    "evolution": null
  },
  {
    "name": "Nuclear Baashaun",
    "id": "060",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon060.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N060Popkas.png",
    "types": [
      "Dark",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "Its wool is prized as fiber for extra-rugged clothing. However it is much harder to raise than its docile cousin Mareep.",
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 50,
      "spAtk": 35,
      "spDef": 40,
      "speed": 40
    },
    "evolution": null
  },
  {
    "name": "Baashaun",
    "id": "060",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon060.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/060Popkas.png",
    "types": [
      "Dark",
      "Fighting"
    ],
    "altForm": "Nuclear Baashaun",
    "flavorText": "Its wool is prized as fiber for extra-rugged clothing. However it is much harder to raise than its docile cousin Mareep.",
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 50,
      "spAtk": 35,
      "spDef": 40,
      "speed": 40
    },
    "evolution": null
  },
  {
    "name": "Nuclear Baaschaf",
    "id": "061",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon061.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N061Popkas.png",
    "types": [
      "Dark",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "Now that it is able to stand on two legs, it can use more kicking and punching attacks. Unlike its previous evolution, however, it is rather playful.",
    "stats": {
      "hp": 85,
      "attack": 90,
      "defense": 70,
      "spAtk": 45,
      "spDef": 65,
      "speed": 55
    },
    "evolution": null
  },
  {
    "name": "Baaschaf",
    "id": "061",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon061.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/061Popkas.png",
    "types": [
      "Dark",
      "Fighting"
    ],
    "altForm": "Nuclear Baaschaf",
    "flavorText": "Now that it is able to stand on two legs, it can use more kicking and punching attacks. Unlike its previous evolution, however, it is rather playful.",
    "stats": {
      "hp": 85,
      "attack": 90,
      "defense": 70,
      "spAtk": 45,
      "spDef": 65,
      "speed": 55
    },
    "evolution": null
  },
  {
    "name": "Mega Nuclear Baariette",
    "id": "062",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon062.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N062Popkas.png",
    "types": [
      "Dark",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "A master at fighting dirty, BAARIETTE like to ensure that their foes can never oppose them again.",
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 85,
      "spAtk": 75,
      "spDef": 85,
      "speed": 75
    },
    "evolution": null
  },
  {
    "name": "Mega Baariette",
    "id": "062",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon062.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/062_1Popkas.png",
    "types": [
      "Dark",
      "Fighting"
    ],
    "altForm": "Mega Nuclear Baariette",
    "flavorText": "A master at fighting dirty, BAARIETTE like to ensure that their foes can never oppose them again.",
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 85,
      "spAtk": 75,
      "spDef": 85,
      "speed": 75
    },
    "evolution": null
  },
  {
    "name": "Baariette",
    "id": "062",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon062.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/062Popkas.png",
    "types": [
      "Dark",
      "Fighting"
    ],
    "altForm": "Mega Baariette",
    "flavorText": "A master at fighting dirty, BAARIETTE like to ensure that their foes can never oppose them again.",
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 85,
      "spAtk": 75,
      "spDef": 85,
      "speed": 75
    },
    "evolution": null
  },
  {
    "name": "Tricwe",
    "id": "063",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon063.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/063Popkas.png",
    "types": [
      "Bug"
    ],
    "altForm": null,
    "flavorText": "Related to SMORE and SPONEE, TRICWE is very hyperactive and loves nothing better than sneaking up behind trainers and scaring them.",
    "stats": {
      "hp": 40,
      "attack": 65,
      "defense": 35,
      "spAtk": 30,
      "spDef": 30,
      "speed": 65
    },
    "evolution": null
  },
  {
    "name": "Harylect",
    "id": "064",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon064.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/064Popkas.png",
    "types": [
      "Bug",
      "Electric"
    ],
    "altForm": null,
    "flavorText": "HARYLECT gather near sources of electricity and therefore are drawn to human dwellings and power plants. They can plug their antennae into a wall socket to recharge.",
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 55,
      "spAtk": 50,
      "spDef": 60,
      "speed": 85
    },
    "evolution": null
  },
  {
    "name": "Nuclear Costraw",
    "id": "065",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon065.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N065Popkas.png",
    "types": [
      "Poison",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "At this stage of development, COSTRAW's telekinetic powers are weak. It instead defends itself by latching onto its foes and sucking out their life force.",
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 40,
      "spAtk": 55,
      "spDef": 55,
      "speed": 60
    },
    "evolution": null
  },
  {
    "name": "Costraw",
    "id": "065",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon065.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/065Popkas.png",
    "types": [
      "Poison",
      "Psychic"
    ],
    "altForm": "Nuclear Costraw",
    "flavorText": "At this stage of development, COSTRAW's telekinetic powers are weak. It instead defends itself by latching onto its foes and sucking out their life force.",
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 40,
      "spAtk": 55,
      "spDef": 55,
      "speed": 60
    },
    "evolution": null
  },
  {
    "name": "Trawpint",
    "id": "066",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon066.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/066Popkas.png",
    "types": [
      "Poison",
      "Psychic"
    ],
    "altForm": null,
    "flavorText": "TRAWPINT uses its telekinesis to move objects behind its foe, preventing them from escaping.",
    "stats": {
      "hp": 90,
      "attack": 50,
      "defense": 85,
      "spAtk": 85,
      "spDef": 95,
      "speed": 85
    },
    "evolution": null
  },
  {
    "name": "Trawpint",
    "id": "066",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon066.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/066Popkas.png",
    "types": [
      "Poison",
      "Psychic"
    ],
    "altForm": "Trawpint",
    "flavorText": "TRAWPINT uses its telekinesis to move objects behind its foe, preventing them from escaping.",
    "stats": {
      "hp": 90,
      "attack": 50,
      "defense": 85,
      "spAtk": 85,
      "spDef": 95,
      "speed": 85
    },
    "evolution": null
  },
  {
    "name": "Lunapup",
    "id": "067",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon067.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/067Popkas.png",
    "types": [
      "Ground",
      "Fighting"
    ],
    "altForm": null,
    "flavorText": "Although small, it is very brave. It won't hesitate to protect weaker Pokémon in danger. They can often be heard howling at the moon.",
    "stats": {
      "hp": 64,
      "attack": 64,
      "defense": 64,
      "spAtk": 30,
      "spDef": 44,
      "speed": 36
    },
    "evolution": null
  },
  {
    "name": "Herolune",
    "id": "068",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon068.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/068Popkas.png",
    "types": [
      "Ground",
      "Fighting"
    ],
    "altForm": null,
    "flavorText": "It rises with the moon to do battle with its sworn nemesis, Vilucard. It has a strong sense of justice and will protect those who cannot defend themselves.",
    "stats": {
      "hp": 95,
      "attack": 124,
      "defense": 83,
      "spAtk": 63,
      "spDef": 68,
      "speed": 60
    },
    "evolution": null
  },
  {
    "name": "Minyan",
    "id": "069",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon069.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/069Popkas.png",
    "types": [
      "Dark",
      "Poison"
    ],
    "altForm": null,
    "flavorText": "Called the \"tiny master of evil\", it tries to cause discord but often ends up messing up and fleeing in embarrassment.",
    "stats": {
      "hp": 48,
      "attack": 64,
      "defense": 36,
      "spAtk": 58,
      "spDef": 35,
      "speed": 61
    },
    "evolution": null
  },
  {
    "name": "Vilucard",
    "id": "070",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon070.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/070Popkas.png",
    "types": [
      "Dark",
      "Poison"
    ],
    "altForm": null,
    "flavorText": "It constantly plots dastardly schemes to spread chaos and fear. However, its plans are always foiled by Herolune.",
    "stats": {
      "hp": 75,
      "attack": 108,
      "defense": 60,
      "spAtk": 102,
      "spDef": 58,
      "speed": 90
    },
    "evolution": null
  },
  {
    "name": "Buizel",
    "id": "071",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon071.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/071Popkas.png",
    "types": [
      "Water"
    ],
    "altForm": null,
    "flavorText": "It has a flotation sac that is like an inflatable collar. It floats on water with its head out.",
    "stats": {
      "hp": 55,
      "attack": 65,
      "defense": 35,
      "spAtk": 60,
      "spDef": 30,
      "speed": 85
    },
    "evolution": null
  },
  {
    "name": "Floatzel",
    "id": "072",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon072.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/072Popkas.png",
    "types": [
      "Water"
    ],
    "altForm": null,
    "flavorText": "It floats using its well-developed flotation sac. it assists in the rescues of drowning people.",
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 55,
      "spAtk": 85,
      "spDef": 50,
      "speed": 115
    },
    "evolution": null
  },
  {
    "name": "Modrille",
    "id": "073",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon073.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/073Popkas.png",
    "types": [
      "Ground",
      "Dark"
    ],
    "altForm": null,
    "flavorText": "\"MODRILLE hate being confined within any space and will always drill their way out of it. Trainers are advised to keep spare Poké Balls on hand.\"",
    "stats": {
      "hp": 50,
      "attack": 70,
      "defense": 60,
      "spAtk": 40,
      "spDef": 45,
      "speed": 50
    },
    "evolution": [
      {
        "dex": "073",
        "name": "Modrille",
        "types": [
          "Ground",
          "Dark"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/073Popkas.png"
      },
      {
        "dex": "074",
        "name": "Drilgann",
        "types": [
          "Ground",
          "Dark"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/074Popkas.png",
        "condition": "Rare Candy Level 34"
      },
      {
        "dex": "074_1",
        "name": "Mega Drilgann",
        "types": [
          "Ground",
          "Dark"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/074_1Popkas.png",
        "condition": "Drilgannite Mega Evolution"
      }
    ]
  },
  {
    "name": "Mega Drilgann",
    "id": "074",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon074.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/074_1Popkas.png",
    "types": [
      "Ground",
      "Dark"
    ],
    "altForm": null,
    "flavorText": "Often used as beasts of burden, a Drilgann can tunnel many miles in a single day without getting tired. Their claws can be spun individually to drill with precision.",
    "stats": {
      "hp": 75,
      "attack": 140,
      "defense": 70,
      "spAtk": 60,
      "spDef": 75,
      "speed": 55
    },
    "evolution": [
      {
        "dex": "073",
        "name": "Modrille",
        "types": [
          "Ground",
          "Dark"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/073Popkas.png"
      },
      {
        "dex": "074",
        "name": "Drilgann",
        "types": [
          "Ground",
          "Dark"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/074Popkas.png",
        "condition": "Rare Candy Level 34"
      },
      {
        "dex": "074_1",
        "name": "Mega Drilgann",
        "types": [
          "Ground",
          "Dark"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/074_1Popkas.png",
        "condition": "Drilgannite Mega Evolution"
      }
    ]
  },
  {
    "name": "Drilgann",
    "id": "074",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon074.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/074Popkas.png",
    "types": [
      "Ground",
      "Dark"
    ],
    "altForm": "Mega Drilgann",
    "flavorText": "Often used as beasts of burden, a Drilgann can tunnel many miles in a single day without getting tired. Their claws can be spun individually to drill with precision.",
    "stats": {
      "hp": 75,
      "attack": 140,
      "defense": 70,
      "spAtk": 60,
      "spDef": 75,
      "speed": 55
    },
    "evolution": [
      {
        "dex": "073",
        "name": "Modrille",
        "types": [
          "Ground",
          "Dark"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/073Popkas.png"
      },
      {
        "dex": "074",
        "name": "Drilgann",
        "types": [
          "Ground",
          "Dark"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/074Popkas.png",
        "condition": "Rare Candy Level 34"
      },
      {
        "dex": "074_1",
        "name": "Mega Drilgann",
        "types": [
          "Ground",
          "Dark"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/074_1Popkas.png",
        "condition": "Drilgannite Mega Evolution"
      }
    ]
  },
  {
    "name": "Nuclear Gligar",
    "id": "075",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon075.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N075Popkas.png",
    "types": [
      "Ground",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "It glides without making a single sound. It grasps the face of its foe using its hind and large front claws, then stabs with its poison barb.",
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 105,
      "spAtk": 35,
      "spDef": 65,
      "speed": 85
    },
    "evolution": null
  },
  {
    "name": "Gligar",
    "id": "075",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon075.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/075Popkas.png",
    "types": [
      "Ground",
      "Flying"
    ],
    "altForm": "Nuclear Gligar",
    "flavorText": "It glides without making a single sound. It grasps the face of its foe using its hind and large front claws, then stabs with its poison barb.",
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 105,
      "spAtk": 35,
      "spDef": 65,
      "speed": 85
    },
    "evolution": null
  },
  {
    "name": "Nuclear Gliscor",
    "id": "076",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon076.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N076Popkas.png",
    "types": [
      "Ground",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "It observes prey while hanging inverted from branches. When the chance presents itself, it swoops!",
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 125,
      "spAtk": 45,
      "spDef": 75,
      "speed": 95
    },
    "evolution": null
  },
  {
    "name": "Gliscor",
    "id": "076",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon076.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/076Popkas.png",
    "types": [
      "Ground",
      "Flying"
    ],
    "altForm": "Nuclear Gliscor",
    "flavorText": "It observes prey while hanging inverted from branches. When the chance presents itself, it swoops!",
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 125,
      "spAtk": 45,
      "spDef": 75,
      "speed": 95
    },
    "evolution": null
  },
  {
    "name": "Mega Sableye",
    "id": "077",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon077.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/077_1Popkas.png",
    "types": [
      "Dark",
      "Ghost"
    ],
    "altForm": null,
    "flavorText": "It digs branching holes in caves using its sharp claws in search of food--raw gems. A SABLEYE lurks in darkness and is seen only rarely.",
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 75,
      "spAtk": 65,
      "spDef": 65,
      "speed": 50
    },
    "evolution": null
  },
  {
    "name": "Sableye",
    "id": "077",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon077.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/077Popkas.png",
    "types": [
      "Dark",
      "Ghost"
    ],
    "altForm": "Mega Sableye",
    "flavorText": "It digs branching holes in caves using its sharp claws in search of food--raw gems. A SABLEYE lurks in darkness and is seen only rarely.",
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 75,
      "spAtk": 65,
      "spDef": 65,
      "speed": 50
    },
    "evolution": null
  },
  {
    "name": "Cocaran",
    "id": "078",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon078.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/078Popkas.png",
    "types": [
      "Grass",
      "Ground"
    ],
    "altForm": null,
    "flavorText": "When COCARAN retracts its eyes and legs, it is almost indistinguishable from a coconut. Their shells are very buoyant, so they float in water.",
    "stats": {
      "hp": 60,
      "attack": 70,
      "defense": 75,
      "spAtk": 35,
      "spDef": 70,
      "speed": 50
    },
    "evolution": null
  },
  {
    "name": "Cararalm",
    "id": "079",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon079.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/079Popkas.png",
    "types": [
      "Grass",
      "Ground"
    ],
    "altForm": null,
    "flavorText": "Unlike their preevolutions, CARARALM cannot swim, so they stay on land. The height of their palm tree indicates how close they are to evolving.",
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 85,
      "spAtk": 35,
      "spDef": 85,
      "speed": 80
    },
    "evolution": null
  },
  {
    "name": "Cocancer",
    "id": "080",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon080.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/080Popkas.png",
    "types": [
      "Grass",
      "Ground"
    ],
    "altForm": null,
    "flavorText": "COCANCER bury themselves in the sand and are indistinguishable from ordinary palm trees. When prey walks by, they leap out with surprising speed and crush it with massive claws.",
    "stats": {
      "hp": 90,
      "attack": 95,
      "defense": 120,
      "spAtk": 35,
      "spDef": 115,
      "speed": 60
    },
    "evolution": null
  },
  {
    "name": "Nuclear Corsola",
    "id": "081",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon081.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N081Popkas.png",
    "types": [
      "Water",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "They prefer unpolluted southern seas. Their coral branches lose their color and deteriorate in dirty water.",
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 85,
      "spAtk": 65,
      "spDef": 85,
      "speed": 35
    },
    "evolution": null
  },
  {
    "name": "Corsola",
    "id": "081",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon081.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/081Popkas.png",
    "types": [
      "Water",
      "Rock"
    ],
    "altForm": "Nuclear Corsola",
    "flavorText": "They prefer unpolluted southern seas. Their coral branches lose their color and deteriorate in dirty water.",
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 85,
      "spAtk": 65,
      "spDef": 85,
      "speed": 35
    },
    "evolution": null
  },
  {
    "name": "Nuclear Corsoreef",
    "id": "082",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon082.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N082Popkas.png",
    "types": [
      "Water",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "Their bodies are a host to a wide variety of other species. In return for a home, they give CORSOREEF the ability to inflict status effects on its foes.",
    "stats": {
      "hp": 90,
      "attack": 55,
      "defense": 105,
      "spAtk": 60,
      "spDef": 105,
      "speed": 25
    },
    "evolution": null
  },
  {
    "name": "Corsoreef",
    "id": "082",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon082.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/082Popkas.png",
    "types": [
      "Water",
      "Rock"
    ],
    "altForm": "Nuclear Corsoreef",
    "flavorText": "Their bodies are a host to a wide variety of other species. In return for a home, they give CORSOREEF the ability to inflict status effects on its foes.",
    "stats": {
      "hp": 90,
      "attack": 55,
      "defense": 105,
      "spAtk": 60,
      "spDef": 105,
      "speed": 25
    },
    "evolution": null
  },
  {
    "name": "Nuclear Tubjaw",
    "id": "083",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon083.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N083Popkas.png",
    "types": [
      "Water",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "\"TUBJAW are able to unhinge their jaws in order to swallow prey larger than their head. Their teeth are sharper than razors.\"",
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 90,
      "spAtk": 45,
      "spDef": 65,
      "speed": 65
    },
    "evolution": null
  },
  {
    "name": "Tubjaw",
    "id": "083",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon083.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/083Popkas.png",
    "types": [
      "Water",
      "Dark"
    ],
    "altForm": "Nuclear Tubjaw",
    "flavorText": "\"TUBJAW are able to unhinge their jaws in order to swallow prey larger than their head. Their teeth are sharper than razors.\"",
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 90,
      "spAtk": 45,
      "spDef": 65,
      "speed": 65
    },
    "evolution": null
  },
  {
    "name": "Nuclear Tubareel",
    "id": "084",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon084.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N084Popkas.png",
    "types": [
      "Water",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "\"A fierce, deep-sea hunter, this Pokémon is particularly vengeful towards humankind and will tear up fishing nets.\"",
    "stats": {
      "hp": 105,
      "attack": 100,
      "defense": 140,
      "spAtk": 55,
      "spDef": 85,
      "speed": 65
    },
    "evolution": null
  },
  {
    "name": "Tubareel",
    "id": "084",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon084.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/084Popkas.png",
    "types": [
      "Water",
      "Dark"
    ],
    "altForm": "Nuclear Tubareel",
    "flavorText": "\"A fierce, deep-sea hunter, this Pokémon is particularly vengeful towards humankind and will tear up fishing nets.\"",
    "stats": {
      "hp": 105,
      "attack": 100,
      "defense": 140,
      "spAtk": 55,
      "spDef": 85,
      "speed": 65
    },
    "evolution": null
  },
  {
    "name": "Cassnail",
    "id": "085",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon085.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/085Popkas.png",
    "types": [
      "Ground",
      "Water"
    ],
    "altForm": null,
    "flavorText": "It dissolves minerals in sand and uses them to form a hard carapace on its back. It lives in coastal regions.",
    "stats": {
      "hp": 80,
      "attack": 45,
      "defense": 70,
      "spAtk": 70,
      "spDef": 55,
      "speed": 40
    },
    "evolution": null
  },
  {
    "name": "Sableau",
    "id": "086",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon086.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/086Popkas.png",
    "types": [
      "Ground",
      "Water"
    ],
    "altForm": null,
    "flavorText": "The colorful patterns on its shell makes them desirable to collectors. Their cast-off shells are often used in jewelry.",
    "stats": {
      "hp": 100,
      "attack": 60,
      "defense": 85,
      "spAtk": 90,
      "spDef": 65,
      "speed": 65
    },
    "evolution": null
  },
  {
    "name": "Escartress",
    "id": "087",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon087.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/087Popkas.png",
    "types": [
      "Ground",
      "Water"
    ],
    "altForm": null,
    "flavorText": "Its shell has hardened into a nearly unbreakable fortress. It shoots water from the turrets on its back.",
    "stats": {
      "hp": 120,
      "attack": 60,
      "defense": 90,
      "spAtk": 110,
      "spDef": 70,
      "speed": 65
    },
    "evolution": null
  },
  {
    "name": "Nuclear Nupin",
    "id": "088",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon088.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N088Popkas.png",
    "types": [
      "Grass",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "NUPIN is the largest single-celled organism on the planet. It obtains energy from photosynthesis.",
    "stats": {
      "hp": 75,
      "attack": 20,
      "defense": 45,
      "spAtk": 80,
      "spDef": 70,
      "speed": 25
    },
    "evolution": null
  },
  {
    "name": "Nupin",
    "id": "088",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon088.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/088Popkas.png",
    "types": [
      "Grass",
      "Electric"
    ],
    "altForm": "Nuclear Nupin",
    "flavorText": "NUPIN is the largest single-celled organism on the planet. It obtains energy from photosynthesis.",
    "stats": {
      "hp": 75,
      "attack": 20,
      "defense": 45,
      "spAtk": 80,
      "spDef": 70,
      "speed": 25
    },
    "evolution": null
  },
  {
    "name": "Nuclear Gellin",
    "id": "089",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon089.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N089Popkas.png",
    "types": [
      "Grass",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "The energy that GELLIN generates from photosynthesis is converted into electromagnetic pulses. It uses these as a means of propulsion.",
    "stats": {
      "hp": 90,
      "attack": 35,
      "defense": 75,
      "spAtk": 120,
      "spDef": 100,
      "speed": 85
    },
    "evolution": null
  },
  {
    "name": "Gellin",
    "id": "089",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon089.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/089Popkas.png",
    "types": [
      "Grass",
      "Electric"
    ],
    "altForm": "Nuclear Gellin",
    "flavorText": "The energy that GELLIN generates from photosynthesis is converted into electromagnetic pulses. It uses these as a means of propulsion.",
    "stats": {
      "hp": 90,
      "attack": 35,
      "defense": 75,
      "spAtk": 120,
      "spDef": 100,
      "speed": 85
    },
    "evolution": null
  },
  {
    "name": "Cottonee",
    "id": "090",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon090.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/090Popkas.png",
    "types": [
      "Grass",
      "Fairy"
    ],
    "altForm": null,
    "flavorText": "They go wherever the wind takes them. On rainy days, their bodies are heavier, so they take shelter beneath big trees.",
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 60,
      "spAtk": 35,
      "spDef": 50,
      "speed": 65
    },
    "evolution": [
      {
        "dex": "090",
        "name": "Cottonee",
        "types": [
          "Grass",
          "Fairy"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/090Popkas.png"
      },
      {
        "dex": "091",
        "name": "Whimsicott",
        "types": [
          "Grass",
          "Fairy"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/091Popkas.png",
        "condition": "Sun Stone Sun Stone"
      },
      {
        "dex": "091_1",
        "name": "Mega Whimsicott",
        "types": [
          "Grass",
          "Fairy"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/091_1Popkas.png",
        "condition": "Whimsicottite Mega Evolution"
      }
    ]
  },
  {
    "name": "Mega Whimsicott",
    "id": "091",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon091.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/091_1Popkas.png",
    "types": [
      "Grass",
      "Fairy"
    ],
    "altForm": null,
    "flavorText": "Like the wind, it can slip through any gap, no matter how small. It leaves balls of white fluff behind.",
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 85,
      "spAtk": 80,
      "spDef": 75,
      "speed": 115
    },
    "evolution": [
      {
        "dex": "090",
        "name": "Cottonee",
        "types": [
          "Grass",
          "Fairy"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/090Popkas.png"
      },
      {
        "dex": "091",
        "name": "Whimsicott",
        "types": [
          "Grass",
          "Fairy"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/091Popkas.png",
        "condition": "Sun Stone Sun Stone"
      },
      {
        "dex": "091_1",
        "name": "Mega Whimsicott",
        "types": [
          "Grass",
          "Fairy"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/091_1Popkas.png",
        "condition": "Whimsicottite Mega Evolution"
      }
    ]
  },
  {
    "name": "Whimsicott",
    "id": "091",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon091.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/091Popkas.png",
    "types": [
      "Grass",
      "Fairy"
    ],
    "altForm": "Mega Whimsicott",
    "flavorText": "Like the wind, it can slip through any gap, no matter how small. It leaves balls of white fluff behind.",
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 85,
      "spAtk": 80,
      "spDef": 75,
      "speed": 115
    },
    "evolution": [
      {
        "dex": "090",
        "name": "Cottonee",
        "types": [
          "Grass",
          "Fairy"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/090Popkas.png"
      },
      {
        "dex": "091",
        "name": "Whimsicott",
        "types": [
          "Grass",
          "Fairy"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/091Popkas.png",
        "condition": "Sun Stone Sun Stone"
      },
      {
        "dex": "091_1",
        "name": "Mega Whimsicott",
        "types": [
          "Grass",
          "Fairy"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/091_1Popkas.png",
        "condition": "Whimsicottite Mega Evolution"
      }
    ]
  },
  {
    "name": "Misdreavus",
    "id": "092",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon092.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/092Popkas.png",
    "types": [
      "Ghost"
    ],
    "altForm": null,
    "flavorText": "A MISDREAVUS frightens people with a creepy, sobbing cry. It apparently uses its red spheres to absorb the fear of foes as its nutrition.",
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "spAtk": 85,
      "spDef": 85,
      "speed": 85
    },
    "evolution": null
  },
  {
    "name": "Mismagius",
    "id": "093",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon093.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/093Popkas.png",
    "types": [
      "Ghost"
    ],
    "altForm": null,
    "flavorText": "Its cries sound like incantations. Those hearing it are tormented by headaches and hallucinations.",
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "spAtk": 105,
      "spDef": 105,
      "speed": 105
    },
    "evolution": null
  },
  {
    "name": "Nuclear Barand",
    "id": "094",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon094.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N094Popkas.png",
    "types": [
      "Dragon",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "The appendage at the end of its tail is its primary form of attack, and it is able to deftly manipulate objects with it as if it were a hand.",
    "stats": {
      "hp": 45,
      "attack": 115,
      "defense": 45,
      "spAtk": 40,
      "spDef": 30,
      "speed": 85
    },
    "evolution": null
  },
  {
    "name": "Barand",
    "id": "094",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon094.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/094Popkas.png",
    "types": [
      "Dragon"
    ],
    "altForm": "Nuclear Barand",
    "flavorText": "The appendage at the end of its tail is its primary form of attack, and it is able to deftly manipulate objects with it as if it were a hand.",
    "stats": {
      "hp": 45,
      "attack": 115,
      "defense": 45,
      "spAtk": 40,
      "spDef": 30,
      "speed": 85
    },
    "evolution": null
  },
  {
    "name": "Glaslug",
    "id": "095",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon095.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/095Popkas.png",
    "types": [
      "Water",
      "Ice"
    ],
    "altForm": null,
    "flavorText": "\"A Pokémon highly sensitive to the changes in seasons, Glaslug come and go with the warm undersea currents.\"",
    "stats": {
      "hp": 70,
      "attack": 25,
      "defense": 35,
      "spAtk": 70,
      "spDef": 70,
      "speed": 35
    },
    "evolution": null
  },
  {
    "name": "Glavinug",
    "id": "096",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon096.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/096Popkas.png",
    "types": [
      "Water",
      "Ice"
    ],
    "altForm": null,
    "flavorText": "\"GLAVINUG are rare but not hard to trace, due to the ice crystals they leave behind when they swim.\"",
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 80,
      "spAtk": 115,
      "spDef": 115,
      "speed": 70
    },
    "evolution": null
  },
  {
    "name": "S51",
    "id": "097",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon097.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/097Popkas.png",
    "types": [
      "Psychic",
      "Steel"
    ],
    "altForm": null,
    "flavorText": "A peculiar life-form that hovers above the ground with a mysterious force. Rumors say they came from outer space.",
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "spAtk": 60,
      "spDef": 60,
      "speed": 60
    },
    "evolution": [
      {
        "dex": "097",
        "name": "S51",
        "types": [
          "Psychic",
          "Steel"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/097Popkas.png"
      },
      {
        "dex": "098",
        "name": "S51-A",
        "types": [
          "Psychic",
          "Steel"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/098Popkas.png",
        "condition": "Rare Candy Level 40"
      },
      {
        "dex": "098_1",
        "name": "Mega S51-A",
        "types": [
          "Psychic",
          "Steel"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/098_1Popkas.png",
        "condition": "Unidentified Fallen Object Mega Evolution"
      }
    ]
  },
  {
    "name": "Mega S51-A",
    "id": "098",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon098.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/098_1Popkas.png",
    "types": [
      "Psychic",
      "Steel"
    ],
    "altForm": null,
    "flavorText": "Some people suspect that BEHEEYEM, CLEFABLE, and S51-A are conspiring to invade the planet. No one is safe.",
    "stats": {
      "hp": 105,
      "attack": 65,
      "defense": 90,
      "spAtk": 115,
      "spDef": 90,
      "speed": 75
    },
    "evolution": [
      {
        "dex": "097",
        "name": "S51",
        "types": [
          "Psychic",
          "Steel"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/097Popkas.png"
      },
      {
        "dex": "098",
        "name": "S51-A",
        "types": [
          "Psychic",
          "Steel"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/098Popkas.png",
        "condition": "Rare Candy Level 40"
      },
      {
        "dex": "098_1",
        "name": "Mega S51-A",
        "types": [
          "Psychic",
          "Steel"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/098_1Popkas.png",
        "condition": "Unidentified Fallen Object Mega Evolution"
      }
    ]
  },
  {
    "name": "S51-A",
    "id": "098",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon098.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/098Popkas.png",
    "types": [
      "Psychic",
      "Steel"
    ],
    "altForm": null,
    "flavorText": "Some people suspect that BEHEEYEM, CLEFABLE, and S51-A are conspiring to invade the planet. No one is safe.",
    "stats": {
      "hp": 105,
      "attack": 65,
      "defense": 90,
      "spAtk": 115,
      "spDef": 90,
      "speed": 75
    },
    "evolution": [
      {
        "dex": "097",
        "name": "S51",
        "types": [
          "Psychic",
          "Steel"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/097Popkas.png"
      },
      {
        "dex": "098",
        "name": "S51-A",
        "types": [
          "Psychic",
          "Steel"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/098Popkas.png",
        "condition": "Rare Candy Level 40"
      },
      {
        "dex": "098_1",
        "name": "Mega S51-A",
        "types": [
          "Psychic",
          "Steel"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/098_1Popkas.png",
        "condition": "Unidentified Fallen Object Mega Evolution"
      }
    ]
  },
  {
    "name": "Nuclear Paraudio",
    "id": "099",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon099.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N099Popkas.png",
    "types": [
      "Normal",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "It is highly sensitive to sound and can perfectly replicate any sound it hears, even human speech. It loves to hear fast, rhythmic music.",
    "stats": {
      "hp": 50,
      "attack": 40,
      "defense": 55,
      "spAtk": 60,
      "spDef": 50,
      "speed": 50
    },
    "evolution": null
  },
  {
    "name": "Paraudio",
    "id": "099",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon099.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/099Popkas.png",
    "types": [
      "Normal",
      "Psychic"
    ],
    "altForm": "Nuclear Paraudio",
    "flavorText": "It is highly sensitive to sound and can perfectly replicate any sound it hears, even human speech. It loves to hear fast, rhythmic music.",
    "stats": {
      "hp": 50,
      "attack": 40,
      "defense": 55,
      "spAtk": 60,
      "spDef": 50,
      "speed": 50
    },
    "evolution": null
  },
  {
    "name": "Nuclear Paraboom",
    "id": "100",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon100.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N100Popkas.png",
    "types": [
      "Normal",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "It uses massive sonic booms to attack from a distance. An encounter with one will leave your ears ringing for days.",
    "stats": {
      "hp": 90,
      "attack": 65,
      "defense": 75,
      "spAtk": 105,
      "spDef": 75,
      "speed": 80
    },
    "evolution": null
  },
  {
    "name": "Paraboom",
    "id": "100",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon100.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/100Popkas.png",
    "types": [
      "Normal",
      "Psychic"
    ],
    "altForm": "Nuclear Paraboom",
    "flavorText": "It uses massive sonic booms to attack from a distance. An encounter with one will leave your ears ringing for days.",
    "stats": {
      "hp": 90,
      "attack": 65,
      "defense": 75,
      "spAtk": 105,
      "spDef": 75,
      "speed": 80
    },
    "evolution": null
  },
  {
    "name": "Flager",
    "id": "101",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon101.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/101Popkas.png",
    "types": [
      "Fire"
    ],
    "altForm": null,
    "flavorText": "The size of the flame on FLAGER's tail indicates if it is close to evolving. Some Flager will intentionally eat flammable items to make it bigger.",
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 45,
      "spAtk": 65,
      "spDef": 50,
      "speed": 90
    },
    "evolution": [
      {
        "dex": "101",
        "name": "Flager",
        "types": [
          "Fire"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/101Popkas.png"
      },
      {
        "dex": "102",
        "name": "Inflagetah",
        "types": [
          "Fire"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/102Popkas.png",
        "condition": "Fire Stone Fire Stone"
      },
      {
        "dex": "102_1",
        "name": "Mega Inflagetah",
        "types": [
          "Fire"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/102_1Popkas.png",
        "condition": "Inflagetite Mega Evolution"
      }
    ]
  },
  {
    "name": "Mega Inflagetah",
    "id": "102",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon102.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/102_1Popkas.png",
    "types": [
      "Fire"
    ],
    "altForm": null,
    "flavorText": "Inflagetah's [sic] are some of the fastest known Pokémon on earth, able to outrun even a Rapidash. They can reach speeds up to 200 MPH.",
    "stats": {
      "hp": 85,
      "attack": 100,
      "defense": 60,
      "spAtk": 80,
      "spDef": 80,
      "speed": 150
    },
    "evolution": [
      {
        "dex": "101",
        "name": "Flager",
        "types": [
          "Fire"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/101Popkas.png"
      },
      {
        "dex": "102",
        "name": "Inflagetah",
        "types": [
          "Fire"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/102Popkas.png",
        "condition": "Fire Stone Fire Stone"
      },
      {
        "dex": "102_1",
        "name": "Mega Inflagetah",
        "types": [
          "Fire"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/102_1Popkas.png",
        "condition": "Inflagetite Mega Evolution"
      }
    ]
  },
  {
    "name": "Inflagetah",
    "id": "102",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon102.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/102Popkas.png",
    "types": [
      "Fire"
    ],
    "altForm": "Mega Inflagetah",
    "flavorText": "Inflagetah's [sic] are some of the fastest known Pokémon on earth, able to outrun even a Rapidash. They can reach speeds up to 200 MPH.",
    "stats": {
      "hp": 85,
      "attack": 100,
      "defense": 60,
      "spAtk": 80,
      "spDef": 80,
      "speed": 150
    },
    "evolution": [
      {
        "dex": "101",
        "name": "Flager",
        "types": [
          "Fire"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/101Popkas.png"
      },
      {
        "dex": "102",
        "name": "Inflagetah",
        "types": [
          "Fire"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/102Popkas.png",
        "condition": "Fire Stone Fire Stone"
      },
      {
        "dex": "102_1",
        "name": "Mega Inflagetah",
        "types": [
          "Fire"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/102_1Popkas.png",
        "condition": "Inflagetite Mega Evolution"
      }
    ]
  },
  {
    "name": "Chimical",
    "id": "103",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon103.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/103Popkas.png",
    "types": [
      "Fire",
      "Poison"
    ],
    "altForm": null,
    "flavorText": "A Pokémon said to be the product of genetic testing. The white spot on its back is its weak point.",
    "stats": {
      "hp": 70,
      "attack": 40,
      "defense": 50,
      "spAtk": 70,
      "spDef": 50,
      "speed": 50
    },
    "evolution": null
  },
  {
    "name": "Chimaconda",
    "id": "104",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon104.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/104Popkas.png",
    "types": [
      "Fire",
      "Poison"
    ],
    "altForm": null,
    "flavorText": "Normally passive unless provoked, CHIMACONDA inject their prey with a paralytic venom and then wrap it in their tails, squeezing the life out.",
    "stats": {
      "hp": 95,
      "attack": 80,
      "defense": 90,
      "spAtk": 100,
      "spDef": 100,
      "speed": 85
    },
    "evolution": null
  },
  {
    "name": "Tikiki",
    "id": "105",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon105.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/105Popkas.png",
    "types": [
      "Grass"
    ],
    "altForm": null,
    "flavorText": "It hides its true face behind a wooden mask. They will often convene in order to dance elaborate dances.",
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 55,
      "spAtk": 50,
      "spDef": 50,
      "speed": 70
    },
    "evolution": null
  },
  {
    "name": "Frikitiki",
    "id": "106",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon106.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/106Popkas.png",
    "types": [
      "Grass",
      "Fire"
    ],
    "altForm": null,
    "flavorText": "It produces deep bellows and thumps from within its mask that can be heard for miles. It can summon all the Tikiki in an area and together they make music by drumming on their masks.",
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 70,
      "spAtk": 90,
      "spDef": 65,
      "speed": 85
    },
    "evolution": null
  },
  {
    "name": "Unymph",
    "id": "107",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon107.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/107Popkas.png",
    "types": [
      "Bug"
    ],
    "altForm": null,
    "flavorText": "They inhabit mucky bogs and swamps. Although they are somewhat slow and weak in battle, they can extend their jaws rapidly to deliver a powerful blow.",
    "stats": {
      "hp": 45,
      "attack": 65,
      "defense": 75,
      "spAtk": 25,
      "spDef": 35,
      "speed": 20
    },
    "evolution": null
  },
  {
    "name": "Harptera-A",
    "id": "108",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon108.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/108Popkas.png",
    "types": [
      "Bug",
      "Flying"
    ],
    "altForm": null,
    "flavorText": null,
    "stats": null,
    "evolution": null
  },
  {
    "name": "Chicoatl",
    "id": "109",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon109.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/109Popkas.png",
    "types": [
      "Grass"
    ],
    "altForm": null,
    "flavorText": "Chicoatl are shy, but can be affectionate. They are said to be related to both dragon and bird Pokémon.",
    "stats": {
      "hp": 65,
      "attack": 45,
      "defense": 50,
      "spAtk": 70,
      "spDef": 50,
      "speed": 80
    },
    "evolution": null
  },
  {
    "name": "Quetzoral",
    "id": "110",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon110.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/110Popkas.png",
    "types": [
      "Grass",
      "Flying"
    ],
    "altForm": null,
    "flavorText": "Quetzoral often wrap themselves around long branches of trees and fall asleep. They dine on nectar from flowers.",
    "stats": {
      "hp": 80,
      "attack": 45,
      "defense": 65,
      "spAtk": 85,
      "spDef": 65,
      "speed": 90
    },
    "evolution": null
  },
  {
    "name": "Coatlith",
    "id": "111",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon111.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/111Popkas.png",
    "types": [
      "Grass",
      "Dragon"
    ],
    "altForm": null,
    "flavorText": "Early natives of BAYKAL worshipped Coatlith as gods. They are fiercely devoted to protecting nature, and will attack anyone, friend or foe, who defiles it.",
    "stats": {
      "hp": 110,
      "attack": 50,
      "defense": 70,
      "spAtk": 100,
      "spDef": 70,
      "speed": 100
    },
    "evolution": null
  },
  {
    "name": "Tracton",
    "id": "112",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon112.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/112Popkas.png",
    "types": [
      "Dragon",
      "Steel"
    ],
    "altForm": null,
    "flavorText": "A Mechanical Dragon POKéMON that is often used to help construction workers. Its jaws can crumple steel with ease.",
    "stats": {
      "hp": 85,
      "attack": 110,
      "defense": 70,
      "spAtk": 50,
      "spDef": 80,
      "speed": 100
    },
    "evolution": null
  },
  {
    "name": "Snopach",
    "id": "113",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon113.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/113Popkas.png",
    "types": [
      "Ice",
      "Rock"
    ],
    "altForm": null,
    "flavorText": "A Pokémon that roamed the tundra thousands of years ago. They used their small tusks to dig up berries and roots under the ice.",
    "stats": {
      "hp": 90,
      "attack": 80,
      "defense": 80,
      "spAtk": 50,
      "spDef": 40,
      "speed": 50
    },
    "evolution": null
  },
  {
    "name": "Dermafrost",
    "id": "114",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon114.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/114Popkas.png",
    "types": [
      "Ice",
      "Rock"
    ],
    "altForm": null,
    "flavorText": "It charges forward with the unstoppable force of a glacier, and its punch can shatter solid rock. They were hunted to extinction by early humans.",
    "stats": {
      "hp": 95,
      "attack": 115,
      "defense": 120,
      "spAtk": 60,
      "spDef": 70,
      "speed": 80
    },
    "evolution": null
  },
  {
    "name": "Slothohm",
    "id": "115",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon115.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/115Popkas.png",
    "types": [
      "Electric",
      "Rock"
    ],
    "altForm": null,
    "flavorText": "A very lazy Pokémon that lived thousands of years ago. They would climb to the top of trees and wait to be struck by lightning.",
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 50,
      "spAtk": 50,
      "spDef": 20,
      "speed": 70
    },
    "evolution": null
  },
  {
    "name": "Theriamp",
    "id": "116",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon116.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/116Popkas.png",
    "types": [
      "Electric",
      "Rock"
    ],
    "altForm": null,
    "flavorText": "An ancient Pokémon known for its lightning-fast strikes. It used its incredibly sharp claws to shave the bark off of trees.",
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 60,
      "spAtk": 60,
      "spDef": 80,
      "speed": 100
    },
    "evolution": null
  },
  {
    "name": "Titanice",
    "id": "117",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon117.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/117Popkas.png",
    "types": [
      "Ice"
    ],
    "altForm": null,
    "flavorText": "They migrate all over the ocean, congregating at the poles but occasionally moving to warmer waters. What lies beneath the surface is a mystery.",
    "stats": {
      "hp": 90,
      "attack": 90,
      "defense": 75,
      "spAtk": 65,
      "spDef": 55,
      "speed": 90
    },
    "evolution": null
  },
  {
    "name": "Frynai",
    "id": "118",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon118.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/118Popkas.png",
    "types": [
      "Water",
      "Steel"
    ],
    "altForm": null,
    "flavorText": "A favored Pokémon of Ninja clans. They propel themselves backwards through the water to attack with their sharp tails.",
    "stats": {
      "hp": 55,
      "attack": 68,
      "defense": 32,
      "spAtk": 40,
      "spDef": 37,
      "speed": 79
    },
    "evolution": null
  },
  {
    "name": "Saidine",
    "id": "119",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon119.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/119Popkas.png",
    "types": [
      "Water",
      "Steel"
    ],
    "altForm": null,
    "flavorText": "They are the bane of many fishermen as their bladed tails often cut fishing lines. They can change direction rapidly in the water.",
    "stats": {
      "hp": 75,
      "attack": 89,
      "defense": 55,
      "spAtk": 44,
      "spDef": 42,
      "speed": 91
    },
    "evolution": null
  },
  {
    "name": "Daikatuna",
    "id": "120",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon120.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/120Popkas.png",
    "types": [
      "Water",
      "Steel"
    ],
    "altForm": null,
    "flavorText": "It often wields Frynai or Saidine as weapons. The sword on its head is made from steel folded 10,000 times.",
    "stats": {
      "hp": 90,
      "attack": 118,
      "defense": 75,
      "spAtk": 53,
      "spDef": 50,
      "speed": 110
    },
    "evolution": null
  },
  {
    "name": "Selkid",
    "id": "121",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon121.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/121Popkas.png",
    "types": [
      "Water",
      "Fairy"
    ],
    "altForm": null,
    "flavorText": "They gather together on rocky shoals and sing together as a harmony. Their human-like voices can be misleading because they sound like a child lost at sea.",
    "stats": {
      "hp": 58,
      "attack": 32,
      "defense": 51,
      "spAtk": 66,
      "spDef": 73,
      "speed": 61
    },
    "evolution": [
      {
        "dex": "121",
        "name": "Selkid",
        "types": [
          "Water",
          "Fairy"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/121Popkas.png"
      },
      {
        "dex": "122",
        "name": "Syrentide",
        "types": [
          "Water",
          "Fairy"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/122Popkas.png",
        "condition": "Soothe Bell|Sooth_Bell Friendship Level up with high friendship"
      },
      {
        "dex": "122_1",
        "name": "Mega Syrentide",
        "types": [
          "Water",
          "Fairy"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/122_1Popkas.png",
        "condition": "Syrentideite Mega Evolution"
      }
    ]
  },
  {
    "name": "Mega Syrentide",
    "id": "122",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon122.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/122_1Popkas.png",
    "types": [
      "Water",
      "Fairy"
    ],
    "altForm": null,
    "flavorText": "Their song is hypnotic, and all who hear it are immobilized. Legends tell of shipwrecks that were caused when the sailors were captivated by a Syrentide's song.",
    "stats": {
      "hp": 98,
      "attack": 68,
      "defense": 108,
      "spAtk": 88,
      "spDef": 108,
      "speed": 88
    },
    "evolution": [
      {
        "dex": "121",
        "name": "Selkid",
        "types": [
          "Water",
          "Fairy"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/121Popkas.png"
      },
      {
        "dex": "122",
        "name": "Syrentide",
        "types": [
          "Water",
          "Fairy"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/122Popkas.png",
        "condition": "Soothe Bell|Sooth_Bell Friendship Level up with high friendship"
      },
      {
        "dex": "122_1",
        "name": "Mega Syrentide",
        "types": [
          "Water",
          "Fairy"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/122_1Popkas.png",
        "condition": "Syrentideite Mega Evolution"
      }
    ]
  },
  {
    "name": "Syrentide",
    "id": "122",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon122.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/122Popkas.png",
    "types": [
      "Water",
      "Fairy"
    ],
    "altForm": "Mega Syrentide",
    "flavorText": "Their song is hypnotic, and all who hear it are immobilized. Legends tell of shipwrecks that were caused when the sailors were captivated by a Syrentide's song.",
    "stats": {
      "hp": 98,
      "attack": 68,
      "defense": 108,
      "spAtk": 88,
      "spDef": 108,
      "speed": 88
    },
    "evolution": [
      {
        "dex": "121",
        "name": "Selkid",
        "types": [
          "Water",
          "Fairy"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/121Popkas.png"
      },
      {
        "dex": "122",
        "name": "Syrentide",
        "types": [
          "Water",
          "Fairy"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/122Popkas.png",
        "condition": "Soothe Bell|Sooth_Bell Friendship Level up with high friendship"
      },
      {
        "dex": "122_1",
        "name": "Mega Syrentide",
        "types": [
          "Water",
          "Fairy"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/122_1Popkas.png",
        "condition": "Syrentideite Mega Evolution"
      }
    ]
  },
  {
    "name": "Spritzee",
    "id": "123",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon123.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/123Popkas.png",
    "types": [
      "Fairy"
    ],
    "altForm": null,
    "flavorText": "In the past, rather than using perfume, royal ladies carried a SPRITZEE that would waft a fragrance they liked.",
    "stats": {
      "hp": 78,
      "attack": 52,
      "defense": 60,
      "spAtk": 63,
      "spDef": 65,
      "speed": 23
    },
    "evolution": null
  },
  {
    "name": "Aromatisse",
    "id": "124",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon124.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/124Popkas.png",
    "types": [
      "Fairy"
    ],
    "altForm": null,
    "flavorText": "Its scent is so overpowering that, unless a trainer happens to really enjoy the smell, he or she will have a hard time walking alongside it.",
    "stats": {
      "hp": 101,
      "attack": 72,
      "defense": 72,
      "spAtk": 99,
      "spDef": 89,
      "speed": 29
    },
    "evolution": null
  },
  {
    "name": "Miasmedic",
    "id": "125",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon125.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/125Popkas.png",
    "types": [
      "Fairy",
      "Poison"
    ],
    "altForm": null,
    "flavorText": "It has the ability to both cause and cure disease. Using its claws, it injects pathogens into its foes.",
    "stats": {
      "hp": 81,
      "attack": 102,
      "defense": 72,
      "spAtk": 79,
      "spDef": 99,
      "speed": 29
    },
    "evolution": null
  },
  {
    "name": "Winotinger",
    "id": "126",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon126.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/126Popkas.png",
    "types": [
      "Fairy",
      "Fighting"
    ],
    "altForm": null,
    "flavorText": "It combines illusion and trickery with physical strength. Because it can only be seen by drunk people, it was considered an imaginary Pokémon until very recently.",
    "stats": {
      "hp": 110,
      "attack": 80,
      "defense": 85,
      "spAtk": 105,
      "spDef": 85,
      "speed": 85
    },
    "evolution": null
  },
  {
    "name": "Winotinger",
    "id": "127",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon127.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/127Popkas.png",
    "types": [
      "Fairy",
      "Fighting"
    ],
    "altForm": null,
    "flavorText": "It combines illusion and trickery with physical strength. Because it can only be seen by drunk people, it was considered an imaginary Pokémon until very recently.",
    "stats": {
      "hp": 110,
      "attack": 80,
      "defense": 85,
      "spAtk": 105,
      "spDef": 85,
      "speed": 85
    },
    "evolution": null
  },
  {
    "name": "Duplicat",
    "id": "128",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon128.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/128Popkas.png",
    "types": [
      "Normal"
    ],
    "altForm": null,
    "flavorText": "This Pokémon has the ability to create an identical copy of itself or its opponent. These copies only last a few minutes before fading away.",
    "stats": {
      "hp": 58,
      "attack": 58,
      "defense": 58,
      "spAtk": 58,
      "spDef": 58,
      "speed": 58
    },
    "evolution": null
  },
  {
    "name": "Eevee",
    "id": "129",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon129.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/129Popkas.png",
    "types": [
      "Normal"
    ],
    "altForm": null,
    "flavorText": "An Eevee has an unstable genetic makeup that suddenly mutates due to its environment. Radiation from various stones causes this Pokémon to evolve.",
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 50,
      "spAtk": 45,
      "spDef": 65,
      "speed": 55
    },
    "evolution": null
  },
  {
    "name": "Vaporeon",
    "id": "130",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon130.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/130Popkas.png",
    "types": [
      "Water"
    ],
    "altForm": null,
    "flavorText": "Vaporeon underwent a spontaneous mutation and grew fins and gills that allow them to live underwater. They have the ability to freely control water.",
    "stats": {
      "hp": 130,
      "attack": 65,
      "defense": 60,
      "spAtk": 110,
      "spDef": 95,
      "speed": 65
    },
    "evolution": null
  },
  {
    "name": "Jolteon",
    "id": "131",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon131.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/131Popkas.png",
    "types": [
      "Electric"
    ],
    "altForm": null,
    "flavorText": "Its cells generate weak power that is amplified by its fur's static electricity to drop thunderbolts. The bristling fur is made of electrically charged needles.",
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "spAtk": 110,
      "spDef": 95,
      "speed": 130
    },
    "evolution": null
  },
  {
    "name": "Flareon",
    "id": "132",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon132.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/132Popkas.png",
    "types": [
      "Fire"
    ],
    "altForm": null,
    "flavorText": "Flareon's fluffy fur releases heat into the air so that its body does not get excessively hot. Its body temperature can rise to a maximum of 1,650 degrees F.",
    "stats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "spAtk": 95,
      "spDef": 110,
      "speed": 65
    },
    "evolution": null
  },
  {
    "name": "Espeon",
    "id": "133",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon133.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/133Popkas.png",
    "types": [
      "Psychic"
    ],
    "altForm": null,
    "flavorText": "An ESPEON is extremely loyal to any trainer it considers to be worthy. It is said to have developed precognitive powers to protect its trainer from harm.",
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "spAtk": 130,
      "spDef": 95,
      "speed": 110
    },
    "evolution": null
  },
  {
    "name": "Umbreon",
    "id": "134",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon134.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/134Popkas.png",
    "types": [
      "Dark"
    ],
    "altForm": null,
    "flavorText": "Umbreon evolved from exposure to the moon's energy pulses. It lurks in darkness and waits for its foes to move. The rings on its body glow when it leaps to attack.",
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 110,
      "spAtk": 60,
      "spDef": 130,
      "speed": 65
    },
    "evolution": null
  },
  {
    "name": "Leafeon",
    "id": "135",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon135.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/135Popkas.png",
    "types": [
      "Grass"
    ],
    "altForm": null,
    "flavorText": "Just like a plant, it uses photosynthesis. As a result, it is always enveloped in clear air.",
    "stats": {
      "hp": 65,
      "attack": 110,
      "defense": 130,
      "spAtk": 60,
      "spDef": 65,
      "speed": 95
    },
    "evolution": null
  },
  {
    "name": "Glaceon",
    "id": "136",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon136.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/136Popkas.png",
    "types": [
      "Ice"
    ],
    "altForm": null,
    "flavorText": "As a protective technique, it can completely freeze its fur to make its hairs stand like needles.",
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 110,
      "spAtk": 130,
      "spDef": 95,
      "speed": 65
    },
    "evolution": null
  },
  {
    "name": "Sylveon",
    "id": "137",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon137.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/137Popkas.png",
    "types": [
      "Fairy"
    ],
    "altForm": null,
    "flavorText": "It sends a soothing aura from its ribbonlike feelers to calm fights.",
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 65,
      "spAtk": 110,
      "spDef": 130,
      "speed": 60
    },
    "evolution": null
  },
  {
    "name": "Nucleon",
    "id": "138",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon138.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/138Popkas.png",
    "types": [
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "One of the only non-feral Nuclear Pokémon. It's theorized that its bond with its trainer when it was an Eevee allows it to stay in control.",
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 85,
      "spAtk": 115,
      "spDef": 115,
      "speed": 90
    },
    "evolution": null
  },
  {
    "name": "Ratsy",
    "id": "139",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon139.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/139Popkas.png",
    "types": [
      "Dark"
    ],
    "altForm": null,
    "flavorText": "They use the paint-like substance on their tails to mark their territory. They are considered pests as they will paint over brand new buildings.",
    "stats": {
      "hp": 50,
      "attack": 35,
      "defense": 40,
      "spAtk": 45,
      "spDef": 40,
      "speed": 50
    },
    "evolution": null
  },
  {
    "name": "Raffiti",
    "id": "140",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon140.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/140Popkas.png",
    "types": [
      "Dark"
    ],
    "altForm": null,
    "flavorText": "They spray paint to create elaborate signs that only other Raffiti can understand. Their adept knowledge of color theory has led some to consider them artists on par with humans.",
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 70,
      "spAtk": 80,
      "spDef": 70,
      "speed": 90
    },
    "evolution": null
  },
  {
    "name": "Gargryph",
    "id": "141",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon141.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/141Popkas.png",
    "types": [
      "Rock"
    ],
    "altForm": null,
    "flavorText": "They spend most of their time standing so still they are often mistaken for statues. They perch on the rooftops of Venesi City, guarding it from outside attackers.",
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 150,
      "spAtk": 85,
      "spDef": 75,
      "speed": 70
    },
    "evolution": null
  },
  {
    "name": "Masking",
    "id": "142",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon142.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/142Popkas.png",
    "types": [
      "Psychic"
    ],
    "altForm": null,
    "flavorText": "It is capable of disguising itself as anything it likes. Although it appears to be a bird Pokémon, this is just an illusion. No one has seen its true form.",
    "stats": {
      "hp": 45,
      "attack": 15,
      "defense": 60,
      "spAtk": 85,
      "spDef": 55,
      "speed": 75
    },
    "evolution": [
      {
        "dex": "142",
        "name": "Masking",
        "types": [
          "Psychic"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/142Popkas.png"
      },
      {
        "dex": "143",
        "name": "Dramsama",
        "types": [
          "Psychic",
          "Ghost"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/143Popkas.png",
        "condition": "Rare Candy Level 42"
      },
      {
        "dex": "143_1",
        "name": "Mega Dramsama",
        "types": [
          "Psychic",
          "Ghost"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/143_1Popkas.png",
        "condition": "Dramsamaite Mega Evolution"
      }
    ]
  },
  {
    "name": "Mega Dramsama",
    "id": "143",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon143.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/143_1Popkas.png",
    "types": [
      "Psychic",
      "Ghost"
    ],
    "altForm": null,
    "flavorText": "A sinister and vengeful Pokémon, it puts its foes into an eternal sleep and steals their souls to add to its tail.",
    "stats": {
      "hp": 85,
      "attack": 25,
      "defense": 70,
      "spAtk": 105,
      "spDef": 65,
      "speed": 95
    },
    "evolution": null
  },
  {
    "name": "Dramsama",
    "id": "143",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon143.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/143Popkas.png",
    "types": [
      "Psychic",
      "Ghost"
    ],
    "altForm": "Mega Dramsama",
    "flavorText": "A sinister and vengeful Pokémon, it puts its foes into an eternal sleep and steals their souls to add to its tail.",
    "stats": {
      "hp": 85,
      "attack": 25,
      "defense": 70,
      "spAtk": 105,
      "spDef": 65,
      "speed": 95
    },
    "evolution": null
  },
  {
    "name": "Antarki",
    "id": "144",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon144.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/144Popkas.png",
    "types": [
      "Ghost",
      "Fire"
    ],
    "altForm": null,
    "flavorText": "Said to be the ghost of a Pokémon that died before its time. It guides lost souls into the afterlife using the light of its small star.",
    "stats": {
      "hp": 85,
      "attack": 45,
      "defense": 70,
      "spAtk": 125,
      "spDef": 90,
      "speed": 105
    },
    "evolution": null
  },
  {
    "name": "Nuclear Chupacho",
    "id": "145",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon145.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N145Popkas.png",
    "types": [
      "Poison",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "It comes out at night to suck the blood from sleeping prey. Its needles contain a numbing toxin that can incapacitate an enemy in minutes.",
    "stats": {
      "hp": 68,
      "attack": 77,
      "defense": 55,
      "spAtk": 30,
      "spDef": 35,
      "speed": 75
    },
    "evolution": null
  },
  {
    "name": "Chupacho",
    "id": "145",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon145.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/145Popkas.png",
    "types": [
      "Poison"
    ],
    "altForm": "Nuclear Chupacho",
    "flavorText": "It comes out at night to suck the blood from sleeping prey. Its needles contain a numbing toxin that can incapacitate an enemy in minutes.",
    "stats": {
      "hp": 68,
      "attack": 77,
      "defense": 55,
      "spAtk": 30,
      "spDef": 35,
      "speed": 75
    },
    "evolution": null
  },
  {
    "name": "Nuclear Luchabra",
    "id": "146",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon146.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N146Popkas.png",
    "types": [
      "Poison",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "It does not understand the meaning of \"mercy\" and will ruthlessly attack with deadly toxins. It can shoot poisonous spines from its back.",
    "stats": {
      "hp": 110,
      "attack": 120,
      "defense": 85,
      "spAtk": 60,
      "spDef": 85,
      "speed": 75
    },
    "evolution": null
  },
  {
    "name": "Luchabra",
    "id": "146",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon146.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/146Popkas.png",
    "types": [
      "Poison",
      "Fighting"
    ],
    "altForm": "Nuclear Luchabra",
    "flavorText": "It does not understand the meaning of \"mercy\" and will ruthlessly attack with deadly toxins. It can shoot poisonous spines from its back.",
    "stats": {
      "hp": 110,
      "attack": 120,
      "defense": 85,
      "spAtk": 60,
      "spDef": 85,
      "speed": 75
    },
    "evolution": null
  },
  {
    "name": "Linkite",
    "id": "147",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon147.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/147Popkas.png",
    "types": [
      "Ghost"
    ],
    "altForm": null,
    "flavorText": "The spirit of a Pokémon that died inside its Poké Ball. It has forgotten its original appearance so it takes the form of a Substitute decoy.",
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 25,
      "spAtk": 20,
      "spDef": 50,
      "speed": 30
    },
    "evolution": null
  },
  {
    "name": "Chainite",
    "id": "148",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon148.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/148Popkas.png",
    "types": [
      "Ghost",
      "Dark"
    ],
    "altForm": null,
    "flavorText": "A malicious and dangerous Pokémon, it seeks revenge against the trainer who abandoned it. Its shackles were reinforced in order to keep its violent nature under control.",
    "stats": {
      "hp": 95,
      "attack": 130,
      "defense": 70,
      "spAtk": 80,
      "spDef": 60,
      "speed": 60
    },
    "evolution": null
  },
  {
    "name": "Pufluff",
    "id": "149",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon149.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/149Popkas.png",
    "types": [
      "Ice",
      "Fairy"
    ],
    "altForm": null,
    "flavorText": "It constantly wraps itself in its long tail to protect it from the cold. Despite this, it always seems to shiver as if it is freezing.",
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 45,
      "spAtk": 60,
      "spDef": 50,
      "speed": 52
    },
    "evolution": null
  },
  {
    "name": "Alpico",
    "id": "150",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon150.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/150Popkas.png",
    "types": [
      "Ice",
      "Fairy"
    ],
    "altForm": null,
    "flavorText": "Its two tails are coated with a waxy substance that allows it to glide over snow and ice. They are often seen hurtling down mountainsides at high speeds.",
    "stats": {
      "hp": 75,
      "attack": 60,
      "defense": 70,
      "spAtk": 110,
      "spDef": 78,
      "speed": 132
    },
    "evolution": null
  },
  {
    "name": "Anderind",
    "id": "151",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon151.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/151Popkas.png",
    "types": [
      "Ice",
      "Ground"
    ],
    "altForm": null,
    "flavorText": "Its eyes are covered by a shield that protects it from blowing snow and ice. The one that can perform the wildest flips and tricks is deemed the leader.",
    "stats": {
      "hp": 90,
      "attack": 127,
      "defense": 100,
      "spAtk": 60,
      "spDef": 75,
      "speed": 78
    },
    "evolution": null
  },
  {
    "name": "Colarva",
    "id": "152",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon152.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/152Popkas.png",
    "types": [
      "Bug",
      "Ice"
    ],
    "altForm": null,
    "flavorText": "The older they get, the sharper the ice spikes on their back become. Stepping on one buried under the snow is an unpleasant experience.",
    "stats": {
      "hp": 45,
      "attack": 43,
      "defense": 55,
      "spAtk": 60,
      "spDef": 41,
      "speed": 45
    },
    "evolution": null
  },
  {
    "name": "Frosulo",
    "id": "153",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon153.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/153Popkas.png",
    "types": [
      "Bug",
      "Ice"
    ],
    "altForm": null,
    "flavorText": "It encases itself in a hard shell of unmelting ice and hangs upside-down from the ceilings of Lanthanite Cave, awaiting evolution.",
    "stats": {
      "hp": 55,
      "attack": 45,
      "defense": 85,
      "spAtk": 90,
      "spDef": 35,
      "speed": 60
    },
    "evolution": null
  },
  {
    "name": "Frosthra",
    "id": "154",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon154.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/154Popkas.png",
    "types": [
      "Bug",
      "Ice"
    ],
    "altForm": null,
    "flavorText": "They leave a shimmering trail of ice crystals behind them as they fly. They are prized in many regions for their rarity and beauty.",
    "stats": {
      "hp": 85,
      "attack": 55,
      "defense": 60,
      "spAtk": 140,
      "spDef": 95,
      "speed": 115
    },
    "evolution": null
  },
  {
    "name": "Fafurr",
    "id": "155",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon155.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/155Popkas.png",
    "types": [
      "Ice",
      "Dragon"
    ],
    "altForm": null,
    "flavorText": "This Pokémon's shaggy coat keeps it warm in freezing weather. They are sought after by hunters for their silky fur.",
    "stats": {
      "hp": 90,
      "attack": 75,
      "defense": 45,
      "spAtk": 60,
      "spDef": 70,
      "speed": 60
    },
    "evolution": null
  },
  {
    "name": "Fafninter",
    "id": "156",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon156.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/156Popkas.png",
    "types": [
      "Ice",
      "Dragon"
    ],
    "altForm": null,
    "flavorText": "A gentle guardian of the mountains, this Pokémon will often escort lost travelers and Pokémon to safety by giving them a ride on its back.",
    "stats": {
      "hp": 120,
      "attack": 110,
      "defense": 77,
      "spAtk": 95,
      "spDef": 98,
      "speed": 90
    },
    "evolution": null
  },
  {
    "name": "Shrimputy",
    "id": "157",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon157.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/157Popkas.png",
    "types": [
      "Water",
      "Fire"
    ],
    "altForm": null,
    "flavorText": "It is able to fire a barrage of superheated blasts from its cannon. Despite its small size, it is a very capable predator.",
    "stats": {
      "hp": 43,
      "attack": 50,
      "defense": 65,
      "spAtk": 80,
      "spDef": 35,
      "speed": 35
    },
    "evolution": null
  },
  {
    "name": "Krilvolver",
    "id": "158",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon158.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/158Popkas.png",
    "types": [
      "Water",
      "Fire"
    ],
    "altForm": null,
    "flavorText": "Called \"The Ranger of the Sea\". Its reaction times are nigh-instantaneous and its aim with its pistol is excellent due to its highly advanced eyesight.",
    "stats": {
      "hp": 73,
      "attack": 90,
      "defense": 85,
      "spAtk": 120,
      "spDef": 45,
      "speed": 85
    },
    "evolution": null
  },
  {
    "name": "Lavent",
    "id": "159",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon159.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/159Popkas.png",
    "types": [
      "Fire",
      "Dragon"
    ],
    "altForm": null,
    "flavorText": "It lives within igneous crevasses at the bottom of the sea and absorbs geothermal energy. When prey comes close, it spits out scalding hot water.",
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 70,
      "spAtk": 105,
      "spDef": 70,
      "speed": 80
    },
    "evolution": null
  },
  {
    "name": "Swabone",
    "id": "160",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon160.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/160Popkas.png",
    "types": [
      "Ghost",
      "Fighting"
    ],
    "altForm": null,
    "flavorText": "A favorite Pokémon of pirates. The bandanna it wears indicates which ship's crew it belongs to. It craves treasure and will hoard any gold and jewels it finds.",
    "stats": {
      "hp": 40,
      "attack": 85,
      "defense": 55,
      "spAtk": 50,
      "spDef": 55,
      "speed": 60
    },
    "evolution": null
  },
  {
    "name": "Skelerogue",
    "id": "161",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon161.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/161Popkas.png",
    "types": [
      "Ghost",
      "Fighting"
    ],
    "altForm": null,
    "flavorText": "It requires seemingly no sustenance such as food or air. Although it can't swim, it will walk across the bottom of the sea until it makes it to shore.",
    "stats": {
      "hp": 55,
      "attack": 105,
      "defense": 65,
      "spAtk": 60,
      "spDef": 65,
      "speed": 70
    },
    "evolution": null
  },
  {
    "name": "Navighast",
    "id": "162",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon162.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/162Popkas.png",
    "types": [
      "Ghost",
      "Fighting"
    ],
    "altForm": null,
    "flavorText": "Said to be the spirit of a mad pirate captain reincarnated as a Pokémon. Its spectral flames are icy cold to the touch.",
    "stats": {
      "hp": 80,
      "attack": 115,
      "defense": 75,
      "spAtk": 90,
      "spDef": 75,
      "speed": 90
    },
    "evolution": null
  },
  {
    "name": "Stenowatt",
    "id": "163",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon163.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/163Popkas.png",
    "types": [
      "Electric"
    ],
    "altForm": null,
    "flavorText": "It flaps its wings to generate electricity, which it stores in its tail. It channels the stored energy into its legs to run faster.",
    "stats": {
      "hp": 75,
      "attack": 85,
      "defense": 60,
      "spAtk": 75,
      "spDef": 80,
      "speed": 110
    },
    "evolution": null
  },
  {
    "name": "Jungore",
    "id": "164",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon164.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/164Popkas.png",
    "types": [
      "Fighting",
      "Rock"
    ],
    "altForm": null,
    "flavorText": "Its hide is studded with pieces of solid gold. Because of how valuable this Pokémon is on the black market, its population dwindled until it became extinct in the wild.",
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 50,
      "spAtk": 50,
      "spDef": 50,
      "speed": 40
    },
    "evolution": null
  },
  {
    "name": "Majungold",
    "id": "165",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon165.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/165Popkas.png",
    "types": [
      "Fighting",
      "Rock"
    ],
    "altForm": null,
    "flavorText": "Its enormously heavy arms are made of solid gold. This Pokémon has developed extraordinarily strong muscles to hold them up.",
    "stats": {
      "hp": 125,
      "attack": 135,
      "defense": 75,
      "spAtk": 70,
      "spDef": 75,
      "speed": 60
    },
    "evolution": null
  },
  {
    "name": "Nuclear Hagoop",
    "id": "166",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon166.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N166Popkas.png",
    "types": [
      "Poison",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "Its body exudes a sticky slime that protects its soft flesh. It traps prey in the slime and delivers a lightning shock through its whiskers.",
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 45,
      "spAtk": 85,
      "spDef": 105,
      "speed": 50
    },
    "evolution": null
  },
  {
    "name": "Hagoop",
    "id": "166",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon166.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/166Popkas.png",
    "types": [
      "Poison",
      "Electric"
    ],
    "altForm": "Nuclear Hagoop",
    "flavorText": "Its body exudes a sticky slime that protects its soft flesh. It traps prey in the slime and delivers a lightning shock through its whiskers.",
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 45,
      "spAtk": 85,
      "spDef": 105,
      "speed": 50
    },
    "evolution": null
  },
  {
    "name": "Nuclear Haagross",
    "id": "167",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon167.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N167Popkas.png",
    "types": [
      "Poison",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "The slime covering its body is toxic and corrosive. Between that and its electric bite, it has no known predators. They proliferate in contaminated areas.",
    "stats": {
      "hp": 80,
      "attack": 65,
      "defense": 65,
      "spAtk": 105,
      "spDef": 125,
      "speed": 70
    },
    "evolution": null
  },
  {
    "name": "Haagross",
    "id": "167",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon167.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/167Popkas.png",
    "types": [
      "Poison",
      "Electric"
    ],
    "altForm": null,
    "flavorText": "The slime covering its body is toxic and corrosive. Between that and its electric bite, it has no known predators. They proliferate in contaminated areas.",
    "stats": {
      "hp": 80,
      "attack": 65,
      "defense": 65,
      "spAtk": 105,
      "spDef": 125,
      "speed": 70
    },
    "evolution": null
  },
  {
    "name": "Xenomite",
    "id": "168",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon168.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/168Popkas.png",
    "types": [
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "A species that spontaneously appeared in irradiated zones. It is thought to have hatched from a corrupted egg.",
    "stats": {
      "hp": 66,
      "attack": 44,
      "defense": 56,
      "spAtk": 76,
      "spDef": 74,
      "speed": 64
    },
    "evolution": null
  },
  {
    "name": "Xenogen",
    "id": "169",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon169.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/169Popkas.png",
    "types": [
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "A bizarre life form which thrives in irradiated fields of nuclear waste. It is a parasitic creature that latches on to any prey and suck out its life force.",
    "stats": {
      "hp": 76,
      "attack": 44,
      "defense": 76,
      "spAtk": 91,
      "spDef": 89,
      "speed": 74
    },
    "evolution": null
  },
  {
    "name": "Xenoqueen",
    "id": "170",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon170.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/170Popkas.png",
    "types": [
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "It is known to spit radioactive acid capable of melting through steel. It is a ruthless predator that will attack any living creature, human or Pokémon.",
    "stats": {
      "hp": 96,
      "attack": 44,
      "defense": 96,
      "spAtk": 116,
      "spDef": 114,
      "speed": 84
    },
    "evolution": null
  },
  {
    "name": "Hazma",
    "id": "171",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon171.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/171Popkas.png",
    "types": [
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "They appear in the aftermath of nuclear fallout. They feed on radiation and can clean an irradiated area over time.",
    "stats": {
      "hp": 106,
      "attack": 54,
      "defense": 88,
      "spAtk": 66,
      "spDef": 92,
      "speed": 44
    },
    "evolution": null
  },
  {
    "name": "Geigeroach",
    "id": "172",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon172.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/172Popkas.png",
    "types": [
      "Bug",
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": "Its simple body structure allows it to survive intense levels of radiation. They multiply rapidly and will eat anything in sight.",
    "stats": {
      "hp": 66,
      "attack": 54,
      "defense": 104,
      "spAtk": 92,
      "spDef": 66,
      "speed": 88
    },
    "evolution": null
  },
  {
    "name": "Minicorn",
    "id": "173",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon173.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/173Popkas.png",
    "types": [
      "Fairy",
      "Normal"
    ],
    "altForm": null,
    "flavorText": "Its small stature, gentle demeanor and delicate features make it beloved by young children. A popular line of toys is based on it.",
    "stats": {
      "hp": 50,
      "attack": 68,
      "defense": 52,
      "spAtk": 52,
      "spDef": 50,
      "speed": 88
    },
    "evolution": null
  },
  {
    "name": "Mega Kiricorn",
    "id": "174",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon174.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/174_1Popkas.png",
    "types": [
      "Fairy",
      "Normal"
    ],
    "altForm": null,
    "flavorText": "The hair in its mane is made of gossamer-thin threads and is impossibly soft. It will only allow those it trusts to touch it.",
    "stats": {
      "hp": 75,
      "attack": 103,
      "defense": 72,
      "spAtk": 67,
      "spDef": 75,
      "speed": 118
    },
    "evolution": [
      {
        "dex": "173",
        "name": "Minicorn",
        "types": [
          "Fairy",
          "Normal"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/173Popkas.png"
      },
      {
        "dex": "174",
        "name": "Kiricorn",
        "types": [
          "Fairy",
          "Normal"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/174Popkas.png",
        "condition": "Shiny Stone Shiny Stone"
      },
      {
        "dex": "174_1",
        "name": "Mega Kiricorn",
        "types": [
          "Fairy",
          "Normal"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/174_1Popkas.png",
        "condition": "Kiricornite Mega Evolution"
      }
    ]
  },
  {
    "name": "Kiricorn",
    "id": "174",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon174.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/174Popkas.png",
    "types": [
      "Fairy",
      "Normal"
    ],
    "altForm": "Mega Kiricorn",
    "flavorText": "The hair in its mane is made of gossamer-thin threads and is impossibly soft. It will only allow those it trusts to touch it.",
    "stats": {
      "hp": 75,
      "attack": 103,
      "defense": 72,
      "spAtk": 67,
      "spDef": 75,
      "speed": 118
    },
    "evolution": [
      {
        "dex": "173",
        "name": "Minicorn",
        "types": [
          "Fairy",
          "Normal"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/173Popkas.png"
      },
      {
        "dex": "174",
        "name": "Kiricorn",
        "types": [
          "Fairy",
          "Normal"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/174Popkas.png",
        "condition": "Shiny Stone Shiny Stone"
      },
      {
        "dex": "174_1",
        "name": "Mega Kiricorn",
        "types": [
          "Fairy",
          "Normal"
        ],
        "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Mega/174_1Popkas.png",
        "condition": "Kiricornite Mega Evolution"
      }
    ]
  },
  {
    "name": "Oblivicorn",
    "id": "175",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon175.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/175Popkas.png",
    "types": [
      "Fairy",
      "Dark"
    ],
    "altForm": null,
    "flavorText": "Its powers are strongest at night when the moon is not visible. Only a veteran trainer can tame one well enough to ride it.",
    "stats": {
      "hp": 75,
      "attack": 123,
      "defense": 67,
      "spAtk": 67,
      "spDef": 65,
      "speed": 113
    },
    "evolution": null
  },
  {
    "name": "Luxi",
    "id": "176",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon176.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/176Popkas.png",
    "types": [
      "Dragon",
      "Fairy"
    ],
    "altForm": null,
    "flavorText": "Simply being around a Luxi is said to increase one's fortune. Ceramic statues of them are good luck charms.",
    "stats": {
      "hp": 60,
      "attack": 30,
      "defense": 40,
      "spAtk": 50,
      "spDef": 60,
      "speed": 40
    },
    "evolution": null
  },
  {
    "name": "Luxor",
    "id": "177",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon177.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/177Popkas.png",
    "types": [
      "Dragon",
      "Fairy"
    ],
    "altForm": null,
    "flavorText": "It polishes its jade tail until it glimmers with lustrous sheen. A clipping of this Pokémon's hair is said to bring good luck for 30 days.",
    "stats": {
      "hp": 70,
      "attack": 40,
      "defense": 50,
      "spAtk": 60,
      "spDef": 70,
      "speed": 50
    },
    "evolution": null
  },
  {
    "name": "Luxelong",
    "id": "178",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon178.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/178Popkas.png",
    "types": [
      "Dragon",
      "Fairy"
    ],
    "altForm": null,
    "flavorText": "A Pokémon so rare and gentle, simply seeing one is said to bless someone with good fortune for a whole year.",
    "stats": {
      "hp": 100,
      "attack": 70,
      "defense": 80,
      "spAtk": 90,
      "spDef": 100,
      "speed": 80
    },
    "evolution": null
  },
  {
    "name": "Praseopunk",
    "id": "179",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon179.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/179Popkas.png",
    "types": [
      "Psychic",
      "Electric"
    ],
    "altForm": null,
    "flavorText": "A mysterious life-form that emerged one day out of a computer. When it unites with its twin, its powers multiply in strength.",
    "stats": {
      "hp": 85,
      "attack": 80,
      "defense": 85,
      "spAtk": 100,
      "spDef": 70,
      "speed": 80
    },
    "evolution": null
  },
  {
    "name": "Neopunk",
    "id": "180",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon180.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/180Popkas.png",
    "types": [
      "Psychic",
      "Electric"
    ],
    "altForm": null,
    "flavorText": "A highly intelligent Pokémon capable of traveling through cyberspace. Found in pairs alongside its twin, PRASEOPUNK.",
    "stats": {
      "hp": 65,
      "attack": 100,
      "defense": 65,
      "spAtk": 120,
      "spDef": 60,
      "speed": 90
    },
    "evolution": null
  },
  {
    "name": "Sheebit",
    "id": "181",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon181.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/181Popkas.png",
    "types": [
      "Ground"
    ],
    "altForm": null,
    "flavorText": "These Pokémon live in packs in mountainous regions. They will often headbutt each other in order to improve their strength.",
    "stats": {
      "hp": 62,
      "attack": 62,
      "defense": 48,
      "spAtk": 38,
      "spDef": 42,
      "speed": 48
    },
    "evolution": null
  },
  {
    "name": "Terrabbit",
    "id": "182",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon182.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/182Popkas.png",
    "types": [
      "Ground"
    ],
    "altForm": null,
    "flavorText": "It uses its large, flexible tails to balance itself while it deals a series of rapid kicks and punches to its opponent. Its highly sensitive ears can detect predators from very far away.",
    "stats": {
      "hp": 76,
      "attack": 84,
      "defense": 70,
      "spAtk": 60,
      "spDef": 66,
      "speed": 64
    },
    "evolution": null
  },
  {
    "name": "Laissure",
    "id": "183",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon183.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/183Popkas.png",
    "types": [
      "Ground"
    ],
    "altForm": null,
    "flavorText": "A mighty Pokémon that is spoken of in legends. It causes earthquakes by pounding the ground with its massive tails.",
    "stats": {
      "hp": 105,
      "attack": 125,
      "defense": 100,
      "spAtk": 80,
      "spDef": 95,
      "speed": 95
    },
    "evolution": null
  },
  {
    "name": "Volchik",
    "id": "184",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon184.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/184Popkas.png",
    "types": [
      "Electric",
      "Flying"
    ],
    "altForm": null,
    "flavorText": "They gather together during thunderstorms. Their chirping sounds like static electricity.",
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 50,
      "spAtk": 65,
      "spDef": 40,
      "speed": 55
    },
    "evolution": null
  },
  {
    "name": "Voltasu",
    "id": "185",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon185.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/185Popkas.png",
    "types": [
      "Electric",
      "Flying"
    ],
    "altForm": null,
    "flavorText": "It perches on rocky outcroppings and looks at the sky for many hours. They can foretell changes in the weather.",
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 65,
      "spAtk": 90,
      "spDef": 55,
      "speed": 90
    },
    "evolution": null
  },
  {
    "name": "Yatagaryu",
    "id": "186",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon186.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/186Popkas.png",
    "types": [
      "Electric",
      "Dragon"
    ],
    "altForm": null,
    "flavorText": "A fearsome Pokémon told about in legends. It has the power to summon thunderstorms at will.",
    "stats": {
      "hp": 90,
      "attack": 90,
      "defense": 85,
      "spAtk": 130,
      "spDef": 85,
      "speed": 120
    },
    "evolution": null
  },
  {
    "name": "Devimp",
    "id": "187",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon187.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/187Popkas.png",
    "types": [
      "Fire",
      "Dark"
    ],
    "altForm": null,
    "flavorText": "A Pokémon that is said to come from a separate plane of existence. It is very curious about the world around it and often gets into mischief as a result.",
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 55,
      "spAtk": 30,
      "spDef": 45,
      "speed": 40
    },
    "evolution": null
  },
  {
    "name": "Fallengel",
    "id": "188",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon188.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/188Popkas.png",
    "types": [
      "Fire",
      "Dark"
    ],
    "altForm": null,
    "flavorText": "It acts like a soldier, obeying orders without hesitation. It seems to have no moral compass and will do whatever its master commands.",
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 75,
      "spAtk": 35,
      "spDef": 55,
      "speed": 55
    },
    "evolution": null
  },
  {
    "name": "Beliaddon",
    "id": "189",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon189.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/189Popkas.png",
    "types": [
      "Fire",
      "Dark"
    ],
    "altForm": null,
    "flavorText": "Its kind came out of a fiery chasm which contained an otherworldly portal. A furnace hotter than the sun burns within its chest. If it burns you, the pain will never fade.",
    "stats": {
      "hp": 115,
      "attack": 145,
      "defense": 100,
      "spAtk": 80,
      "spDef": 90,
      "speed": 70
    },
    "evolution": null
  },
  {
    "name": "Seikamater",
    "id": "190",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon190.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/190Popkas.png",
    "types": [
      "Bug",
      "Normal"
    ],
    "altForm": null,
    "flavorText": "The Queen of all bugs in Tandor. She lurks deep within the Anthell, sleeping for a year in between broods.",
    "stats": {
      "hp": 155,
      "attack": 95,
      "defense": 90,
      "spAtk": 105,
      "spDef": 90,
      "speed": 65
    },
    "evolution": null
  },
  {
    "name": "Garlikid",
    "id": "191",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon191.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/191Popkas.png",
    "types": [
      "Grass",
      "Fighting"
    ],
    "altForm": null,
    "flavorText": "Garlikid believes itself to be a savior of all Pokémonkind. It will pick fights with anyone it considers villainous.",
    "stats": {
      "hp": 90,
      "attack": 115,
      "defense": 85,
      "spAtk": 105,
      "spDef": 90,
      "speed": 115
    },
    "evolution": null
  },
  {
    "name": "Baitatao",
    "id": "192",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon192.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/192Popkas.png",
    "types": [
      "Water",
      "Fire"
    ],
    "altForm": null,
    "flavorText": "Called the \"Boiling Wrath\". Heat from its scales causes the water around it to boil. It attacks ships, melting the hull upon contact.",
    "stats": {
      "hp": 90,
      "attack": 70,
      "defense": 110,
      "spAtk": 135,
      "spDef": 100,
      "speed": 105
    },
    "evolution": null
  },
  {
    "name": "Leviathao",
    "id": "193",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon193.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/193Popkas.png",
    "types": [
      "Water",
      "Ice"
    ],
    "altForm": null,
    "flavorText": "Called the \"Unstoppable Spear\". The ice horn on its head can easily penetrate solid steel. It battles Baitatao and Krakanao for dominance over the sea.",
    "stats": {
      "hp": 125,
      "attack": 100,
      "defense": 115,
      "spAtk": 85,
      "spDef": 100,
      "speed": 85
    },
    "evolution": null
  },
  {
    "name": "Krakanao",
    "id": "194",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon194.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/194Popkas.png",
    "types": [
      "Water",
      "Dark"
    ],
    "altForm": null,
    "flavorText": "Called the \"Inescapable Maelstrom\". It causes massive whirlpools that drag everything - ships, Pokémon and people alike - into its bottomless maw.",
    "stats": {
      "hp": 90,
      "attack": 145,
      "defense": 90,
      "spAtk": 70,
      "spDef": 120,
      "speed": 95
    },
    "evolution": null
  },
  {
    "name": "Lanthan",
    "id": "195",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon195.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/195Popkas.png",
    "types": [
      "Ground",
      "Steel"
    ],
    "altForm": null,
    "flavorText": "Legends say that it helped form part of the Tandor region. Along with its brothers Actan and Heatran, it placed metallic ores in the planet's crust.",
    "stats": {
      "hp": 110,
      "attack": 106,
      "defense": 130,
      "spAtk": 70,
      "spDef": 109,
      "speed": 77
    },
    "evolution": null
  },
  {
    "name": "Nuclear Actan",
    "id": "196",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon196.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Nuclear/N196Popkas.png",
    "types": [
      "Nuclear",
      "Steel"
    ],
    "altForm": null,
    "flavorText": "One of the legendary Pokémon that formed the Tandor region. It taught humans about the use of radioactive metals.",
    "stats": {
      "hp": 96,
      "attack": 144,
      "defense": 96,
      "spAtk": 73,
      "spDef": 94,
      "speed": 97
    },
    "evolution": null
  },
  {
    "name": "Actan",
    "id": "196",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon196.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/196Popkas.png",
    "types": [
      "Dark",
      "Steel"
    ],
    "altForm": "Nuclear Actan",
    "flavorText": "One of the legendary Pokémon that formed the Tandor region. It taught humans about the use of radioactive metals.",
    "stats": {
      "hp": 96,
      "attack": 144,
      "defense": 96,
      "spAtk": 73,
      "spDef": 94,
      "speed": 97
    },
    "evolution": null
  },
  {
    "name": "Gamma Urayne",
    "id": "197",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon197.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/197Popkas.png",
    "types": [
      "Nuclear"
    ],
    "altForm": null,
    "flavorText": null,
    "stats": null,
    "evolution": null
  },
  {
    "name": "Alpha Urayne",
    "id": "197",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon197.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/197Popkas.png",
    "types": [
      "Nuclear"
    ],
    "altForm": "Gamma Urayne",
    "flavorText": null,
    "stats": null,
    "evolution": null
  },
  {
    "name": "Urayne",
    "id": "197",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon197.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/197Popkas.png",
    "types": [
      "Nuclear"
    ],
    "altForm": "Alpha Urayne",
    "flavorText": "A legendary Pokémon born in a nuclear disaster. It has to consume radioactive materials in order to function. Without them, it will enter a dormant state.",
    "stats": {
      "hp": 82,
      "attack": 120,
      "defense": 86,
      "spAtk": 134,
      "spDef": 84,
      "speed": 102
    },
    "evolution": null
  },
  {
    "name": "Aotius",
    "id": "198",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon198.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/198Popkas.png",
    "types": [
      "Flying",
      "Fire"
    ],
    "altForm": null,
    "flavorText": "W H I T E L I G H T S H I N E S",
    "stats": {
      "hp": 110,
      "attack": 100,
      "defense": 100,
      "spAtk": 130,
      "spDef": 160,
      "speed": 80
    },
    "evolution": null
  },
  {
    "name": "Mutios",
    "id": "199",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon199.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/199Popkas.png",
    "types": [
      "Ghost",
      "Water"
    ],
    "altForm": null,
    "flavorText": "B L A C K S H A D E P R O T E C T S",
    "stats": {
      "hp": 110,
      "attack": 100,
      "defense": 120,
      "spAtk": 110,
      "spDef": 160,
      "speed": 100
    },
    "evolution": null
  },
  {
    "name": "Zephy",
    "id": "200",
    "sprite": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Sprites/Icon200.gif",
    "artwork": "https://raw.githubusercontent.com/infinitel8p/PokeDexSprites/main/Uranium/Pokemon/200Popkas.png",
    "types": [
      "Electric",
      "Ice"
    ],
    "altForm": null,
    "flavorText": "'A mysterious Pokemon that appears to be a cross between PLUSLE and ARTICUNO. In legends, it visited artists and gave them ideas for their next masterpiece",
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "spAtk": 100,
      "spDef": 100,
      "speed": 100
    },
    "evolution": null
  }
];
