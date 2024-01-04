import random

class Game:
    def __init__(self):
        self.items = ["r", "p", "s"]
        self.user_score = 0
        self.computer_score = 0
        self.user_draw= 0


    def get_user_item(self): 
        while True:
                user_item = input("Enter your choice ((r)ock/(p)aper/(s)cissors): ").lower()
                if user_item in self.items:
                    return user_item
                else:
                    print("Invalid choice. Please enter rock, paper, or scissors.")

    def get_computer_item(self):
        return random.choice(self.items)

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            self.user_draw += 1
            return "Result : It's a draw"

        elif (
            (user_item == "r" and computer_item == "s") or
            (user_item == "p" and computer_item == "r") or
            (user_item== "s" and computer_item == "p")):  
            self.user_score += 1 
            return "Result : You win!"

        else:
            self.computer_score += 1
            return "Result : Computer wins!"


    def play_game(self):
        game_input = input("Let's play Rock-paper-scissors!\n Do you want to play? (yes/no): ")
        if (game_input != "yes") and (game_input != "y"):
            print("Thanks you. Goodbye!")
            return False

        while True:
            user_item = self.get_user_item()
            computer_item = self.get_computer_item()
            print(f"You chose {user_item.capitalize()}.")
            print(f"Computer chose {computer_item.capitalize()}.")

            result = self.get_game_result(user_item, computer_item)
            print(result)
            print(f"Game Results:\n- You won  {self.user_score} times \n- You lost {self.computer_score} times \n- You drew {self.user_draw} times")

            play_again = input("Do you want to play again? (yes/no): ").lower()
            if (play_again != "yes") and (play_again != "y"):
                print("Thanks for playing. Goodbye!")
                break

# if __name__ == "__main__":
#     game = Game()
#     game.play_game()