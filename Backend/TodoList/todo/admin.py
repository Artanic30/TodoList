from django.contrib import admin
from .models import Events
# Register your models here.


class EventInfo(admin.ModelAdmin):
    list_display = ('title', 'detail', 'is_done', 'expire_time', 'priority')


admin.site.register(Events, EventInfo)
