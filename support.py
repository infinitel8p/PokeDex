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

#callback functions
def Add_dummy():
    #clears whole program
    delete_item(pokedex_version, children_only = True)
    add_text("You nuked the window. Please restart the applet", parent = pokedex_version)
    with window(pokedex_version):
        Build_menu()
    add_dummy(width=150, height=150, parent = pokedex_version)
    
def Browser():
    #opens chrome and navigates to project page
    try:
        os.system("start chrome https://github.com/infinitel8p/PokeDex/")
    except:
        #tries internet explorer if chrome is not available
        os.system("start iexplore https://github.com/infinitel8p/PokeDex/")

def Build_menu(build_parent = pokedex_version):
    #creates the menu bar
    with menu_bar("Menu Bar", parent = build_parent):
        with menu("Options"):
            add_menu_item("Go to project page", callback = Browser, parent = "Options")
            add_menu_item("See the logs", callback = show_logger, parent = "Options")
            with menu("Not working yet", parent = "Options"):
                add_menu_item("Nuke the Window", callback = Add_dummy, parent = "Not working yet")

def Clear_last_result():
    if search_runs == []:
        clear_drawing("logo")
        draw_image("logo", r"PokeDex.png", [115,0], [365,250])
    else:
        Delete_last_result()
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
    
    #global last_search
    #if input_value != last_search:
    last_search = input_value
    #prepaire for output
    if search_runs == []:
        #runs only with the first search (when search_runs[-1] does not exist)
        add_separator(parent = pokedex_version)
        add_spacing(count = 2, parent = pokedex_version)
    else:
        #hide last search result
        Delete_last_result()
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

    #else:
     #   log_error(f"recurring input detected: {input_value}")