class Pokemon ():
#test
    def __init__ (self, pokemon_name, pokemon_indexnr, pokemon_sprite, pokemon_picture, pokemon_type, pokemon_type2 = None):
        self.pokemon_name = pokemon_name
        self.pokemon_indexnr = pokemon_indexnr
        self.pokemon_sprite = pokemon_sprite
        self.pokemon_picture = pokemon_picture
        self.pokemon_type = pokemon_type
        self.pokemon_type2 = pokemon_type2

    def get_name(self):
        return self.pokemon_name

    def get_indexnr(self):
        return self.pokemon_indexnr

    def get_sprite(self):
        return self.pokemon_sprite

    def get_picture(self):
        return self.pokemon_picture

    def get_type(self):
        if self.pokemon_type2 == None:
            return self.pokemon_type
        else:
            return str(self.pokemon_type, self.pokemon_type2)


Orchynx = Pokemon("Orchynx", "#001", "google.de/bild", "google.de/bild2", "Grass", "Steel")
Metalynx = Pokemon("Metalynx", "#002", "google.de/bild", "google.de/bild2", "Grass", "Steel")
Raptorch = Pokemon("Raptorch", "#003", "google.de/bild", "google.de/bild2", "Fire", "Ground")
Archilles = Pokemon("Archilles", "#004", "google.de/bild", "google.de/bild2", "Fire", "Ground")
Eletux = Pokemon("Eletux", "#005", "google.de/bild", "google.de/bild2", "Water", "Electric")
Electruxo = Pokemon("Electruxo", "#006", "google.de/bild", "google.de/bild2", "Water", "Electric")
Chyinmunk = Pokemon("Chyinmunk", "#007", "google.de/bild", "google.de/bild2", "Normal")

Pokédex_Uranium = [Orchynx, Metalynx, Raptorch, Archilles, Eletux, Electruxo, Chyinmunk]

search_input = input("Welches Pokémon möchtest du suchen? ")
search_input = search_input.lower()
search_input = search_input.capitalize()

for pokemon in Pokédex_Uranium:
    if search_input == pokemon.get_name():
        search_input = pokemon
        print(search_input.get_indexnr())
