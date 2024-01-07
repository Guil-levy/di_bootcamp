#pandas -> inside numpy
import pandas as pd 

df = pd.DataFrame({
    "Name": ["Apples", "Bananas", "Cherries", "Dates"],
    "Quantity": [20, 30, 15, 10],
    "Color": ["Red", "Yellow", "Red", "Brown"],
    "Price per kg": [3, 2, 4, 5]
}, index=["1", "2", "3", "4"])

# print("DataFrame:")
# print(df)

# Inspect the DataFrame
# print("\nHead:")
# print(df.head())

# print("\nTail:")
# print(df.tail())

# print("\nInfo:")
# print(df.info())

# print("\nDescribe:")
# print(df.describe())

# total quantity
total_quantity = df["Quantity"].sum()
print("\nTotal Quantity of Fruits in the Store:", total_quantity)

# top three fruits by quantity
top_three_fruits = df.nlargest(3, "Quantity")
# print("\nTop Three Fruits by Quantity:")
# print(top_three_fruits)

# --------------------------------
df.set_index('Name', inplace=True)
quantity_bananas_loc = df.loc['Bananas', 'Quantity']
# print(f"\n Quantity of Bananas: {quantity_bananas_loc}")

# --------------------------------

df['Sale_Price'] = 0.9 * df['Price per kg']

df.rename(columns={'Price per kg': 'Original_Price'}, inplace=True)

df.drop(columns='Color', inplace=True)

print("DataFrame:")
print(df)
# -----------------------
grapes_data = pd.DataFrame({"Name": ["Grapes"], "Quantity": [pd.NA], "Price per kg": [3.5]})
df = pd.concat([df, grapes_data], ignore_index=True)


missing_values = df['Quantity'].isnull().any()


print("Updated DataFrame:")
print(df)
print("\nAre there missing values in the Quantity column? {}".format(missing_values))