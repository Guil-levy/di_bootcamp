import pandas as pd 


# data = {
#     "Fruit": ["Apple", "Banana", None, "Date", "Grapes"],
#     "Quantity": [20, 30, 15, None, 25], 
#     "Price": [3, 2, 4, 5, None],
#     "Supplier": ["Supplier1", "Supplier2", "Supplier1", None, "Supplier1"]
# }

# df_null = pd.DataFrame(data)

# # Display the DataFrame
# print(df_null)
# print('\n','-' *20, '\n')
# print(df_null.isnull())

# df_dropped = df_null.dropna()
# print('\n','-' *20, '\n')
# print(df_dropped)

# data = {
#     "Fruit": ["Apple", "Banana", "Date", "Grapes", "Apple", "Date", "Cherry", "Peach"],
#     "Quantity": [10, 15, 50, 25, 100, 150, 175, 200],
#     "Price": [2.5, 1.0, 3.5, 2.0, 2.5, 3.5, 3.1, 2.5],
#     "Updated_Price": [2.0, 1.2, 3.5, 2.0, 2.0, 3.5, 3.1, 2.5],
#     "Supplier": ["Supplier1", "Supplier2", "Supplier3", "Supplier1", 
#                 "Supplier2", "Supplier3", "Supplier4", "Supplier4"]
# }

# df = pd.DataFrame(data)

# arrival_dates = ["2023-07-01", "2023-07-05", "2023-07-10", "2023-07-15", "2023-07-20", "2023-07-25", "2023-07-30", "2023-08-05"]

# df['Arrival_Date'] = pd.to_datetime(arrival_dates)

# print(df)
# print('\n','-' *20, '\n')
