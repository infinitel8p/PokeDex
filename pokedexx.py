from pokedex import pokedex
import urllib.request
from uranium import *

pokedex = pokedex.Pokedex(
    version='v1', user_agent='ExampleApp (https://example.com, v2.0.1)')

german_poke_list = r"src/pokemonlist.txt"
english_poke_list = r"src/pokemonlisten.txt"

# Pokedex
# Translate Evolution Stages to German Names


def Translator(suchbegriff):
    with open(english_poke_list, 'r') as full_english_names:
        english_lines = full_english_names.read().splitlines()
        for lines in english_lines:
            if suchbegriff in lines:
                pokemon_id = lines.rstrip(suchbegriff)
    with open(german_poke_list, 'r') as full_german_names:
        german_lines = full_german_names.read().splitlines()
        for lines in german_lines:
            if pokemon_id in lines:
                german_name = lines.lstrip(pokemon_id)
                return german_name


def search(pokemon_search_input):
    # Check selected language (gets written in support.py to settings.txt)
    last_language = open("src/settings.txt", "r")
    if last_language.read() == "english":
        current_languge = "english"
        last_language.close()
    last_language = open("src/settings.txt", "r")
    if last_language.read() == "german":
        current_languge = "german"
        last_language.close()
    # set pokemon information language to selected language
    english_language = [
        f"Pokémon '{pokemon_search_input}' could not be found!"]
    german_language = [
        f"Pokémon '{pokemon_search_input}' konnte nicht gefunden werden!"]
    if current_languge == "english":
        language = english_language
    if current_languge == "german":
        language = german_language

    # Create Session
    continuing = False
    input_was_english = False

    # Open Pokémon List and Search for German Name then strip Name to have Pokémon ID
    with open(german_poke_list, 'r') as myfile:
        document_lines = myfile.read().splitlines()
        for lines in document_lines:
            if pokemon_search_input in lines:
                if pokemon_search_input == (lines.lstrip(lines.rstrip(pokemon_search_input))):
                    indexNr = int(lines.rstrip(pokemon_search_input))
                    continuing = True

    # If Name has been found set valuable information to variable
    if continuing == True:
        # Output valuable information to variable
        pokemon = pokedex.get_pokemon_by_number(indexNr)
        for pokemon in pokemon:
            german_name = pokemon_search_input
            english_name = pokemon["name"]
            pokemon_types = pokemon["types"]
            pokemon_indexnr = pokemon["number"]
            pokemon_picture = pokemon["sprite"]
            pokemon_evolution = pokemon["family"]["evolutionLine"]
            pokemon_stage = pokemon["family"]["evolutionStage"]

    # If Input was not German check in english is success
    if continuing == False:
        with open(english_poke_list, 'r') as myfile:
            document_lines = myfile.read().splitlines()
            for lines in document_lines:
                if pokemon_search_input in lines:
                    input_was_english = True

    # If Name has been found set valuable information to variable
    if input_was_english == True:
        # Output valuable information to variable
        german_name = Translator(pokemon_search_input)
        pokemon = pokedex.get_pokemon_by_name(pokemon_search_input)
        for pokemon in pokemon:
            english_name = pokemon["name"]
            pokemon_types = pokemon["types"]
            pokemon_indexnr = pokemon["number"]
            pokemon_picture = pokemon["sprite"]
            pokemon_evolution = pokemon["family"]["evolutionLine"]
            pokemon_stage = pokemon["family"]["evolutionStage"]
        continuing = True
    # If Name has not been found filter input for next action
    if continuing == False:
        if pokemon_search_input == "Exit":
            print("Closing Pokédex.")
            exit()
        else:
            pokemon_name = language[0]
            pokemon_type = ""
            pokemon_type2 = ""

            # Download 404 image when exiting on unsuccessfull search
            opener = urllib.request.build_opener()
            opener.addheaders = [('User-agent', 'Mozilla/5.0')]
            urllib.request.install_opener(opener)
            urllib.request.urlretrieve(
                "https://raw.githubusercontent.com/infinitel8p/PokeDex/master/error_404.png", "sprite.png")
            return pokemon_name, pokemon_type, pokemon_type2, ""

    # add information for stage to the language arrays now that the variable pokemon_stage has been defined
    english_language.insert(
        1, f"Evolution {pokemon_search_input}: {pokemon_stage}")
    german_language.insert(
        1, f"Entwicklungsstufe {pokemon_search_input}: {pokemon_stage}")

    # Pokémon Entwichlungsstufe → STAGE
    if len(pokemon_evolution) == 1:
        stage = language[1] + "/1)"
    elif len(pokemon_evolution) == 2:
        stage = language[1] + "/2)"
    elif len(pokemon_evolution) == 3:
        stage = language[1] + "/3)"

    # add information for pokemon_name to the language arrays now that the variable stage has been defined
    english_language.insert(
        2, f"Ger: {german_name}, Eng: {english_name}  -  IndexNr: {pokemon_indexnr}\n{stage}")
    german_language.insert(
        2, f"Deu: {german_name}, Eng: {english_name}  -  IndexNr: {pokemon_indexnr}\n{stage}")

    # Pokémon Name
    pokemon_name = language[2]

    # Download Pokemon image
    opener = urllib.request.build_opener()
    opener.addheaders = [('User-agent', 'Mozilla/5.0')]
    urllib.request.install_opener(opener)
    urllib.request.urlretrieve(pokemon_picture, "sprite.png")

    # Filter if one or two types
    german_type_names = {"Bug": ["Pokémon Typ: *Käfer*\n", "Doppelter Schaden: \n - Feuer \n - Flug \n - Gestein", "Halber Schaden: \n - Pflanze \n - Kampf \n - Boden", "Kein Schaden:\n", "Effekt: k.A."],
                         "Dark": ["Pokémon Typ: *Unlicht*\n", "Doppelter Schaden: \n - Kampf \n - Käfer \n - Fee", "Halber Schaden: \n - Geist \n - Unlicht", "Kein Schaden: \n - Psycho\n", "Effekt: k.A."],
                         "Dragon": ["Pokémon Typ: *Drache*\n", "Doppelter Schaden: \n - Eis \n - Drache \n - Fee", "Halber Schaden: \n - Feuer \n - Wasser \n - Pflanze \n - Elektro", "Kein Schaden:\n", "Effekt: k.A."],
                         "Electric": ["Pokémon Typ: *Elektro*\n", "Doppelter Schaden: \n - Boden", "Halber Schaden: \n - Elektro \n - Flug \n - Stahl", "Kein Schaden:\n", "Effekt: Elektro-Pokémon können nicht paralysiert \nwerden."],
                         "Fairy": ["Pokémon Typ: *Fee*\n", "Doppelter Schaden: \n - Gift", "Halber Schaden: \n - Kampf \n - Käfer \n - Unlicht", "Kein Schaden: \n - Drache\n", "k.A."],
                         "Fighting": ["Pokémon Typ: *Kampf*\n", "Doppelter Schaden: \n - Flug \n - Psycho \n - Fee", "Halber Schaden: \n - Käfer \n - Gestein \n - Unlicht", "Kein Schaden:\n", "Effekt: k.A."],
                         "Fire": ["Pokémon Typ: *Feuer*\n", "Doppelter Schaden: \n - Wasser \n - Boden \n - Gestein", "Halber Schaden: \n - Feuer \n - Pflanze \n - Eis \n - Käfer \n - Stahl \n - Fee\n", "Kein Schaden:\n", "Effekt: k.A."],
                         "Flying": ["Pokémon Typ: *Flug*\n", "Doppelter Schaden: \n - Elektro \n - Eis \n - Gestein", "Halber Schaden: \n - Pflanze \n - Kampf \n - Käfer", "Kein Schaden: \n - Boden\n", "Effekt: Flug-Pokémon erleiden keinen Schaden durch \nStachler. Außerdem können sie durch Giftspitzen \nnicht vergiftet werden und erhalten keine Senkung \nder Initiative durch das Klebenetz.\nWeiterhin können sie auch fliehen, selbst wenn das \ngegnerische Pokémon die Fähigkeit Ausweglos besitzt.\nGleiches gilt auch für Pokémon mit der Fähigkeit \nSchwebe."],
                         "Ghost": ["Pokémon Typ: *Geist*\n", "Doppelter Schaden: \n - Geist \n - Unlicht", "Halber Schaden: \n - Gift \n - Käfer", "Kein Schaden: \n - Normal \n - Kampf\n", "Effekt: Geist-Pokémon können auch fliehen, selbst wenn \ndas gegnerische Pokémon die Fähigkeit Wegsperre oder \nAusweglos besitzt.Wenn ein Geist-Pokémon den Zweit -\ntyp Stahl besitzt kann es auch fliehen,\nwenn das gegnerische Pokémon die Fähigkeit Magnetfalle \nbesitzt."],
                         "Grass": ["Pokémon Typ: *Pflanze*\n", "Doppelter Schaden: \n - Feuer \n - Eis \n - Gift \n - Flug \n - Käfer", "Halber Schaden: \n - Wasser \n - Pflanze \n - Elektro \n - Boden", "Kein Schaden:\n", "Effekt: Pflanze-Pokémon sind immun gegen Egelsamen, \nSporen -  und Puder - Attacken."],
                         "Ground": ["Pokémon Typ: *Boden*\n", "Doppelter Schaden:  \n - Wasser \n - Pflanze \n - Eis", "Halber Schaden: \n - Gift \n - Gestein", "Kein Schaden: \n - Elektro\n", "Effekt: Boden-Pokémon können nicht durch Donnerwelle \nparalysiert werden. Außerdem erleiden sie keinen \nSchaden im Sandsturm."],
                         "Ice": ["Pokémon Typ: *Eis*\n", "Doppelter Schaden: \n - Feuer \n - Kampf \n - Gestein \n - Stahl", "Halber Schaden: \n - Eis", "Kein Schaden:\n", "Effekt: Eis-Pokémon erleiden keinen Schaden im Hagel \nund können nicht eingefroren werden."],
                         "Normal": ["Pokémon Typ: *Normal*\n", "Doppelter Schaden: \n - Kampf", "Halber Schaden:", "Kein Schaden: \n - Geist\n", "Effekt: k.A."],
                         "Poison": ["Pokémon Typ: *Gift*\n", "Doppelter Schaden: \n - Boden \n - Psycho", "Halber Schaden: \n - Pflanze \n - Kampf \n - Gift \n - Käfer \n - Fee", "Kein Schaden:\n", "Effekt: Gift-Pokémon können weder vergiftet noch \nschwer vergiftet werden. Weiterhin kann jedes \nGift-Pokémon, das den Boden berührt,\nGiftspitzen sofort von der eigenen Feldseite entfernen.\nZu guter Letzt wird die Statusattacke Toxin nie ihr \nZiel verfehlen, wenn sie von einem Gift-Pokémon\neingesetzt wird."],
                         "Psychic": ["Pokémon Typ: *Psycho*\n", "Doppelter Schaden: \n - Käfer \n - Geist \n - Unlicht", "Halber Schaden: \n - Kampf \n - Psycho", "Kein Schaden:\n", "Effekt: k.A."],
                         "Rock": ["Pokémon Typ: *Gestein*\n", "Doppelter Schaden: \n - Wasser \n - Pflanze \n - Kampf \n - Boden \n - Stahl", "Halber Schaden: \n - Normal \n - Feuer \n - Gift \n - Flug", "Kein Schaden:\n", "Effekt: Gestein-Pokémon erleiden keinen Schaden\nim Sandsturm. Außerdem erhöht sich deren \nSpezial - Verteidigung um 50%, wenn ein Sandsturm\nherrscht."],
                         "Steel": ["Pokémon Typ: *Stahl*\n", "Doppelter Schaden: \n - Feuer \n - Kampf \n - Boden", "Halber Schaden: \n - Normal \n - Pflanze \n - Eis \n - Flug \n - Psycho \n - Käfer \n - Gestein \n - Drache \n - Stahl \n - Fee", "Kein Schaden: \n - Gift\n", "Effekt: Stahl-Pokémon erleiden keinen Schaden durch \nSandsturm. Weiterhin können sie durch Toxin \nund Giftspitzen nicht vergiftet werden."],
                         "Water": ["Pokémon Typ: *Wasser*\n", "Doppelter Schaden: \n - Pflanze \n - Elektro", "Halber Schaden: \n - Feuer \n - Wasser \n - Eis \n - Stahl", "Kein Schaden:\n", "Effekt: k.A."],
                         }

    english_type_names = {"Bug": ["Pokémon type: *Bug*\n", "Double damage: \n - Fire \n - Flying \n - Rock", "Half damage: \n - Grass \n - Fighting \n - Ground", "No damage: \n", "Effect: n / a"],
                          "Dark": ["Pokémon type: *Dark*\n", "Double damage: \n - Fighting \n - Bug \n - Fairy", "Half damage: \n - Ghost \n - Dard", "No damage: \n - Psychic\n", "Effect: n / a"],
                          "Dragon": ["Pokémon type: *Dragon*\n", "Double damage: \n - Ice \n - Dragon \n - Fairy", "Half damage: \n - Fire \n - Water \n - Grass \n - Electric", "No damage: \n", "Effect: n / a"],
                          "Electric": ["Pokémon type: *Electric*\n", "Double damage: \n - Ground", "Half damage: \n - Electric \n - Flying \n - Steel", "No damage: \n", "Effect: Electric-type Pokémon are immune to paralysis."],
                          "Fairy": ["Pokémon type: *Fairy*\n", "Double damage: \n - Poison", "Half damage: \n - Fighting \n - Bug \n - Dark", "No damage: \n - Dragon\n", "Effect: n / a"],
                          "Fighting": ["Pokémon type: *Fighting*\n", "Double damage: \n - Flying \n - Psychic \n - Fairy", "Half damage: \n - Bug \n - Rock \n - Dark", "No damage: \n", "Effect: n / a"],
                          "Fire": ["Pokémon type: *Fire*\n", "Double damage: \n - Water \n - Ground \n - Rock", "Half damage: \n - Fire \n - Grass \n - Ice \n - Bug \n - Steel \n - Fairy\n", "No damage: \n", "Effect: n / a"],
                          "Flying": ["Pokémon type: *Flying*\n", "Double damage: \n - Electric \n - Ice \n - Rock", "Half damage: \n - Grass \n - Fighting \n - Bug", "No damage: \n - Ground\n", "Effect: In addition to being immune to Ground-type\nattacks and Arena Trap, Flying-type Pokémon are\nunaffected by Rototiller and all entry\nhazards (except Stealth Rock).\nFlying-type Pokémon also cannot absorb Toxic Spikes\nsimply by switching in and do not receive the\nbenefits from terrains.\nThese immunities are removed when a Flying-type\nPokémon is grounded by Ingrain, Gravity, Smack Down,\nThousand Arrows or Iron Ball."],
                          "Ghost": ["Pokémon type: *Ghost*\n", "Double damage: \n - Ghost \n - Dark", "Half damage: \n - Poison \n - Bug", "No damage: \n - Normal \n - Fighting\n", "Effect: Ghost-type Pokémon are immune to being trapped\nby all trapping moves and Abilities, including the\nbinding effect of moves such as Infestation.\nGhost types are also guaranteed to run from wild\nbattles regardless of Speed."],
                          "Grass": ["Pokémon type: *Grass*\n", "Double damage: \n - Fire \n - Ice \n - Poison \n - Flying \n - Bug", "Half damage: \n - Water \n - Grass \n - Electric \n - Ground", "No damage: \n", "Effect: Grass-type Pokémon are immune to Leech Seed,\npowder and spore moves and Effect Spore."],
                          "Ground": ["Pokémon type: *Ground*\n", "Double damage:  \n - Water \n - Grass \n - Ice", "Half damage: \n - Poison \n - Rock", "No damage: \n - Electric\n", "Effect: Ground-type Pokémon are not damaged by\nsandstorms, and are immune to Electric attacks."],
                          "Ice": ["Pokémon type: *Ice*\n", "Double damage: \n - Fire \n - Fighting \n - Rock \n - Steel", "Half damage: \n - Ice", "No damage: \n", "Effect: Ice-type Pokémon are immune to Sheer Cold,\ndamage from hail and freezing."],
                          "Normal": ["Pokémon type: *Normal*\n", "Double damage: \n - Fighting", "Half damage:", "No damage: \n - Ghost\n", "Effect: n / a"],
                          "Poison": ["Pokémon type: *Poison*\n", "Double damage: \n - Ground \n - Psychic", "Half damage: \n - Grass \n - Fighting \n - Poison \n - Bug \n - Fairy", "No damage: \n", "Effect: Poison-type Pokémon are immune to being\npoisoned (except by a Pokémon with Corrosion),\nand a grounded Poison-type Pokémon automatically\nremoves Toxic Spikes on its side when it switches in.\nWhen a Poison-type uses the move Toxic, it cannot miss,\nbypassing accuracy checks and semi-invulnerable turns\nfrom moves such as Fly and Dig."],
                          "Psychic": ["Pokémon type: *Psychic*\n", "Double damage: \n - Bug \n - Ghost \n - Dark", "Half damage: \n - Fighting \n - Psychic", "No damage: \n", "Effect: n / a"],
                          "Rock": ["Pokémon type: *Rock*\n", "Double damage: \n - Water \n - Grass \n - Fighting \n - Ground \n - Steel", "Half damage: \n - Normal \n - Fire \n - Poison \n - Flying", "No damage: \n", "Effect: The Special Defense of a Rock-type Pokémon is\nincreased by 50% during a sandstorm,\nin addition to being immune to the damage caused by it."],
                          "Steel": ["Pokémon type: *Steel*\n", "Double damage: \n - Fire \n - Fighting \n - Ground", "Half damage: \n - Normal \n - Grass \n - Ice \n - Flying \n - Psychic \n - Bug \n - Rock \n - Dragon \n - Steel \n - Fairy", "No damage: \n - Poison\n", "Effect: Steel-type Pokémon cannot cannot be poisoned\n(except by Corrosion) or damaged by a sandstorm."],
                          "Water": ["Pokémon type: *Water*\n", "Double damage: \n - Grass \n - Electric", "Half damage: \n - Fire \n - Water \n - Ice \n - Steel", "No damage: \n", "Effect: n / a"],
                          }

    # set pokemon information language to selected language
    if current_languge == "english":
        type_names = english_type_names
    if current_languge == "german":
        type_names = german_type_names

    length = len(pokemon_types)
    if length == 1:
        if pokemon_types[0] == "Bug":
            Bug = type_names["Bug"]
            pokemon_type = f"\n{Bug[0]}\n{Bug[1]}\n{Bug[2]}\n{Bug[3]}\n{Bug[4]}"
            pokemon_type2 = ""
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[0] == "Dark":
            Dark = type_names["Dark"]
            pokemon_type = f"\n{Dark[0]}\n{Dark[1]}\n{Dark[2]}\n{Dark[3]}\n{Dark[4]}"
            pokemon_type2 = ""
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[0] == "Dragon":
            Dragon = type_names["Dragon"]
            pokemon_type = f"\n{Dragon[0]}\n{Dragon[1]}\n{Dragon[2]}\n{Dragon[3]}\n{Dragon[4]}"
            pokemon_type2 = ""
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[0] == "Electric":
            Electric = type_names["Electric"]
            pokemon_type = f"\n{Electric[0]}\n{Electric[1]}\n{Electric[2]}\n{Electric[3]}\n{Electric[4]}"
            pokemon_type2 = ""
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[0] == "Fairy":
            Fairy = type_names["Fairy"]
            pokemon_type = f"\n{Fairy[0]}\n{Fairy[1]}\n{Fairy[2]}\n{Fairy[3]}\n{Fairy[4]}"
            pokemon_type2 = ""
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[0] == "Fighting":
            Fighting = type_names["Fighting"]
            pokemon_type = f"\n{Fighting[0]}\n{Fighting[1]}\n{Fighting[2]}\n{Fighting[3]}\n{Fighting[4]}"
            pokemon_type2 = ""
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[0] == "Fire":
            Fire = type_names["Fire"]
            pokemon_type = f"\n{Fire[0]}\n{Fire[1]}\n{Fire[2]}\n{Fire[3]}\n{Fire[4]}"
            pokemon_type2 = ""
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[0] == "Flying":
            Flying = type_names["Flying"]
            pokemon_type = f"\n{Flying[0]}\n{Flying[1]}\n{Flying[2]}\n{Flying[3]}\n{Flying[4]}"
            pokemon_type2 = ""
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[0] == "Ghost":
            Ghost = type_names["Ghost"]
            pokemon_type = f"\n{Ghost[0]}\n{Ghost[1]}\n{Ghost[2]}\n{Ghost[3]}\n{Ghost[4]}"
            pokemon_type2 = ""
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[0] == "Grass":
            Grass = type_names["Grass"]
            pokemon_type = f"\n{Grass[0]}\n{Grass[1]}\n{Grass[2]}\n{Grass[3]}\n{Grass[4]}"
            pokemon_type2 = ""
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[0] == "Ground":
            Ground = type_names["Ground"]
            pokemon_type = f"\n{Ground[0]}\n{Ground[1]}\n{Ground[2]}\n{Ground[3]}\n{Ground[4]}"
            pokemon_type2 = ""
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[0] == "Ice":
            Ice = type_names["Ice"]
            pokemon_type = f"\n{Ice[0]}\n{Ice[1]}\n{Ice[2]}\n{Ice[3]}\n{Ice[4]}"
            pokemon_type2 = ""
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[0] == "Normal":
            Normal = type_names["Normal"]
            pokemon_type = f"\n{Normal[0]}\n{Normal[1]}\n{Normal[2]}\n{Normal[3]}\n{Normal[4]}"
            pokemon_type2 = ""
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[0] == "Poison":
            Poison = type_names["Poison"]
            pokemon_type = f"\n{Poison[0]}\n{Poison[1]}\n{Poison[2]}\n{Poison[3]}\n{Poison[4]}"
            pokemon_type2 = ""
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[0] == "Psychic":
            Psychic = type_names["Psychic"]
            pokemon_type = f"\n{Psychic[0]}\n{Psychic[1]}\n{Psychic[2]}\n{Psychic[3]}\n{Psychic[4]}"
            pokemon_type2 = ""
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[0] == "Rock":
            Rock = type_names["Rock"]
            pokemon_type = f"\n{Rock[0]}\n{Rock[1]}\n{Rock[2]}\n{Rock[3]}\n{Rock[4]}"
            pokemon_type2 = ""
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[0] == "Steel":
            Steel = type_names["Steel"]
            pokemon_type = f"\n{Steel[0]}\n{Steel[1]}\n{Steel[2]}\n{Steel[3]}\n{Steel[4]}"
            pokemon_type2 = ""
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[0] == "Water":
            Water = type_names["Water"]
            pokemon_type = f"\n{Water[0]}\n{Water[1]}\n{Water[2]}\n{Water[3]}\n{Water[4]}"
            pokemon_type2 = ""
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution

    if length == 2:
        if pokemon_types[0] == "Bug":
            Bug = type_names["Bug"]
            pokemon_type = f"\n{Bug[0]}\n{Bug[1]}\n{Bug[2]}\n{Bug[3]}\n{Bug[4]}"
        if pokemon_types[0] == "Dark":
            Dark = type_names["Dark"]
            pokemon_type = f"\n{Dark[0]}\n{Dark[1]}\n{Dark[2]}\n{Dark[3]}\n{Dark[4]}"
        if pokemon_types[0] == "Dragon":
            Dragon = type_names["Dragon"]
            pokemon_type = f"\n{Dragon[0]}\n{Dragon[1]}\n{Dragon[2]}\n{Dragon[3]}\n{Dragon[4]}"
        if pokemon_types[0] == "Electric":
            Electric = type_names["Electric"]
            pokemon_type = f"\n{Electric[0]}\n{Electric[1]}\n{Electric[2]}\n{Electric[3]}\n{Electric[4]}"
        if pokemon_types[0] == "Fairy":
            Fairy = type_names["Fairy"]
            pokemon_type = f"\n{Fairy[0]}\n{Fairy[1]}\n{Fairy[2]}\n{Fairy[3]}\n{Fairy[4]}"
        if pokemon_types[0] == "Fighting":
            Fighting = type_names["Fighting"]
            pokemon_type = f"\n{Fighting[0]}\n{Fighting[1]}\n{Fighting[2]}\n{Fighting[3]}\n{Fighting[4]}"
        if pokemon_types[0] == "Fire":
            Fire = type_names["Fire"]
            pokemon_type = f"\n{Fire[0]}\n{Fire[1]}\n{Fire[2]}\n{Fire[3]}\n{Fire[4]}"
        if pokemon_types[0] == "Flying":
            Flying = type_names["Flying"]
            pokemon_type = f"\n{Flying[0]}\n{Flying[1]}\n{Flying[2]}\n{Flying[3]}\n{Flying[4]}"
        if pokemon_types[0] == "Ghost":
            Ghost = type_names["Ghost"]
            pokemon_type = f"\n{Ghost[0]}\n{Ghost[1]}\n{Ghost[2]}\n{Ghost[3]}\n{Ghost[4]}"
        if pokemon_types[0] == "Grass":
            Grass = type_names["Grass"]
            pokemon_type = f"\n{Grass[0]}\n{Grass[1]}\n{Grass[2]}\n{Grass[3]}\n{Grass[4]}"
        if pokemon_types[0] == "Ground":
            Ground = type_names["Ground"]
            pokemon_type = f"\n{Ground[0]}\n{Ground[1]}\n{Ground[2]}\n{Ground[3]}\n{Ground[4]}"
        if pokemon_types[0] == "Ice":
            Ice = type_names["Ice"]
            pokemon_type = f"\n{Ice[0]}\n{Ice[1]}\n{Ice[2]}\n{Ice[3]}\n{Ice[4]}"
        if pokemon_types[0] == "Normal":
            Normal = type_names["Normal"]
            pokemon_type = f"\n{Normal[0]}\n{Normal[1]}\n{Normal[2]}\n{Normal[3]}\n{Normal[4]}"
        if pokemon_types[0] == "Poison":
            Poison = type_names["Poison"]
            pokemon_type = f"\n{Poison[0]}\n{Poison[1]}\n{Poison[2]}\n{Poison[3]}\n{Poison[4]}"
        if pokemon_types[0] == "Psychic":
            Psychic = type_names["Psychic"]
            pokemon_type = f"\n{Psychic[0]}\n{Psychic[1]}\n{Psychic[2]}\n{Psychic[3]}\n{Psychic[4]}"
        if pokemon_types[0] == "Rock":
            Rock = type_names["Rock"]
            pokemon_type = f"\n{Rock[0]}\n{Rock[1]}\n{Rock[2]}\n{Rock[3]}\n{Rock[4]}"
        if pokemon_types[0] == "Steel":
            Steel = type_names["Steel"]
            pokemon_type = f"\n{Steel[0]}\n{Steel[1]}\n{Steel[2]}\n{Steel[3]}\n{Steel[4]}"
        if pokemon_types[0] == "Water":
            Water = type_names["Water"]
            pokemon_type = f"\n{Water[0]}\n{Water[1]}\n{Water[2]}\n{Water[3]}\n{Water[4]}"

        if pokemon_types[1] == "Bug":
            Bug2 = type_names["Bug"]
            pokemon_type2 = f"\n###################################################\n{Bug2[0]}\n{Bug2[1]}\n{Bug2[2]}\n{Bug2[3]}\n{Bug2[4]}"
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[1] == "Dark":
            Dark2 = type_names["Dark"]
            pokemon_type2 = f"\n###################################################\n{Dark2[0]}\n{Dark2[1]}\n{Dark2[2]}\n{Dark2[3]}\n{Dark2[4]}"
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[1] == "Dragon":
            Dragon2 = type_names["Dragon"]
            pokemon_type2 = f"\n###################################################\n{Dragon2[0]}\n{Dragon2[1]}\n{Dragon2[2]}\n{Dragon2[3]}\n{Dragon2[4]}"
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[1] == "Electric":
            Electric2 = type_names["Electric"]
            pokemon_type2 = f"\n###################################################\n{Electric2[0]}\n{Electric2[1]}\n{Electric2[2]}\n{Electric2[3]}\n{Electric2[4]}"
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[1] == "Fairy":
            Fairy2 = type_names["Fairy"]
            pokemon_type2 = f"\n###################################################\n{Fairy2[0]}\n{Fairy2[1]}\n{Fairy2[2]}\n{Fairy2[3]}\n{Fairy2[4]}"
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[1] == "Fighting":
            Fighting2 = type_names["Fighting"]
            pokemon_type2 = f"\n###################################################\n{Fighting2[0]}\n{Fighting2[1]}\n{Fighting2[2]}\n{Fighting2[3]}\n{Fighting2[4]}"
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[1] == "Fire":
            Fire2 = type_names["Fire"]
            pokemon_type2 = f"\n###################################################\n{Fire2[0]}\n{Fire2[1]}\n{Fire2[2]}\n{Fire2[3]}\n{Fire2[4]}"
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[1] == "Flying":
            Flying2 = type_names["Flying"]
            pokemon_type2 = f"\n###################################################\n{Flying2[0]}\n{Flying2[1]}\n{Flying2[2]}\n{Flying2[3]}\n{Flying2[4]}"
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[1] == "Ghost":
            Ghost2 = type_names["Ghost"]
            pokemon_type2 = f"\n###################################################\n{Ghost2[0]}\n{Ghost2[1]}\n{Ghost2[2]}\n{Ghost2[3]}\n{Ghost2[4]}"
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[1] == "Grass":
            Grass2 = type_names["Grass"]
            pokemon_type2 = f"\n###################################################\n{Grass2[0]}\n{Grass2[1]}\n{Grass2[2]}\n{Grass2[3]}\n{Grass2[4]}"
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[1] == "Ground":
            Ground2 = type_names["Ground"]
            pokemon_type2 = f"\n###################################################\n{Ground2[0]}\n{Ground2[1]}\n{Ground2[2]}\n{Ground2[3]}\n{Ground2[4]}"
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[1] == "Ice":
            Ice2 = type_names["Ice"]
            pokemon_type2 = f"\n###################################################\n{Ice2[0]}\n{Ice2[1]}\n{Ice2[2]}\n{Ice2[3]}\n{Ice2[4]}"
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[1] == "Normal":
            Normal2 = type_names["Normal"]
            pokemon_type2 = f"\n###################################################\n{Normal2[0]}\n{Normal2[1]}\n{Normal2[2]}\n{Normal2[3]}\n{Normal2[4]}"
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[1] == "Poison":
            Poison2 = type_names["Poison"]
            pokemon_type2 = f"\n###################################################\n{Poison2[0]}\n{Poison2[1]}\n{Poison2[2]}\n{Poison2[3]}\n{Poison2[4]}"
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[1] == "Psychic":
            Psychic2 = type_names["Psychic"]
            pokemon_type2 = f"\n###################################################\n{Psychic2[0]}\n{Psychic2[1]}\n{Psychic2[2]}\n{Psychic2[3]}\n{Psychic2[4]}"
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[1] == "Rock":
            Rock2 = type_names["Rock"]
            pokemon_type2 = f"\n###################################################\n{Rock2[0]}\n{Rock2[1]}\n{Rock2[2]}\n{Rock2[3]}\n{Rock2[4]}"
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[1] == "Steel":
            Steel2 = type_names["Steel"]
            pokemon_type2 = f"\n###################################################\n{Steel2[0]}\n{Steel2[1]}\n{Steel2[2]}\n{Steel2[3]}\n{Steel2[4]}"
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
        if pokemon_types[1] == "Water":
            Water2 = type_names["Water"]
            pokemon_type2 = f"\n###################################################\n{Water2[0]}\n{Water2[1]}\n{Water2[2]}\n{Water2[3]}\n{Water2[4]}"
            return pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution
