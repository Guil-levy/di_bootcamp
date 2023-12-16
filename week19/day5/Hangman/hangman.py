from words_fr import word_list_fr
from words import word_list
import random
langue = input("Choose your language : EN ou FR? ").upper()


def get_word():
    if langue == "EN":
        word = random.choice(word_list)
    elif langue == "FR":
        word = random.choice(word_list_fr)
    else:
        word = "ERROR"
    return word.upper()


def play(word):
    word_completion = "_" * len(word)
    guessed = False
    guessed_letters = []
    guessed_words = []
    tries = 6
    if langue == "EN":
        print("Let's play Hangman!")
    elif langue == "FR":
        print("Jouons au pendu!")
    else:
        print("Language unknowned")

    print(display_hangman(tries))
    print(word_completion)
    print("\n")
    while not guessed and tries > 0:
        if langue == "EN":
            guess = input("Please guess a letter or a word: ").upper()
        elif langue == "FR":
            guess = input("Devinez une lettre ou un mot : ").upper()
        else:
            guess = ""

        if len(guess) == 1 and guess.isalpha():
            if guess in guessed_letters:
                if langue == "EN":
                    print("You already guessed that letter", guess)
                elif langue == "FR":
                    print("Vous avez deja devine cette lettre", guess)
            elif guess not in word:
                if langue == "EN":
                    print(guess, "is not in the word")
                elif langue == "FR":
                    print(guess, "n'est pas dans le mot")
                tries -= 1
                guessed_letters.append(guess)
            else:
                if langue == "EN":
                    print("Good job,", guess, "is in the word!")
                elif langue == "FR":
                    print("Bravo,", guess, "est dans le mot !")
                guessed_letters.append(guess)
                word_as_list = list(word_completion)
                indices = [i for i, letter in enumerate(
                    word) if letter == guess]
                for index in indices:
                    word_as_list[index] = guess
                word_completion = "".join(word_as_list)
        elif len(guess) == len(word) and guess.isalpha():
            if guess in guessed_words:
                if langue == "EN":
                    print("You already guessed the word", guess)
                elif langue == "FR":
                    print("Vous avez deja devine le mot", guess)
            elif guess != word:
                if langue == "EN":
                    print(guess, "is not the word")
                elif langue == "FR":
                    print(guess, "n'est pas le mot")
                tries -= 1
                guessed_words.append(guess)
            else:
                guessed = True
                word_completion = word

        else:
            if langue == "EN":
                print("Not a valid guess.")
            elif langue == "FR":
                print("Ce n'est pas une proposition valide.")
            print(display_hangman(tries))
            print(word_completion)
            print("\n")

        if "_" not in word_completion:
            guessed = True

        if guessed:
            print("Congratz, you guessed the word! You win POG!")
        else:
            if langue == "EN":
                print("Sorry, you ran out of tries. The word was " +
                      word + ".Maybe next time! Sadge")
            elif langue == "FR":
                print("Desole, vous avez epuise vos essais. Le mot etait " +
                      word + ". Peut-être la prochaine fois ! Sadge")


def display_hangman(tries):
    stages = [  # final state: head, torso, both arms, and both legs
                """
                   --------
                   |      |
                   |      O
                   |     \\|/
                   |      |
                   |     / \\
                   -
                """,
                # head, torso, both arms, and one leg
                """
                   --------
                   |      |
                   |      O
                   |     \\|/
                   |      |
                   |     / 
                   -
                """,
                # head, torso, and both arms
                """
                   --------
                   |      |
                   |      O
                   |     \\|/
                   |      |
                   |      
                   -
                """,
                # head, torso, and one arm
                """
                   --------
                   |      |
                   |      O
                   |     \\|
                   |      |
                   |     
                   -
                """,
                # head and torso
                """
                   --------
                   |      |
                   |      O
                   |      |
                   |      |
                   |     
                   -
                """,
                # head
                """
                   --------
                   |      |
                   |      O
                   |    
                   |      
                   |     
                   -
                """,
                # initial empty state
                """
                   --------
                   |      |
                   |      
                   |    
                   |      
                   |     
                   -
                """
    ]
    return stages[tries]


def main():
    word = get_word()
    play(word)
    while input("Play Again? (Y/N) ").upper() == "Y":
        word = get_word()
        play(word)


if __name__ == "__main__":
    main()
