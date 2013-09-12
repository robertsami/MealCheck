from django.conf.urls import patterns, include, url
import views, card_parse
# Uncomment the next two lines to enable the admin:
from django.contrib import admin
from meal_check import settings

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'meal_check.views.home', name='home'),
    # url(r'^meal_check/', include('meal_check.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    #url(r'^parse/(?P<card>.*)/$', views.parse, name='parse'),
    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),

    url(r'^swipe/', include('swipe.urls')),
)
