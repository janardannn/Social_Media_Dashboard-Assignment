from rest_framework import serializers
from .models import Post
from .models import ScheduledPost

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'description', 'likes', 'comments', 'shares')

class ScheduledPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScheduledPost
        fields = ('id', 'title', 'description')