from django.shortcuts import render
from django.views.generic.base import View
from django.conf import settings


class Index(View):
    def get(self, request):
        return render(request, 'core/index.html')