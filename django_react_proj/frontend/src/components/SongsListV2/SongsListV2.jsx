import React, { useEffect, useState } from "react";
import { Card, Grid, CardContent, Typography, CardActions, Button } from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import axios from "axios";
import './SongsListV2.css';

function SongsList({ songs, onSongSelect }) {
  const [albumImages, setAlbumImages] = useState({});

  const handlePlay = (song) => {
    onSongSelect(song);
  };

  // fetch the image album
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
      } catch (error) {
        console.error("Error fetching album images:", error);
      }
    };

    fetchAlbumImages();
  }, [songs]);

  return (
    <div className="songlistv2-container">
    <Grid container spacing={2}>
      {!songs || songs.length <= 0 ? (
        <Grid item xs={12}>
          <Typography variant="body1" align="center">
            <b>Oops, no songs here yet!</b>
          </Typography>
        </Grid>
      ) : (
        songs.map((song) => (
          <Grid item xs={12} key={song.pk}>
            <Card style={{ marginBottom: '10px' }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                    <img src={albumImages[song.album.id]} alt="Song" style={{ marginRight: '10px', width:'100px', height:'100px' }} />
                  </Grid>
                  <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                    <Typography variant="h6" component="h2">
                      {song.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
                    <Typography variant="body2" color="white">
                      {song.artist}
                    </Typography>
                  </Grid>
                  <Grid item xs={2} display="flex" justifyContent="center" alignItems="center">
                    <CardActions>
                      <Button onClick={() => handlePlay(song)} size="small">
                        <PlayCircleOutlineIcon style={{ color: 'white' }} />
                      </Button>
                    </CardActions>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
    </div>
  );
};

export default SongsList;