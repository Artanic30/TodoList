from .models import Events
from django.shortcuts import get_object_or_404
from .serializers import EventsSerializers
from rest_framework.response import Response
from rest_framework import viewsets, status
from rest_framework.decorators import detail_route
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

    @detail_route(methods=['post'])
    def test(self, request, pk=None):
        print 23333
        event = get_object_or_404(Events, id=pk)
        print event.title
        update_data = {
            'title': 'sadasd',
            'detail': 'sadasd',
            'expire_time': 'sadasd',
            'is_done': 'sadasd',
            'priority': 'sadasd'
        }
        print update_data
        se_event = self.serializers(event, data=update_data, partial=True)
        test_valid(se_event)
        return Response({'msg': 'p_update function!'}, status=status.HTTP_200_OK)


def test_valid(serializer):
    if serializer.is_valid(raise_exception=True):
        serializer.save()
    else:
        print 400400
        Response({'msg': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
