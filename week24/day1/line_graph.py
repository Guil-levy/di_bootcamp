import matplotlib.pyplot as plt

def generate_combined_line_graph(titles, upvotes, upvote_ratios, comments):
        # Multiply upvote ratios by 10000
    upvote_ratios_percentage = [ratio * 10000 for ratio in upvote_ratios]

    plt.figure(figsize=(16, 10))

    # Plot Upvotes
    plt.plot(titles, upvotes, label='Upvotes', marker='o')

    # Multiply upvote ratios by 10000
    plt.plot(titles, upvote_ratios_percentage, label='Upvote Ratios (x10000)', marker='o')


    # Plot Comments
    plt.plot(titles, comments, label='Comments', marker='o')

    # Set labels and title
    plt.xlabel('Posts')
    plt.ylabel('Count')
    plt.title('Combined Line Graph for Upvotes, Upvote Ratios, and Comments')
    
    # Display legend
    plt.legend()

    # Save the graph as an image
    plt.tight_layout()
    plt.savefig('Line_graph.png')

    # Show the graph
    # plt.show()
