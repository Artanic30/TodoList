from testing.testcase import TestCase
from django.contrib.auth.models import User
from rest_framework.test import APIClient
from .serializers import EventsSerializers


# Create your tests here.


class EventsTests(TestCase):
    def setUp(self):
        self.user = self.createUser('test_name')
        self.events = self.createEvents()

    def test_get_events(self):
        url = '/api/'
        client = APIClient(enforce_csrf_checks=True)
        response = client.get(url, decode=True)
        self.assertEqual(response.status_code, 200)
        for pk in range(len(response.data)):
            self.assertEqual(response.data[pk], EventsSerializers(self.events['ongoing'][pk]).data)
