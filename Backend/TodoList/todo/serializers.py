from rest_framework import serializers
from .models import Events
import datetime
import django.utils.timezone as timezone


class EventsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = '__all__'

    def create(self, validated_data):
        # check if the expire_time is already passed
        expire_time = validated_data.get('expire_time')
        if expire_time <= timezone.now():
            raise serializers.ValidationError('Expire time must be in the future!')
        event = Events.objects.create(**validated_data)
        event.save()
        return event

    def update(self, instance, validated_data):
        # check if the expire_time is already passed
        expire_time = validated_data.get('expire_time')
        if expire_time <= timezone.now():
            raise serializers.ValidationError('Expire time must be in the future!')
        instance = validated_data
        instance.save()
        return instance
