from django.contrib import admin
from .models import Post
from .models import ScheduledPost

class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'likes', 'comments', 'shares')

class ScheduledPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')

# Register your models here.

admin.site.register(Post, PostAdmin)
admin.site.register(ScheduledPost, ScheduledPostAdmin)