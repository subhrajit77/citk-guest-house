# create url for department
from django.urls import path, include
from rest_framework import routers
from .views import DepartmentViewSet

router = routers.DefaultRouter()
router.register("", DepartmentViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
