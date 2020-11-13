from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.apiOverview, name="appform-api-overview"),
    path('appform-list/', views.formList, name="appform-list"),
    path('appform-detail/<str:pk>/', views.formDetail, name="appform-detail"),
    path('appform-create/', views.formCreate, name="appform-create"),
    path('appform-update/<str:pk>/', views.formUpdate, name="appform-update"),
    path('appform-delete/<str:pk>/', views.formDelete, name="appform-delete"),
]
