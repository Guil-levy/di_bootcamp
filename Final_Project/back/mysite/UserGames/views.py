from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import UserGame
from .serializer import UserGameSerializer
from rest_framework.permissions import IsAuthenticated


class UserGameListView(ListAPIView):
    queryset = UserGame.objects.all()
    serializer_class = UserGameSerializer


class UserGameDetailView(RetrieveAPIView):
    queryset = UserGame.objects.all()
    serializer_class = UserGameSerializer


class PurchaseGameView(APIView):
    permission_classes = [IsAuthenticated] 
    def get(self, request, *args, **kwargs):
        print("Retrieve game GAMMMMMMMMMMMMME",request.user)
        # Retrieve the list of games purchased by the current user
        user_games = UserGame.objects.filter(user_id=request.user.id)  # Filter by user_id
        serializer = UserGameSerializer(user_games, many=True)
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        game_id = request.data.get('game_id')
        # print("Purchase", request.data, args)
        if not game_id:
            return Response({'error': 'Game ID is required'}, status=status.HTTP_400_BAD_REQUEST)

        # Assume you have a way to identify the user, for example, through authentication
        user = request.user
        print("Backend user:", user, user.is_authenticated)
        # Create a new UserGame entry associating the game with the user
        try:
            user_game = UserGame.objects.create(user=user, game_id=game_id)
            print("after user_game")
            serializer = UserGameSerializer(user_game)
            print("after after_serializer")
            return Response({'message': 'Game purchased successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
        except Exception as e:
            print("Exception in adding game to user",e)
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
