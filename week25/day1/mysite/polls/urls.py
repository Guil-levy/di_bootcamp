from django.urls import path
from .migrations import views

urlpatterns = [
    path('hello/', views.hello_world, name='hello_world'),
]