import numpy as np

# matrix = np.arange(1,10)
# matrix2 = np.reshape( matrix, (3,3))
# print(matrix2)

# matrix = np.array([[10, 20, 30], [40, 50, 60], [70, 80, 90]])
# # print(matrix[2,1])
# mean_sub = matrix - matrix.mean(axis = 1, keepdims=True)
# print(mean_sub)

# matrix = np.array([[4, 2, 3], [6, 1, 5], [7, 9, 8]])
# sorted_matrix = matrix[matrix[:,1].argsort()]
# print(sorted_matrix)

# matrix = np.array([1,2,3,4,5])
# result = np.square(matrix)
# print(result)

# array1 = np.arange(1, 6)
# array2 = np.arange(6,11)
# result = array1 + array2
# print(result)
# result2 = array1 - array2
# print(result2)
# result3 = array1 * array2
# print(result3)
# result4 = array1 / array2
# print(result4)
# help(np.add)

import numpy as np

# Task 1: Create a 2D NumPy array
array2D = np.arange(1, 26).reshape(5, 5)

# Print the 3x3 subarray from the top right corner
top_right_subarray = array2D[:3, -3:]
print("3x3 Subarray from Top Right Corner:")
print(top_right_subarray)

# Replace the last column with the numbers 10 to 14
array2D[:, -1] = np.arange(10, 15)
print("\nUpdated array2D:")
print(array2D)

# Task 2: Matrix Operations
matrix1 = np.arange(1, 10).reshape(3, 3)
matrix2 = np.arange(10, 19).reshape(3, 3)

# a. Matrix addition
matrix_addition = matrix1 + matrix2
print("\nMatrix Addition:")
print(matrix_addition)

# b. Matrix multiplication
matrix_multiplication = np.matmul(matrix1, matrix2)
print("\nMatrix Multiplication:")
print(matrix_multiplication)

# c. Element-wise multiplication
elementwise_multiplication = matrix1 * matrix2
print("\nElement-wise Multiplication:")
print(elementwise_multiplication)

# d. Transposition
transposed_matrix1 = np.transpose(matrix1)
print("\nTransposition of matrix1:")
print(transposed_matrix1)

# Task 3: Generating Sequences and Array Indexing
sequence = np.arange(20, 42, 2)
print("\nArray sequence:")
print(sequence)

# Indices of numbers greater than 30
indices_greater_than_30 = np.where(sequence > 30)
print("\nIndices of numbers greater than 30:")
print(indices_greater_than_30)

# Task 4: Bincount and Array Recreation
numbers = np.array([2, 2, 1, 1, 1, 0, 0, 0, 3, 3])

# Bincount of numbers
bin_counts = np.bincount(numbers)
print("\nBincount of numbers:")
print(bin_counts)

# Recreate the original array
recreated_numbers = np.repeat(np.arange(len(bin_counts)), bin_counts)
print("\nRecreated array using bincount:")
print(recreated_numbers)
