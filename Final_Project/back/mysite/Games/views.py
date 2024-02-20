from django.http import JsonResponse
from .models import Game

def game_list(request):
    games = Game.objects.all()
    data = [{"game_id": game.id, 'name': game.name, 'price': str(game.price), 'description': game.description, 'picture_url': game.picture_url} for game in games]
    print("games", data[0])
    return JsonResponse(data, safe=False)
    

def game_detail(request, game_id):
    game = Game.objects.get(pk=game_id)
    data = {'name': game.name, 'price': str(game.price), 'description': game.description, 'picture_url': game.picture_url}
    return JsonResponse(data)

def games_by_category(request, category_id):
    games = Game.objects.filter(categories__id=category_id)
    data = [{'name': game.name, 'price': str(game.price), 'description': game.description, 'picture_url': game.picture_url} for game in games]
    return JsonResponse(data, safe=False)
