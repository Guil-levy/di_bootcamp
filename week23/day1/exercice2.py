import pandas as pd

data = {
    "Fruit": ["Apple", "Banana", "Cherry", "Date", "Grapes"],
    "Quantity": [20, 30, 15, 10, 25], 
    "Original_Price": [3, 2, 4, 5, 2.5],
    "Supplier": ["Supplier1", "Supplier2", "Supplier1", "Supplier2", "Supplier1"]
}

df = pd.DataFrame(data)

# Function to get the updated price for a fruit
def get_updated_price(fruit):
    updated_prices = {"Banana": 1.2, "Apple": 2.0, "Grapes": 2.5}
    return updated_prices.get(fruit, None)

# Apply the function to create a new 'Updated_Price' column
df['Updated_Price'] = df['Fruit'].map(get_updated_price)
# print(df)

supplier_totals = df.groupby('Supplier')['Quantity'].sum()
print(supplier_totals)
