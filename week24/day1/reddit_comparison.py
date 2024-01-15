import requests
import time
import matplotlib.pyplot as plt

def fetch_reddit_data(url, headers):
    for _ in range(3):
        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            data = response.json()
            return data
        elif response.status_code == 429:
            print("Rate limited. Waiting and retrying...")
            time.sleep(5)
        else:
            print(f"Error: Unable to fetch data. Status code: {response.status_code}")
            break
    else:
        print("Exceeded maximum retries. Check your code and try again later.")

def compare_upvotes_comments(url, headers):
    data = fetch_reddit_data(url, headers)

    titles = [post['data']['title'] for post in data['data']['children']]
    upvotes = [post['data']['ups'] for post in data['data']['children']]
    comments = [post['data']['num_comments'] for post in data['data']['children']]

    plt.figure(figsize=(12, 6))
    plt.bar(titles, upvotes, label='Upvotes', color='red', alpha=0.7)
    plt.bar(titles, comments, label='Comments', color='blue', alpha=0.7)
    plt.xlabel('Post Title')
    plt.ylabel('Count')
    plt.title('Comparison of Upvotes and Comments for Top Reddit Posts')
    plt.xticks(rotation='vertical') 
    plt.legend()

    plt.tight_layout()
    plt.savefig("CommentsVsUpvotes.png")

    # plt.show()
