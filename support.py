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
            add_text("Search for Pokemon to get your results!", color = [200, 100, 100])
            add_spacing(count = 2)

            #Optional User Input
            add_input_text("Input", width = 415, hint = "Insert Pokémon name here", on_enter = True, callback = Start_pokemon_check, label = "")
            
            #Button
            add_spacing(count = 5)
            add_button("Search", callback = Start_pokemon_check)
            add_same_line()
            add_button("Clear", callback = Clear_last_result)
            add_spacing(count = 5)
        
        #place the image inside the space "logo"
        draw_image("logo", r"PokeDex.png", [115,0], [365,250]) #padding 25
    
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
        with menu("Options", parent = "Menu Bar"):
            add_menu_item("Go to project page", callback = Browser, parent = "Options")
            add_menu_item("See the logs", callback = show_logger, parent = "Options")
            with menu("Not working yet", parent = "Options"):
                add_menu_item("Nuke the Window", callback = Clear_app, parent = "Not working yet")
                add_menu_item("Rebuild the Window", callback = Build_app, parent = "Not working yet")
        add_menu_item("More Information", callback = Build_more_information, parent = "Menu Bar")
        add_menu_item("Help", callback = Build_help, parent = "Menu Bar")

def Build_help():
    Clear_app()
    add_child("help window", parent = pokedex_version, border = False)
    add_text("This is the help window. We are still working on it", parent = "help window")

def Build_more_information():
    delete_item(pokedex_version, children_only = True)
    Build_menu()
    add_text("This is the more information window. We are still working on it", parent = pokedex_version)

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
