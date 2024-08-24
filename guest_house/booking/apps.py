from django.apps import AppConfig
from django.db.models.signals import pre_save, m2m_changed, post_save

class BookingConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "booking"

    def ready(self):
        from . import signals
        from .models import Booking

        post_save.connect(signals.booking_confirmed, sender=Booking)
