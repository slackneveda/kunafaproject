from django.shortcuts import render

# Create your views her
from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework import generics


class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserUpdate(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDelete(generics.DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

