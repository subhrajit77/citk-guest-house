from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import UserSerializer
from .models import User
from django.http import JsonResponse
from rest_framework import routers, serializers, viewsets, generics
from django.urls import path, include
from django.core.mail import send_mail
import guest_house.mail_utils as utils
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            data = serializer.data
            utils.send_confirmed_mail(
                data["email"], data["first_name"])

            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self, *args, **kwargs):
        if self.request.user.is_staff:
            return User.objects.all()
        else:
            return User.objects.filter(id=self.request.user.id)


class UserView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self, *args, **kwargs):
        return UserSerializer(self.request.user).data

    def get(self, request, *args, **kwargs):
        return JsonResponse(UserSerializer(self.request.user).data)


class CreateToken(TokenObtainPairView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        from datetime import datetime, timedelta

        # set cookies instead of returning json
        response = super().post(request, *args, **kwargs)
        response.set_cookie(
            key="refresh",
            value=response.data["refresh"],
            httponly=True,
            secure=False,
            samesite="None",
            max_age=timedelta(days=5),
        )
        response.set_cookie(
            key="access",
            value=response.data["access"],
            httponly=True,
            secure=False,
            samesite="None",
            max_age=timedelta(days=5),
        )
        response.data = {"message": "success"}
        return response


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
