from django.db import models


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
        ("Self", "Self")
    )

    ROOM_CHOICES = (
        ("Single", "Single"),
        ("Double", "Double")
    )

    status = models.CharField(
        max_length=12, choices=STATUS_CHOICES, default=status_pending
    )
    arrival_date = models.DateField()
    arrival_time = models.TimeField()
    departure_date = models.DateField()
    departure_time = models.TimeField()
    purpose_of_visit = models.TextField(default="")

    # (when the booking was made)
    created = models.DateTimeField(auto_now_add=True)
    num_guests = models.PositiveIntegerField(default=1)
    room_type = models.CharField(
        max_length=10, choices=ROOM_CHOICES, default="Single")
    payment_source = models.CharField(
        max_length=30, choices=PAYMENT_CHOICES, default="Self")
    project_no = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"{self.room} - {self.check_in}"

    def in_progress(self):
        now = timezone.now().date()
        return self.check_in <= now <= self.check_out and self.status == "confirmed"

    # in_progress.boolean = True

    def is_finished(self):
        now = timezone.now().date()
        return now > self.check_out

    is_finished.boolean = True

    # def save(self, *args, **kwargs):
    #     if self.pk is None:
    #         start = self.check_in
    #         end = self.check_out
    #         difference = end - start

    #         existing_booked_day = BookedDay.objects.filter(
    #             day__range=(start, end), reservation__room=self.room
    #         ).exists()

    #         if not existing_booked_day:
    #             super().save(*args, **kwargs)
    #             for i in range(difference.days + 1):
    #                 day = start + timedelta(days=i)
    #                 BookedDay.objects.create(day=day, reservation=self)
    #             return
    #     return super().save(*args, **kwargs)
