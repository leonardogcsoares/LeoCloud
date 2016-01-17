"""
WSGI config for cloud_backend project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.9/howto/deployment/wsgi/
"""

import os
import sys

sys.path.insert(0, '/opt/python/current/app/cloud_backend')

from django.core.wsgi import get_wsgi_application

os.environ['DJANGO_SETTINGS_MODULE'] = 'cloud_backend.settings'

application = get_wsgi_application()
