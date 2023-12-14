def check_win(board):
    # Check rows and columns
    for i in range(3):
        if all(board[i][j] == board[i][0] != " " for j in range(3)) or \
                all(board[j][i] == board[0][i] != " " for j in range(3)):
            return True
    # Check diagonals
    if all(board[i][i] == board[0][0] != " " for i in range(3)) or \
            all(board[i][2 - i] == board[0][2] != " " for i in range(3)):
        return True
    return False


def display_board(board):
    print(" *************")
    for i, row in enumerate(board):
        print("*  " + " | ".join(row) + "   *")
        if i != len(board) - 1:
            print("* " + "-" * 11 + "  *")
    print(" *************")


def initialize_board():
    return [[" " for _ in range(3)] for _ in range(3)]


def player_input(board):
    while True:
        try:
            row = int(input("Select a row (1, 2, or 3): ")) - 1
            col = int(input("Select a column (1, 2, or 3): ")) - 1
            if row >= 3 or col >= 3:
                print("invalid index")
            elif board[row][col] != " ":
                print("Cell already taken. Try again.")
            else:
                return row, col
        except:
            print("please enter an integer")


def play_again():
    return input("Do you want to play again? (yes/no): ").lower()


def play():
    while True:
        tic_tac_toe_board = initialize_board()
        display_board(tic_tac_toe_board)
        for turn in range(9):
            player = "X" if turn % 2 == 0 else "O"
            print(f"Player {player}'s turn...")
            row, col = player_input(tic_tac_toe_board)
            tic_tac_toe_board[row][col] = player
            display_board(tic_tac_toe_board)
            if check_win(tic_tac_toe_board):
                print(f"Player {player} wins!")
                break
        else:
            print("it's a draw")

        play_again_answer = play_again()
        if play_again_answer.lower() == 'no' or play_again_answer.lower() == 'n':
            break


if __name__ == "__main__":
    play()
