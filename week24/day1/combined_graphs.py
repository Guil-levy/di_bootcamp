import matplotlib.pyplot as plt
from reddit_analysis import fetch_reddit_data, visualize_reddit_data
from time_series_analysis import extract_time_series_data, plot_time_series
from reddit_comparison import compare_upvotes_comments

def generate_combined_graph(url, headers):
    # Reddit data
    data = fetch_reddit_data(url, headers)

    # Visualize upvotes, upvote ratios, and comments vs upvotes
    titles = [post['data']['title'] for post in data['data']['children']]
    upvotes = [post['data']['ups'] for post in data['data']['children']]
    upvote_ratios = [post['data']['upvote_ratio'] for post in data['data']['children']]
    comments = [post['data']['num_comments'] for post in data['data']['children']]

    # Plotting
    plt.figure(figsize=(16, 10))

    # Upvotes
    plt.subplot(3, 1, 1)
    plt.bar(titles, upvotes, color='red', alpha=0.7)
    plt.xlabel('Post Title')
    plt.ylabel('Upvotes')
    plt.title('Upvotes for Top Reddit Posts')

    # Upvote Ratios
    plt.subplot(3, 1, 2)
    plt.bar(titles, upvote_ratios, color='green', alpha=0.7)
    plt.xlabel('Post Title')
    plt.ylabel('Upvote Ratio')
    plt.title('Upvote Ratios for Top Reddit Posts')

    # Comments vs Upvotes
    plt.subplot(3, 1, 3)
    plt.bar(titles, comments, color='blue', alpha=0.7)
    plt.xlabel('Post Title')
    plt.ylabel('Comments')
    plt.title('Comments vs Upvotes for Top Reddit Posts')

    plt.tight_layout()
    plt.savefig('combined_graphs.png')

if __name__ == "__main__":
    url = "https://www.reddit.com/r/Wallstreetbets/top.json?limit=10&t=year"
    headers = {"User-Agent": "YourUserAgent"}

    generate_combined_graph(url, headers)
