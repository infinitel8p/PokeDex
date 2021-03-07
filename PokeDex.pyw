#Precheck for all dependecies
import os
import sys
import time
import logging
from dearpygui.core import *
from dearpygui.simple import *
from support import *


log_output = open("log.txt", "a")
logging.basicConfig(level=logging.DEBUG)

#MAIN PROGRAM
#window object settings
set_main_window_size(536, 925)
set_global_font_scale(1.25)
set_theme("Red") #Background #161616
set_style_window_padding(25, 25)

#main window
logging.info(" GUI is running...")

Build_app()

start_dearpygui(primary_window = pokedex_version)
logging.info(" GUI is closed.")