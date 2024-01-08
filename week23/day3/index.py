import pandas as pd 

data = {
    "Fruit": ["Apple", "Banana", None, "Date", "Grapes"],
    "Quantity": [20, 30, 15, None, 25], 
    "Price": [3, 2, 4, 5, None],
    "Supplier": ["Supplier1", "Supplier2", "Supplier1", None, "Supplier1"]
}

df_null = pd.DataFrame(data)

# Display the DataFrame
print(df_null)
print('\n','-' *20, '\n')
print(df_null.isnull())

df_dropped = df_null.dropna()
print('\n','-' *20, '\n')
print(df_dropped)