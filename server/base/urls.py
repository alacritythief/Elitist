from .settings import MEDIA_ROOT, STATIC_ROOT
from django.conf.urls import url, include, patterns
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include('app.urls')),
    url(r'^', include('social.apps.django_app.urls', namespace='social')),
    url(r'^login/$', 'socialauth.views.login'),
    url(r'^logout/$', 'socialauth.views.logout'),
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': MEDIA_ROOT}),
    url(r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': STATIC_ROOT}),
]
