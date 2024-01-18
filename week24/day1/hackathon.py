from reddit_analysis import fetch_reddit_data, visualize_reddit_data
from time_series_analysis import extract_time_series_data, plot_time_series
from reddit_comparison import compare_upvotes_comments
from ratio import visualize_reddit_data
from combined_graphs import generate_combined_graph
from line_graph import generate_combined_line_graph

url = "https://www.reddit.com/r/Wallstreetbets/top.json?limit=10&t=year"
headers = {"User-Agent": "YourUserAgent"}

# Reddit data
data = fetch_reddit_data(url, headers)
visualize_reddit_data(data)

# Time Series Analysis
datetime_values, upvotes = extract_time_series_data(data)
plot_time_series(datetime_values, upvotes, time_interval='days')

# Upvotes vs Comments
post_url = "https://www.reddit.com/r/Wallstreetbets/comments/123abc/some_specific_post/"  # Replace with the specific post URL
print("\nComparing Upvotes and Comments for the specified post:\n")
compare_upvotes_comments(post_url, headers)

# Visualize upvote ratios
visualize_reddit_data(data)

# Combined graph
generate_combined_graph(url, headers)

# Line graph
titles = [post['data']['title'] for post in data['data']['children']]
upvotes = [post['data']['ups'] for post in data['data']['children']]
upvote_ratios = [post['data']['upvote_ratio'] for post in data['data']['children']]
comments = [post['data']['num_comments'] for post in data['data']['children']]
generate_combined_line_graph(titles, upvotes, upvote_ratios, comments)
