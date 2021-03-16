import os
from dearpygui.core import *
from dearpygui.simple import *
from pokedexx import *
from uranium import *

search_runs = []
last_search = ""
pokedex_version = "Pokedex for PokeOne v.4.0.1"
new_value1 = None
new_value2 = None
new_value3 = None

#Set language on startup
try:
    last_language = open("settings.txt", "r")
    if last_language.read() == "english":
        current_languge = "english"
        last_language.close()
    last_language = open("settings.txt", "r")
    if last_language.read() == "german":
        current_languge = "german"
        last_language.close()
except FileNotFoundError:
    last_language = open("settings.txt", "w")
    last_language.write("english")
    last_language.close()
    current_languge = "english"

#callback functions
def Build_app():
    set_theme("Red") #Background #161616
    english_app_language = ["Search for Pokémon to get information!", "Insert Pokémon name here", "Search", "Clear", "Deletes the last\nsearch output."]
    german_app_language = ["Suche nach Pokémon um Informationen zu bekommen!", "Pokémon Namen hier einfügen", "Suchen", "Löschen", "Löscht das letzte\nSuchergebnis."]
    if current_languge == "english":
        language = english_app_language
    if current_languge == "german":
        language = german_app_language
    #clears main window
    try:
        delete_item(pokedex_version, children_only = True)
    finally:
        with window(pokedex_version, width = 520, height = 900):
            set_window_pos(pokedex_version, 0, 0)
            #add menu to main window
            Build_menu()
            #image logo
            add_drawing("logo", width=520, height=250) #create some space for the image
            add_separator()
            add_spacing(count = 5)
            add_text(language[0], color = [200, 100, 100])
            add_spacing(count = 2)
            #Optional User Input
            add_input_text("Input", width = 415, hint = language[1], default_value = '', on_enter = True, callback = Start_pokemon_check, label = "")
            #Button
            add_spacing(count = 5)
            add_button(language[2], callback = Start_pokemon_check)
            add_same_line()
            add_button(language[3], callback = Clear_last_result, tip = language[4])
            add_spacing(count = 5)
        #place the image inside the space "logo"
        draw_image("logo", r"PokeDex.png", [115,0], [365,250], tag = "Pokemon") #padding 25

def Browser():
    #opens chrome and navigates to project page
    try:
        os.system("start chrome https://github.com/infinitel8p/PokeDex/")
    except:
        #tries internet explorer if chrome is not available
        os.system("start iexplore https://github.com/infinitel8p/PokeDex/")

def Build_menu():
    english_menu_language = ["Home", "More", "Go to project page", "See the logs", "Beta functions", "Not working yet", "Information", "Uranium", "Reset", "Help", "Settings", "Language", "German", "English"]
    german_menu_language = ["Home", "Mehr", "Projekt Seite", "Logs anzeigen", "Beta Funktionen", "Noch nicht fertig", "Informationen", "Uranium", "Reset", "Hilfe", "Einstellungen", "Sprache", "Deutsch", "Englisch"]
    if current_languge == "english":
        language = english_menu_language
    if current_languge == "german":
        language = german_menu_language
    #creates the menu bar
    with menu_bar("Menu Bar", parent = pokedex_version):
        add_menu_item(language[0], callback = Build_app, parent = "Menu Bar")
        add_menu_item(language[7], callback = Build_uranium, parent = "Menu Bar")
        add_menu_item(language[9], callback = Build_help, parent = "Menu Bar")
        with menu(language[1], parent = "Menu Bar"):
            add_menu_item(language[2], callback = Browser, parent = language[1])
            add_menu_item(language[3], callback = show_logger, parent = language[1])
            with menu(language[4], label = language[5], parent = language[1]):
                add_menu_item(language[6], callback = Build_more_information, parent = language[4])
        with menu(language[10], parent = "Menu Bar"):
            add_menu_item(language[8], callback = Build_app, parent = language[10])
            with  menu(language[11], parent = language[10]):
                add_menu_item(language[12], callback = Change_language_to_german, parent = language[11])
                add_menu_item(language[13], callback = Change_language_to_english, parent = language[11])
                #add_menu_item("Test", label = "  ", enabled = False)

