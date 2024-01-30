from django.shortcuts import render
from rest_framework import viewsets
from .models import User, Card
from .serializer import UserSerializer, CardSerializer

# User = get_user_model()
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

