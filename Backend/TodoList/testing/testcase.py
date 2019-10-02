from django.test import TestCase as DjangoTestCase
from django.contrib.auth.models import User
from todo.models import Events
from datetime import datetime
import django.utils.timezone as timezone
from django.forms.models import model_to_dict


class TestCase(DjangoTestCase):

    def createUser(self, username):
        user = User.objects.create(username=username, password=username + 'password')
        user.save()
        return user

    def createEvents(self):
        result = {
            'ongoing': [],
            'history': []
        }
        for i in range(4):
            event = Events.objects.create(
                title='test_event_' + str(i),
                detail='test_detail_' + str(i),
                priority=i,
                expire_time=datetime.now().replace(year=datetime.now().year + 1, tzinfo=timezone.utc),
                is_done=True if i % 2 == 0 else False
            )
            event.save()
            result['history' if i % 2 == 0 else 'ongoing'].append(event)
        return result

    def createDate(self, time='future'):
        date = datetime.now().replace(
            year=datetime.now().year + (1 if time == 'future' else - 1),
            tzinfo=timezone.utc)
        return date
