from . import views
from django.urls import path

urlpatterns = [
    path("user/register/", views.CreateUserView.as_view(), name="register"),
]
