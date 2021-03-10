class Pokemon ():

    def __init__ (self, pokemon_name, pokemon_indexnr, pokemon_sprite, pokemon_picture, pokemon_type, pokemon_type2, pokemon_versions):
        self.pokemon_name = pokemon_name
        self.pokemon_indexnr = pokemon_indexnr
        self.pokemon_sprite = pokemon_sprite
        self.pokemon_picture = pokemon_picture
        self.pokemon_versions = versions
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

    def get_versions(self):
        return self.versions

    def get_type(self):
        if self.pokemon_type2 == None:
            return self.pokemon_type
        else:
            return str(self.pokemon_type, self.pokemon_type2)


Orchynx = Pokemon("Orchynx", "#001", "google.de/bild", "google.de/bild2", 1, "Grass", "Steel")
Metalynx = Pokemon("Metalynx", "#002", "google.de/bild", "google.de/bild2", 2, "Grass", "Steel")         #Mega
Raptorch = Pokemon("Raptorch", "#003", "google.de/bild", "google.de/bild2", 1, "Fire", "Ground")
Archilles = Pokemon("Archilles", "#004", "google.de/bild", "google.de/bild2", 2, "Fire", "Ground")       #Mega
Eletux = Pokemon("Eletux", "#005", "google.de/bild", "google.de/bild2", 1, "Water", "Electric")
Electruxo = Pokemon("Electruxo", "#006", "google.de/bild", "google.de/bild2", 2, "Water", "Electric")    #Mega
Chyinmunk = Pokemon("Chyinmunk", "#007", "google.de/bild", "google.de/bild2", 2, "Normal")               #Nuclear
Kinetmunk = Pokemon("Kinetmunk", "#008", "google.de/bild", "google.de/bild2", 2, "Normal", "Electric")   #Nuclear
Birbie = Pokemon("Birbie", "#009", "google.de/bild", "google.de/bild2", 1, "Normal", "Flying")
Aveden = Pokemon("Aveden", "#010", "google.de/bild", "google.de/bild2", 1, "Normal", "Flying")
Splendifowl = Pokemon("Splendifowl", "#011", "google.de/bild", "google.de/bild2", 1, "Normal", "Flying")
Cubbug = Pokemon("Cubbug", "#012", "google.de/bild", "google.de/bild2", 1, "Bug")
Cubblfly = Pokemon("Cubblfly", "#013", "google.de/bild", "google.de/bild2", 1, "Bug", "Fairy")
Nimflora = Pokemon("Nimflora", "#014", "google.de/bild", "google.de/bild2", 1, "Bug", "Fairy")
Barewl = Pokemon("Barewl", "#015", "google.de/bild", "google.de/bild2", 1, "Steel", "Rock")
Dearewl = Pokemon("Dearewl", "#016", "google.de/bild", "google.de/bild2", 1, "Steel", "Rock")
Gararewl = Pokemon("Gararewl", "#017", "google.de/bild", "google.de/bild2", 1, "Steel")
Grozard = Pokemon("Grozard", "#018", "google.de/bild", "google.de/bild2", 1, "Ground")
Terlard = Pokemon("Terlard", "#019", "google.de/bild", "google.de/bild2", 1, "Ground", "Dragon")

Pokédex_Uranium = [Orchynx, Metalynx, Raptorch, Archilles, Eletux, Electruxo, Chyinmunk, Kinetmunk]

search_input = input("Welches Pokémon möchtest du suchen? ")
search_input = search_input.lower()
search_input = search_input.capitalize()

for pokemon in Pokédex_Uranium:
    if search_input == pokemon.get_name():
        search_input = pokemon
        print(search_input.get_indexnr())
