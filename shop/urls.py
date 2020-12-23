from . import views
from shop.views import Index
from shop.views import Items
from django.urls import path

urlpatterns = [
#   path('', Index.as_view()),
    path('', Items.as_view()),
]