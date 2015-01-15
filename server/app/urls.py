from django.conf.urls import patterns, url
from app import views

# URLs that are combined with the dj_base urls.py

urlpatterns = [
    url(r'^$', views.index, name='index'),
]
