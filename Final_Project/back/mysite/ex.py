import django
import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')
django.setup()
from django.contrib.auth import get_user_model
User = get_user_model()
from Games.models import Category, Game
from User.models import UserAccountManager
# delete a game-------
# try:
#     game_to_delete = Game.objects.get(id=12)  # Replace 8 with the actual ID
#     game_to_delete.delete()
#     print("Game deleted successfully")
# except Game.DoesNotExist:
#     print("Game with ID 12 does not exist")  # Adjust the message accordingly
# except Exception as e:
#     print("An error occurred:", str(e))

# create a user---------
# def create_user_manually():
#     user_manager = UserAccountManager()

#     # Create a new user manually
#     user = user_manager.create_user(
#         email='a@gmail.com',
#         name='a',
#         user_name='b',
#         password='123',
#     )

#     print("User created successfully:", user)
# create_user_manually()
# ----------------------------

category_action = Category.objects.create(name="Action")
category_adventure = Category.objects.create(name="Adventure")
category_rpg = Category.objects.create(name="RPG")
category_strategy = Category.objects.create(name="Strategy")
category_FPS = Category.objects.create(name="FPS")
category_sports = Category.objects.create(name="sports")
category_survival = Category.objects.create(name="survival")


# Display Games

# Game1----------------------------------
# Baldur_Gate = Game.objects.create(name= "Baldur's Gate", price= 150.00, description= "Baldur’s Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale", picture_url= "https://cdn.guidestash.com/wp-content/uploads/2020/10/02121353/Baldurs-Gate-3-Character-Elf-01.jpg")

# Baldur_Gate.categories.add(category_adventure, category_rpg, category_strategy)
# Baldur_Gate.save()

# Game2--------------------------------
# STAR_WARS_Jedi = Game.objects.create(name= "STAR WARS Jedi: Survivor", price= 120.00, description= "he story of Cal Kestis continues in Star Wars Jedi: Survivor™, a third-person, galaxy-spanning, action-adventure game from Respawn Entertainment, developed in collaboration with Lucasfilm Games. This narratively driven, single-player title picks up 5 years after the events of Star Wars Jedi: Fallen Order™ and follows Cal’s increasingly desperate fight as the galaxy descends further into darkness.", picture_url= "https://cdn.akamai.steamstatic.com/steam/apps/1774580/header.jpg?t=1701206599")

# STAR_WARS_Jedi.categories.add(category_adventure, category_action)
# STAR_WARS_Jedi.save()

# Game3--------------------------------
# Subnautica = Game.objects.create(name= "Subnautica", price= 60.00, description= "You have crash-landed on an alien ocean world, and the only way to go is down. Subnautica's oceans range from sun drenched shallow coral reefs to treacherous deep-sea trenches, lava fields, and bio-luminescent underwater rivers.", picture_url= "https://cdn.akamai.steamstatic.com/steam/apps/264710/header.jpg?t=1700522118")

# Subnautica.categories.add(category_adventure, category_survival)
# Subnautica.save()

# Game4--------------------------------
# Apex_Legends = Game.objects.create(name="Apex Legends", price=00.00, description="Conquer with character in Apex Legends, a free-to-play Hero shooter where legendary characters with powerful abilities team up to battle for fame & fortune on the fringes of the Frontier.",
#                                    picture_url="https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg?t=1706735551")

# Apex_Legends.categories.add(category_adventure, category_FPS)
# Apex_Legends.save()

# Game5--------------------------------
# Palworld = Game.objects.create(name= "Palworld", price= 100.00, description= "In this game, you can peacefully live alongside mysterious creatures known as Pals or risk your life to drive off a ruthless poaching syndicate.Pals can be used to fight, or they can be made to work on farms or factories.You can even sell them or eat them!", picture_url= "https://cdn.akamai.steamstatic.com/steam/apps/1623730/header.jpg?t=1705662211")
# Palworld.categories.add(category_adventure, category_action, category_rpg, category_survival)
# Palworld.save()

# Game6--------------------------------
# EA_SPORTS_FIFA_23 = Game.objects.create(name="EA SPORTS™ FIFA 23", price=110.00, description="Experience the pinnacle of women’s international football in EA SPORTS™ FIFA 23 with the FIFA Women’s World Cup Australia and New Zealand 2023™ available on June 27th at no additional cost*.",
#                                         picture_url="https://cdn.akamai.steamstatic.com/steam/apps/1811260/header.jpg?t=1704287288")

# EA_SPORTS_FIFA_23.categories.add(category_sports)
# EA_SPORTS_FIFA_23.save()
# Game7----------------------------------
# Age_of_Empires_IV = Game.objects.create(name= "Age of Empires IV", price= 150.00, description= "An evolved real-time strategy game to the next level in this celebratory new version that includes a host of free new content such as brand-new civilizations, new maps, additional in-game updates and languages, and new masteries, challenges", picture_url= "https://cdn.akamai.steamstatic.com/steam/apps/1466860/header.jpg?t=1702338967")

# Age_of_Empires_IV.categories.add(category_strategy)
# Age_of_Empires_IV.save()
# Game8----------------------------------
# Enshrouded = Game.objects.create(name= "Enshrouded", price= 119.00, description= "You are Flameborn, last ember of hope of a dying race. Awaken, survive the terror of a corrupting fog, and reclaim the lost beauty of your kingdom.", picture_url= "https://cdn.akamai.steamstatic.com/steam/apps/1203620/header.jpg?t=1706888044")

# Enshrouded.categories.add(category_survival)
# Enshrouded.save()
# Game9----------------------------------
# Cyberpunk_2077 = Game.objects.create(name="Cyberpunk 2077", price=219.00, description="Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.",
#                                      picture_url="https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg?t=1706698946")

# Cyberpunk_2077.categories.add(category_adventure, category_action)
# Cyberpunk_2077.save()
# # Game10----------------------------------
# Counter_Strike_2 = Game.objects.create(name="Counter-Strike 2", price=00.00, description="For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2.",
#                                      picture_url="https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1698860631")

# Counter_Strike_2.categories.add(category_FPS, category_action)
# Counter_Strike_2.save()
# print("Game created succesfully")
# # Game11----------------------------------
# TEKKEN_8 = Game.objects.create(name="TEKKEN 8", price=200.00, description="Get ready for the next chapter in the legendary fighting game franchise, TEKKEN 8.",
#                                      picture_url="https://cdn.akamai.steamstatic.com/steam/apps/1778820/header_alt_assets_3.jpg?t=1707465369")

# TEKKEN_8.categories.add(category_action)
# TEKKEN_8.save()
# print("Game created succesfully")
# Game12----------------------------------
# ELDEN_RING = Game.objects.create(name="ELDEN RING", price=220.00, description="THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
#                                      picture_url="https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg?t=1700164457")

# ELDEN_RING.categories.add(category_rpg)
# ELDEN_RING.save()
# print("Game created succesfully")
# Game13----------------------------------
# ELDEN_RING = Game.objects.create(name="ELDEN RING", price=220.00, description="THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
#                                      picture_url="https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg?t=1700164457")

# ELDEN_RING.categories.add(category_rpg)
# ELDEN_RING.save()
# print("Game created succesfully")