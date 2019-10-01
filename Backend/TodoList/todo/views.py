from .models import Events
from .serializers import EventsSerializers
from rest_framework import viewsets
from rest_framework.mixins import ListModelMixin, CreateModelMixin, UpdateModelMixin, DestroyModelMixin
# Create your views here.


class EventsViewSet(viewsets.GenericViewSet, ListModelMixin, CreateModelMixin, UpdateModelMixin, DestroyModelMixin):
    serializer_class = EventsSerializers
    queryset = Events.objects.all()
