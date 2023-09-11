from django.contrib import admin
from .models import User, Song, Album, Artist, Genre
# Register your models here.

# Register your models here.
admin.site.register(User)
admin.site.register(Song)
admin.site.register(Artist)
admin.site.register(Album)
admin.site.register(Genre)