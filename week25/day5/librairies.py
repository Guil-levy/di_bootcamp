import matplotlib.pyplot as plt
import numpy as np
from mpl_toolkits.mplot3d import Axes3D

# # Generate data
# x = np.linspace(0, 2 * np.pi, 400)
# y = np.sin(x ** 2)
# z = y ** 2

# # Create a 3D plot
# fig = plt.figure()
# ax = fig.add_subplot(111, projection='3d')

# # Plot the points in 3D space
# ax.plot(x, y, z)

# # Set labels for each axis
# ax.set_xlabel('X Axis')
# ax.set_ylabel('Y Axis')
# ax.set_zlabel('Z Axis')
# ax.set_title('3D Plot of x, y, and y**2')

# # Save the plot as a PNG file
# plt.savefig('3d_plot.png')

# plt.show()


# Generate data
# x = np.linspace(0, 2 * np.pi, 400)
# y = np.sin(x)

# # Create vertical error bars of size 0.2
# error = 0.2

# # Create a line plot with error bars
# plt.errorbar(x, y, yerr=error, label='Sine Function with Error Bars')

# # Set labels for each axis
# plt.xlabel('X Axis')
# plt.ylabel('Y Axis')
# plt.title('Line Plot of Sine Function with Vertical Error Bars')

# # Add a legend
# plt.legend()

# plt.savefig('3d_plot2.png')

# # Show the plot
# plt.show()

# -------------------

# Sales data
sales_data = {
    'Year': ['2017', '2018', '2019', '2020', '2021'],
    'Product A': [30, 35, 40, 50, 60],
    'Product B': [40, 30, 20, 15, 10],
    'Product C': [50, 60, 70, 80, 90]
}

# Extracting data
years = sales_data['Year']
product_a = sales_data['Product A']
product_b = sales_data['Product B']
product_c = sales_data['Product C']

# Plotting
plt.figure(figsize=(10, 6))  # Adjust the figure size

# Plot lines for each product
plt.plot(years, product_a, marker='o', label='Product A', color='blue')
plt.plot(years, product_b, marker='o', label='Product B', color='green')
plt.plot(years, product_c, marker='o', label='Product C', color='red')

# Set labels and title
plt.xlabel('Year')
plt.ylabel('Sales')
plt.title('Sales Trend for Products A, B, C (2017-2021)')

# Add legend
plt.legend()
plt.grid()
plt.savefig('3d_plot3.png')

plt.grid(True)  # Add grid lines for better readability
plt.show()
