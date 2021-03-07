import os
import sys
from pokedex import pokedex
import requests
from bs4 import BeautifulSoup
import urllib.request
from urllib.request import Request, urlopen

pokedex = pokedex.Pokedex(version='v1', user_agent='ExampleApp (https://example.com, v2.0.1)')

german_poke_list = r"pokemonlist.txt"
english_poke_list = r"pokemonlisten.txt"
#Pokedex
def Search(pokemon_search_input):
    #Translate Evolution Stages to German Names
    def Translator(suchbegriff):
        with open(english_poke_list, 'r') as full_english_names:
            english_lines = full_english_names.read().splitlines()
            for lines in english_lines:
                if suchbegriff in lines:
                    full_english_names.close()
                    pokemon_id = lines.rstrip(suchbegriff)

        with open(german_poke_list, 'r') as full_german_names:
            german_lines = full_german_names.read().splitlines()
            for lines in german_lines:
                if pokemon_id in lines:
                    german_name = lines.lstrip(pokemon_id)
                    full_german_names.close()
                    return german_name
            
    # Create Session
    continuing = False
    input_was_english = False
    
    #Open Pokémon List and Search for German Name then strip Name to have Pokémon ID
    with open(german_poke_list, 'r') as myfile:
        document_lines = myfile.read().splitlines()
        for lines in document_lines:
            if pokemon_search_input in lines:
                indexNr = int(lines.rstrip(pokemon_search_input))
                continuing = True

    #If Name has been found set valuable information to variable        
    if continuing == True:
        #Output valuable information to variable
        pokemon = pokedex.get_pokemon_by_number(indexNr)
        for pokemon in pokemon:
            german_name = pokemon_search_input
            name = pokemon["name"]
            types = pokemon["types"]
            number = pokemon["number"]
            bild = pokemon["sprite"]
            entwicklung = pokemon["family"]["evolutionLine"]
            stufe = pokemon["family"]["evolutionStage"]
    
    #If Input was not German check in english is success
    if continuing == False:
        with open(english_poke_list, 'r') as myfile:
            document_lines = myfile.read().splitlines()
            for lines in document_lines:
                if pokemon_search_input in lines:
                    input_was_english = True

    #If Name has been found set valuable information to variable       
    if input_was_english == True:
        #Output valuable information to variable
        german_name = Translator(pokemon_search_input)
        pokemon = pokedex.get_pokemon_by_name(pokemon_search_input)
        for pokemon in pokemon:
            name = pokemon["name"]
            types = pokemon["types"]
            number = pokemon["number"]
            bild = pokemon["sprite"]
            entwicklung = pokemon["family"]["evolutionLine"]
            stufe = pokemon["family"]["evolutionStage"]
        continuing = True

    #If Name has not been found filter input for next action 
    if continuing == False:
        if pokemon_search_input == "exit":
            print("Pokédex wird geschlossen.")
            exit()
        else:
            pokemon_name = str(f"Pokémon '{pokemon_search_input}' konnte nicht gefunden werden!")
            pokemon_type = ""
            pokemon_type2 = ""

            #Download 404 image when exiting on unsuccessfull search
            opener = urllib.request.build_opener()
            opener.addheaders = [('User-agent', 'Mozilla/5.0')]
            urllib.request.install_opener(opener)
            urllib.request.urlretrieve("https://raw.githubusercontent.com/infinitel8p/PokeDex/master/error_404.png", "sprite.png")
            
            return pokemon_name,pokemon_type,pokemon_type2

    #Pokémon Entwichlungsstufe → STAGE
    if len(entwicklung) == 1:
        stage = f"Entwicklungsstufe {german_name}: {stufe}/1)"
    elif len(entwicklung) == 2:
        stage = f"Entwicklungsstufe {german_name}: {stufe}/2)"
    elif len(entwicklung) == 3:
        stage = f"Entwicklungsstufe {german_name}: {stufe}/3)"

    #Set Pokémon Information  
    pokemon_name = f"Deu: {german_name}, Eng: {name}  -  IndexNr: {number}\n{stage}"

    #Download Pokemon image
    opener = urllib.request.build_opener()
    opener.addheaders = [('User-agent', 'Mozilla/5.0')]
    urllib.request.install_opener(opener)
    urllib.request.urlretrieve(bild, "sprite.png")

    #Filter if one or two types
    Bug = ["Pokémon Typ: *Käfer*\n", "Doppelter Schaden: \n - Feuer \n - Flug \n - Gestein", "Halber Schaden: \n - Pflanze \n - Kampf \n - Boden", "Kein Schaden:\n", "k.A."]
    Dark = ["Pokémon Typ: *Unlicht*\n", "Doppelter Schaden: \n - Kampf \n - Käfer \n - Fee", "Halber Schaden: \n - Geist \n - Unlicht", "Kein Schaden: \n - Psycho\n", "k.A."]
    Dragon = ["Pokémon Typ: *Drache*\n", "Doppelter Schaden: \n - Eis \n - Drache \n - Fee", "Halber Schaden: \n - Feuer \n - Wasser \n - Pflanze \n - Elektro", "Kein Schaden:\n" "k.A."]
    Electric = ["Pokémon Typ: *Elektro*\n", "Doppelter Schaden: \n - Boden", "Halber Schaden: \n - Elektro \n - Flug \n - Stahl", "Kein Schaden:\n", "Elektro-Pokémon können nicht paralysiert \nwerden."]
    Fairy = ["Pokémon Typ: *Fee*\n", "Doppelter Schaden: \n - Gift", "Halber Schaden: \n - Kampf \n - Käfer \n - Unlicht", "Kein Schaden: \n - Drache\n", "k.A."]
    Fighting = ["Pokémon Typ: *Kampf*\n", "Doppelter Schaden: \n - Flug \n - Psycho \n - Fee", "Halber Schaden: \n - Käfer \n - Gestein \n - Unlicht", "Kein Schaden:\n", "k.A."]
    Fire = ["Pokémon Typ: *Feuer*\n", "Doppelter Schaden: \n - Wasser \n - Boden \n - Gestein", "Halber Schaden: \n - Feuer \n - Pflanze \n - Eis \n - Käfer \n - Stahl \n - Fee\n", "Kein Schaden:\n", "k.A."]
    Flying = ["Pokémon Typ: *Flug*\n", "Doppelter Schaden: \n - Elektro \n - Eis \n - Gestein", "Halber Schaden: \n - Pflanze \n - Kampf \n - Käfer", "Kein Schaden: \n - Boden\n", "Flug-Pokémon erleiden keinen Schaden durch \nStachler. Außerdem können sie durch Giftspitzen \nnicht vergiftet werden und erhalten keine Senkung \nder Initiative durch das Klebenetz.\nWeiterhin können sie auch fliehen, selbst wenn das \ngegnerische Pokémon die Fähigkeit Ausweglos besitzt.\nGleiches gilt auch für Pokémon mit der Fähigkeit \nSchwebe."]
    Ghost = ["Pokémon Typ: *Geist*\n", "Doppelter Schaden: \n - Geist \n - Unlicht", "Halber Schaden: \n - Gift \n - Käfer", "Kein Schaden: \n - Normal \n - Kampf\n", "Geist-Pokémon können auch fliehen, selbst wenn \ndas gegnerische Pokémon die Fähigkeit Wegsperre oder \nAusweglos besitzt.Wenn ein Geist-Pokémon den Zweit -\ntyp Stahl besitzt kann es auch fliehen,\nwenn das gegnerische Pokémon die Fähigkeit Magnetfalle \nbesitzt."]
    Grass = ["Pokémon Typ: *Pflanze*\n", "Doppelter Schaden: \n - Feuer \n - Eis \n - Gift \n - Flug \n - Käfer", "Halber Schaden: \n - Wasser \n - Pflanze \n - Elektro \n - Boden", "Kein Schaden:\n", "Pflanze-Pokémon sind immun gegen Egelsamen, \nSporen -  und Puder - Attacken."]
    Ground = ["Pokémon Typ: *Boden*\n", "Doppelter Schaden:  \n - Wasser \n - Pflanze \n - Eis", "Halber Schaden: \n - Gift \n - Gestein", "Kein Schaden: \n - Elektro\n", "Boden-Pokémon können nicht durch Donnerwelle \nparalysiert werden. Außerdem erleiden sie keinen \nSchaden im Sandsturm."]
    Ice = ["Pokémon Typ: *Eis*\n", "Doppelter Schaden: \n - Feuer \n - Kampf \n - Gestein \n - Stahl", "Halber Schaden: \n - Eis", "Kein Schaden:\n", "Eis-Pokémon erleiden keinen Schaden im Hagel \nund können nicht eingefroren werden."]
    Normal =["Pokémon Typ: *Normal*\n", "Doppelter Schaden: \n - Kampf", "Halber Schaden:", "Kein Schaden: \n - Geist\n", "k.A."]
    Poison =["Pokémon Typ: *Gift*\n", "Doppelter Schaden: \n - Boden \n - Psycho", "Halber Schaden: \n - Pflanze \n - Kampf \n - Gift \n - Käfer \n - Fee", "Kein Schaden:\n", "Gift-Pokémon können weder vergiftet noch \nschwer vergiftet werden. Weiterhin kann jedes \nGift-Pokémon, das den Boden berührt,\nGiftspitzen sofort von der eigenen Feldseite entfernen.\nZu guter Letzt wird die Statusattacke Toxin nie ihr \nZiel verfehlen, wenn sie von einem Gift-Pokémon \neingesetzt wird."]
    Psychic =["Pokémon Typ: *Psycho*\n", "Doppelter Schaden: \n - Käfer \n - Geist \n - Unlicht", "Halber Schaden: \n - Kampf \n - Psycho", "Kein Schaden:\n", "k.A."]
    Rock = ["Pokémon Typ: *Gestein*\n", "Doppelter Schaden: \n - Wasser \n - Pflanze \n - Kampf \n - Boden \n - Stahl", "Halber Schaden: \n - Normal \n - Feuer \n - Gift \n - Flug", "Kein Schaden:\n", "Gestein-Pokémon erleiden keinen Schaden\nim Sandsturm. Außerdem erhöht sich deren \nSpezial - Verteidigung um 50%, wenn ein Sandsturm\nherrscht."]
    Steel = ["Pokémon Typ: *Stahl*\n", "Doppelter Schaden: \n - Feuer \n - Kampf \n - Boden", "Halber Schaden: \n - Normal \n - Pflanze \n - Eis \n - Flug \n - Psycho \n - Käfer \n - Gestein \n - Drache \n - Stahl \n - Fee", "Kein Schaden: \n - Gift\n", "Stahl-Pokémon erleiden keinen Schaden durch \nSandsturm. Weiterhin können sie durch Toxin \nund Giftspitzen nicht vergiftet werden."]
    Water = ["Pokémon Typ: *Wasser*\n", "Doppelter Schaden: \n - Pflanze \n - Elektro", "Halber Schaden: \n - Feuer \n - Wasser \n - Eis \n - Stahl", "Kein Schaden:\n", "k.A."]    
    
    length = len(types)

    if length == 1:

        typus = types[0]

        if types[0] == "Bug":
            typus = Bug
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}"
            pokemon_type2 = ""
            return pokemon_name,pokemon_type,pokemon_type2
        if types[0] == "Dark":
            typus = Dark
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}"
            pokemon_type2 = ""
            return pokemon_name,pokemon_type,pokemon_type2          
        if types[0] == "Dragon":
            typus = Dragon
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}"
            pokemon_type2 = ""
            return pokemon_name,pokemon_type,pokemon_type2
        if types[0] == "Electric":
            typus = Electric
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}"
            pokemon_type2 = ""
            return pokemon_name,pokemon_type,pokemon_type2
        if types[0] == "Fairy":
            typus = Fairy
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}"
            pokemon_type2 = ""
            return pokemon_name,pokemon_type,pokemon_type2
        if types[0] == "Fighting":
            typus = Fighting
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}"
            pokemon_type2 = ""
            return pokemon_name,pokemon_type,pokemon_type2
        if types[0] == "Fire":
            typus = Fire
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}"
            pokemon_type2 = ""
            return pokemon_name,pokemon_type,pokemon_type2
        if types[0] == "Flying":
            typus = Flying
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}"
            pokemon_type2 = ""
            return pokemon_name,pokemon_type,pokemon_type2
        if types[0] == "Ghost":
            typus = Ghost
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}"
            pokemon_type2 = ""
            return pokemon_name,pokemon_type,pokemon_type2
        if types[0] == "Grass":
            typus = Grass
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}"
            pokemon_type2 = ""
            return pokemon_name,pokemon_type,pokemon_type2
        if types[0] == "Ground":
            typus = Ground
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}"
            pokemon_type2 = ""
            return pokemon_name,pokemon_type,pokemon_type2
        if types[0] == "Ice":
            typus = Ice
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}"
            pokemon_type2 = ""
            return pokemon_name,pokemon_type,pokemon_type2
        if types[0] == "Normal":
            typus = Normal
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}"
            pokemon_type2 = ""
            return pokemon_name,pokemon_type,pokemon_type2
        if types[0] == "Poison":
            typus = Poison
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}"
            pokemon_type2 = ""
            return pokemon_name,pokemon_type,pokemon_type2
        if types[0] == "Psychic":
            typus = Psychic
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}"
            pokemon_type2 = ""
            return pokemon_name,pokemon_type,pokemon_type2
        if types[0] == "Rock":
            typus = Rock
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}"
            pokemon_type2 = ""
            return pokemon_name,pokemon_type,pokemon_type2
        if types[0] == "Steel":
            typus = Steel
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}"
            pokemon_type2 = ""
            return pokemon_name,pokemon_type,pokemon_type2
        if types[0] == "Water":
            typus = Water
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}"
            pokemon_type2 = ""
            return pokemon_name,pokemon_type,pokemon_type2
        else:
            pokemon_name = "Konnte Pokémon Typen nicht finden."
            pokemon_type = ""
            pokemon_type2 = ""
            return pokemon_name,pokemon_type,pokemon_type2

    if length == 2:

        typus2 = types[1]

        if types[0] == "Bug":
            typus = Bug
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}\n\n"
        if types[0] == "Dark":
            typus = Dark
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}\n\n"       
        if types[0] == "Dragon":
            typus = Dragon
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}\n\n"
        if types[0] == "Electric":
            typus = Electric
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}\n\n"
        if types[0] == "Fairy":
            typus = Fairy
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}\n\n"
        if types[0] == "Fighting":
            typus = Fighting
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}\n\n"
        if types[0] == "Fire":
            typus = Fire
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}\n\n"
        if types[0] == "Flying":
            typus = Flying
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}\n\n"
        if types[0] == "Ghost":
            typus = Ghost
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}\n\n"
        if types[0] == "Grass":
            typus = Grass
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}\n\n"
        if types[0] == "Ground":
            typus = Ground
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}\n\n"
        if types[0] == "Ice":
            typus = Ice
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}\n\n"
        if types[0] == "Normal":
            typus = Normal
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}\n\n"
        if types[0] == "Poison":
            typus = Poison
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}\n\n"
        if types[0] == "Psychic":
            typus = Psychic
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}\n\n"
        if types[0] == "Rock":
            typus = Rock
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}\n\n"
        if types[0] == "Steel":
            typus = Steel
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}\n\n"
        if types[0] == "Water":
            typus = Water
            pokemon_type = f"\n{typus[0]}\n{typus[1]}\n{typus[2]}\n{typus[3]}\nEffekt: {typus[4]}\n\n"

                    
        if types[1] == "Bug":
            typus2 = Bug
            pokemon_type2 = f"\n{typus2[0]}\n{typus2[1]}\n{typus2[2]}\n{typus2[3]}\nEffekt: {typus2[4]}"
            return pokemon_name,pokemon_type,pokemon_type2
        if types[1] == "Dark":
            typus2 = Dark
            pokemon_type2 = f"\n{typus2[0]}\n{typus2[1]}\n{typus2[2]}\n{typus2[3]}\nEffekt: {typus2[4]}"
            return  pokemon_name,pokemon_type,pokemon_type2           
        if types[1] == "Dragon":
            typus2 = Dragon
            pokemon_type2 = f"\n{typus2[0]}\n{typus2[1]}\n{typus2[2]}\n{typus2[3]}\nEffekt: {typus2[4]}"
            return pokemon_name,pokemon_type,pokemon_type2
        if types[1] == "Electric":
            typus2 = Electric
            pokemon_type2 = f"\n{typus2[0]}\n{typus2[1]}\n{typus2[2]}\n{typus2[3]}\nEffekt: {typus2[4]}"
            return pokemon_name,pokemon_type,pokemon_type2
        if types[1] == "Fairy":
            typus2 = Fairy
            pokemon_type2 = f"\n{typus2[0]}\n{typus2[1]}\n{typus2[2]}\n{typus2[3]}\nEffekt: {typus2[4]}"
            return pokemon_name,pokemon_type,pokemon_type2
        if types[1] == "Fighting":
            typus2 = Fighting
            pokemon_type2 = f"\n{typus2[0]}\n{typus2[1]}\n{typus2[2]}\n{typus2[3]}\nEffekt: {typus2[4]}"
            return pokemon_name,pokemon_type,pokemon_type2
        if types[1] == "Fire":
            typus2 = Fire
            pokemon_type2 = f"\n{typus2[0]}\n{typus2[1]}\n{typus2[2]}\n{typus2[3]}\nEffekt: {typus2[4]}"
            return pokemon_name,pokemon_type,pokemon_type2
        if types[1] == "Flying":
            typus2 = Flying
            pokemon_type2 = f"\n{typus2[0]}\n{typus2[1]}\n{typus2[2]}\n{typus2[3]}\nEffekt: {typus2[4]}"
            return pokemon_name,pokemon_type,pokemon_type2
        if types[1] == "Ghost":
            typus2 = Ghost
            pokemon_type2 = f"\n{typus2[0]}\n{typus2[1]}\n{typus2[2]}\n{typus2[3]}\nEffekt: {typus2[4]}"
            return pokemon_name,pokemon_type,pokemon_type2
        if types[1] == "Grass":
            typus2 = Grass
            pokemon_type2 = f"\n{typus2[0]}\n{typus2[1]}\n{typus2[2]}\n{typus2[3]}\nEffekt: {typus2[4]}"
            return pokemon_name,pokemon_type,pokemon_type2
        if types[1] == "Ground":
            typus2 = Ground
            pokemon_type2 = f"\n{typus2[0]}\n{typus2[1]}\n{typus2[2]}\n{typus2[3]}\nEffekt: {typus2[4]}"
            return pokemon_name,pokemon_type,pokemon_type2
        if types[1] == "Ice":
            typus2 = Ice
            pokemon_type2 = f"\n{typus2[0]}\n{typus2[1]}\n{typus2[2]}\n{typus2[3]}\nEffekt: {typus2[4]}"
            return pokemon_name,pokemon_type,pokemon_type2
        if types[1] == "Normal":
            typus2 = Normal
            pokemon_type2 = f"\n{typus2[0]}\n{typus2[1]}\n{typus2[2]}\n{typus2[3]}\nEffekt: {typus2[4]}"
            return pokemon_name,pokemon_type,pokemon_type2
        if types[1] == "Poison":
            typus2 = Poison
            pokemon_type2 = f"\n{typus2[0]}\n{typus2[1]}\n{typus2[2]}\n{typus2[3]}\nEffekt: {typus2[4]}"
            return pokemon_name,pokemon_type,pokemon_type2
        if types[1] == "Psychic":
            typus2 = Psychic
            pokemon_type2 = f"\n{typus2[0]}\n{typus2[1]}\n{typus2[2]}\n{typus2[3]}\nEffekt: {typus2[4]}"
            return pokemon_name,pokemon_type,pokemon_type2
        if types[1] == "Rock":
            typus2 = Rock
            pokemon_type2 = f"\n{typus2[0]}\n{typus2[1]}\n{typus2[2]}\n{typus2[3]}\nEffekt: {typus2[4]}"
            return pokemon_name,pokemon_type,pokemon_type2
        if types[1] == "Steel":
            typus2 = Steel
            pokemon_type2 = f"\n{typus2[0]}\n{typus2[1]}\n{typus2[2]}\n{typus2[3]}\nEffekt: {typus2[4]}"
            return pokemon_name,pokemon_type,pokemon_type2
        if types[1] == "Water":
            typus2 = Water
            pokemon_type2 = f"\n{typus2[0]}\n{typus2[1]}\n{typus2[2]}\n{typus2[3]}\nEffekt: {typus2[4]}"
            return pokemon_name,pokemon_type,pokemon_type2
        else:
            pokemon_name = "Konnte Pokémon Typen nicht finden."
            pokemon_type = ""
            pokemon_type2 = ""
            return pokemon_name,pokemon_type,pokemon_type2