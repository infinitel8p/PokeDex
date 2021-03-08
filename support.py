#Precheck for all dependecies
import os
import sys
import time
import logging
from dearpygui.core import *
from dearpygui.simple import *
from pokedexx import *

search_runs = []
last_search = ""
pokedex_version = "Pokedex for PokeOne v.3.1"
#Language for home
german_app_language = ["Suche nach Pokémon um Informationen zu bekommen!", "Pokémon Namen hier einfügen", "Suchen", "Löschen", "Löscht das letzte\nSuchergebnis."]
english_app_language = ["Search for Pokémon to get information!", "Insert Pokémon name here", "Search", "Clear", "Deletes the last\nsearch output."]
current_languge = english_app_language

#callback functions
def Build_app():
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
            add_text(current_languge[0], color = [200, 100, 100])
            add_spacing(count = 2)
            #Optional User Input
            add_input_text("Input", width = 415, hint = current_languge[1], default_value = '', on_enter = True, callback = Start_pokemon_check, label = "")
            #Button
            add_spacing(count = 5)
            add_button(current_languge[2], callback = Start_pokemon_check)
            add_same_line()
            add_button(current_languge[3], callback = Clear_last_result, tip = current_languge[4])
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
    #creates the menu bar
    with menu_bar("Menu Bar", parent = pokedex_version):
        add_menu_item("Home", callback = Build_app, parent = "Menu Bar")
        add_menu_item("test", label = "  ", enabled = False)
        with menu("More", parent = "Menu Bar"):
            add_menu_item("Go to project page", callback = Browser, parent = "More")
            add_menu_item("See the logs", callback = show_logger, parent = "More")
            with menu("Beta functions", label = "Not working yet", parent = "More"):
                add_menu_item("More information", callback = Build_more_information, parent = "Beta functions")
                add_menu_item("Nuke the Window", callback = Clear_app, parent = "Beta functions")
                add_menu_item("Rebuild the Window", callback = Build_app, parent = "Beta functions")
        add_menu_item("Help", callback = Build_help, parent = "Menu Bar")
        with menu("Settings", parent = "Menu Bar"):
            with  menu("Language", parent = "Settings"):
                add_menu_item("German", callback = Change_home_language_to_german, parent = "Language")
                add_menu_item("English", callback = Change_home_language_to_english, parent = "Language")

def Build_help():
    #!!!WORKS WITH CHILDS - STILL NOT FULLY TESTED
    Clear_app()
    add_child("help window", parent = pokedex_version, border = False)
    add_text("[Version] " + pokedex_version, parent = "help window", color = [200, 100, 100])
    add_spacing(count = 2, parent = "help window")
    add_text("With this app you can search for the opposing Pokémon\nto see which type of attack is the most effective\nagainst it.\nIf the Pokémon has two types you get both them in\nthe output. You may have to check if the Pokémon's\nsecond type makes a attack type ineffective again.", parent = "help window")
    add_spacing(count = 5, parent = "help window")
    add_button("Go back to Search", callback = Build_app, parent = "help window")

def Build_more_information():
    Clear_app()
    add_text("This is the 'more information' window.\nIt is part of the app that has yet to be finished.", parent = pokedex_version, tip = "Nothing you can\nreally do here yet.")
    add_spacing(count = 5, parent = pokedex_version)
    add_button("Go back to Search", callback = Build_app, parent = pokedex_version)

def Change_home_language_to_english():
    global current_languge
    current_languge = english_app_language
    Build_app()

def Change_home_language_to_german():
    global current_languge
    current_languge = german_app_language
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
