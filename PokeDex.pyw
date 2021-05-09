import logging
from dearpygui.core import *
from dearpygui.simple import *
from support import *

#create log.txt
log_output = open("log.txt", "a")
logging.basicConfig(level=logging.DEBUG)

# ---MAIN PROGRAM---
#window object settings
set_main_window_size(536, 925)
set_global_font_scale(1.25)
set_style_window_padding(20, 20)

#main window
logging.info(" GUI is running...")
Build_app()
start_dearpygui(primary_window = pokedex_version)
logging.info(" GUI is closed.")