import os
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
#051-#060
Nuclear_Palij = Pokemon("Nuclear Palij", "#051", "google.de/bild", "google.de/bild2", "Fire", "Nuclear")
Palij = Pokemon("Palij", "#051", "google.de/bild", "google.de/bild2", "Fire", "Flying", Nuclear_Palij)
Nuclear_Pajay = Pokemon("Nuclear Pajay", "#052", "google.de/bild", "google.de/bild2", "Fire", "Nuclear")
Pajay = Pokemon("Pajay", "#052", "google.de/bild", "google.de/bild2", "Fire", "Flying", Nuclear_Pajay)
Nuclear_Jerbolta = Pokemon("Nuclear Jerbolta", "#053", "google.de/bild", "google.de/bild2", "Electric", "Nuclear")
Jerbolta = Pokemon("Jerbolta", "#053", "google.de/bild", "google.de/bild2", "Electric", "Ground", Nuclear_Jerbolta)
Comite = Pokemon("Comite", "#054", "google.de/bild", "google.de/bild2", "Rock", None)
Cometeor = Pokemon("Cometeor", "#055", "google.de/bild", "google.de/bild2", "Rock", "Psychic")
Astronite = Pokemon("Astronite", "#056", "google.de/bild", "google.de/bild2", "Rock", "Psychic")
Mareep = Pokemon("Mareep", "#057", "google.de/bild", "google.de/bild2", "Electric", None)
Flaaffy = Pokemon("Flaaffy", "#058", "google.de/bild", "google.de/bild2", "Electric", None)
Mega_Amphoros = Pokemon("Mega Ampharos", "#059", "google.de/bild", "google.de/bild2", "Electric", "Dragon")
Ampharos = Pokemon("Ampharos", "#059", "google.de/bild", "google.de/bild2", "Electric", None, Mega_Amphoros)
Nuclear_Baashaun = Pokemon("Nuclear Baashaun", "#060", "google.de/bild", "google.de/bild2", "Dark", "Nuclear")
Baashaun = Pokemon("Baashaun", "#060", "google.de/bild", "google.de/bild2", "Dark", "Fighting", Nuclear_Baashaun)
#061-#070
Nuclear_Baaschaf = Pokemon("Nuclear Baaschaf", "#061", "google.de/bild", "google.de/bild2", "Dark", "Nuclear")
Baaschaf = Pokemon("Baaschaf", "#061", "google.de/bild", "google.de/bild2", "Dark", "Fighting", Nuclear_Baaschaf)
Mega_Nuclear_Baariette = Pokemon("Mega Nuclear Baariette", "#062", "google.de/bild", "google.de/bild2", "Dark", "Nuclear")
Mega_Baariette = Pokemon("Mega Baariette", "#062", "google.de/bild", "google.de/bild2", "Dark", "Fighting", Mega_Nuclear_Baariette)
Baariette = Pokemon("Baariette", "#062", "google.de/bild", "google.de/bild2", "Dark", "Fighting", Mega_Baariette)
Tricwe = Pokemon("Tricwe", "#063", "google.de/bild", "google.de/bild2", "Bug", None)
Harylect = Pokemon("Harylect", "#064", "google.de/bild", "google.de/bild2", "Bug", "Electric")
Nuclear_Costraw = Pokemon("Nuclear Costraw", "#065", "google.de/bild", "google.de/bild2", "Poison", "Nuclear")
Costraw = Pokemon("Costraw", "#065", "google.de/bild", "google.de/bild2", "Poison", "Psychic", Nuclear_Costraw)
Nuclear_Trawpint = Pokemon("Trawpint", "#066", "google.de/bild", "google.de/bild2", "Poison", "Nuclear")
Trawpint = Pokemon("Trawpint", "#066", "google.de/bild", "google.de/bild2", "Poison", "Psychic", Nuclear_Trawpint)
Lunapup = Pokemon("Lunapup", "#067", "google.de/bild", "google.de/bild2", "Ground", "Fighting")
Herolune = Pokemon("Herolune", "#068", "google.de/bild", "google.de/bild2", "Ground", "Fighting")
Minyan = Pokemon("Minyan", "#069", "google.de/bild", "google.de/bild2", "Dark", "Poison")
Vilucard = Pokemon("Vilucard", "#070", "google.de/bild", "google.de/bild2", "Dark", "Poison")
#071-#080
Buizel = Pokemon("Buizel", "#071", "google.de/bild", "google.de/bild2", "Water", None)
Floatzel = Pokemon("Floatzel", "#072", "google.de/bild", "google.de/bild2", "Water", None)
Modrille = Pokemon("Modrille", "#073", "google.de/bild", "google.de/bild2", "Ground", "Dark")
Mega_Drilgann = Pokemon("Mega Drilgann", "#074", "google.de/bild", "google.de/bild2", "Ground", "Dark")
Drilgann = Pokemon("Drilgann", "#074", "google.de/bild", "google.de/bild2", "Ground", "Dark", Mega_Drilgann)
Nuclear_Gligar = Pokemon("Nuclear Gligar", "#075", "google.de/bild", "google.de/bild2", "Ground", "Nuclear")
Gligar = Pokemon("Gligar", "#075", "google.de/bild", "google.de/bild2", "Ground", "Flying", Nuclear_Gligar)
Nuclear_Gliscor = Pokemon("Nuclear Gliscor", "#076", "google.de/bild", "google.de/bild2", "Ground", "Nuclear")
Gliscor = Pokemon("Gliscor", "#076", "google.de/bild", "google.de/bild2", "Ground", "Flying", Nuclear_Gliscor)
Mega_Sableye = Pokemon("Mega Sableye", "#077", "google.de/bild", "google.de/bild2", "Dark", "Ghost")
Sableye = Pokemon("Sableye", "#077", "google.de/bild", "google.de/bild2", "Dark", "Ghost", Mega_Sableye)
Cocaran = Pokemon("Cocaran", "#078", "google.de/bild", "google.de/bild2", "Grass", "Ground")
Cararalm = Pokemon("Cararalm", "#079", "google.de/bild", "google.de/bild2", "Grass", "Ground")
Cocancer = Pokemon("Cocancer", "#080", "google.de/bild", "google.de/bild2", "Grass", "Ground")
#081-#090
Nuclear_Corsola = Pokemon("Nuclear Corsola", "#081", "google.de/bild", "google.de/bild2", "Water", "Nuclear")
Corsola = Pokemon("Corsola", "#081", "google.de/bild", "google.de/bild2", "Water", "Rock", Nuclear_Corsola)
Nuclear_Corsoreef = Pokemon("Nuclear Corsoreef", "#082", "google.de/bild", "google.de/bild2", "Water", "Nuclear")
Corsoreef = Pokemon("Corsoreef", "#082", "google.de/bild", "google.de/bild2", "Water", "Rock", Nuclear_Corsoreef)
Nuclear_Tubjaw = Pokemon("Nuclear Tubjaw", "#083", "google.de/bild", "google.de/bild2", "Water", "Nuclear")
Tubjaw = Pokemon("Tubjaw", "#083", "google.de/bild", "google.de/bild2", "Water", "Dark", Nuclear_Tubjaw)
Nuclear_Tubareel = Pokemon("Nuclear Tubareel", "#084", "google.de/bild", "google.de/bild2", "Water", "Nuclear")
Tubareel = Pokemon("Tubareel", "#084", "google.de/bild", "google.de/bild2", "Water", "Dark", Nuclear_Tubareel)
Cassnail = Pokemon("Cassnail", "#085", "google.de/bild", "google.de/bild2", "Ground", "Water")
Sableau = Pokemon("Sableau", "#086", "google.de/bild", "google.de/bild2", "Ground", "Water")
Escartress = Pokemon("Escartress", "#087", "google.de/bild", "google.de/bild2", "Ground", "Water")
Nuclear_Nupin = Pokemon("Nuclear Nupin", "#088", "google.de/bild", "google.de/bild2", "Grass", "Nuclear")
Nupin = Pokemon("Nupin", "#088", "google.de/bild", "google.de/bild2", "Grass", "Electric", Nuclear_Nupin)
Nuclear_Gellin = Pokemon("Nuclear Gellin", "#089", "google.de/bild", "google.de/bild2", "Grass", "Nuclear")
Gellin = Pokemon("Gellin", "#089", "google.de/bild", "google.de/bild2", "Grass", "Electric", Nuclear_Gellin)
Cottonee = Pokemon("Cottonee", "#090", "google.de/bild", "google.de/bild2", "Grass", "Fairy")
#091-#100
Mega_Whimsicott = Pokemon("Mega Whimsicott", "#091", "google.de/bild", "google.de/bild2", "Grass", "Fairy")
Whimsicott = Pokemon("Whimsicott", "#091", "google.de/bild", "google.de/bild2", "Grass", "Fairy", Mega_Whimsicott)
Misdreavus = Pokemon("Misdreavus", "#092", "google.de/bild", "google.de/bild2", "Ghost", None)
Mismagius = Pokemon("Mismagius", "#093", "google.de/bild", "google.de/bild2", "Ghost", None)
Nuclear_Barand = Pokemon("Nuclear Barand", "#094", "google.de/bild", "google.de/bild2", "Dragon", "Nuclear")
Barand = Pokemon("Barand", "#094", "google.de/bild", "google.de/bild2", "Dragon", None, Nuclear_Barand)
Glaslug = Pokemon("Glaslug", "#095", "google.de/bild", "google.de/bild2", "Water", "Ice")
Glavinug = Pokemon("Glavinug", "#096", "google.de/bild", "google.de/bild2", "Water", "Ice")
S_fifty_one = Pokemon("S51", "#097", "google.de/bild", "google.de/bild2", "Psychic", "Steel")
Mega_S_fity_one_A = Pokemon("Mega S51-A", "#098", "google.de/bild", "google.de/bild2", "Psychic", "Steel")
S_fifty_one_A = Pokemon("S51-A", "#098", "google.de/bild", "google.de/bild2", "Psychic", "Steel")
Nuclear_Paraudio = Pokemon("Nuclear Paraudio", "#099", "google.de/bild", "google.de/bild2", "Normal", "Nuclear")
Paraudio = Pokemon("Paraudio", "#099", "google.de/bild", "google.de/bild2", "Normal", "Psychic", Nuclear_Paraudio)
Nuclear_Paraboom = Pokemon("Nuclear Paraboom", "#100", "google.de/bild", "google.de/bild2", "Normal", "Nuclear")
Paraboom = Pokemon("Paraboom", "#100", "google.de/bild", "google.de/bild2", "Normal", "Psychic", Nuclear_Paraboom)
#101-#110
Flager = Pokemon("Flager", "#101", "google.de/bild", "google.de/bild2", "Fire", None)
Mega_Inflagetah = Pokemon("Mega Inflagetah", "#102", "google.de/bild", "google.de/bild2", "Fire", None)
Inflagetah = Pokemon("Inflagetah", "#102", "google.de/bild", "google.de/bild2", "Fire", None, Mega_Inflagetah)
Chimical = Pokemon("Chimical", "#103", "google.de/bild", "google.de/bild2", "Fire", "Poison")
Chimaconda = Pokemon("Chimaconda", "#104", "google.de/bild", "google.de/bild2", "Fire", "Poison")
Tikiki = Pokemon("Tikiki", "#105", "google.de/bild", "google.de/bild2", "Grass", None)
Frikitiki = Pokemon("Frikitiki", "#106", "google.de/bild", "google.de/bild2", "Grass", "Fire")
Unymph = Pokemon("Unymph", "#107", "google.de/bild", "google.de/bild2", "Bug", None)
Harptera = Pokemon("Harptera-A", "#108", "google.de/bild", "google.de/bild2", "Bug", "Flying")
Chicoatl = Pokemon("Chicoatl", "#109", "google.de/bild", "google.de/bild2", "Grass", None)
Quetzoral = Pokemon("Quetzoral", "#110", "google.de/bild", "google.de/bild2", "Grass", "Flying")
#111-#120
Coatlith = Pokemon("Coatlith", "#111", "google.de/bild", "google.de/bild2", "Grass", "Dragon")
Tracton = Pokemon("Tracton", "#112", "google.de/bild", "google.de/bild2", "Dragon", "Steel")
Snopach = Pokemon("Snopach", "#113", "google.de/bild", "google.de/bild2", "Ice", "Rock")
Dermafrost = Pokemon("Dermafrost", "#114", "google.de/bild", "google.de/bild2", "Ice", "Rock")
Slothohm = Pokemon("Slothohm", "#115", "google.de/bild", "google.de/bild2", "Electric", "Rock")
Theriamp = Pokemon("Theriamp", "#116", "google.de/bild", "google.de/bild2", "Electric", "Rock")
Titanice = Pokemon("Titanice", "#117", "google.de/bild", "google.de/bild2", "Ice", None)
Frynai = Pokemon("Frynai", "#118", "google.de/bild", "google.de/bild2", "Water", "Steel")
Saidine = Pokemon("Saidine", "#119", "google.de/bild", "google.de/bild2", "Water", "Steel")
Daikatuna = Pokemon("Daikatuna", "#120", "google.de/bild", "google.de/bild2", "Water", "Steel")
#121-#130
Selkid = Pokemon("Selkid", "#121", "google.de/bild", "google.de/bild2", "Water", "Fairy")
Mega_Syrentide = Pokemon("Mega Syrentide", "#122", "google.de/bild", "google.de/bild2", "Water", "Fairy")
Syrentide = Pokemon("Syrentide", "#122", "google.de/bild", "google.de/bild2", "Water", "Fairy", Mega_Syrentide)
Spritzee = Pokemon("Spritzee", "#123", "google.de/bild", "google.de/bild2", "Fairy", None)
Aromatisse = Pokemon("Aromatisse", "#124", "google.de/bild", "google.de/bild2", "Fairy", None)
Miasmedic = Pokemon("Miasmedic", "#125", "google.de/bild", "google.de/bild2", "Fairy", "Poison")
Winotinger = Pokemon("Winotinger", "#126", "google.de/bild", "google.de/bild2", "Fairy", "Fighting")
Titanice = Pokemon("Titanice", "#127", "google.de/bild", "google.de/bild2", "Fairy", "Fighting")
Duplicat = Pokemon("Duplicat", "#128", "google.de/bild", "google.de/bild2", "Normal", None)
Eevee = Pokemon("Eevee", "#129", "google.de/bild", "google.de/bild2", "Normal", None)
Vaporeon = Pokemon("Vaporeon", "#130", "google.de/bild", "google.de/bild2", "Water", None)
#131-#140
Jolteon = Pokemon("Jolteon", "#131", "google.de/bild", "google.de/bild2", "Electric", None)
Flareon = Pokemon("Flareon", "#132", "google.de/bild", "google.de/bild2", "Fire", None)
Espeon = Pokemon("Espeon", "#133", "google.de/bild", "google.de/bild2", "Psychic", None)
Umbreon = Pokemon("Umbreon", "#134", "google.de/bild", "google.de/bild2", "Dark", None)
Leafeon = Pokemon("Leafeon", "#135", "google.de/bild", "google.de/bild2", "Grass", None)
Glaceon = Pokemon("Glaceon", "#136", "google.de/bild", "google.de/bild2", "Ice", None)
Sylveon = Pokemon("Sylveon", "#137", "google.de/bild", "google.de/bild2", "Fairy", None)
Nucleon = Pokemon("Nucleon", "#138", "google.de/bild", "google.de/bild2", "Nuclear", None)
Ratsy = Pokemon("Ratsy", "#139", "google.de/bild", "google.de/bild2", "Dark", None)
Raffiti = Pokemon("Raffiti", "#140", "google.de/bild", "google.de/bild2", "Dark", None)
#141-#150
Gargryph = Pokemon("Gargryph", "#141", "google.de/bild", "google.de/bild2", "Rock", None)
Masking = Pokemon("Masking", "#142", "google.de/bild", "google.de/bild2", "Psychic", None)
Mega_Dramsama = Pokemon("Mega Dramsama", "#143", "google.de/bild", "google.de/bild2", "Psychic", "Ghost")
Dramsama = Pokemon("Dramsama", "#143", "google.de/bild", "google.de/bild2", "Psychic", "Ghost", Mega_Dramsama)
Antarki = Pokemon("Antarki", "#144", "google.de/bild", "google.de/bild2", "Ghost", "Fire")
Nuclear_Chupacho = Pokemon("Nuclear Chupacho", "#145", "google.de/bild", "google.de/bild2", "Poison", "Nuclear")
Chupacho = Pokemon("Chupacho", "#145", "google.de/bild", "google.de/bild2", "Poison", None, Nuclear_Chupacho)
Nuclear_Luchabra = Pokemon("Nuclear Luchabra", "#146", "google.de/bild", "google.de/bild2", "Poison", "Nuclear")
Luchabra = Pokemon("Luchabra", "#146", "google.de/bild", "google.de/bild2", "Poison", "Fighting", Nuclear_Luchabra)
Linkite = Pokemon("Linkite", "#147", "google.de/bild", "google.de/bild2", "Ghost", None)
Chainite = Pokemon("Chainite", "#148", "google.de/bild", "google.de/bild2", "Ghost", "Dark")
Pufluff = Pokemon("Pufluff", "#149", "google.de/bild", "google.de/bild2", "Ice", "Fairy")
Alpico = Pokemon("Alpico", "#150", "google.de/bild", "google.de/bild2", "Ice", "Fairy")
#151-#160
Anderind = Pokemon("Anderind", "#151", "google.de/bild", "google.de/bild2", "Ice", "Ground")
Colarva = Pokemon("Colarva", "#152", "google.de/bild", "google.de/bild2", "Bug", "Ice")
Frosulo = Pokemon("Frosulo", "#153", "google.de/bild", "google.de/bild2", "Bug", "Ice")
Frosthra = Pokemon("Frosthra", "#154", "google.de/bild", "google.de/bild2", "Bug", "Ice")
Fafurr = Pokemon("Fafurr", "#155", "google.de/bild", "google.de/bild2", "Ice", "Dragon")
Fafninter = Pokemon("Fafninter", "#156", "google.de/bild", "google.de/bild2", "Ice", "Dragon")
Shrimputy = Pokemon("Shrimputy", "#157", "google.de/bild", "google.de/bild2", "Water", "Fire")
Krilvolver = Pokemon("Krilvolver", "#158", "google.de/bild", "google.de/bild2", "Water", "Fire")
Lavent = Pokemon("Lavent", "#159", "google.de/bild", "google.de/bild2", "Fire", "Dragon")
Swabone = Pokemon("Swabone", "#160", "google.de/bild", "google.de/bild2", "Ghost", "Fighting")
#161-#170
Skelerogue = Pokemon("Skelerogue", "#161", "google.de/bild", "google.de/bild2", "Ghost", "Fighting")
Navighast = Pokemon("Navighast", "#162", "google.de/bild", "google.de/bild2", "Ghost", "Fighting")
Stenowatt = Pokemon("Stenowatt", "#163", "google.de/bild", "google.de/bild2", "Electric", None)
Jungore = Pokemon("Jungore", "#164", "google.de/bild", "google.de/bild2", "Fighting", "Rock")
Majungold = Pokemon("Majungold", "#165", "google.de/bild", "google.de/bild2", "Fighting", "Rock")
Nuclear_Hagoop = Pokemon("Nuclear Hagoop", "#166", "google.de/bild", "google.de/bild2", "Poison", "Nuclear")
Hagoop = Pokemon("Hagoop", "#166", "google.de/bild", "google.de/bild2", "Poison", "Electric", Nuclear_Hagoop)
Nuclear_Haagross = Pokemon("Nuclear Haagross", "#167", "google.de/bild", "google.de/bild2", "Poison", "Nuclear")
Haagross = Pokemon("Haagross", "#167", "google.de/bild", "google.de/bild2", "Poison", "Electric")
Xenomite = Pokemon("Xenomite", "#168", "google.de/bild", "google.de/bild2", "Nuclear", None)
Xenogen = Pokemon("Xenogen", "#169", "google.de/bild", "google.de/bild2", "Nuclear", None)
Xenoqueen = Pokemon("Xenoqueen", "#170", "google.de/bild", "google.de/bild2", "Nuclear", None)
#171-#180
Hazma = Pokemon("Hazma", "#171", "google.de/bild", "google.de/bild2", "Nuclear", None)
Geigeroach = Pokemon("Geigeroach", "#172", "google.de/bild", "google.de/bild2", "Bug", "Nuclear")
Minicorn = Pokemon("Minicorn", "#173", "google.de/bild", "google.de/bild2", "Fairy", "Normal")
Mega_Kiricorn = Pokemon("Mega Kiricorn", "#174", "google.de/bild", "google.de/bild2", "Fairy", "Normal")
Kiricorn = Pokemon("Kiricorn", "#174", "google.de/bild", "google.de/bild2", "Fairy", "Normal", Mega_Kiricorn)
Oblivicorn = Pokemon("Oblivicorn", "#175", "google.de/bild", "google.de/bild2", "Fairy", "Dark")
Luxi = Pokemon("Luxi", "#176", "google.de/bild", "google.de/bild2", "Dragon", "Fairy")
Luxor = Pokemon("Luxor", "#177", "google.de/bild", "google.de/bild2", "Dragon", "Fairy")
Luxelong = Pokemon("Luxelong", "#178", "google.de/bild", "google.de/bild2", "Dragon", "Fairy")
Praseopunk = Pokemon("Praseopunk", "#179", "google.de/bild", "google.de/bild2", "Psychic", "Electric")
Neopunk = Pokemon("Neopunk", "#180", "google.de/bild", "google.de/bild2", "Psychic", "Electric")
#181-#190
Sheebit = Pokemon("Sheebit", "#181", "google.de/bild", "google.de/bild2", "Ground", None)
Terrabbit = Pokemon("Terrabbit", "#182", "google.de/bild", "google.de/bild2", "Ground", None)
Laissure = Pokemon("Laissure", "#183", "google.de/bild", "google.de/bild2", "Ground", None)
Volchik = Pokemon("Volchik", "#184", "google.de/bild", "google.de/bild2", "Electric", "Flying")
Voltasu = Pokemon("Voltasu", "#185", "google.de/bild", "google.de/bild2", "Electric", "Flying")
Yatagaryu = Pokemon("Yatagaryu", "#186", "google.de/bild", "google.de/bild2", "Electric", "Dragon")
Devimp = Pokemon("Devimp", "#187", "google.de/bild", "google.de/bild2", "Fire", "Dark")
Fallengel = Pokemon("Fallengel", "#188", "google.de/bild", "google.de/bild2", "Fire", "Dark")
Beliaddon = Pokemon("Beliaddon", "#189", "google.de/bild", "google.de/bild2", "Fire", "Dark")
Seikamater = Pokemon("Seikamater", "#190", "google.de/bild", "google.de/bild2", "Bug", "Normal")
#191-#200
Garlikid = Pokemon("Garlikid", "#191", "google.de/bild", "google.de/bild2", "Grass", "Fighting")
Baitatao = Pokemon("Baitatao", "#192", "google.de/bild", "google.de/bild2", "Water", "Fire")
Leviathao = Pokemon("Leviathao", "#193", "google.de/bild", "google.de/bild2", "Water", "Ice")
Krakanao = Pokemon("Krakanao", "#194", "google.de/bild", "google.de/bild2", "Water", "Dark")
Lanthan = Pokemon("Lanthan", "#195", "google.de/bild", "google.de/bild2", "Ground", "Steel")
Nuclear_Actan = Pokemon("Nuclear Actan", "#196", "google.de/bild", "google.de/bild2", "Nuclear", "Steel")
Actan = Pokemon("Actan", "#196", "google.de/bild", "google.de/bild2", "Dark", "Steel", Nuclear_Actan)
Gamma_Urayne = Pokemon("Gamma Urayne", "#197", "google.de/bild", "google.de/bild2", "Nuclear", None)
Alpha_Urayne = Pokemon("Alpha Urayne", "#197", "google.de/bild", "google.de/bild2", "Nuclear", None, Gamma_Urayne)
Urayne = Pokemon("Urayne", "#197", "google.de/bild", "google.de/bild2", "Nuclear", None, Alpha_Urayne)
Aotius = Pokemon("Aotius", "#198", "google.de/bild", "google.de/bild2", "Flying", "Fire")
Mutios = Pokemon("Mutios", "#199", "google.de/bild", "google.de/bild2", "Ghost", "Water")
Zephy = Pokemon("Zephy", "#200", "google.de/bild", "google.de/bild2", "Electric", "Ice")

