from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import FormSerializer
from .models import Form

# Create your views here.


@api_view(['GET'])
def apiOverview(request):

    api_urls = {
        'List': '/appform-list/',
        'Detail-View': '/appform-detail/<str:pk>',
        'Create': '/appform-create/',
        'Update': '/appform-update/<str:pk>',
        'Delete': '/appform-delete/<str:pk>',
    }

    return Response(api_urls)


@api_view(['GET'])
def formList(request):
    forms = Form.objects.all()
    serializer = FormSerializer(forms, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def formDetail(request, pk):
    forms = Form.objects.get(id=pk)
    serializer = FormSerializer(forms, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def formCreate(request):
    serializer = FormSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['POST'])
def formUpdate(request, pk):
    form = Form.objects.get(id=pk)
    serializer = FormSerializer(instance=form, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['DELETE'])
def formDelete(request, pk):
    form = Form.objects.get(id=pk)

    form.delete()

    return Response("Item succesfully deleted!")
