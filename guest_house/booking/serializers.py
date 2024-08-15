from .models import Booking, User
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
        # fields = "__all__"
        exclude = ["user"]

    def create(self, validated_data):
        guests_data = validated_data.pop("guests")
        guests = [Guest.objects.create(**guest_data) for guest_data in guests_data]
        if len(guests) == 0:
            raise serializers.ValidationError(
                "Guests cannot be empty. Please provide at least one guest."
            )
        user = self.context["request"].user
        booking = Booking.objects.create(user=user, **validated_data)
        booking.guests.set(guests)
        booking.save()
        return booking
