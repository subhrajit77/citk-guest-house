from . import views
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [
    path("user/", views.UserView.as_view(), name="user"),
    path("user/register/", views.CreateUserView.as_view(), name="register"),
    path("user/token/", TokenObtainPairView.as_view(), name="token"),
    path("user/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("", include(views.router.urls), name="user"),
    path("user/create/", views.CreateToken.as_view(), name="create"),
]
