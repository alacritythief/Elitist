from django.http import HttpResponse
from django.contrib import messages
from django.shortcuts import render, get_object_or_404, render_to_response, redirect

# Create your views here.

def index(request):
    context_dict = {}
    return render(request, 'app/index.html', context_dict)
