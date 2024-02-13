from rest_framework import serializers
from .models import UserGame

class UserGameSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserGame
        fields = '__all__'
