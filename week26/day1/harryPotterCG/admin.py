from django.contrib import admin
from .models import User, Card

class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'amount_of_money', 'points']
    search_fields = ['username', 'email']

class CardAdmin(admin.ModelAdmin):
    list_display = ['name_character', 'species', 'house', 'current_owner', 'previous_owner']
    search_fields = ['name_character', 'species', 'house']
    list_filter = ['house', 'current_owner', 'previous_owner']

admin.site.register(User, UserAdmin)
admin.site.register(Card, CardAdmin)
