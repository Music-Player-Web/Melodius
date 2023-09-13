import React, { Component } from "react";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";

class SongsList extends Component {
  handlePlay = (song) => {
    const { onSongSelect } = this.props;
    if (typeof onSongSelect === 'function') {
      onSongSelect(song);
    }
  };

  render() {
    const songs = this.props.songs;

    return (
      <div>
        {!songs || songs.length <= 0 ? (
          <Typography variant="body1" align="center">
            <b>Oops, no songs here yet!</b>
          </Typography>
        ) : (
          songs.slice(0, 4).map((song) => (
            <Card key={song.pk} style={{ marginBottom: "10px" }}>
              <CardContent>
                <Typography variant="h6" component="h2">
                  {song.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {song.artist}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => this.handlePlay(song)}
                  size="small"
                  color="primary"
                >
                  Play
                </Button>
              </CardActions>
            </Card>
          ))
        )}
      </div>
    );
  }
}

export default SongsList;