from django.conf.urls import patterns, url

from swipe import views

urlpatterns = patterns('',
    url(r'^$', 'swipe.views.index', name='index'),
    url(r'^verify/$', 'swipe.views.verify', name='verify')
)