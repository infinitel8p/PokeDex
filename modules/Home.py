import customtkinter
import tkinter as tk
import os

from PIL import Image
from modules.VerticalScrolledFrame import VerticalScrolledFrame

import pokedexx


class Home(customtkinter.CTkFrame):
    def __init__(self, parent):
        self.parent = parent
        super().__init__(master=parent)
        self.configure(fg_color="transparent")
        customtkinter.set_default_color_theme(
            os.path.join("themes", "red.json"))

        # Content
        # Image
        self.image = customtkinter.CTkImage(
            Image.open("images/PokeDex.png"), size=(250, 250))
        self.image_label = customtkinter.CTkLabel(
            self, image=self.image, text="")
        self.image_label.pack(pady=10)

        self.style = tk.ttk.Style()
        self.style.configure(
            "TSeparator", background="#060606")

        # Separator
        self.separator_1 = tk.ttk.Separator(
            self, orient="horizontal", style="TSeparator")
        self.separator_1.pack(fill="x", padx=5, pady=(0, 15))

        # Search Bar
        self.search_frame = customtkinter.CTkFrame(
            self, fg_color="transparent")
        self.search_frame.pack(pady=10, padx=5)

        self.search_label = customtkinter.CTkLabel(
            self.search_frame, text="Search for a Pokémon to get information!", anchor="w", justify="left", width=450, wraplength=450)
        self.search_label.grid(row=0, column=0, pady=10,
                               sticky="w", padx=20)

        self.search_bar = customtkinter.CTkEntry(
            self.search_frame, width=450, placeholder_text="Insert Pokémon name")
        self.search_bar.grid(row=1, column=0, pady=10)
        self.search_bar.bind("<Return>", self.search)

        # Buttons
        self.button_frame = customtkinter.CTkFrame(
            self.search_frame, fg_color="transparent")
        self.button_frame.grid(row=2, column=0, pady=10)

        self.search_button = customtkinter.CTkButton(
            self.button_frame, text="Search", height=10, width=70)
        self.search_button.grid(row=0, column=0, pady=10, padx=5)
        self.search_button.bind("<Button-1>", self.search)

        self.clear_button = customtkinter.CTkButton(
            self.button_frame, text="Clear", height=10, width=70)
        self.clear_button.grid(row=0, column=1, pady=10, padx=5)
        self.clear_button.bind("<Button-1>", self.clear)

        # Separator
        self.separator_2 = tk.ttk.Separator(
            self, orient="horizontal", style="TSeparator")
        self.separator_2.pack(fill="x", padx=5, pady=(15))

    def search(self, event):
        # execute search
        pokemon_name, pokemon_type, pokemon_type2, pokemon_evolution = pokedexx.search(
            self.search_bar.get())

        # remove old widgets
        needs_to_go = ["separator_1", "image_label",
                       "search_label", "search_bar", "button_frame"]
        for widget in needs_to_go:
            self.__dict__[widget].destroy()

        # create image
        self.default = Image.open(
            r"C:\Users\Ludo\Desktop\PokeDex\images\download\original_front_default.png").resize((250, 250))
        self.shiny = Image.open(
            r"C:\Users\Ludo\Desktop\PokeDex\images\download\original_front_shiny.png").resize((125, 125))

        # compute the position for the bottom-right corner
        x = self.default.width - self.shiny.width
        y = self.default.height - self.shiny.height

        # paste the small image onto the big image
        self.default.alpha_composite(self.shiny, (x, y))

        self.image = customtkinter.CTkImage(
            self.default, size=(245, 245))

        self.image_label = customtkinter.CTkLabel(
            self.search_frame, image=self.image, text="")
        self.image_label.grid(row=0, column=2, rowspan=10,
                              padx=(5, 0), sticky="e")

        # add return button
        self.return_button = customtkinter.CTkButton(
            self.search_frame, text="Return", height=10, width=30)
        self.return_button.grid(row=0, column=0, sticky="nw")
        self.return_button.bind("<Button-1>", self.return_to_search)

        # add pokemon name
        self.results_pokemon_name = customtkinter.CTkLabel(
            self.search_frame, text="", width=180, wraplength=180, justify="left", anchor="nw")
        self.results_pokemon_name.grid(
            row=1, column=0, sticky="nw")

        # add index nr
        self.results_pokemon_index = customtkinter.CTkLabel(
            self.search_frame, text="", width=50, justify="right", anchor="ne")
        self.results_pokemon_index.grid(
            row=1, column=1, padx=(0, 10), sticky="ne")

        self.results_frame = customtkinter.CTkFrame(
            self.search_frame, width=250, fg_color="transparent")
        self.results_frame.grid(row=2, column=0, columnspan=2)

        # add type
        self.results_pokemon_type_1 = customtkinter.CTkButton(
            self.results_frame, text="", fg_color="transparent", border_color="white", text_color_disabled="white",
            border_width=1, width=105, height=20, corner_radius=45, state="disabled")
        self.results_pokemon_type_1.grid(
            row=1, column=0, sticky="w", padx=(0, 10))

        # add type 2
        self.results_pokemon_type_2 = customtkinter.CTkButton(
            self.results_frame, text="", fg_color="transparent", border_color="white", text_color_disabled="white",
            border_width=1, width=105, height=20, corner_radius=45, state="disabled")
        self.results_pokemon_type_2.grid(
            row=1, column=1, sticky="e", padx=(10, 0))

        # add special scroll frame
        self.vertical_scrolled_frame = customtkinter.CTkScrollableFrame(self)
        self.vertical_scrolled_frame.pack(side="top",
                                          fill="both", expand=True)

        # add label for results
        self.results = customtkinter.CTkLabel(
            self.vertical_scrolled_frame, text="", anchor="w", justify="left", width=450, wraplength=450)
        self.results.pack(pady=10)

        # add results to label
        self.results_pokemon_name.configure(
            text=pokemon_name)
        self.results_pokemon_index.configure(text="#006")
        self.results_pokemon_type_1.configure(text="Fire")
        self.results_pokemon_type_2.configure(text="Flying")
        self.results.configure(text=pokemon_type)
        self.results.configure(text=self.results.cget("text") + pokemon_type2)
        self.results.configure(text=self.results.cget("text") + pokemon_type2)
        self.results.configure(
            text=self.results.cget("text") + pokemon_evolution)

    def clear(self, event):
        self.search_bar.delete(0, "end")

    def return_to_search(self, event):
        self.parent.update_content(event)
