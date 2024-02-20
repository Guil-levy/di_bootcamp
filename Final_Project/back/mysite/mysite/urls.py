
from django.contrib import admin
from django.urls import path, include, re_path
from core.views import index
from django.views.generic import TemplateView

urlpatterns = [
    path("", index, name="index"),
    path('admin/', admin.site.urls),
    path('User/', include('djoser.urls')),
    path('User/', include('djoser.urls.jwt')), 
    path('User/', include('User.urls')),  
    path('games/', include('Games.urls')),
    path('UserGames/', include('UserGames.urls')),
    path('auth/', include('CustomAuth.urls')),
]

urlpatterns += [
    re_path(r'^.*', TemplateView.as_view(template_name='index.html'))
]
