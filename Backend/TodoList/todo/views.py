from .models import Events
from .serializers import EventsSerializers
from rest_framework.response import Response
from rest_framework import viewsets, status
from rest_framework.decorators import action
# Create your views here.


class EventsViewSet(viewsets.ViewSet):
    serializers = EventsSerializers

    def list(self, request):
        total_events = self.serializers(Events.objects.all(), many=True)
        return Response(total_events.data, status=status.HTTP_200_OK)

    def create(self, request):
        title = request.POST.get('title')
        detail = request.POST.get('detail')
        expire_time = request.POST.get('expire_time')
        event = self.serializers(data={
            'title': title,
            'detail': detail,
            'expire_time': expire_time
        })
        test_valid(event)
        return Response({'msg': 'Event is created successfully!'}, status=status.HTTP_200_OK)



def test_valid(serializer):
    if serializer.is_valid(raise_exception=True):
        serializer.save()
    else:
        Response({'msg': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
