from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Providers(models.Model):
	created = models.DateTimeField(auto_now_add=True)
	providerName = models.CharField(max_length=40)
	provider = models.CharField(max_length=40)
	cpu = models.IntegerField()
	ram = models.IntegerField()
	disco = models.IntegerField()
	price = models.FloatField()

	class Meta:
		ordering = ('price',)