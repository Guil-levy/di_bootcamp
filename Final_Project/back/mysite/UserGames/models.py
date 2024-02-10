from django.db import models
from django.contrib.auth import get_user_model
from User.models import UserAccount
from Games.models import Game

User = get_user_model()

class UserGame(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user.username}'s {self.game.name}"


