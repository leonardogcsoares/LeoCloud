from django.conf.urls import url
from users import views
from rest_framework_nested import routers

from authentication.views import AccountViewSet

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)


urlpatterns = [
	url(r'^api/v1/', include(router.urls)),
    url('^.*$', IndexView.as_view(), name='index'),
	url(r'^api/v1/auth/login/$', LoginView.as_view(), name='login'),
	# url(r'^users/$', views.providers_list),
	# url(r'^providers/(?P<pk>[0-9]+)/$', views.provider_detail),
]