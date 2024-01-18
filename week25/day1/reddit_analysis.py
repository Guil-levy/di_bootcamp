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

def visualize_reddit_data(data):
    titles = [post['data']['title'] for post in data['data']['children']]
    upvotes = [post['data']['ups'] for post in data['data']['children']]

    plt.figure(figsize=(16, 10))
    plt.bar(titles, upvotes)
    plt.xlabel('Post Title')
    plt.ylabel('Number of Upvotes')
    plt.title('Upvotes for Top Reddit Posts')
    plt.xticks(rotation='vertical') 

    plt.tight_layout()
    plt.savefig('reddit_upvotes.png')

    # plt.show()
