from providers.models import Providers
from providers.serializers import ProvidersSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

provider = Providers(providerName="t2.aws", 
		provider="aws",
		cpu=2,
		ram=4,
		disco=60,
		price=0.0087)
provider.save()

provider = Providers(providerName="g5.ggl", 
		provider="google",
		cpu=1,
		ram=6,
		disco=200,
		price=0.1097)
provider.save()
