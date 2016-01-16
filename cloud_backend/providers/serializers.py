from rest_framework import serializers
from providers.models import Providers

class ProvidersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Providers
        fields = ('created', 'providerName', 'provider', 'cpu', 'ram', 'disco', 'price')