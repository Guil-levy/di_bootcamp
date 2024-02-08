# from django.contrib.auth.models import User
# from django.contrib.auth import authenticate, login
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework import status

# @api_view(['POST'])
# def register(request):
#     username = request.data.get('username')
#     password = request.data.get('password')
#     email = request.data.get('email')
#     if not (username and password and email):
#         return Response({'error': 'Missing information'}, status=status.HTTP_400_BAD_REQUEST)

#     if User.objects.filter(username=username).exists():
#         return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

#     user = User.objects.create_user(username=username, password=password, email=email)
#     return Response({'success': 'User created successfully'}, status=status.HTTP_201_CREATED)

# @api_view(['POST'])
# def login_view(request):
#     username = request.data.get('username')
#     password = request.data.get('password')
#     user = authenticate(request, username=username, password=password)
#     if user is not None:
#         login(request, user)
#         return Response({'success': 'User logged in successfully'})
#     else:
#         return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)