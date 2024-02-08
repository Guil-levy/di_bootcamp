from Games.models import Game, Category

category_adventure = Category.objects.create(name="Adventure")
category_rpg = Category.objects.create(name="RPG")
category_strategy = Category.objects.create(name="Strategy")
category_FPS = Category.objects.create(name="FPS")
category_sports = Category.objects.create(name="sports")
category_survival = Category.objects.create(name="survival")


# Display Games
# Game.objects.all()

# Game1
Baldur_Gate = Game.objects.create(name= "Baldur's Gate", price= 150.00, description= "Baldur’s Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale", picture_url= "https://cdn.guidestash.com/wp-content/uploads/2020/10/02121353/Baldurs-Gate-3-Character-Elf-01.jpg")

Baldur_Gate.categories.add(category_adventure, category_rpg, category_strategy)
