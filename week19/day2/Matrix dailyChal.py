#not working . didn't have time to write it all during class nor understand it
my_matrix = '''

    7ii
    Tsx
    h%?
    i #
    sM
    $a
    #t%
    ^r!

'''

final_matrix = [list(row) for row in my_matrix.split('\n') if row.strip()]
print(final_matrix)

final_result = ""
for col_index in range(len(final_matrix[0])):
    for row_index in range(len(final_matrix)):
        if final_matrix[row_index][col_index].isalpha():
            final_result += final_matrix[row_index][col_index]
        elif final_result != "" and final_result[-1] != " ":
            final_result += " "

print(final_result)
import math
math.e