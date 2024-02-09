
from django.contrib import admin
from django.urls import path, include, re_path
from api.views import book
from core.views import index
from django.views.generic import TemplateView

urlpatterns = [
    path("", index, name="index"),
    path("book/", book, name="book"),
    path('admin/', admin.site.urls),
    path('User/', include('djoser.urls')),
    path('User/', include('djoser.urls.jwt')),
    path('games/', include('Games.urls')),
]

urlpatterns += [
    re_path(r'^.*', TemplateView.as_view(template_name='index.html'))
]
