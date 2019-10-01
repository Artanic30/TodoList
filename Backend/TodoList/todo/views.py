from .models import Events
from .serializers import EventsSerializers
from rest_framework import viewsets, status
from rest_framework.mixins import ListModelMixin, CreateModelMixin, UpdateModelMixin, DestroyModelMixin
from rest_framework.decorators import list_route
from rest_framework.response import Response
# Create your views here.


class EventsViewSet(viewsets.GenericViewSet,
                    ListModelMixin,
                    CreateModelMixin,
                    UpdateModelMixin,
                    DestroyModelMixin):
    serializer_class = EventsSerializers
    queryset = Events.objects.all()

    def get_queryset(self):
        # The order of id is the order of created time of events
        return self.queryset.filter(is_done=False).order_by('id')

    @list_route(methods=['get'])
    def history(self, request):
        # return the resolved events
        return Response(self.serializer_class(self.queryset.filter(is_done=True).order_by('id'), many=True).data, status=status.HTTP_200_OK)
