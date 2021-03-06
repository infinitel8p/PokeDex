#Precheck for all dependecies
import os
import sys
import time
import logging   
from dearpygui.core import *
from dearpygui.simple import *
from pokedexx import Search

#sys.dont_write_bytecode = True → just added __pycache__ to .gitignore
log_output = open("log.txt", "a")
logging.basicConfig(level=logging.DEBUG)

#main worker
#callback of search button

search_runs = []
last_search = ""
pokedex_version = "Pokedex for PokeOne v.3.0.1"

#callback functions
def Build_menu():
    #Menu
    with menu_bar("Menu Bar", parent = pokedex_version):
        with menu("Options"):
            add_menu_item("Go to project page", callback = Browser, parent = "Options")
            add_menu_item("See the logs", callback = show_logger, parent = "Options")
            add_menu_item("Delete last search result", callback = Delete_last_result, parent = "Options")
            with menu("Empty Menu", parent = "Options"):
                add_menu_item("test", callback = Add_dummy, parent = "Empty Menu")

def Delete_last_result():
    if search_runs == []:
        #runs only with the first search (when search_runs[-1] does not exist)
        add_separator(parent = pokedex_version)
        add_spacing(count = 2, parent = pokedex_version)
    else:
        #hide last search result
        clear_drawing("logo")
        draw_image("logo", r"PokeDex.png", [115,0], [365,250])
        delete_item(search_runs[-1])
    
def Browser():
    os.system("start chrome https://github.com/infinitel8p/PokeDex/")

def Add_dummy():
    delete_item(pokedex_version, children_only = True)
    add_text("test", parent = pokedex_version)
    Build_menu()
    add_dummy(width=150, height=150, parent = pokedex_version)

def Start_pokemon_check():
#following snippet would be for results in extra window with title as search input
#    with window("Search Result for: " + input_value, width = 520, height = 900):
#        set_window_pos("Search Result for: " + input_value, 0, 0)
    
    input_value = get_value("Input")
    input_value = input_value.lower()
    input_value = input_value.capitalize()
    
    global last_search
    if input_value != last_search:
        last_search = input_value
        #prepaire for output
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

    else:
        log_error(f"recurring input detected: {input_value}")


#window object settings
set_main_window_size(536, 925)
set_global_font_scale(1.25)
set_theme("Red") #Background #161616
set_style_window_padding(25, 25)

#main window
with window(pokedex_version, width = 520, height = 900):
    logging.info(" GUI is running...")
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
    add_input_text("Input", width = 415, default_value = "")
    
    #Button
    add_spacing(count = 5)
    add_button("Start", callback = Start_pokemon_check)
    add_spacing(count = 5)

#place the image inside the space "logo"
draw_image("logo", r"PokeDex.png", [115,0], [365,250]) #padding 25

start_dearpygui(primary_window = pokedex_version)
logging.info(" GUI is closed.")