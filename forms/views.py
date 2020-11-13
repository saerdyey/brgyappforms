from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.


def apiOverView(request):
    return JsonResponse("API BASE POINT", safe=False)
