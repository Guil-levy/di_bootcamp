# 1/
user_string = str(input("Write a sentence : "))

if len(user_string) < 10:
    print("String is not long enough.")
elif len(user_string) > 10:
    print("String is too long")
elif len(user_string) == 10:
    print("perfect string")

# 2/
first_char = user_string[0]
print("First character of the sentence is : ", first_char)
last_char = user_string[-1]
print("Last character of the sentence is : ", last_char)
# 3/
for i in range (1, len(user_string) + 1):
    substring = user_string[0:i]
    print(substring)
