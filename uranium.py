class Pokemon ():

    def __init__ (self, pokemon_name, pokemon_indexnr, pokemon_sprite, pokemon_picture, pokemon_type, pokemon_type2, pokemon_versionen = None):
        self.pokemon_name = pokemon_name
        self.pokemon_indexnr = pokemon_indexnr
        self.pokemon_sprite = pokemon_sprite
        self.pokemon_picture = pokemon_picture
        self.pokemon_type = pokemon_type
        self.pokemon_type2 = pokemon_type2
        self.pokemon_versionen = pokemon_versionen

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

    def get_versionen(self):
        return self.pokemon_versionen

#001-#010
Orchynx = Pokemon("Orchynx", "#001", "google.de/bild", "google.de/bild2", "Grass", "Steel")
Mega_Metalynx = Pokemon("Mega Metalynx", "#002", "google.de/bild", "google.de/bild2", "Grass", "Steel")
Metalynx = Pokemon("Metalynx", "#002", "google.de/bild", "google.de/bild2", "Grass", "Steel", Mega_Metalynx)
Raptorch = Pokemon("Raptorch", "#003", "google.de/bild", "google.de/bild2", "Fire", "Ground")
Mega_Archilles = Pokemon("Mega Archilles", "#004", "google.de/bild", "google.de/bild2", "Fire", "Ground")
Archilles = Pokemon("Archilles", "#004", "google.de/bild", "google.de/bild2", "Fire", "Ground", Mega_Archilles)
Eletux = Pokemon("Eletux", "#005", "google.de/bild", "google.de/bild2", "Water", "Electric")
Mega_Electruxo = Pokemon("Mega Electruxo", "#006", "google.de/bild", "google.de/bild2", "Water", "Electric")
Electruxo = Pokemon("Electruxo", "#006", "google.de/bild", "google.de/bild2", "Water", "Electric", Mega_Electruxo)
Nuclear_Chyinmunk = Pokemon("Nuclear Chyinmunk", "#007", "google.de/bild", "google.de/bild2", "Normal", "Nuclear")
Chyinmunk = Pokemon("Chyinmunk", "#007", "google.de/bild", "google.de/bild2", "Normal", None, Nuclear_Chyinmunk)
Nuclear_Kinetmunk = Pokemon("Kinetmunk", "#008", "google.de/bild", "google.de/bild2", "Normal", "Nuclear")
Kinetmunk = Pokemon("Kinetmunk", "#008", "google.de/bild", "google.de/bild2", "Normal", "Electric", Nuclear_Kinetmunk)
Birbie = Pokemon("Birbie", "#009", "google.de/bild", "google.de/bild2", "Normal", "Flying")
Aveden = Pokemon("Aveden", "#010", "google.de/bild", "google.de/bild2", "Normal", "Flying")
#011-#020
Splendifowl = Pokemon("Splendifowl", "#011", "google.de/bild", "google.de/bild2", "Normal", "Flying")
Cubbug = Pokemon("Cubbug", "#012", "google.de/bild", "google.de/bild2", "Bug", None)
Cubblfly = Pokemon("Cubblfly", "#013", "google.de/bild", "google.de/bild2", "Bug", "Fairy")
Nimflora = Pokemon("Nimflora", "#014", "google.de/bild", "google.de/bild2", "Bug", "Fairy")
Barewl = Pokemon("Barewl", "#015", "google.de/bild", "google.de/bild2", "Steel", "Rock")
Dearewl = Pokemon("Dearewl", "#016", "google.de/bild", "google.de/bild2", "Steel", "Rock")
Gararewl = Pokemon("Gararewl", "#017", "google.de/bild", "google.de/bild2", "Steel", None)
Grozard = Pokemon("Grozard", "#018", "google.de/bild", "google.de/bild2", "Ground", None)
Terlard = Pokemon("Terlard", "#019", "google.de/bild", "google.de/bild2", "Ground", "Dragon")
Nuclear_Tonemy = Pokemon("Nuclear Tonemy", "#020", "google.de/bild", "google.de/bild2", "Poison", None)
Tonemy = Pokemon("Tonemy", "#020", "google.de/bild", "google.de/bild2", "Poison", None, Nuclear_Tonemy)
#021-#030
Nuclear_Tofurang = Pokemon("Nuclear Tofurang", "#021", "google.de/bild", "google.de/bild2", "Poison", None)
Tofurang = Pokemon("Tofurang", "#021", "google.de/bild", "google.de/bild2", "Poison", None, Nuclear_Tofurang)
Dunsparce = Pokemon("Dunsparce", "#022", "google.de/bild", "google.de/bild2", "Normal", None)
Dunseraph = Pokemon("Dunseraph", "#023", "google.de/bild", "google.de/bild2", "Dragon", "Flying")
Fortog = Pokemon("Fortog", "#024", "google.de/bild", "google.de/bild2", "Water", "Poison")
Folerog = Pokemon("Folerog", "#025", "google.de/bild", "google.de/bild2", "Water", "Poison")
Blubelrog = Pokemon("Blubelrog", "#026", "google.de/bild", "google.de/bild2", "Water", "Poison")
Nuclear_Magikarp = Pokemon("Nuclear Magikarp", "#027", "google.de/bild", "google.de/bild2", "Water", "Nuclear")
Magikarp = Pokemon("Magikarp", "#027", "google.de/bild", "google.de/bild2", "Water", None, Nuclear_Magikarp)
Mega_Nuclear_Gyarados = Pokemon("Mega Nuclear Gyarados", "#028", "google.de/bild", "google.de/bild2", "Water", "Nuclear")
Mega_Gyarados = Pokemon("Mega Gyarados", "#028", "google.de/bild", "google.de/bild2", "Water", "Dark", Mega_Nuclear_Gyarados)
Gyarados = Pokemon("Gyarados", "#028", "google.de/bild", "google.de/bild2", "Water", "Flying", Mega_Gyarados)
Feleng = Pokemon("Feleng", "#029", "google.de/bild", "google.de/bild2", "Normal", None)
#031-#040
Felunge = Pokemon("Felunge", "#030", "google.de/bild", "google.de/bild2", "Normal", None)
Feliger = Pokemon("Feliger", "#031", "google.de/bild", "google.de/bild2", "Normal", None)
Mankey = Pokemon("Mankey", "#032", "google.de/bild", "google.de/bild2", "Fighting", None)
Primeape = Pokemon("Primeape", "#033", "google.de/bild", "google.de/bild2", "Fighting", None)
Empirilla = Pokemon("Empirilla", "#034", "google.de/bild", "google.de/bild2", "Fighting", None)
Nuclear_Owten = Pokemon("Nuclear Owten", "#035", "google.de/bild", "google.de/bild2", "Normal", "Nuclear")
Owten = Pokemon("Owten", "#035", "google.de/bild", "google.de/bild2", "Normal", "Flying", Nuclear_Owten)
Nuclear_Eshouten = Pokemon("Nuclear Eshouten", "#036", "google.de/bild", "google.de/bild2", "Normal", "Nuclear")
Eshouten = Pokemon("Eshouten", "#036", "google.de/bild", "google.de/bild2", "Normal", "Flying", Nuclear_Eshouten)
Lotad = Pokemon("Lotad", "#037", "google.de/bild", "google.de/bild2", "Water", "Grass")
Lombre = Pokemon("Lombre", "#038", "google.de/bild", "google.de/bild2", "Water", "Grass")
Ludicolo = Pokemon("Ludicolo", "#039", "google.de/bild", "google.de/bild2", "Water", "Grass")
Smore = Pokemon("Smore", "#040", "google.de/bild", "google.de/bild2", "Bug", None)
#041-#050
Firoke = Pokemon("Firoke", "#041", "google.de/bild", "google.de/bild2", "Bug", "Fire")
Brailip = Pokemon("Brailip", "#042", "google.de/bild", "google.de/bild2", "Water", "Psychic")
Brainoar = Pokemon("Brainoar", "#043", "google.de/bild", "google.de/bild2", "Water", "Psychic")
Nuclear_Ekans = Pokemon("Nuclear Ekans", "#044", "google.de/bild", "google.de/bild2", "Poison", "Nuclear")
Ekans = Pokemon("Ekans", "#044", "google.de/bild", "google.de/bild2", "Poison", None, Nuclear_Ekans)
Mega_Nuclear_Arbok = Pokemon("Mega Nuclear Arbok", "#045", "google.de/bild", "google.de/bild2", "Poison", "Nuclear")
Mega_Arbok = Pokemon("Mega Arbok", "#045", "google.de/bild", "google.de/bild2", "Poison", "Dark", Mega_Nuclear_Arbok)
Arbok = Pokemon("Arbok", "#045", "google.de/bild", "google.de/bild2", "Poison", None, Mega_Arbok)
Nuclear_Tancoon = Pokemon("Nuclear Tancoon", "#046", "google.de/bild", "google.de/bild2", "Dark", "Nuclear")
Tancoon = Pokemon("Tancoon", "#046", "google.de/bild", "google.de/bild2", "Dark", "Normal", Nuclear_Tancoon)
Nuclear_Tanscure = Pokemon("Nuclear Tanscure", "#047", "google.de/bild", "google.de/bild2", "Dark", "Nuclear")
Tanscure = Pokemon("Tanscure", "#047", "google.de/bild", "google.de/bild2", "Dark", "Normal", Nuclear_Tanscure)
Sponee = Pokemon("Sponee", "#048", "google.de/bild", "google.de/bild2", "Bug", None)
Sponaree = Pokemon("Sponaree", "#049", "google.de/bild", "google.de/bild2", "Bug", "Water")
Nuclear_Pahar = Pokemon("Nuclear Pahar", "#050", "google.de/bild", "google.de/bild2", "Fire", "Nuclear")
Pahar = Pokemon("Pahar", "#050", "google.de/bild", "google.de/bild2", "Fire", "Flying", Nuclear_Pahar)

