from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import UserGame
from .serializer import UserGameSerializer

class UserGameListView(ListAPIView):
    queryset = UserGame.objects.all()
    serializer_class = UserGameSerializer

class UserGameDetailView(RetrieveAPIView):
    queryset = UserGame.objects.all()
    serializer_class = UserGameSerializer
