from django.core.mail import send_mail
from dotenv import load_dotenv
import os

load_dotenv()

def send_confirmation_mail(booking):
    user = booking.user
    subject = "Booking Confirmation"
    message = f"Hi {user.first_name}, your booking has been confirmed."
    to = [user.email]
    send_mail(subject, message, from_email=None, recipient_list=to)
