import os
from dearpygui.core import *
from dearpygui.simple import *
from pokedexx import *

search_runs = []
last_search = ""
pokedex_version = "Pokedex for PokeOne v.3.2"

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
    english_menu_language = ["Home", "More", "Go to project page", "See the logs", "Beta functions", "Not working yet", "Information", "Nuke", "Rebuild", "Help", "Settings", "Language", "German", "English"]
    german_menu_language = ["Home", "Mehr", "Projekt Seite", "Logs anzeigen", "Beta Funktionen", "Noch nicht fertig", "Informationen", "'Nuke'", "'Rebuild'", "Hilfe", "Einstellungen", "Sprache", "Deutsch", "Englisch"]
    if current_languge == "english":
        language = english_menu_language
    if current_languge == "german":
        language = german_menu_language
    #creates the menu bar
    with menu_bar("Menu Bar", parent = pokedex_version):
        add_menu_item(language[0], callback = Build_app, parent = "Menu Bar")
        #add_menu_item("Test", label = "  ", enabled = False)
        with menu(language[1], parent = "Menu Bar"):
            add_menu_item(language[2], callback = Browser, parent = language[1])
            add_menu_item(language[3], callback = show_logger, parent = language[1])
            with menu(language[4], label = language[5], parent = language[1]):
                add_menu_item(language[6], callback = Build_more_information, parent = language[4])
                add_menu_item(language[7], callback = Clear_app, parent = language[4])
                add_menu_item(language[8], callback = Build_app, parent = language[4])
        add_menu_item(language[9], callback = Build_help, parent = "Menu Bar")
        with menu(language[10], parent = "Menu Bar"):
            with  menu(language[11], parent = language[10]):
                add_menu_item(language[12], callback = Change_language_to_german, parent = language[11])
                add_menu_item(language[13], callback = Change_language_to_english, parent = language[11])

def Build_help():
    #!!!WORKS WITH CHILDS - STILL NOT FULLY TESTED
    english_help_language = ["With this app you can search for the opposing Pokémon\nto see which type of attack is the most effective\nagainst it.\nIf the Pokémon has two types you get both them in\nthe output. You may have to check if the Pokémon's\nsecond type makes a attack type ineffective again.", "Go back to Search"]
    german_help_language = ["Mit dieser App kannst du nach dem gegnerischen Poké-\nmon suchen um herauszufinden, welche Attacke die\neffektivste dagegen ist.\nFalls das Pokémon zwei Typen hat, bekommst du beide\nim Suchergebnis zurück. Du musst gegebenenfalls\nüberprüfen ob der zweite Typ die effektivität\nmancher Attacken doch noch vermindert.", "Zurück zur Suche"]
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
        clear_drawing("logo")
        draw_image("logo", r"PokeDex.png", [115,0], [365,250])

def Delete_last_result():
    #clears last search result
    clear_drawing("logo")
    draw_image("logo", r"loading.png", [115,0], [365,250])
    delete_item(search_runs[-1])

def Start_pokemon_check():
    #main function - handles pokemon search
    input_value = get_value("Input")
    input_value = input_value.lower()
    input_value = input_value.capitalize()
    #prepaire for output
    if search_runs == []:
        #runs only with the first search (when search_runs[-1] does not exist)
        add_separator(parent = pokedex_version)
        add_spacing(count = 2, parent = pokedex_version)
    else:
        #hide last search result
        clear_drawing("logo")
        draw_image("logo", r"loading.png", [115,0], [365,250])
        delete_item(search_runs[-1])
    #get result from search function in pokedexx and set them to a single variable
    pokemon_name, pokemon_type, pokemon_type2 = Search(input_value)
    search_result = pokemon_name + pokemon_type + pokemon_type2
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
