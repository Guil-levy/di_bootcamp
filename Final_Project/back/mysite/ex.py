import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')

from django.contrib.auth import get_user_model

# Configure Django settings
django.setup()
from User.models import UserAccountManager


User = get_user_model()

def create_user_manually():
    user_manager = UserAccountManager()

    # Create a new user manually
    user = user_manager.create_user(
        email='guil.levy1234@gmail.com',
        name='Foo Bar',
        user_name='Boo',
        password='password123',
    )

    print("User created successfully:", user)


create_user_manually()
# ----------------------------

# category_action = Category.objects.create(name="Action")
# category_adventure = Category.objects.create(name="Adventure")
# category_rpg = Category.objects.create(name="RPG")
# category_strategy = Category.objects.create(name="Strategy")
# category_FPS = Category.objects.create(name="FPS")
# category_sports = Category.objects.create(name="sports")
# category_survival = Category.objects.create(name="survival")


# Display Games
# Game.objects.all()

# Game1----------------------------------
# Baldur_Gate = Game.objects.create(name= "Baldur's Gate", price= 150.00, description= "Baldur’s Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale", picture_url= "https://cdn.guidestash.com/wp-content/uploads/2020/10/02121353/Baldurs-Gate-3-Character-Elf-01.jpg")

# Baldur_Gate.categories.add(category_adventure, category_rpg, category_strategy)
# Baldur_Gate.save()

# Game3--------------------------------
# STAR_WARS_Jedi = Game.objects.create(name= "STAR WARS Jedi: Survivor", price= 120.00, description= "he story of Cal Kestis continues in Star Wars Jedi: Survivor™, a third-person, galaxy-spanning, action-adventure game from Respawn Entertainment, developed in collaboration with Lucasfilm Games. This narratively driven, single-player title picks up 5 years after the events of Star Wars Jedi: Fallen Order™ and follows Cal’s increasingly desperate fight as the galaxy descends further into darkness.", picture_url= "https://cdn.akamai.steamstatic.com/steam/apps/1774580/header.jpg?t=1701206599")

# STAR_WARS_Jedi.categories.add(category_adventure, category_action)
# STAR_WARS_Jedi.save()

# Game4--------------------------------
# Subnautica = Game.objects.create(name= "Subnautica", price= 60.00, description= "You have crash-landed on an alien ocean world, and the only way to go is down. Subnautica's oceans range from sun drenched shallow coral reefs to treacherous deep-sea trenches, lava fields, and bio-luminescent underwater rivers.", picture_url= "https://cdn.akamai.steamstatic.com/steam/apps/264710/header.jpg?t=1700522118")

# Subnautica.categories.add(category_adventure, category_survival)
# Subnautica.save()

# Game5--------------------------------
# Apex_Legends = Game.objects.create(name="Apex Legends", price=00.00, description="Conquer with character in Apex Legends, a free-to-play Hero shooter where legendary characters with powerful abilities team up to battle for fame & fortune on the fringes of the Frontier.",
#                                    picture_url="https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg?t=1706735551")

# Apex_Legends.categories.add(category_adventure, category_FPS)
# Apex_Legends.save()

# Game6--------------------------------
# Palworld = Game.objects.create(name= "Palworld", price= 100.00, description= "In this game, you can peacefully live alongside mysterious creatures known as Pals or risk your life to drive off a ruthless poaching syndicate.Pals can be used to fight, or they can be made to work on farms or factories.You can even sell them or eat them!", picture_url= "https://cdn.akamai.steamstatic.com/steam/apps/1623730/header.jpg?t=1705662211")
# Palworld.categories.add(category_adventure, category_action, category_rpg, category_survival)
# Palworld.save()

# Game7--------------------------------
# EA_SPORTS_FIFA_23 = Game.objects.create(name="EA SPORTS™ FIFA 23", price=110.00, description="Experience the pinnacle of women’s international football in EA SPORTS™ FIFA 23 with the FIFA Women’s World Cup Australia and New Zealand 2023™ available on June 27th at no additional cost*.",
#                                         picture_url="https://cdn.akamai.steamstatic.com/steam/apps/1811260/header.jpg?t=1704287288")

# EA_SPORTS_FIFA_23.categories.add(category_sports)
# EA_SPORTS_FIFA_23.save()
