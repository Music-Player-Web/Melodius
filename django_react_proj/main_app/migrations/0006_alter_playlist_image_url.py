# Generated by Django 4.2.2 on 2023-09-13 13:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0005_playlist_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='playlist',
            name='image_url',
            field=models.ImageField(blank=True, null=True, upload_to='playlistImg/'),
        ),
    ]
