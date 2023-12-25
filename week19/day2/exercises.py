# exercise1
# def display_message():
#     print("In this course we are learning python, Regex and OOP")

# display_message()

# exercise2

# def favorite_book(title):
#     print(f"One of my favorite books is {title} .")

# favorite_book("the parfume")

# exercise3
# def describe_city(city, country = "France"):
#     print(f" {city} is in {country}")

# describe_city("Paris")

# exercise4
# import random

# def compare_numbers(user_number):
#     random_number = random.randint(1, 100)

#     print(f"Random number: {random_number}")

#     if random_number == user_number:
#         print("you win")
#     else:
#         print(f" Failed, your number {user_number}, computer number {random_number}")

# user_input = int(input("Enter a number between 1 and 100: "))
# compare_numbers(user_input)

# Exercise5
# def make_shirt(size = "Large", message = "I love Python"):
#     print(f"The size of the shirt is {size} and the text is '{message}'.")


# make_shirt()
# make_shirt("Medium")
# make_shirt("Medium", "Plastic Duck!")
# make_shirt(size = "Medium",message = "Plastic Duck!")

# Exercise6
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']


def show_magicians(magician_list):
    for magician in magician_list:
        print(magician)


def make_great(magician_list):
    for i in range(len(magician_list)):
        magician_list[i] = " the Great " + magician_list[i]


print(" Magician Names:")
show_magicians(magician_names)


make_great(magician_names)


print("\nModified Magician Names:")
show_magicians(magician_names)
