from django.http import JsonResponse

def logout(request):
    try:
        # Clear session data
        request.session.flush()

        response = JsonResponse({'message': 'Logout successful'})

        # Delete sessionid cookie
        if 'sessionid' in request.COOKIES:
            response.delete_cookie('sessionid')
        
        return response
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
