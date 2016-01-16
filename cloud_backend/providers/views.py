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

    elif request.method == 'DELETE':
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['DELETE'])
def provider_detail(request, pk):
    """
    Delete a snippet instance.
    """

    try:
        snippet = Snippet.objects.get(pk=pk)
    except Snippet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    try:
        provider = Providers.objects.get(pk=pk)
    except Providers.DoesNotExist:
        return HttpResponse(status=404)

    try:
        snippet = Providers.objects.get(pk=pk)
    except Providers.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)


# @api_view(('GET',))
# def api_root(request, format=None):
#     return Response({
#         'providers': reverse('providers-list', request=request, format=format)
#     })