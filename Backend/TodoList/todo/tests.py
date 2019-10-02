from testing.testcase import TestCase
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
        for pk in range(len(response.data['results'])):
            self.assertEqual(response.data['results'][pk], EventsSerializers(self.events['ongoing'][pk]).data)

    def test_post_events(self):
        url = '/api/'
        client = APIClient(enforce_csrf_checks=True)
        bad_data = {
            'title': 'test_title',
            'detail': 'test-detail',
            'is_done': False,
            'priority': 0,
            'expire_time': self.createDate('post')
        }
        response = client.post(url, data=bad_data, decode=True)
        self.assertEqual(response.status_code, 400)
        bad_data = {
            'title': 'test_title',
            'detail': 'test_detail',
            'is_done': False,
            'priority': 'invalid_int',
            'expire_time': self.createDate('future')
        }
        response = client.post(url, data=bad_data, decode=True)
        self.assertEqual(response.status_code, 400)
        data = {
            'title': 'test_title',
            'detail': 'test_detail',
            'is_done': False,
            'priority': 5,
            'expire_time': self.createDate('future')
        }
        response = client.post(url, data=data, decode=True)
        self.assertEqual(response.status_code, 201)

    def test_put_event(self):
        url = '/api/{}/'.format(2)
        client = APIClient(enforce_csrf_checks=True)
        data = {
            'title': 'test_title_updated!',
            'detail': 'test_detail_updated!',
            'is_done': True,
            'priority': 3,
        }
        response = client.put(url, data=data, decode=True)
        self.assertEqual(response.status_code, 400)
        data = {
            'id': 2,
            'title': 'test_title_updated!',
            'detail': 'test_detail_updated!',
            'is_done': False,
            'priority': 3,
            'expire_time': self.createDate('future')
        }
        response = client.put(url, data=data, decode=True)
        self.assertEqual(response.status_code, 200)
        response_get = client.get(url, decode=True)
        self.assertEqual(response_get.data, response.data)

    def test_patch_event(self):
        url = '/api/{}/'.format(2)
        client = APIClient(enforce_csrf_checks=True)
        data = {
            'title': 'partial_updated!'
        }
        response = client.patch(url, data=data, decode=True)
        self.assertEqual(response.status_code, 200)
        response_get = client.get(url, decode=True)
        self.assertEqual(response.data['title'], response_get.data['title'])

    def test_delete_event(self):
        url = '/api/{}/'.format(2)
        client = APIClient(enforce_csrf_checks=True)
        response = client.delete(url, decode=True)
        self.assertEqual(response.status_code, 204)
        response_get = client.get(url, decode=True)
        self.assertEqual(response_get.status_code, 404)

    def test_get_history(self):
        url = '/api/history/'
        client = APIClient(enforce_csrf_checks=True)
        response = client.get(url, decode=True)
        self.assertEqual(response.status_code, 200)
        for pk in range(len(response.data)):
            self.assertEqual(response.data[pk], EventsSerializers(self.events['history'][pk]).data)



