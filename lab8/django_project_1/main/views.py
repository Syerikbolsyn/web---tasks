from django.shortcuts import render

# Create your views here.
from .models import Task

def index(request):
    tasks = Task.objects.all()
    return render(request,'main\main.html',{'title':'main page of site', 'tasks': tasks})

def about(request):
    return render(request,'main/about.html')
