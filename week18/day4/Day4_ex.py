# Exercise1: Set
# my_fav_numbers = {6, 26, 15, 6, 6, 10}
# my_fav_numbers.update([5, 1])
# print(my_fav_numbers)

# my_fav_numbers.remove(26)
# print(my_fav_numbers)

# friend_fav_numbers= {2,4,8}
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)

# # Exercise 2:
# No, tuples in Python are immutable

# Exercise 3:
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove("Banana")
# # print(basket)
# basket.append("Kiwi")
# # print(basket)
# basket.insert(0, "Apples")
# print(basket)
# number_of_apples =basket.count("Apples")
# print(number_of_apples)
# # 6
# basket.clear()
# print(basket)

# Exercise 5:
# for num in range(1,21):
    # print(num)
# for num in range(1, 21):
#     if num % 2 == 0:
#         print(num)

# Exercise 6:
# while True:
#     name = input("Write your name: ")
#     if name == "Guil":
#         print("Good guess")
#         break
#     else:
#         print("try again")

# Exercise 7:
# user_input = input("Enter your favorite fruit(s), separated by a single space: ")
# fruits = user_input.split()
# print(fruits)

# # 2/ 
# user_guess = input("Choose any fruit: ")
# if user_guess in user_input:
#     print("this fruit is in the basket")
# else : 
#     print("this fruit isn't in the basket")

# Exercise 8:
# 1
# toppings_list = []

# while True :
#     toppings = input("Choose topping for you pizza or write 'quit': ")
#     if toppings.lower() == 'quit':
#         break
#     else:
#         toppings_list.append(toppings)
#         print(f"you'll add that topping: {toppings} to your pizza")

# base_price = 10
# price_per_topping = 2.5
# total_price = base_price + len(toppings_list) * price_per_topping

# print("Chosen toppings:", toppings_list)

# print(f"\n Total price will be: {total_price}$")

# Exercise 10:
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

print("Updated sandwich orders:", sandwich_orders)
# 2/
finished_sandwiches=[]
while sandwich_orders:
    finished_sandwiches = sandwich_orders.pop(0)
    print(f"I made your {finished_sandwiches}")

    
    