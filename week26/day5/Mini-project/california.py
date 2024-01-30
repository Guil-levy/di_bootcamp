from sklearn.datasets import fetch_california_housing
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from sklearn.preprocessing import OneHotEncoder, LabelEncoder

data = fetch_california_housing()
df = pd.DataFrame(data['data'], columns=data['feature_names'])
df['Target'] = data['target']


# 1/ --------------------------
# df.describe()
# df.head()
# df.info()

# 2/--------------------------

# missing_data = df.isnull().sum()
# print("Missing Data:")
# print(missing_data)


# scaler = MinMaxScaler()
# df_scaled = pd.DataFrame(scaler.fit_transform(df.iloc[:, :-1]), columns=df.columns[:-1])

# 3/--------------------------

age_bins = [0, 10, 20, 50, float('inf')] 
age_labels = ['New', 'Old', 'Very Old', 'Ancient']

df['HouseAgeCategory'] = pd.cut(df['HouseAge'], bins=age_bins, labels=age_labels, right=False)

df['Age_Cat'] = pd.cut(df['HouseAge'], bins=age_bins, labels=age_labels, right=False)

# Apply one-hot encoding to the categorical variable
label_encoder = LabelEncoder()
df['Age_Cat_Encoded'] = label_encoder.fit_transform(df['Age_Cat'])
one_hot_encoder = OneHotEncoder(drop='first', sparse=False)
encoded_categories = one_hot_encoder.fit_transform(df[['Age_Cat_Encoded']])
encoded_df = pd.DataFrame(encoded_categories, columns=[f'{label_encoder.classes_[i]}_encoded' for i in range(1, len(label_encoder.classes_))])

# Concatenate the original DataFrame with the one-hot encoded data
df = pd.concat([df[['MedInc', 'HouseAge', 'AveRooms', 'AveBedrms', 'Population', 'AveOccup', 'Latitude', 'Longitude', 'Target']], encoded_df], axis=1)

# Set index from 0 to 4
df.set_index('MedInc', inplace=True)
df = df.head(5)


print("One-hot encoded data:")
print(df)