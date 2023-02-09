import customtkinter


class VerticalScrolledFrame(customtkinter.CTkFrame):
    """This class is a modified version of code from https://gist.github.com/JackTheEngineer/81df334f3dcff09fd19e4169dd560c59 and it is used to create a scrolling frame within a window using the customtkinter module.
    Attributes:
        canvas: Tkinter Canvas widget, the canvas that contains the frame to be scrolled.
        interior: Tkinter Frame widget, the interior frame that is placed within the canvas and scrolled.
        interior_id : Tkinter window identifier, the identifier of the interior frame within the canvas.
    Methods:
        init(self, parent, background, * args, **kw): Initializes the class by creating a canvas and vertical scrollbar, a frame inside the canvas, and bindings to synchronize the canvas and frame size and to handle scrolling.
        reset_pos(self): Resets the view of the frame to the top.
    """

    def __init__(self, parent, background, * args, **kw):
        # track changes to the canvas and frame width and sync them,
        # also updating the scrollbar

        def _configure_interior(event):
            # update the scrollbars to match the size of the inner frame
            size = (interior.winfo_reqwidth(), interior.winfo_reqheight())
            self.canvas.config(scrollregion="0 0 %s %s" % size)
            if interior.winfo_reqwidth() != self.canvas.winfo_width():
                # update the canvas's width to fit the inner frame
                self.canvas.config(width=interior.winfo_reqwidth())

        def _configure_canvas(event):
            if interior.winfo_reqwidth() != self.canvas.winfo_width():
                # update the inner frame's width to fill the canvas
                self.canvas.itemconfigure(
                    interior_id, width=self.canvas.winfo_width())

        # This is windows code for scrolling the Frame
        def _on_mousewheel(event):
            self.canvas.yview_scroll(int(-1*(event.delta/120)), "units")

        def _bind_to_mousewheel(event):
            self.canvas.bind_all("<MouseWheel>", _on_mousewheel)

        def _unbind_from_mousewheel(event):
            self.canvas.unbind_all("<MouseWheel>")

        customtkinter.CTkFrame.__init__(self, parent, *args, **kw)

        # create a canvas object and a vertical scrollbar for scrolling it
        vscrollbar = customtkinter.CTkScrollbar(
            self, orientation=customtkinter.VERTICAL, bg_color="transparent")
        vscrollbar.pack(fill=customtkinter.Y, side=customtkinter.RIGHT,
                        expand=customtkinter.FALSE)
        self.canvas = customtkinter.CTkCanvas(self, bg=background, bd=0, highlightthickness=0,
                                              yscrollcommand=vscrollbar.set)
        self.canvas.pack(side=customtkinter.LEFT, fill=customtkinter.BOTH,
                         expand=customtkinter.TRUE)
        vscrollbar.configure(command=self.canvas.yview)

        # reset the view
        self.canvas.xview_moveto(0)
        self.canvas.yview_moveto(0)

        # create a frame inside the canvas which will be scrolled with it
        self.interior = interior = customtkinter.CTkFrame(
            self.canvas, bg_color="transparent")
        interior_id = self.canvas.create_window(0, 0, window=interior,
                                                anchor=customtkinter.NW)

        interior.bind('<Configure>', _configure_interior)
        self.canvas.bind('<Configure>', _configure_canvas)
        self.canvas.bind('<Enter>', _bind_to_mousewheel)
        self.canvas.bind('<Leave>', _unbind_from_mousewheel)

    def reset_pos(self):
        self.canvas.yview_moveto(0)
