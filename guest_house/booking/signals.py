from .models import Booking
from django.core.signals import request_finished

# from django.dispatch import receiver
from django.db.models.signals import m2m_changed, post_save, pre_save, pre_delete
from . import mail_utils

# @receiver(request_finished)
# def my_callback(sender, **kwargs):
#     print("Request finished!", sender, "--", kwargs)




def booking_confirmed(sender, instance, created, signal, **kwargs):
    if not created:

        if instance.status == "confirmed":
            user_has_confirmed = sender.objects.filter(
                user=instance.user, status="confirmed", id=instance.id
            ).exists()
            if user_has_confirmed:
                print("Booking kinda confirmed for ", instance.user)
            # mail_utils.send_confirmation_mail(instance)
