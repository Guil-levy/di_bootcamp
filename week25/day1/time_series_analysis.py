

import matplotlib.pyplot as plt
from datetime import datetime




def convert_utc_to_datetime(utc_timestamp):
    return datetime.utcfromtimestamp(utc_timestamp)

def extract_time_series_data(data):
    timestamps = [post['data']['created_utc'] for post in data['data']['children']]
    upvotes = [post['data']['ups'] for post in data['data']['children']]
    datetime_values = [convert_utc_to_datetime(timestamp) for timestamp in timestamps]

    return upvotes, datetime_values

def plot_time_series(upvotes, datetime_values, time_interval='days'):
    plt.figure(figsize=(16, 10))
    plt.plot(upvotes, datetime_values,  marker='o', linestyle='-')
    plt.ylabel('Time of Posting')
    plt.xlabel('Number of Upvotes')
    plt.title(f'Time Series Analysis: Upvotes Over Time ({time_interval.capitalize()} Interval)')
    plt.xticks(rotation=45) 

    plt.tight_layout()
    plt.savefig("time_series.png")

    # plt.show()
