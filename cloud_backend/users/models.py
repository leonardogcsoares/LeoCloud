from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Users(models.Model):
	created = models.DateTimeField(auto_now_add=True)
	username = models.TextField(primary_key=True)
	password = models.TextField()

	class Meta:
		ordering = ('created',)