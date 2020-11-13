from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.apiOverView, name="api-overview")
]
