from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# @api_view(['GET', 'POST'])
# def register(request):
#     if request.method == 'POST':
#         username = request.data.get('username')
#         password = request.data.get('password')
#         email = request.data.get('email')
#         if not (username and password and email):
#             return Response({'error': 'Missing information'}, status=status.HTTP_400_BAD_REQUEST)

#         if User.objects.filter(username=username).exists():
#             return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

#         user = User.objects.create_user(username=username, password=password, email=email)
#         return Response({'success': 'User created successfully'}, status=status.HTTP_201_CREATED)
#     else:
#         return Response({'message': 'This endpoint supports only POST requests'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


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
