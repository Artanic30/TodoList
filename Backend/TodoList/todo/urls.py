from rest_framework.routers import SimpleRouter
from . import views

router = SimpleRouter()

router.register(r'', views.EventsViewSet, base_name='events')

urlpatterns = router.urls
