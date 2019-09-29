from django.db import models

# Create your models here.


class Events(models.Model):
    title = models.CharField(max_length=60, unique=True)
    priority = models.IntegerField(default=0)
    detail = models.TextField(max_length=300)
    expire_time = models.DateTimeField()
    done = models.BooleanField()
