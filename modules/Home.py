import customtkinter
import tkinter as tk
import os

from PIL import Image

import pokedexx


class Home(customtkinter.CTkFrame):
    def __init__(self, parent):
        super().__init__(master=parent)
        self.configure(fg_color="transparent")
        customtkinter.set_default_color_theme(
            os.path.join("themes", "red.json"))

        # Content
        # Image
        image = customtkinter.CTkImage(
            Image.open("images/PokeDex.png"), size=(250, 250))
        image_label = customtkinter.CTkLabel(self, image=image, text="")
        image_label.pack(pady=10)

        style = tk.ttk.Style()
        style.configure(
            "TSeparator", background="#060606")

        # Separator
        separator = tk.ttk.Separator(
            self, orient="horizontal", style="TSeparator")
        separator.pack(fill="x", padx=5, pady=(0, 15))

        # Search Bar
        search_label = customtkinter.CTkLabel(
            self, text="Search for a Pokémon to get information!")
        search_label.pack(pady=10)

        self.search_bar = customtkinter.CTkEntry(
            self, width=450, placeholder_text="Insert Pokémon name")
        self.search_bar.pack(pady=10)
        self.search_bar.bind("<Return>", self.search)

        # Buttons
        button_frame = customtkinter.CTkFrame(self, fg_color="transparent")
        button_frame.pack(pady=10)

        search_button = customtkinter.CTkButton(button_frame, text="Search")
        search_button.grid(row=0, column=0, pady=10, padx=5)
        search_button.bind("<Button-1>", self.search)

        clear_button = customtkinter.CTkButton(button_frame, text="Clear")
        clear_button.grid(row=0, column=1, pady=10, padx=5)
        clear_button.bind("<Button-1>", self.clear)

        # Separator
        separator = tk.ttk.Separator(
            self, orient="horizontal", style="TSeparator")
        separator.pack(fill="x", padx=5, pady=(15))

        # Results

        self.results = customtkinter.CTkLabel(self, text="")
        self.results.pack(pady=10)

    def search(self, event):
        print("Searching...")
        self.results.configure(text=pokedexx.search(self.search_bar.get()))

    def clear(self, event):
        self.search_bar.delete(0, "end")
