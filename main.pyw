import customtkinter
from modules.Home import Home


class Root(customtkinter.CTk):
    def __init__(self):
        customtkinter.CTk.__init__(self)
        self.title("PokeDex")
        self.wm_iconbitmap(f"images\\icon.ico")
        self.geometry("500x900")
        self.resizable(False, False)
        customtkinter.set_widget_scaling(0.9)
        customtkinter.set_appearance_mode("dark")
        customtkinter.set_default_color_theme("blue")

        # Menu Bar
        self.menu_color = customtkinter.ThemeManager.theme["CTkSegmentedButton"]["fg_color"][1]

        self.menu_frame = customtkinter.CTkFrame(
            self, fg_color=self.menu_color, corner_radius=0)
        self.menu_frame.pack(side=customtkinter.TOP, fill=customtkinter.X)

        self.menu_bar = customtkinter.CTkSegmentedButton(
            self.menu_frame, values=["Home", "Uranium", "Help", "More", "Settings"], selected_color=self.menu_color, height=10, command=self.update_content)
        self.menu_bar.set("Home")
        self.menu_bar.pack(side=customtkinter.LEFT, ipadx=5, padx=5)

        # Content
        self.content = eval(self.menu_bar.get())(self)
        self.content.pack(fill="both", expand=True, padx=5, pady=(0, 5))

    def update_content(self, value):
        self.content.destroy()
        self.content = eval(self.menu_bar.get())(self)
        self.content.pack(fill="both", expand=True, padx=5, pady=(0, 5))


root = Root()
root.mainloop()
