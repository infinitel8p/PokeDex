class Pokemon():
    pokedex = []
    def __init__ (self, name, typ):
       self.pokedex.append(self)
       self.__poke_name = name
       self.__poke_type = typ

    def get_name(self):
        return self.__poke_name

    def get_type(self):
        return self.__poke_type

eins = Pokemon("Pikachu", "TestObjekt")
zwei = Pokemon("Glurak", "TestObjekt")

print("'Name' von Pos. 1 in Array 'pokedex': " + Pokemon.pokedex[0].get_name())
print("Ganzes Array 'pokedex': " + str(Pokemon.pokedex))
Pokemon.pokedex.append("test")
print(Pokemon.pokedex)