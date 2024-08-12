from rest_framework import serializers

from .models import Booking, Guest


class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = "__all__"


class BookingSerializer(serializers.ModelSerializer):
    guests = GuestSerializer(many=True)

    class Meta:
        model = Booking
        fields = "__all__"

    def create(self, validated_data):
        guests_data = validated_data.pop('guests')
        guests = [Guest.objects.create(**guest_data)
                  for guest_data in guests_data]
        booking = Booking.objects.create(**validated_data)
        booking.guests.set(guests)
        return booking
