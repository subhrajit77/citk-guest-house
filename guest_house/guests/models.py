from django.db import models

# Create your models here.

class Guest(models.Model):
    name = models.CharField(max_length=140)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    address = models.TextField()
    designation = models.CharField(max_length=140)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
