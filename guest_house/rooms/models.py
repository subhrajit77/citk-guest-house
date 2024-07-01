from django.db import models

ROOM_CHOICES = (
    ("Single", "Single"),
    ("Double", "Double")
)


class Room(models.Model):
    room_no = models.CharField(max_length=10, primary_key=True)
    name = models.CharField(max_length=140)
    room_type = models.CharField(
        max_length=10, choices=ROOM_CHOICES, default="Single")


class RoomAvailability(models.Model):
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    date = models.DateField()
    is_available = models.BooleanField(default=True)
