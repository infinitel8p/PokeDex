#Precheck for all dependecies
import os
import sys
import time
import logging

#sys.dont_write_bytecode = True → just added __pycache__ to .gitignore
log_output = open("log.txt", "a")
logging.basicConfig(level=logging.DEBUG)

#returns installed python libraries
installed_libraries = os.popen("python -m pip list").read()
#splits input to a array with the libraries as single elements
def Convert(string): 
    converted_list = list(string.split(" ")) 
    return converted_list
#converts the returned python libraries on the pc and removes empty space in between
check_output = Convert(installed_libraries)
check_output = list(filter(None, check_output))

#start check of which libraries are still needed
required_pdex = True
required_dpgui = True
required_bs4 = True
#search in the array for pokedex.py, dearpygui and bs4
for modules in check_output:
    if (modules.find('pokedex.py') != -1): 
        logging.debug(" pokedex.py is already installed!") 
        required_pdex = False

    if (modules.find('dearpygui') != -1): 
        logging.debug(" dearpygui is already installed!") 
        required_dpgui = False

    if (modules.find('bs4') != -1): 
        logging.debug(" BeautifulSoup4 is already installed!") 
        required_bs4 = False

#if needed libraries are not found pip install them
if required_pdex == True:
    logging.warning(" pokedex.py is missing. pip install will fetch data.")
    os.system("pip install pokedex.py")
    error_time = time.localtime()
    log_output.write(f"[{error_time[2]}.{error_time[1]}.{error_time[0]} {error_time[3]}:{error_time[4]}:{error_time[5]}] Installed pokedex.py.\n")
if required_dpgui == True:
    logging.warning(" dearpygui is missing. pip install will fetch data.")
    os.system("pip install dearpygui")
    error_time = time.localtime()
    log_output.write(f"[{error_time[2]}.{error_time[1]}.{error_time[0]} {error_time[3]}:{error_time[4]}:{error_time[5]}] Installed dearpygui.\n")
if required_bs4 == True:
    logging.warning(" beautifulsoup4 is missing. pip install will fetch data.")
    os.system("pip install beautifulsoup4")
    error_time = time.localtime()
    log_output.write(f"[{error_time[2]}.{error_time[1]}.{error_time[0]} {error_time[3]}:{error_time[4]}:{error_time[5]}] Installed beautifulsoup4.\n")


#dearpygui and pokedexx imports
#try importing dearpygui
#if dearpygui was installed while using app.pyw for the first time the import will fail so the app.pyw needs to be restarted
try:
    from dearpygui import core, simple
except ModuleNotFoundError as error:
    error_time = time.localtime()
    logging.error(f" [{error_time[2]}.{error_time[1]}.{error_time[0]} {error_time[3]}:{error_time[4]}:{error_time[5]}] {error}. Applet will be restarted\n")
    log_output.write(f"[{error_time[2]}.{error_time[1]}.{error_time[0]} {error_time[3]}:{error_time[4]}:{error_time[5]}] {logging.error(error)}. Applet will be restarted\n")
    log_output.close()
    time.sleep(2)
    os.system("python PokeDex.pyw")
    exit()
except ImportError as error:
    error_time = time.localtime()
    log_output.write(f"[{error_time[2]}.{error_time[1]}.{error_time[0]} {error_time[3]}:{error_time[4]}:{error_time[5]}] {logging.error(error)}. Applet will be restarted\n")
    log_output.close()
    time.sleep(2)
    os.system("python PokeDex.pyw")
    exit()
    
from dearpygui.core import *
from dearpygui.simple import *
from pokedexx import Search
#main worker
#callback of search button

search_runs = []
last_search = ""
pokedex_version = "Pokedex for PokeOne v.3.0.1"

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
        if search_runs == []:
            #runs only with the first search (when search_runs[-1] does not exist)
            add_separator(parent=pokedex_version)
            add_spacing(count = 2, parent=pokedex_version)
        else:
            #hide last search result
            hide_item(search_runs[-1])
        #get result from search function in pokedexx and set them to a single variable
        pokemon_name, pokemon_type, pokemon_type2 = Search(input_value)
        search_result = pokemon_name + pokemon_type + pokemon_type2
        #append search_result to the search_runs array and display it
        search_runs.append(search_result)
        clear_drawing("logo")
        draw_image("logo", r"sprite.png", [115,0], [365,250]) #padding 25
        add_text(search_runs[-1], parent=pokedex_version)

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

#test
def Credit():
    with window("Credits", width = 520, height = 900):
        set_window_pos("Credits", 0, 0)


#window object settings
set_main_window_size(536, 925)
set_global_font_scale(1.25)
set_theme("Red") #Background #161616
set_style_window_padding(25, 25)

#main window
with window(pokedex_version, width = 520, height = 900):
    logging.info(" GUI is running...")
    set_window_pos(pokedex_version, 0, 0)
    
    #Tabs
    with tab_bar("Tab Bar"):
        with tab("Search"):
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
        
        with tab("Credits"):
            add_spacing(count = 5)
            add_button("See the credits", callback = Credit)
            add_spacing(count = 5)
            add_button("See the logs", callback = show_logger)

#place the image inside the space "logo"
draw_image("logo", r"PokeDex.png", [115,0], [365,250]) #padding 25

start_dearpygui(primary_window=pokedex_version)
logging.info(" GUI is closed.")