def Build_help():
    #!!!WORKS WITH CHILDS - STILL NOT FULLY TESTED
    set_theme("Red")
    english_help_language = ["With this app you can search for the opposing Pokémon\nto see which type of attack is the most effective\nagainst it.\nIf the Pokémon has two types you get both them in\nthe output. You may have to check if the Pokémon's\nsecond type makes a attack type ineffective again.", "Go back to Search"]
    german_help_language = ["Mit dieser App kannst du nach dem gegnerischen Poké-\nmon suchen um herauszufinden, welche Attacke die\neffektivste dagegen ist.\nFalls das Pokémon zwei Typen hat, bekommst du beide\nim Suchergebnis zurück. Du musst gegebenenfalls\nüberprüfen, ob der zweite Typ die effektivität\nmancher Attacken nicht doch noch vermindert.", "Zurück zur Suche"]
    if current_languge == "english":
        language = english_help_language
    if current_languge == "german":
        language = german_help_language
    Clear_app()
    add_child("help window", parent = pokedex_version, border = False)
    add_text("[Version] " + pokedex_version, parent = "help window", color = [200, 100, 100])
    add_spacing(count = 2, parent = "help window")
    add_text(language[0], parent = "help window")
    add_spacing(count = 5, parent = "help window")
    add_button(language[1], callback = Build_app, parent = "help window")

def Build_more_information():
    english_help_language = ["This is the 'more information' window.\nIt is part of the app that has yet to be finished.", "Nothing you can\nreally do here yet.", "Go back to Search"]
    german_help_language = ["Dies ist das 'Mehr Informationen' Fenster.\nEs gehört zum Teil der App, an welchem momentan\nnoch gearbeitet wird.", "Hier gibt es noch nichts", "Zurück zur Suche"]
    if current_languge == "english":
        language = english_help_language
    if current_languge == "german":
        language = german_help_language
    Clear_app()
    add_text(language[0], parent = pokedex_version, tip = language[1])
    add_spacing(count = 5, parent = pokedex_version)
    add_button(language[2], callback = Build_app, parent = pokedex_version)

def Build_uranium():
    #!!!WORKS WITH CHILDS - STILL NOT FULLY TESTED
    Clear_app()
    set_theme("Dark Grey")
    add_child("uranium", parent = pokedex_version, border = False)

    english_app_language = ["Search for Pokémon to get information!", "Insert Pokémon name here", "Search", "Clear", "Deletes the last\nsearch output."]
    german_app_language = ["Suche nach Pokémon um Informationen zu bekommen!", "Pokémon Namen hier einfügen", "Suchen", "Löschen", "Löscht das letzte\nSuchergebnis."]
    if current_languge == "english":
        language = english_app_language
    if current_languge == "german":
        language = german_app_language
    #clears main window
    try:
        delete_item("uranium", children_only = True)
    finally:
        #image logo
        add_drawing("logo", width=520, height=250) #create some space for the image
        add_separator()
        add_spacing(count = 5)
        add_text(language[0], color = [124, 252, 0])
        add_spacing(count = 2)
        #Optional User Input
        add_input_text("Input", width = 415, hint = language[1], default_value = '', on_enter = True, callback = Start_pokemon_uranium_check, label = "")
        #Button
        add_spacing(count = 5)
        add_button(language[2], callback = Start_pokemon_uranium_check)
        add_same_line()
        add_button(language[3], callback = Clear_last_uranium_result, tip = language[4])
        add_spacing(count = 5)
    #place the image inside the space "logo"
    draw_image("logo", r"Uranium.png", [115,0], [365,250], tag = "Pokemon") #padding 25

def Change_input_value1():
    set_value(name = "Input", value = new_value1)
    Start_pokemon_check()

def Change_input_value2():
    set_value(name = "Input", value = new_value2)
    Start_pokemon_check()

def Change_input_value3():
    set_value(name = "Input", value = new_value3)
    Start_pokemon_check()

def Change_uranium_input_value1():
    set_value(name = "Input", value = new_value1)
    Start_pokemon_uranium_check()

def Change_uranium_input_value2():
    set_value(name = "Input", value = new_value2)
    Start_pokemon_uranium_check()

