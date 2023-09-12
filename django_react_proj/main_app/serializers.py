from rest_framework import serializers
from .models import User, Song, Album, Artist, Genre

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('pk', 'name', 'email', 'document', 'phone', 'registrationDate')


class SongSerializer(serializers.ModelSerializer):

    class Meta:
        model = Song
        fields = ('pk', 'title', 'artist', 'audio_file')

class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = ['pk', 'name', 'total_songs', 'release_date', 'image_url']

class ArtistSerializer(serializers.ModelSerializer):

    class Meta:
        model = Artist
        fields = ['pk', 'full_name', 'image_url']

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ['pk', 'genre']