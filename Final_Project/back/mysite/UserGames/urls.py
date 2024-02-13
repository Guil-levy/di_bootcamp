from django.urls import path
from .views import UserGameListView, UserGameDetailView

urlpatterns = [
    path('usergames/', UserGameListView.as_view(), name='usergame-list'),
    path('usergames/<int:pk>/', UserGameDetailView.as_view(), name='usergame-detail'),
]
