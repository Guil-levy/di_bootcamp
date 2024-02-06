from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import UserAccount


class CustomUserAdmin(UserAdmin):
    model = UserAccount
    list_display = ['email', 'name', 'user_name',
                    'is_active', 'is_staff', 'is_superuser']
    search_fields = ['email', 'name', 'user_name']
    ordering = ['email']


admin.site.register(UserAccount, CustomUserAdmin)
