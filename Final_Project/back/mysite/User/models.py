# from django.db import models
# from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# class UserAccountManager(BaseUserManager):
    
#     def __init__(self, *args, **kwargs):
#         super().__init__(*args, **kwargs)
#         self.model = UserAccount  # Set the model attribute to the UserAccount model
#     def get_by_natural_key(self, username):
#         return self.get(username=username)
    
#     def create_user(self, email, name, user_name, password=None):
#         if not email:
#             raise ValueError('Users must have an email address')

#         email = self.normalize_email(email)
#         user = self.model(email=email, name=name, user_name=user_name)

#         user.set_password(password)
#         user.save(using=self._db)

#         return user

#     def create_superuser(self, email, name, user_name, password):
#         user = self.create_user(email=email, name=name, user_name=user_name, password=password)
#         user.is_staff = True
#         user.is_superuser = True
#         user.save(using=self._db)

#         return user

# class UserAccount(AbstractBaseUser, PermissionsMixin):
#     email = models.EmailField(max_length=255, unique=True)
#     name = models.CharField(max_length=255)
#     user_name = models.CharField(max_length=255)
#     is_active = models.BooleanField(default=True)
#     is_staff = models.BooleanField(default=False)
#     is_superuser = models.BooleanField(default=False)

#     USERNAME_FIELD = 'email'
#     objects = None

# # Now that UserAccountManager is defined, we can set the objects attribute of UserAccount
# UserAccount.objects = UserAccountManager()

from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, UserManager

class UserAccountManager(UserManager):
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.model = UserAccount 
        
    def get_by_natural_key(self, username):
        return self.get(username=username)
    
    def create_user(self, email, name, user_name, password=None):
        if not email:
            raise ValueError('User must have an email address')

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
    objects = UserManager()
# UserAccount.objects = UserAccountManager()

# --------------------------
# from django.db import models
# from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# class UserAccount(AbstractBaseUser, PermissionsMixin):
#     email = models.EmailField(max_length=255, unique=True)
#     name = models.CharField(max_length=255)
#     user_name = models.CharField(max_length=255)
#     is_active = models.BooleanField(default=True)
#     is_staff = models.BooleanField(default=False)
#     is_superuser = models.BooleanField(default=False)

#     USERNAME_FIELD = 'email'

# class UserAccountManager(BaseUserManager):
    
#     def __init__(self, *args, **kwargs):
#         print("GUILLLLLLLLLLLLLLLL,")
#         super().__init__(*args, **kwargs)
#         self.model = UserAccount  # Set the model attribute to the UserAccount model
    
#     def get_by_natural_key(self, email):
#         return self.get(email= email)
    
#     def create_user(self, email, name, user_name, password=None):
#         if not email:
#             raise ValueError('Users must have an email address')

#         email = self.normalize_email(email)
#         user = self.model(email=email, name=name, user_name=user_name)

#         user.set_password(password)
#         user.save(using=self._db)

#         return user

#     def create_superuser(self, email, name, user_name, password):
#         user = self.create_user(email=email, name=name, user_name=user_name, password=password)
#         user.is_staff = True
#         user.is_superuser = True
#         user.save(using=self._db)

#         return user


