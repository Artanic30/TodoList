from django.shortcuts import render
import os
from .settings import BASE_DIR


def react(request):
    return render(request, os.path.join(BASE_DIR, "templates/build/index.html"), locals())
