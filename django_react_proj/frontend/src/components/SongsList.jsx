import React, { Component } from "react";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";

class SongsList extends Component {
  handlePlay = (song) => {
    const { onSongSelect } = this.props;
    onSongSelect(song);
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
          <div>
            {songs.map((song) => (
              <Card key={song.pk} style={{ marginBottom: "10px" }}>
                <CardContent style={{ display: "flex", alignItems: "center" }}>
                  <img src={song.image} alt="Song" style={{ marginRight: "10px" }} />
                  <div>
                    <Typography variant="h6" component="h2">
                      {song.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {song.artist}
                    </Typography>
                  </div>
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
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default SongsList;