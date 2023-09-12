from django.urls import path
from .views import register_user, login_function
# from . import views

urlpatterns = [
    path('register/', register_user, name='register'),
    # path('login/', UserLogin.as_view(), name='login'),
    path('login/', login_function, name='login'),
    # Add a route for logout if needed
    # path('top-tracks/', views.get_top_tracks, name='get_top_tracks'),
    # path('callback/', views.callback, name='callback'),
    # URL pattern for the create_playlist_form view
    # path("create-playlist/", views.create_playlist_view, name="create-playlist-form"),
    # # URL pattern for the create_playlist_view
    # path("create-playlist-view/", views.create_playlist_view, name="create-playlist-view")
    
]
  