import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as MUI from "@mui/material";
import { Card, CardContent, CardMedia, Typography, CardActions, Button, createTheme, ThemeProvider } from "@mui/material";
import LyricsIcon from '@mui/icons-material/Lyrics';

class ArtistsList extends Component {
  render() {
    const artists = this.props.artists;

    // Create a dark mode theme
    const darkTheme = createTheme({
      palette: {
        mode: "dark",
      },
    });

    return (
      <ThemeProvider theme={darkTheme}>
        <MUI.Grid container spacing={3}>
          {!artists || artists.length <= 0 ? (
            <MUI.Grid item xs={12}>
              <MUI.Typography variant="body1" align="center">
                <b>Oops, no artists available!</b>
              </MUI.Typography>
            </MUI.Grid>
          ) : (
            artists.map((artist) => (
              <MUI.Grid item xs={12} sm={6} md={4} key={artist.pk}>
                <Card>
                  <CardMedia component="img" sx={{height:200}} image={artist.image_url} alt={artist.full_name} />
                  <CardContent>
                    <Typography variant="h6" component="h2">
                      {artist.full_name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      component={Link}
                      to={`/artists/${artist.pk}/songs`}
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

export default ArtistsList;