from django.test import TestCase
from providers.models import Providers
from providers.views import providers_list

# Create your tests here.
class ProvidersTestCase(TestCase):
	def createProviders(self):
		Providers.objects.create(providerName="t2.aws11", provider="aws", cpu=4, ram=6, disco=100, price=0.3342)
		Providers.objects.create(providerName="g1.ggl11", provider="google", cpu=8, ram=4, disco=200, price=0.6552)
		providersList = []
		providersList.push(Providers.objects.get(providerName="t2.aws11"))
		providersList.push(Providers.objects.get(providerName="g1.ggl11"))
		return providersList
		
