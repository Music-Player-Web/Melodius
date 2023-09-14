import React, { useEffect, useState } from "react";
import { Card, Grid, CardContent, Typography, CardActions, Button } from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import axios from "axios";

function NewHit({ songs, onSongSelect }) {
  const [albumImages, setAlbumImages] = useState({});
  const [randomSong, setRandomSong] = useState(null);

  const handlePlay = (song) => {
    onSongSelect(song);
  };

  // fetch the image album and select a random song
  useEffect(() => {
    const fetchAlbumImages = async () => {
      const albumIds = songs.map((song) => song.album);
      const albumImagePromises = albumIds.map((albumId) =>
        axios.get(`http://localhost:8000/api/albums/${albumId}`)
      );

      try {
        const albumImageResponses = await Promise.all(albumImagePromises);
        const albumImageMap = {};

        albumImageResponses.forEach((response) => {
          const album = response.data;
          albumImageMap[album.id] = album.image_url;
        });

        setAlbumImages(albumImageMap);

        // Select a random song
        const randomIndex = Math.floor(Math.random() * songs.length);
        setRandomSong(songs[randomIndex]);
      } catch (error) {
        console.error("Error fetching album images:", error);
      }
    };

    fetchAlbumImages();
  }, [songs]);

  return (
    <Grid container spacing={2}>
      {!randomSong ? (
        <Grid item xs={12}>
          <Typography variant="body1" align="center">
            <b>Oops, no songs here yet!</b>
          </Typography>
        </Grid>
      ) : (
        <Grid item xs={12} key={randomSong.pk}>
          <Card style={{ marginBottom: '10px' }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                  <img src={albumImages[randomSong.album.id]} alt="Song" style={{ marginRight: '10px', width:'100px', height:'100px' }} />
                </Grid>
                <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                  <Typography variant="h6" component="h2">
                    {randomSong.title}
                  </Typography>
                </Grid>
                <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
                  <Typography variant="body2" color="textSecondary">
                    {randomSong.artist}
                  </Typography>
                </Grid>
                <Grid item xs={2} display="flex" justifyContent="center" alignItems="center">
                  <CardActions>
                    <Button onClick={() => handlePlay(randomSong)} size="small">
                      <PlayCircleOutlineIcon style={{ color: 'black' }} />
                    </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      )}
    </Grid>
  );
};

export default NewHit;