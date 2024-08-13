from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import make_password


class User(AbstractUser):
    designation_options = [
        ("Admin", "Admin"),
        ("User", "User"),
        ("Staff", "Staff"),
        ("HOD", "HOD")
    ]
    username = models.CharField(max_length=150, null=True, blank=True)
    email = models.EmailField(max_length=254, unique=True)
    designation = models.CharField(
        max_length=100, blank=True, null=True, choices=designation_options)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "password", "first_name"]

    def __str__(self):
        return f"{self.first_name} - {self.designation}"

    def save(self, *args, **kwargs):
        if self.password:
            self.password = make_password(self.password)
            super().save(*args, **kwargs)

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
        # db_table = "auth_user"
