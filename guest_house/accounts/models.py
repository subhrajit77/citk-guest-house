from django.db import models
from django.contrib.auth.models import User


class InheritedUser(User):
    designation_options = [
        ("Admin", "Admin"),
        ("User", "User"),
        ("Staff", "Staff"),
        ("HOD", "HOD")
    ]
    # is_staff = models.BooleanField(default=False)
    # is_active = models.BooleanField(default=True)
    # is_superuser = models.BooleanField(default=False)
    # email = models.EmailField(max_length=254)
    designation = models.CharField(
        max_length=100, blank=True, null=True, choices=designation_options)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "password"]
    objects = models.Manager()

    def __str__(self):
        return f"{self.name} - {self.designation}"

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
        # db_table = "auth_user"