Pokédex_Uranium =   [Orchynx, Mega_Metalynx, Metalynx, Raptorch, Mega_Archilles, Archilles, Eletux, Mega_Electruxo, Electruxo, Nuclear_Chyinmunk, Chyinmunk, Nuclear_Kinetmunk, Kinetmunk, Birbie, Aveden, #000-#010
                    Splendifowl, Cubbug, Cubblfly, Nimflora, Barewl, Dearewl, Gararewl, Grozard, Terlard, Nuclear_Tonemy, Tonemy, #011-#020
                    Nuclear_Tofurang, Tofurang, Dunsparce, Dunseraph, Fortog, Folerog, Blubelrog, Nuclear_Magikarp, Magikarp, Mega_Nuclear_Gyarados, Mega_Gyarados, Gyarados, Feleng, #021-#030
                    Felunge, Feliger, Mankey, Primeape, Empirilla, Nuclear_Owten, Owten, Nuclear_Eshouten, Eshouten, Lotad, Lombre, Ludicolo, Smore, #031-#040
                    Firoke, Brailip, Brainoar, Nuclear_Ekans, Ekans, Mega_Nuclear_Arbok, Mega_Arbok, Arbok, Nuclear_Tancoon, Tancoon, Nuclear_Tanscure, Tanscure, Sponee, Sponaree, Nuclear_Pahar, Pahar, #041-#050
                    Nuclear_Palij, Palij, Nuclear_Pajay, Pajay, Nuclear_Jerbolta, Jerbolta, Comite, Cometeor, Astronite, Mareep, Flaaffy, Mega_Amphoros, Ampharos, Nuclear_Baashaun, Baashaun, #051-#060
                    Nuclear_Baaschaf, Baaschaf, Mega_Nuclear_Baariette, Mega_Baariette, Baariette, Tricwe, Harylect, Nuclear_Costraw, Costraw, Nuclear_Trawpint, Trawpint, Lunapup, Herolune, Minyan, Vilucard, #061-#070
                    Buizel, Floatzel, Modrille, Mega_Drilgann, Drilgann, Nuclear_Gligar, Gligar, Nuclear_Gliscor, Gliscor, Mega_Sableye, Sableye, Cocaran, Cararalm, Cocancer, #071-#080
                    Nuclear_Corsola, Corsola, Nuclear_Corsoreef, Corsoreef, Nuclear_Tubjaw, Tubjaw, Nuclear_Tubareel, Tubareel, Cassnail, Sableau, Escartress, Nuclear_Nupin, Nupin, Nuclear_Gellin, Gellin, Cottonee, #081-#090
                    Mega_Whimsicott, Whimsicott, Misdreavus, Mismagius, Nuclear_Barand, Barand, Glaslug, Glavinug, S_fifty_one, Mega_S_fity_one_A, S_fifty_one_A, Nuclear_Paraudio, Paraudio, Nuclear_Paraboom, Paraboom, #091-#100
                    Flager, Mega_Inflagetah, Inflagetah, Chimical, Chimaconda, Tikiki, Frikitiki, Unymph, Harptera, Chicoatl, Quetzoral, #101-#110
                    Coatlith, Tracton, Snopach, Dermafrost, Slothohm, Theriamp, Titanice, Frynai, Saidine, Daikatuna, #111-#120
                    Selkid, Mega_Syrentide, Syrentide, Spritzee, Aromatisse, Miasmedic, Winotinger, Titanice, Duplicat, Eevee, Vaporeon, #121-#130
                    Jolteon, Flareon, Espeon, Umbreon, Leafeon, Glaceon, Sylveon, Nucleon, Ratsy, Raffiti, #131-#140
                    Gargryph, Masking, Mega_Dramsama, Dramsama, Antarki, Nuclear_Chupacho, Chupacho, Nuclear_Luchabra, Luchabra, Linkite, Chainite, Pufluff, Alpico, #141-#150
                    Anderind, Colarva, Frosulo, Frosthra, Fafurr, Fafninter, Shrimputy, Krilvolver, Lavent, Swabone, #151-#160
                    Skelerogue, Navighast, Stenowatt, Jungore, Majungold, Nuclear_Hagoop, Hagoop, Nuclear_Haagross, Haagross, Xenomite, Xenogen, Xenoqueen, #161-#170
                    Hazma, Geigeroach, Minicorn, Mega_Kiricorn, Kiricorn, Oblivicorn, Luxi, Luxor, Luxelong, Praseopunk, Neopunk, #171-#180
                    Sheebit, Terrabbit, Laissure, Volchik, Voltasu, Yatagaryu, Devimp, Fallengel, Beliaddon, Seikamater, #181-#190
                    Garlikid, Baitatao, Leviathao, Krakanao, Lanthan, Nuclear_Actan, Actan, Gamma_Urayne, Alpha_Urayne, Urayne, Aotius, Mutios, Zephy #191-#200
                    ]

search_input = input("Welches Pokémon möchtest du suchen? ")
search_input = search_input.lower()
search_input = search_input.capitalize()


for pokemon in Pokédex_Uranium:
    if search_input == pokemon.get_name():
        search_input = pokemon
        print("1. " + search_input.get_name())
        if search_input.get_versionen() != None:
            print("2. " + search_input.get_versionen().get_name())
            os.system("cls")
            print("1. " + search_input.get_name())
            search_input2 = search_input.get_versionen()
            if search_input.get_versionen() != None:
                print("2. " + search_input2.get_name())
                if search_input2.get_versionen() != None:
                    print("3. " + search_input2.get_versionen().get_name())