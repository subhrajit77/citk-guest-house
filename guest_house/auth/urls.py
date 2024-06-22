from . import views
from django.urls import path,include

urlpatterns = [
    path("user/register/", views.CreateUserView.as_view(), name="register"),
    path("", include(views.router.urls), name="user"),
]
