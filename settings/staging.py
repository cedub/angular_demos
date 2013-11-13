from settings.common import *

from apps import core


DEBUG = True
TEMPLATE_DEBUG = DEBUG

WSGI_APPLICATION = 'wsgi.staging.application'

STATICFILES_DIRS = (
    '{0}/static_bin/'.format(core.__path__[0]),
)

TEMPLATE_DIRS = (
    '{0}/static_bin/'.format(core.__path__[0]),
)
