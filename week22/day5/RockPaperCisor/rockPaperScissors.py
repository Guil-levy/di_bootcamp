# from game import Game
import game

if __name__ == "__main__":
    game.game_instance = game.Game()
    game.game_instance.play_game()