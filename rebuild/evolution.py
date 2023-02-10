import requests

pokemon = "charizard"

# Make API request to get the species data
pokemon_search = requests.get(
    "https://pokeapi.co/api/v2/pokemon-species/" + pokemon.lower())
pokemon_data = pokemon_search.json()

# Get the URL for the evolution chain
pokemon_evolution_chain_url = pokemon_data["evolution_chain"]["url"]

# Make API request to get the evolution chain data
pokemon_evolution_search = requests.get(pokemon_evolution_chain_url)
pokemon_evolution_chain = pokemon_evolution_search.json()

evolution_chain = []


def print_evolution_chain(evolution_data, evolution_chain=evolution_chain):
    evolution_chain.append(evolution_data["species"]["name"])

    if len(evolution_data["evolves_to"]) == 0:
        return
    else:
        for evolution in evolution_data["evolves_to"]:
            if len(evolution["evolution_details"]) == 0:
                continue
            if evolution["evolution_details"][0]["min_level"] is not None:
                evolution_chain.append(
                    f"Level {evolution['evolution_details'][0]['min_level']}")
            print_evolution_chain(evolution, evolution_chain)
    return (" > ".join(evolution_chain))


print(print_evolution_chain(pokemon_evolution_chain["chain"]))
