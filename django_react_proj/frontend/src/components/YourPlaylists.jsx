import React, { Component } from "react";
import * as MUI from "@mui/material";
import ConfirmRemovalModal from "./ConfirmRemovalModal";
import { Card, CardContent, CardMedia, Typography, CardActions, Button, createTheme, ThemeProvider } from "@mui/material";
import EditPlayListForm from "./EditPlayListForm";

class YourPlaylists extends Component {
  state = {
    editDialogOpen: false,
    deleteDialogOpen: false,
    selectedPlaylist: null
  };

  handleOpenEditDialog = (playlist) => {
    this.setState({ editDialogOpen: true, selectedPlaylist: playlist });
  };

  handleCloseEditDialog = () => {
    this.setState({ editDialogOpen: false, selectedPlaylist: null });
  };

  handleOpenDeleteDialog = (playlist) => {
    this.setState({ deleteDialogOpen: true, selectedPlaylist: playlist });
  };

  handleCloseDeleteDialog = () => {
    this.setState({ deleteDialogOpen: false, selectedPlaylist: null });
  };

  render() {
    const playlists = this.props.playlists;

    // Create a dark mode theme
    const darkTheme = createTheme({
      palette: {
        mode: "dark",
      },
    });
    console.log(playlists)
    return (
      <>
      <h1>PlayList</h1>
        <ThemeProvider theme={darkTheme}>
          <MUI.Grid container spacing={3}>
            {!playlists || playlists.length <= 0 ? (
              <MUI.Grid item xs={12}>
                <MUI.Typography variant="body1" align="center">
                  <b>Oops, no playlists available!</b>
                </MUI.Typography>
              </MUI.Grid>
            ) : (
              playlists.map((playlist) => (
                <MUI.Grid item xs={12} sm={6} md={4} key={playlist.pk}>
                  <Card>
                    {
                      playlist.image_url == null ? <CardMedia component="img" height="140" image={"https://placehold.co/600x400/EEE/31343C"} alt={playlist.name} /> :
                        <CardMedia component="img" height="140" image={playlist.image_url} alt={playlist.name} />
                    }
                    <CardContent>
                      <Typography variant="h6" component="h2">
                        {playlist.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Total Songs: {playlist.total_songs}
                      </Typography>
                    </CardContent>
                    <CardActions>

                      <MUI.Button onClick={() => this.handleOpenEditDialog(playlist)}>Edit Playlist</MUI.Button>
                      &nbsp;&nbsp;
                      <MUI.Button onClick={() => this.handleOpenDeleteDialog(playlist)}>Delete Playlist</MUI.Button>

                    </CardActions>
                  </Card>
                </MUI.Grid>
              ))
            )}
          </MUI.Grid>
        </ThemeProvider>

        <MUI.Dialog open={this.state.editDialogOpen} onClose={this.handleCloseEditDialog}>
          <MUI.DialogTitle>Edit Playlist</MUI.DialogTitle>
          <MUI.DialogContent>
            <EditPlayListForm  user={this.props.user}/>
          </MUI.DialogContent>
          <MUI.DialogActions>
            <Button onClick={this.handleCloseEditDialog}>Close</Button>
          </MUI.DialogActions>
        </MUI.Dialog>

        <MUI.Dialog open={this.state.deleteDialogOpen} onClose={this.handleCloseDeleteDialog}>
          <MUI.DialogTitle>Delete Playlist</MUI.DialogTitle>
          <MUI.DialogContent>
            <ConfirmRemovalModal />
          </MUI.DialogContent>
          <MUI.DialogActions>
            <Button onClick={this.handleCloseDeleteDialog}>Close</Button>
          </MUI.DialogActions>
        </MUI.Dialog>
      </>
    );
  }
}

export default YourPlaylists;