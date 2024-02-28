from django.http import JsonResponse

# Delete sessionid cookie
def logout(request):
    try:
        request.session.flush()

        response = JsonResponse({'message': 'Logout successful'})
      
        if 'sessionid' in request.COOKIES:
            response.delete_cookie('sessionid')
        
        return response
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
