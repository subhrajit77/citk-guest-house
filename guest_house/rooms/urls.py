from rest_framework import routers
from .views import RoomViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register("", RoomViewSet)

urlpatterns = [
    path(
        "",
        include(router.urls),
        name="rooms",
    )
]
