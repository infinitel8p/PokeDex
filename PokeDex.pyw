#Precheck for all dependecies
import os
import sys
import time
import logging   
from dearpygui.core import *
from dearpygui.simple import *
from support import *

#sys.dont_write_bytecode = True → just added __pycache__ to .gitignore
log_output = open("log.txt", "a")
logging.basicConfig(level=logging.DEBUG)

#MAIN PROGRAM
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
    add_button("Search", callback = Start_pokemon_check)
    add_same_line()
    add_button("Clear", callback = Clear_last_result)
    add_spacing(count = 5)

#place the image inside the space "logo"
draw_image("logo", r"PokeDex.png", [115,0], [365,250]) #padding 25

start_dearpygui(primary_window = pokedex_version)
logging.info(" GUI is closed.")