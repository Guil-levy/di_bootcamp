from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Game(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    picture_url = models.URLField()
    categories = models.ManyToManyField(Category, related_name='games')

    def __str__(self):
        return self.name
