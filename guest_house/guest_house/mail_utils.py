from django.core.mail import send_mail
from dotenv import load_dotenv
import os
from typing import List

load_dotenv()

def send_confirmed_mail(email:str, name:str="", files: List = []):
    content = f"Your account has been created successfully {name}"
    send_mail(
        "Account Created",
        content,
        from_email=os.getenv("EMAIL_HOST_USER"),
        recipient_list=[email],
        fail_silently=False,)


# send a mail to hod if booking payment method is by HOD approval, else send a mail to the user
def send_booking_mail(email, name, booking_id, payment_method):
    content = f"Your booking with booking id {
        booking_id} has been successfully created"
    if payment_method == "HOD":

        send_mail(
            "Booking Created",
            content,
            recipient_list=[os.getenv("HOD_EMAIL")],
            fail_silently=False,
        )
    send_mail(
        "Booking Created",
        content,
        recipient_list=[email],
        fail_silently=False,
    )
