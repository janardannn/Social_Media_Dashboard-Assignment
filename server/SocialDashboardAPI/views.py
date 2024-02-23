import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PostSerializer
from .models import Post
from .models import ScheduledPost

# Create your views here.

class PostView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

class ScheduledPostView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = ScheduledPost.objects.all()

@csrf_exempt
def add_scheduled_post(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            title = data['title']
            description = data['description']
            scheduled_post = ScheduledPost(title=title, description=description)
            scheduled_post.save()
            return JsonResponse({'message': 'Scheduled post created successfully!'}, status=200)
        except Exception as e:
            return JsonResponse({'error': 'Missing required fields'}, status=400)
    else:
        return JsonResponse({'message': 'Invalid request method!'}, status=400)

@csrf_exempt
def home(request):
    return JsonResponse({'message': 'API up and running!'}, status=200)