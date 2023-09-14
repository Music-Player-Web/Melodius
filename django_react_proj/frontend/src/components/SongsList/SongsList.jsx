import React, {useEffect, useState } from "react";
import { Card, Grid, CardContent, Typography, CardActions, Button } from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import axios from "axios";
import './SongsList.css';

function SongsList({ songs, albumId, onSongSelect }) {
  const [album, setAlbum] = useState([]);
  const handlePlay = (song) => {
    onSongSelect(song);
  };

  useEffect(() => {
    const album = () => {
      axios.get(`http://localhost:8000/api/albums/${albumId}`).then(res => setAlbum(res.data))
    };

    album();
  }, [albumId]);

  return (
    <div className="songlist-container">
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
                    <img src={album.image_url} alt="Song" style={{ marginRight: '10px', width:'100px', height:'100px' }} />
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