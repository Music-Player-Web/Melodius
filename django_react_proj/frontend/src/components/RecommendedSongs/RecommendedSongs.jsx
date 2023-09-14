import { Card, CardContent, Typography, CardActions, Button, Grid } from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import axios from "axios";
import React, { useEffect, useState } from "react";
import './RecommendedSongs.css';

const SongsList = ({ songs, onSongSelect }) => {
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
    <div className="recommendedsongs-container">
         <h1 style={{marginBottom: "20px"}} >Top Songs</h1>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {!songs || songs.length <= 0 ? (
        <Typography variant="body1" align="center">
          <b>Oops, no songs here yet!</b>
        </Typography>
      ) : (
        songs.slice(0, 6).map((song, index) => (
          <Card style={{ marginBottom: '10px' }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                <img src={albumImages[song.album.id]} alt="Song" style={{  marginLeft: '20px' , width:'100px', height:'100px' }} />
              </Grid>
              <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h6" component="h2" style={{  marginLeft: '20px' ,}} >
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
        ))
      )}
    </div>
    </div>
  );
};

export default SongsList;