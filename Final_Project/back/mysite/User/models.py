from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserAccountManager(BaseUserManager):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.model = UserAccount 

    def create_user(self, email, name, user_name, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, name=name, user_name=user_name)

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, name, user_name, password):
        user = self.create_user(email=email, name=name, user_name=user_name, password=password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    user_name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    objects = None

UserAccount.objects = UserAccountManager()