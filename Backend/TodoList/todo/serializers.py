from rest_framework import serializers
from .models import Events
from datetime import datetime
import django.utils.timezone as timezone


class EventsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = '__all__'
        read_only_fields = ['id']

    @staticmethod
    def validate_expire_time(value):
        if value.replace(tzinfo=None) < datetime.now():
            raise serializers.ValidationError('Expire time must be in the future!')
        return value

