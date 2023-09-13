import React, { Component } from "react";
import { Card, Grid, CardContent, Typography, CardActions, Button } from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

class SongsList extends Component {
  handlePlay = (song) => {
    const { onSongSelect } = this.props;
    onSongSelect(song);
  };
  
  render() {
    const songs = this.props.songs;

return (
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
                           <img src={song.image} alt="Song" style={{ marginRight: '10px' }} />

            </Grid>
            <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
              <Typography variant="h6" component="h2">
                    {song.title}
                  </Typography>
            </Grid>
            <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
               <Typography variant="body2" color="textSecondary">
                    {song.artist}
                  </Typography>
            </Grid>
            <Grid item xs={2} display="flex" justifyContent="center" alignItems="center">
            <CardActions>
                <Button onClick={() => this.handlePlay(song)} size="small" >
                  <PlayCircleOutlineIcon style={{color:'black'}}/>
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
);
}
}

export default SongsList;