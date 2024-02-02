from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import UserManager
import random

# class User(models.Model):
class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    amount_of_money = models.IntegerField(default=1000)
    points = models.IntegerField(default=0)

    objects = UserManager() 
    
    class Meta:
        swappable = 'AUTH_USER_MODEL'
    

class Card(models.Model):
    name_character = models.CharField(max_length=255)
    species = models.CharField(max_length=255)
    house = models.CharField(max_length=255)
    image_url = models.URLField()
    date_of_birth = models.DateField(null=True)
    patronus = models.CharField(max_length=255)
    price = models.IntegerField(default=0)
    xp_points = models.IntegerField(default=0)
    current_owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='current_cards', null=True, blank=True, on_delete=models.SET_NULL)
    previous_owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='previous_cards', null=True, blank=True, on_delete=models.SET_NULL)

    def generate_random_price(self):
        return random.randint(200, 2000)

    def generate_random_xp_points(self):
        return random.randint(1, 10)

    def save(self, *args, **kwargs):
        if not self.price:
            self.price = self.generate_random_price()
        if not self.xp_points:
            self.xp_points = self.generate_random_xp_points()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name_character

User._meta.get_field('groups').related_name = 'user_groups'
User._meta.get_field('user_permissions').related_name = 'user_permissions'