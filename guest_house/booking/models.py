from django.db import models
from accounts.models import User


class Guest(models.Model):
    guest_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=140)
    email = models.EmailField(null=True)
    phone_number = models.CharField(max_length=15)
    address = models.TextField()
    designation = models.CharField(max_length=140)
    created = models.DateTimeField(auto_now_add=True)


class Booking(models.Model):
    status_pending = "pending"
    status_confirmed = "confirmed"
    status_canceled = "canceled"

    STATUS_CHOICES = (
        (status_pending, "Pending"),
        (status_confirmed, "Confirmed"),
        (status_canceled, "Canceled"),
    )

    PAYMENT_CHOICES = (
        ("Department", "Department"),
        ("Project", "Project"),
        ("Self", "Self"),
    )

    ROOM_CHOICES = (("Single", "Single"), ("Double", "Double"))

    status = models.CharField(
        max_length=12, choices=STATUS_CHOICES, default=status_pending
    )
    booking_id = models.AutoField(primary_key=True)
    guests = models.ManyToManyField(Guest)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    arrival_date = models.DateField()
    arrival_time = models.TimeField()
    departure_date = models.DateField()
    departure_time = models.TimeField()
    purpose_of_visit = models.TextField(default="", null=True)

    created = models.DateTimeField(auto_now_add=True)
    room_type = models.CharField(max_length=10, choices=ROOM_CHOICES, default="Single")
    payment_source = models.CharField(
        max_length=30, choices=PAYMENT_CHOICES, default="Self"
    )
    project_no = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"{self.user}, Room Type: {self.room_type}, Status: {self.status}"

    def in_progress(self):
        now = timezone.now().date()
        return self.check_in <= now <= self.check_out and self.status == "confirmed"
