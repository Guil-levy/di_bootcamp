class Farm:
    def __init__(self, farm_name):
        self.farm_name = farm_name
        self.animals = {}
        # print(type(self.animals))

    def add_animal(self, animal_type, quantity=1):
        animal_type = animal_type.lower()
        if animal_type in self.animals:
            self.animals[animal_type] += quantity
        else:
            self.animals[animal_type] = quantity

    def get_info(self):
        result = f"{self.farm_name}'s farm\n"
        for animal, quantity in self.animals.items():
            result += f"\n{animal} : {quantity}\n"
        result += "\nE-I-E-I-0!"
        return result

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        animal_types = self.get_animal_types()
        animals_string = ", ".join(animal_types)
        return f"{self.farm_name}'s farm has {animals_string}."


macdonald = Farm("McDonald")
guil = Farm("Guil")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
guil.add_animal('cow', 300)
guil.add_animal('chicken', 3)
print(macdonald.get_info())
print(macdonald.get_animal_types())
print(macdonald.get_short_info())
# print(guil.get_info())
