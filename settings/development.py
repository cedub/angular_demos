import os

from settings.common import *

# Import Any Apps that have static content using non-standard static directories
from apps import core


# Django settings for motiv8_django project in development.

DEBUG = True
TEMPLATE_DEBUG = DEBUG

WSGI_APPLICATION = 'wsgi.development.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2', # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.
        'NAME': 'angular_scaffold',                      # Or path to database file if using sqlite3.
        'USER': 'meodog',
        'PASSWORD': 'meo123',
        'HOST': 'localhost',                      # Empty for localhost through domain sockets or '127.0.0.1' for localhost through TCP.
        'PORT': '',                      # Set to empty string for default.
    }
}

DATABASES['default']['NAME'] = '{0}_{1}'.format(DATABASES['default']['NAME'], os.environ["LOGNAME"])

STATICFILES_DIRS = (
    '{0}/static_build/'.format(core.__path__[0]),
)
