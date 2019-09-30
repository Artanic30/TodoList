from rest_framework import serializers
from .models import Events
import datetime
import django.utils.timezone as timezone


class EventsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = '__all__'
        read_only_fields = ['id']

    @staticmethod
    def validate_title(self, value):
        if value <= timezone.now():
            raise serializers.ValidationError('Expire time must be in the future!')
        return value

