# dailychal1
# number = int(input("Choose a number : "))
# length = int(input("Choose a length : "))

# result = [number * (i + 1) for i in range(length)]
# print(result)

# Challenge 2
word1 = "ppoeemm"
word2 = "wiiiinnnnd"

def remove_duplicates(input_word):
    result = []
    for char in input_word:
        if not result or char != result[-1]:
            result.append(char)
    return ''.join(result)

result_word1 = remove_duplicates(word1)
result_word2 = remove_duplicates(word2)
print(result_word1)
print(result_word2)