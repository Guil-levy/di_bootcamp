# #exercice 1
# 5 < 3 # False
# print (5<3)
# 3 == 3 # true
# print (3 == 3)
# 3 == "3" #False
# print (3 == '3')
# # "3" > 3 #not supported between instances of 'str' and 'int'
#
# "Hello" == "hello" #False
# print("Hello" == "hello")

# Exercice2
# name = 'Guil'
# age = 38
# shoe_size = 39
# info = f'hi my name is {name}, i am {age},i have great cooking skills'
# print(info)

# Exercice3
# number = int(input('Choose a number between 1 and 100 : '))
# if number % 2 == 0:
#     print('you picked an odd number')
# else :
#     print('you picked an even number')

#Exercice4
# 1
# height = float(input('Write your height in inches : '))
# # 2
# if height * 2.54 < 145:
#     print('Too small, go away')
# else :
#     print('Please enjoy the ride')

# Exercice5
# my_text = '''
#            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
#            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
#            Ut enim ad minim veniam, quis nostrud exercitation ullamco
#            laboris nisi ut aliquip ex ea commodo consequat.
#            Duis aute irure dolor in reprehenderit in voluptate velit
#            esse cillum dolore eu fugiat nulla pariatur.
#            Excepteur sint occaecat cupidatat non proident,
#            sunt in culpa qui officia deserunt mollit anim id est laborum.
# '''
# print(len(my_text))

# Exercice6

# current_longest_sentence = ''
# longest_length_without_a = 0
#
# while True:
#    sentence = str(input('Try to write to longest sentence you can without the letter A : '))
#
#    if not 'a' in sentence:
#        if len(sentence) > len(current_longest_sentence):
#            current_longest_sentence = sentence
#            print(f'Congratz you longest sentence is {len(current_longest_sentence)}')
#    else:
#         print('No, your sentence without an "a" is not long enought, try again ')

# Exercice 7:
# my_favorite_numbers = {6, 12, 7, 6}
# my_favorite_numbers.update([22, 15])
# print(f'my favorite numbers are :  {my_favorite_numbers}')
#
# friend_favorite_numbers ={3, 9, 12}
# our_favorite_numbers = my_favorite_numbers.union(friend_favorite_numbers)
# print(f'Our favorite numbers are: {our_favorite_numbers}')
# print(sorted(our_favorite_numbers))

#Exercice8
basket = ["Banana", "Apples", "Oranges", "Blueberries"];

basket.remove('Banana')
basket.remove('Blueberries')

basket.append('Kiwi')
basket.insert(0, "Apples")

apple_count =basket.count("Apples")
print(apple_count)

basket.clear()
print(basket)

# Exercice 9:
# 1/ a float is a decimal number, like 1.000. Integer is 1 or 2.
# 2
