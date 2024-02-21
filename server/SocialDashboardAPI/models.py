from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.TextField()
    description = models.TextField()
    likes = models.IntegerField(default=0)
    comments = models.IntegerField(default=0)
    shares = models.IntegerField(default=0)

    def __str__(self):
        return (self.title + "\n" + self.description)
    