from django.contrib import admin
from .models import Footer_text
from .models import Footer_contacts
from .models import Item
from .models import Order

admin.site.register(Footer_text)
admin.site.register(Footer_contacts)
admin.site.register(Item)
admin.site.register(Order)