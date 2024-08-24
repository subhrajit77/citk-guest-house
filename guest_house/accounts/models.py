from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager

class CustomUserManager(UserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email, password, **extra_fields)

class User(AbstractUser):
    designation_options = [
        ("Admin", "Admin"),
        ("User", "User"),
        ("Staff", "Staff"),
        ("HOD", "HOD"),
    ]
    username = models.CharField(max_length=150, null=True, blank=True)
    email = models.EmailField(max_length=254, unique=True)
    designation = models.CharField(
        max_length=100,
        blank=True,
        null=True,
        choices=designation_options,
        default="User",
    )

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["password", "first_name"]

    def __str__(self):
        return f"{self.first_name} - {self.designation}"
    objects = CustomUserManager()

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"

    # db_table = "auth_user"
