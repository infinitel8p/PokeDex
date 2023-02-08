import customtkinter
import os
from modules.Home import Home
from modules.Uranium import Uranium


class Root(customtkinter.CTk):
    def __init__(self):
        customtkinter.CTk.__init__(self)
        self.title("PokeDex")

        # set window properties
        self.wm_iconbitmap(os.path.join("images", "icon.ico"))
        self.geometry("500x900")
        self.resizable(False, False)

        # load custom fonts
        customtkinter.FontManager.load_font(
            os.path.join("fonts", "PixelOperator8.ttf"))

        # set customtkinter properties
        customtkinter.set_widget_scaling(1)
        customtkinter.set_appearance_mode("dark")
        customtkinter.set_default_color_theme(
            os.path.join("themes", "red.json"))

        # Menu Bar
        self.menu_frame = customtkinter.CTkFrame(
            self, fg_color=customtkinter.ThemeManager.theme["CTkSegmentedButton"]["fg_color"][1], corner_radius=0)
        self.menu_frame.pack(side=customtkinter.TOP, fill=customtkinter.X)

        self.build_menu()
        self.menu_bar.set("Home")

        # Content
        self.content = eval(self.menu_bar.get())(self)
        self.content.pack(fill="both", expand=True,
                          padx=5, pady=(0, 5))

    def build_menu(self):
        self.menu_bar = customtkinter.CTkSegmentedButton(
            self.menu_frame, values=[
                "Home", "Uranium", "Help", "More", "Settings"],
            selected_color=customtkinter.ThemeManager.theme["CTkSegmentedButton"]["fg_color"][1],
            command=self.update_content)
        self.menu_bar.pack(side=customtkinter.LEFT, ipadx=5, padx=5)

    def update_content(self, value):
        # get the selected screen
        selected = self.menu_bar.get()

        # destroy and rebuild the screen
        self.content.destroy()
        self.content = eval(selected)(self)
        self.content.pack(fill="both", expand=True,
                          padx=5, pady=(0, 5))

        # destroy and rebuild the menu bar
        self.menu_bar.destroy()
        self.menu_frame.configure(
            fg_color=customtkinter.ThemeManager.theme["CTkSegmentedButton"]["fg_color"][1])
        self.build_menu()
        self.menu_bar.set(selected)


root = Root()
root.mainloop()
