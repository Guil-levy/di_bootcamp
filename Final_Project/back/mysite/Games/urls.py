from django.urls import path
from . import views

urlpatterns = [
    path('', views.game_list, name='game_list'),
    path('<int:game_id>/', views.game_detail, name='game_detail'),
    path('category/<int:category_id>/', views.games_by_category, name='games_by_category'),
]
