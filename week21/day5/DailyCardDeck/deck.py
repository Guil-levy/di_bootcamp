import random


class Card(object):
    def __init__(self, suit, val):
        self.suit = suit
        self.value = val

    def __unicode__(self):
        return self.show()

    def __str__(self):
        return self.show()

    def __repr__(self):
        return self.show()

    def show(self):
        if self.value == 1:
            val = "Ace"
        elif self.value == 11:
            val = "Jack"
        elif self.value == 12:
            val = "Queen"
        elif self.value == 13:
            val = "King"
        else:
            val = self.value

        return f"{val} of {self.suit}"


class Deck(object):
    def __init__(self):
        self.cards = []
        self.build()

    # display all cards
    def show(self):
        for card in self.cards:
            print(card.show())

    # generate 52 cards
    def build(self):
        self.cards = []
        for suit in ["Hearts", "Clubs", "Diamonds", "Spades"]:
            for val in range(1, 14):
                self.cards.append(Card(suit, val))

    # shuffle the deck
    def shuffle(self, num=1):
        # length = len(self.cards)
        # for _ in range(num):
        #     #fisher yates shuffle algorithm
        #     for i in range(length-1, 0,-1):
        #         randi = random.randint(0, i)
        #         if i == randi:
        #             continue
        #         self.cards[i], self.cards[randi] = self.cards[randi], self.cards[i]
        random.shuffle(self.cards)

    def deal(self):
        return self.cards.pop()


class Player(object):
    def __init__(self, name):
        self.name = name
        self.hand = []

    def say_hello(self):
        print(f"Hi! My name is {self.name}")
        return self

    def draw(self, deck, num=1):
        for _ in range(num):
            card = deck.deal()
            if card:
                self.hand.append(card)
            else:
                return False
        return True

    def show_hand(self):
        print(f"{self.name}'s hand: {[str(card) for card in self.hand]}")
        return self

    def discard(self):
        return self.hand.pop()


myDeck = Deck()
myDeck.shuffle()

Guil = Player("Guil")
Guil.say_hello()
Guil.draw(myDeck, 3)
Guil.show_hand()

print("Remaining cards in the deck:")
myDeck.show()
