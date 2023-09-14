import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as MUI from "@mui/material";
import { Card, CardContent, CardMedia, Typography, CardActions, Button, createTheme, ThemeProvider } from "@mui/material";
import LyricsIcon from '@mui/icons-material/Lyrics';

class AlbumsList extends Component {
  render() {
    const albums = this.props.albums;

    // Create a dark mode theme
    const darkTheme = createTheme({
      palette: {
        mode: "dark",
      },
    });

    return (
      <ThemeProvider theme={darkTheme}>
        <MUI.Grid container spacing={3}>
          {!albums || albums.length <= 0 ? (
            <MUI.Grid item xs={12}>
              <MUI.Typography variant="body1" align="center">
                <b>Oops, no albums available!</b>
              </MUI.Typography>
            </MUI.Grid>
          ) : (
            albums.map((album) => (
              <MUI.Grid item xs={12} sm={6} md={4} key={album.pk}>
                <Card>
                  <CardMedia component="img" height="200" image={album.image_url} alt={album.name} />
                  <CardContent>
                    <Typography variant="h6" component="h2">
                      {album.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Release Date: {album.release_date}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Total Songs: {album.total_songs}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      component={Link}
                      to={`/albums/${album.pk}/songs`}
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
      </ThemeProvider>
    );
  }
}

export default AlbumsList;