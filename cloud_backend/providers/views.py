from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from providers.models import Providers
from providers.serializers import ProvidersSerializer

# Create your views here.
@api_view(['GET', 'POST'])
def providers_list(request):
    """
    List all code providers, or create a new snippet.
    """
    if request.method == 'GET':
        providers = Providers.objects.all()
        serializer = ProvidersSerializer(providers, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProvidersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(('GET',))
# def api_root(request, format=None):
#     return Response({
#         'providers': reverse('providers-list', request=request, format=format)
#     })