def Change_uranium_input_value3():
    set_value(name = "Input", value = new_value3)
    Start_pokemon_uranium_check()


def Change_language_to_english():
    global current_languge
    current_languge = "english"
    last_language = open("settings.txt", "w")
    last_language.write("english")
    last_language.close()
    Build_app()

def Change_language_to_german():
    global current_languge
    current_languge = "german"
    last_language = open("settings.txt", "w")
    last_language.write("german")
    last_language.close()
    Build_app()

def Clear_app():
    #clears whole program
    delete_item(pokedex_version, children_only = True)
    set_value(name = "Input", value = "")
    with window(pokedex_version):
        Build_menu()

def Clear_last_result():
    if search_runs == []:
        clear_drawing("logo")
        draw_image("logo", r"PokeDex.png", [115,0], [365,250])
    else:
        #clears last search result
        clear_drawing("logo")
        draw_image("logo", r"loading.png", [115,0], [365,250])
        delete_item(search_runs[-1])
        delete_item("pokemon_tab_bar")
        set_value(name = "Input", value = "")
        clear_drawing("logo")
        draw_image("logo", r"PokeDex.png", [115,0], [365,250])

def Clear_last_uranium_result():
    if search_runs == []:
        clear_drawing("logo")
        draw_image("logo", r"Uranium.png", [115,0], [365,250])
    else:
        #clears last search result
        clear_drawing("logo")
        draw_image("logo", r"loading.png", [115,0], [365,250])
        delete_item(search_runs[-1])
        delete_item("pokemon_tab_bar")
        set_value(name = "Input", value = "")
        clear_drawing("logo")
        draw_image("logo", r"Uranium.png", [115,0], [365,250])

def Delete_last_result():
    #clears last search result
    clear_drawing("logo")
    draw_image("logo", r"loading.png", [115,0], [365,250])
    delete_item(search_runs[-1])
    delete_item("pokemon_tab_bar")

def Start_pokemon_check():
    global new_value1
    global new_value2
    global new_value3
    #main function - handles pokemon search
    input_value = get_value("Input")
    input_value = input_value.lower()
    input_value = input_value.capitalize()
    #prepaire for output
    if search_runs == []:
        #runs only with the first search (when search_runs[-1] does not exist)
        add_spacing(count = 2, parent = pokedex_version)

    else:
        #hide last search result
        Delete_last_result()
    #get result from search function in pokedexx and set them to a single variable
    pokemon_name, pokemon_type, pokemon_type2 , pokemon_evolution = Search(input_value)
    search_result = pokemon_name + pokemon_type + pokemon_type2
    if len(pokemon_evolution) == 1:
        new_value1 = pokemon_evolution[0]
        add_tab_bar("pokemon_tab_bar", parent = pokedex_version)
        add_tab_button(Translator(pokemon_evolution[0]), parent="pokemon_tab_bar", callback = Change_input_value1)
    if len(pokemon_evolution) == 2:
        new_value1 = pokemon_evolution[0]
        new_value2 = pokemon_evolution[1]
        add_tab_bar("pokemon_tab_bar", parent = pokedex_version)
        add_tab_button(Translator(pokemon_evolution[0]), parent="pokemon_tab_bar", callback = Change_input_value1)
        add_tab_button(Translator(pokemon_evolution[1]), parent="pokemon_tab_bar", callback = Change_input_value2)
    if len(pokemon_evolution) == 3:
        new_value1 = pokemon_evolution[0]
        new_value2 = pokemon_evolution[1]
        new_value3 = pokemon_evolution[2]
        add_tab_bar("pokemon_tab_bar", parent = pokedex_version)
        add_tab_button(Translator(pokemon_evolution[0]), parent="pokemon_tab_bar", callback = Change_input_value1)
        add_tab_button(Translator(pokemon_evolution[1]), parent="pokemon_tab_bar", callback = Change_input_value2)
        add_tab_button(Translator(pokemon_evolution[2]), parent="pokemon_tab_bar", callback = Change_input_value3)

    #append search_result to the search_runs array and display it
    search_runs.append(search_result)
    clear_drawing("logo")
    draw_image("logo", r"sprite.png", [115,0], [365,250]) #padding 25
    add_text(search_runs[-1], parent = pokedex_version)
    #stuff for logs
    error_output = search_result.replace(input_value, '')
    error_text = "Pokémon '' konnte nicht gefunden werden!"
    if error_output == error_text:
        log_error(input_value)
    else:
        log_info(input_value)
        #log_debug("Debug Message")
        #log_warning("Warning Message")

