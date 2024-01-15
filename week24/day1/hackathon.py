from reddit_analysis import fetch_reddit_data, visualize_reddit_data
from time_series_analysis import extract_time_series_data, plot_time_series
from reddit_comparison import compare_upvotes_comments

url = "https://www.reddit.com/r/Wallstreetbets/top.json?limit=10&t=year"
headers = {"User-Agent": "YourUserAgent"}

# Reddit data
data = fetch_reddit_data(url, headers)
visualize_reddit_data(data)

# Time Series Analysis
datetime_values, upvotes = extract_time_series_data(data)
plot_time_series(datetime_values, upvotes, time_interval='days')

# Upvotes vs Comments
post_url = "https://www.reddit.com/r/Wallstreetbets/top.json?limit=10&t=year"  # Replace with your desired post URL
print("\nComparing Upvotes and Comments for the specified post:\n")
compare_upvotes_comments(post_url, headers)