"""
URL configuration for django_react_proj project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path, re_path
from main_app import views
from django.conf import settings
from django.conf.urls.static import static
from users import urls as user_urls
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
 path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),
    re_path(r'^api/usersq/(\d+)/$', views.users_detail),
    re_path(r'^api/usersq/$', views.users_list),
    re_path(r'^api/songs/$', views.songs_list),
    re_path(r'^api/albums/$', views.albums_list),
    re_path(r'^api/albums/(\d+)/$', views.album_detail),
    re_path(r'^api/albums/(\d+)/songs/$', views.songs_list_from_album),
    re_path(r'^api/artists/$', views.artists_list),
    re_path(r'^api/artists/(\d+)/$', views.artist_detail),
    re_path(r'^api/artists/(\d+)/songs/$', views.songs_list_from_artist),
    re_path(r'^api/genres/$', views.genres_list),
    re_path(r'^api/genres/(\d+)/$', views.genre_detail),
    re_path(r'^api/genres/(\d+)/songs/$', views.songs_list_from_genre),
    re_path(r'^api/playlists/$', views.play_list),
    re_path(r'^api/playlists/(\d+)/$', views.playlist_detail),
    

    # Token Authentication
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    # Users App
    path('api/users/', include(user_urls)),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)