from django.conf.urls import url
from providers import views

urlpatterns = [
	url(r'^providers/$', views.providers_list),
]