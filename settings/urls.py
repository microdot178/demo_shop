from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('shop.urls')),
    path("logout/", auth_views.LogoutView.as_view(next_page='/'), name="logout"),
    path('social-auth/', include('social_django.urls', namespace="social")),
]