def Start_pokemon_uranium_check():
    global new_value1
    global new_value2
    global new_value3

    #main function - handles pokemon search
    input_value = get_value("Input")

    #formats input
    if " " in input_value:
        to_be_formatted = input_value.split()
        after_format = []
        for word in to_be_formatted:
            word = word.lower()
            word = word.capitalize()
            after_format.append(word)
        input_value = " ".join(after_format)
    else:
        input_value = input_value.lower()
        input_value = input_value.capitalize()
    #prepaire for output
    set_theme("Dark 2")
    set_theme("Dark Grey")
    if search_runs == []:
        #runs only with the first search (when search_runs[-1] does not exist)
        add_spacing(count = 2, parent = "uranium")
    else:
        #hide last search result
        Delete_last_result()
    #get result from search function in pokedexx and set them to a single variable
    resulted_pokemon, resulted_pokemon2, resulted_pokemon3 = Uranium_Search(input_value)
    if resulted_pokemon != None:
        add_tab_bar("pokemon_tab_bar", parent = "uranium")
        new_value1 = resulted_pokemon.get_name()
        add_tab_button(resulted_pokemon.get_name(), parent="pokemon_tab_bar", callback = Change_uranium_input_value1)
        if resulted_pokemon.get_type()[1] == []:
            search_result = f"Eng: {resulted_pokemon.get_name()}  -  IndexNr: {resulted_pokemon.get_indexnr()}\n{resulted_pokemon.get_type()[0][0]}\n{resulted_pokemon.get_type()[0][1]}\n{resulted_pokemon.get_type()[0][2]}\n{resulted_pokemon.get_type()[0][3]}\n{resulted_pokemon.get_type()[0][4]}"
        if resulted_pokemon.get_type()[1] != []:
            search_result = f"Eng: {resulted_pokemon.get_name()}  -  IndexNr: {resulted_pokemon.get_indexnr()}\n{resulted_pokemon.get_type()[0][0]}\n{resulted_pokemon.get_type()[0][1]}\n{resulted_pokemon.get_type()[0][2]}\n{resulted_pokemon.get_type()[0][3]}\n{resulted_pokemon.get_type()[0][4]}\n###################################################\n{resulted_pokemon.get_type()[1][0]}\n{resulted_pokemon.get_type()[1][1]}\n{resulted_pokemon.get_type()[1][2]}\n{resulted_pokemon.get_type()[1][3]}\n{resulted_pokemon.get_type()[1][4]}"
    if resulted_pokemon2 != None:
        new_value2 = resulted_pokemon2.get_name()
        add_tab_button(resulted_pokemon2.get_name(), parent="pokemon_tab_bar", callback = Change_uranium_input_value2)
        #add_tab("test3", parent="pokemon_tab_bar")
    if resulted_pokemon3 != None:
        new_value3 = resulted_pokemon3.get_name()
        add_tab_button(resulted_pokemon3.get_name(), parent="pokemon_tab_bar", callback = Change_uranium_input_value3)
        #search_result += ", " + resulted_pokemon3.get_name()
    error_text = f"Pokémon '{input_value}' konnte nicht gefunden werden!"
    if resulted_pokemon == None:
        clear_drawing("logo")
        draw_image("logo", r"error_404.png", [115,0], [365,250]) #padding 25
        search_runs.append(error_text)
        add_text(search_runs[-1], parent = "uranium")
        log_error(error_text)
    else:
        search_runs.append(search_result)
        add_text(search_runs[-1], parent = "uranium")
        log_info(input_value)
        opener = urllib.request.build_opener()
        opener.addheaders = [('User-agent', 'Mozilla/5.0')]
        urllib.request.install_opener(opener)
        urllib.request.urlretrieve(resulted_pokemon.get_picture(), "sprite.png")
        clear_drawing("logo")
        draw_image("logo", r"sprite.png", [115,0], [365,250]) #padding 25