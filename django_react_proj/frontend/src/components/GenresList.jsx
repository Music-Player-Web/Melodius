import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as MUI from "@mui/material";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import LyricsIcon from '@mui/icons-material/Lyrics';

class GenresList extends Component {
  getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  render() {
    const genres = this.props.genres;

    return (
      <MUI.Grid container spacing={3}>
        {!genres || genres.length <= 0 ? (
          <MUI.Grid item xs={12}>
            <MUI.Typography variant="body1" align="center">
              <b>Oops, no genres available!</b>
            </MUI.Typography>
          </MUI.Grid>
        ) : (
          genres.map((genre) => (
            <MUI.Grid item xs={12} sm={6} md={4} key={genre.pk}>
              <Card style={{ backgroundColor: this.getRandomColor() }}>
                <CardContent>
                  <Typography variant="h6" component="h2">
                    {genre.genre}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={Link}
                    to={`/genres/${genre.pk}/songs`}
                    size="small"
                    color="primary"
                  >
                    <LyricsIcon style={{color:'red'}}/> <p style={{color:'red'}}>View Songs</p>
                  </Button>
                </CardActions>
              </Card>
            </MUI.Grid>
          ))
        )}
      </MUI.Grid>
    );
  }
}

export default GenresList;