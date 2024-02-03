
from django.contrib import admin
from django.urls import path
from api.views import book
from core.views import index

urlpatterns = [
    path("", index, name="index"),
    path('admin/', admin.site.urls),
    path("book/", book, name="book"),
]
