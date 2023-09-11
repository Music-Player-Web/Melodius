from rest_framework import serializers
from .models import User, Song

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('pk', 'name', 'email', 'document', 'phone', 'registrationDate')


class SongSerializer(serializers.ModelSerializer):

    class Meta:
        model = Song
        fields = ('pk', 'title', 'artist', 'audio_file')