Pokédex_Uranium =   [Orchynx, Mega_Metalynx, Metalynx, Raptorch, Mega_Archilles, Archilles, Eletux, Mega_Electruxo, Electruxo, Nuclear_Chyinmunk, Chyinmunk, Nuclear_Kinetmunk, Kinetmunk, Birbie, Aveden, #000-#010
                    Splendifowl, Cubbug, Cubblfly, Nimflora, Barewl, Dearewl, Gararewl, Grozard, Terlard, Nuclear_Tonemy, Tonemy, #011-#020
                    Nuclear_Tofurang, Tofurang, Dunsparce, Dunseraph, Fortog, Folerog, Blubelrog, Nuclear_Magikarp, Magikarp, Mega_Nuclear_Gyarados, Mega_Gyarados, Gyarados, Feleng, #021-#030
                    Felunge, Feliger, Mankey, Primeape, Empirilla, Nuclear_Owten, Owten, Nuclear_Eshouten, Eshouten, Lotad, Lombre, Ludicolo, Smore, #031-#040
                    Firoke, Brailip, Brainoar, Nuclear_Ekans, Ekans, Mega_Nuclear_Arbok, Mega_Arbok, Arbok, Nuclear_Tancoon, Tancoon, Nuclear_Tanscure, Tanscure, Sponee, Sponaree, Nuclear_Pahar, Pahar #041-#050
                    ]

