from django.conf.urls import url
from users import views

urlpatterns = [

	url(r'^users/$', views.users_post),
	url(r'^users/(?P<pk>[0-9]+)/$', views.user_detail),
]