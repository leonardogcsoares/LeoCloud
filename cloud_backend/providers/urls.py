from django.conf.urls import url
from providers import views

urlpatterns = [
	url(r'^providers/$', views.providers_list),
	url(r'^providers/(?P<pk>[0-9]+)/$', views.provider_detail),
]