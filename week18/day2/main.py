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
# basket = ["Banana", "Apples", "Oranges", "Blueberries"];
#
# basket.remove('Banana')
# basket.remove('Blueberries')
#
# basket.append('Kiwi')
# basket.insert(0, "Apples")
#
# apple_count =basket.count("Apples")
# print(apple_count)
#
# basket.clear()
# print(basket)

# Exercice 9:
# 1/ a float is a decimal number, like 1.000. Integer is 1 or 2.
# 2

#Exercice 10:
# for num in range(1,21,1):
#     print(num)
#
# #2
# for num in range(0,21,2) :
#     print(num)


# Exercise 11 : Cinemax
# 1/
# price = 0
# age = int(input('What is your age? : '))
# def calculate_price_ticket(age) :
#     if age<3:
#         return 0
#     elif 3<= age <=12:
#         return 10
#     else:
#         return 15
#
# # price = price_ticket(age)
#
# # print(f'you need to pay : {price}$')
# # 2/ Ask a family the age of each person who wants a ticket.
# def main():
#
#     family_members = int(input("Enter the number of family members : "))
#
#     total_cost = 0
#
#     for members in range(family_members):
#         age = int(input('Enter the age of the person?: '))
#         ticket_price = calculate_price_ticket(age)
#         total_cost = total_cost + ticket_price
#     print(f"The total cost for the family is ${total_cost}")
#
# main()
# 3/ Store the total cost of all the family’s tickets and print it out.

# 4/
def filter_teens(teenagers):
    allowed_age_range = range(16, 22)
    valid_teens = []

    for teen in teenagers:
        age = int(input(f"Enter the age of {teen}: "))
        if age in allowed_age_range:
            valid_teens.append(teen)

    return valid_teens

teenagers_list = ["John", "Foo", "Bar", "Baz"]

valid_teens_list = filter_teens(teenagers_list)

print("Final list of teenagers allowed to watch the movie:")
print(valid_teens_list)