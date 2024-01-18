import numpy as np
import matplotlib.pyplot as plt

import numpy as np
import matplotlib.pyplot as plt

# Generate data
x = np.linspace(0, 2 * np.pi, 400)
y = np.sin(x ** 2)

# Create a figure with four subplots
fig, axs = plt.subplots(2, 2, figsize=(10, 8))

# Plot y against x in the first subplot
axs[0, 0].plot(x, y, label='y')
axs[0, 0].set_title('y vs x')
axs[0, 0].legend(title='Legend', loc='upper right', shadow=True)

# Plot -y against x in the second subplot
axs[0, 1].plot(x, -y, label='-y')
axs[0, 1].set_title('-y vs x')
axs[0, 1].legend(title='Legend', loc='upper right', shadow=True)

# Plot y squared against x in the third subplot
axs[1, 0].plot(x, y ** 2, label='y^2')
axs[1, 0].set_title('y^2 vs x')
axs[1, 0].legend(title='Legend', loc='upper right', shadow=True)

# Plot -y squared against x in the fourth subplot
axs[1, 1].plot(x, -(y ** 2), label='-y^2')
axs[1, 1].set_title('-y^2 vs x')
axs[1, 1].legend(title='Legend', loc='upper right', shadow=True)

# Add arrows and text annotations for maximum and minimum values
for ax in axs.flatten():
    max_index = np.argmax(ax.lines[0].get_ydata())
    min_index = np.argmin(ax.lines[0].get_ydata())
    max_point = (ax.lines[0].get_xdata()[max_index], ax.lines[0].get_ydata()[max_index])
    min_point = (ax.lines[0].get_xdata()[min_index], ax.lines[0].get_ydata()[min_index])

    ax.annotate(f'Max: {max_point[1]:.2f}', max_point, xytext=(10, -20), textcoords='offset points', color='red')
    ax.annotate(f'Min: {min_point[1]:.2f}', min_point, xytext=(10, 10), textcoords='offset points', color='blue')

    # Add arrows
    ax.annotate("", xytext=(max_point[0], 0), xy=(max_point[0], max_point[1]),
                arrowprops=dict(facecolor='red', edgecolor='red', arrowstyle='->'))
    ax.annotate("", xytext=(min_point[0], 0), xy=(min_point[0], min_point[1]),
                arrowprops=dict(facecolor='blue', edgecolor='blue', arrowstyle='->'))

# Adjust layout
plt.tight_layout()

plt.savefig('my_styled_plot.png')

plt.show()
