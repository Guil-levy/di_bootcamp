from django.urls import path
from .views import UserGameListView, UserGameDetailView, PurchaseGameView

urlpatterns = [
    path('usergames/', UserGameListView.as_view(), name='user-game-list'),
    path('usergames/<int:pk>/', UserGameDetailView.as_view(), name='user-game-detail'),
    path('purchase/', PurchaseGameView.as_view(), name='purchase-game'),
]
