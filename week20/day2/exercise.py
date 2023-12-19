# Exercise1:
# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# cat1 = Cat("Morde", 15)
# cat2 = Cat("Kitsa", 10)
# cat3 = Cat("Bisly", 3)
# # print(cat1.age)

# def find_oldest_cat(cat_list):
#     oldest_cat = None
#     max_age = 0

#     for cat in cat_list:
#         if cat.age > max_age:
#             max_age = cat.age
#             oldest_cat = cat

#     return oldest_cat


# cat_list = [cat1, cat2, cat3]

# oldest_cat = find_oldest_cat(cat_list)

# print(f"The oldest cat is {oldest_cat.name} with age {oldest_cat.age} years.")

# Exercise2
# class Dog:
#     def __init__(self, name, height):
#         self.name= name
#         self.height = height

#     def bark(self):
#         print(f"{self.name} barks WOFF WOFF!")

#     def jump(self):
#         jump_height = self.height * 2
#         print(f"{self.name} jumps {jump_height} cm!")


# davids_dog = Dog(name="Rex", height=50)
# davids_dog.bark()
# davids_dog.jump()

# sarahs_dog = Dog("Teacup", height = 20)
# sarahs_dog.bark()
# sarahs_dog.jump()

# if davids_dog.height>sarahs_dog.height:
#     print("David's dog is the taller")
# else:
#     print("Sarah's dog is the taller")

# Exercise3:
# class Song:
#     def __init__(self, lyrics):
#         self.lyrics = lyrics

#     def sing_me_a_song(self):
#         for line in self.lyrics:
#             print(line)


# stairway = Song(["There’s a lady who's sure",
#                 "all that glitters is gold",
#                 "and she’s buying a stairway to heaven"])

# stairway.sing_me_a_song()

# Exercise4:
# 1/
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} has been added to {self.name}.")
        else:
            print(f"{new_animal} is already in {self.name}.")

    def get_animals(self):
        print(f"Animals in {self.name}: {self.animals}")

    def sell_animal(self, animal_sold):
        if not self.animals:
            print(f"There are no animals to sell in {self.name}.")
        elif animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold from {self.name}.")
        else:
            print(f"{animal_sold} is not present in {self.name}.")

    def sort_animals(self):
        sorted_animals = {}
        for animal in sorted(self.animals):
            initial_letter = animal[0].upper()
            if initial_letter not in sorted_animals:
                sorted_animals[initial_letter] = [animal]
            else:
                sorted_animals[initial_letter].append(animal)

        for initial_letter, animal_group in sorted_animals.items():
            print(f"{initial_letter}: {animal_group}")

        return sorted_animals


my_zoo = Zoo(zoo_name="My Zoo")

my_zoo.add_animal("Lion")
my_zoo.add_animal("Jirafa")
my_zoo.add_animal("Lion")

# my_zoo.get_animals()
# my_zoo.sell_animal("Lion")
# my_zoo.get_animals()

my_zoo.add_animal("Ape")
my_zoo.add_animal("Bear")
my_zoo.add_animal("Baboon")
my_zoo.add_animal("Cat")
my_zoo.add_animal("Cougar")
my_zoo.add_animal("Eel")
my_zoo.add_animal("Emu")

my_zoo.sort_animals()
