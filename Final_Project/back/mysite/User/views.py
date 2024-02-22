from .models import UserAccount 
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET', 'POST'])
def register(request):
    if request.method == 'POST':
        # Retrieve data from request
        user_name = request.data.get('user_name')
        password = request.data.get('password')
        email = request.data.get('email')
        name = request.data.get('name')

        # Check for missing information
        if not (user_name and password and email and name):
            return Response({'error': 'Missing information'}, status=status.HTTP_400_BAD_REQUEST)

        # Check if username already exists
        if UserAccount.objects.filter(user_name=user_name).exists():
            return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

        # Create user
        user = UserAccount.objects.create_user(user_name=user_name, password=password, email=email, name=name)
        return Response({'success': 'User created successfully'}, status=status.HTTP_201_CREATED)
    else:
        return Response({'error': 'Method Not Allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['GET', 'POST'])
def login_view(request):
    if request.method == 'POST':
        email = request.data.get('email')
        password = request.data.get('password')
        # username= email.split("@")[0]
        # username= request.data.get("name")
        
        print("IN LOGIN VIEW:,", email, password)
        # user = authenticate(request, email=email, username= username, password=password)
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return Response({'success': 'User logged in successfully', "user_name": user.user_name})
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({'error': 'Method Not Allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

def profile_view(request):
    if request.user.is_authenticated:
        user = request.user
        profile_data = {
            'email': user.email,
            'name': user.name,
            'user_name': user.user_name,
            'last_login': user.last_login,
        }
        return JsonResponse(profile_data)
    else:
        return JsonResponse({'error': 'User not authenticated'}, status=401)