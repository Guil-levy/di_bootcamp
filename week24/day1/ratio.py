import matplotlib.pyplot as plt

def visualize_reddit_data(data):
    titles = [post['data']['title'] for post in data['data']['children']]
    upvotes = [post['data']['ups'] for post in data['data']['children']]
    upvote_ratios = [post['data']['upvote_ratio'] for post in data['data']['children']]

    plt.figure(figsize=(16, 10))
    
    # Plot Upvotes
    plt.bar(titles, upvotes, label='Upvotes', color='red', alpha=0.7)
    
    # Plot Upvote Ratios
    plt.bar(titles, upvote_ratios, label='Upvote Ratios', color='blue', alpha=0.7)
    
    plt.xlabel('Post Title')
    plt.ylabel('Count / Ratio')
    plt.title('Comparison of Upvotes and Upvote Ratios for Top Reddit Posts')
    plt.xticks(rotation='vertical') 
    plt.legend()

    plt.tight_layout()
    plt.savefig('upvotes_ratios_comparison.png')
    # plt.show()

    return upvote_ratios

