from django.db import models
from django.conf import settings

class User(models.Model):
    name = models.CharField("Name", max_length=240)
    email = models.EmailField()
    document = models.CharField("Document", max_length=20)
    phone = models.CharField(max_length=20)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.name

class Genre(models.Model):
    genre = models.CharField(max_length=100)


    def __str__(self):
        return self.genre

class Artist(models.Model):
    full_name = models.CharField(max_length=100)
    image_url = models.FileField(upload_to='artistImg/')

    def __str__(self):
        return self.full_name

class Album(models.Model):
    name = models.CharField(max_length=100)
    total_songs = models.IntegerField()
    release_date = models.DateField('Release Date')
    image_url = models.FileField(upload_to='albumImg/')

    def __str__(self):
        return self.name
        
class Song(models.Model):
    title = models.CharField(max_length=100)
    audio_file = models.FileField(upload_to='songs/')
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE, related_name='songs')
    album = models.ForeignKey(Album, on_delete=models.CASCADE, related_name='songs')
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE, related_name='songs')

    def __str__(self):
        return self.title

def upload_to(instance, filename):
    return 'playlistImg/{filename}'.format(filename=filename)

class Playlist(models.Model):
    user=models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name= models.CharField(max_length=100)
    songs = models.ManyToManyField(Song, blank=True, null=True)
    image_url = models.ImageField(upload_to='playlistImg/', blank=True, null=True)

    def __str__(self):
        return self.name
    
    
    
