import * as MUI from "@mui/material";
import React, { Component } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NewPlaylistForm from "../../components/NewPlayListForm";
import YourPlaylists from "../../components/YourPlaylists/YourPlaylists";
import axios from "axios";
import { Button } from "@mui/material";;


class Playlists extends Component {
  state = {
    playlists: [],
    isOpen: false
  };


  handleOpenDialog = () => {
    this.setState({ isOpen: true });
  };

  handleCloseDialog = () => {
    this.setState({ isOpen: false });
  };

  componentDidMount() {
    this.resetState();
  }

  getPlaylists = () => {
    axios.get("http://localhost:8000/api/playlists/").then(res => this.setState({ playlists: res.data }));
  };

  resetState = () => {
    this.getPlaylists();
  };

  render() {
    return (
      <>
      
      <Container style={{ marginTop: "100px" }}>
        <Grid container spacing={3}>
        
          <Grid item xs={12}>
          
            <YourPlaylists
              playlists={this.state.playlists}
              resetState={this.resetState}
              user = {this.props.user}
            />
            <MUI.Button
            resetState={this.props.resetState} onClick={this.handleOpenDialog}>Create New Playlist</MUI.Button>
          </Grid>
          
        </Grid>
        <MUI.Dialog open={this.state.isOpen} onClose={this.handleCloseDialog}>
          <MUI.DialogTitle>Create Playlist</MUI.DialogTitle>
          <MUI.DialogContent>
            <NewPlaylistForm user={this.props.user}/>
          </MUI.DialogContent>
          <MUI.DialogActions>
            <Button onClick={this.handleCloseDialog}>Close</Button>
          </MUI.DialogActions>
        </MUI.Dialog>
      </Container>
      </>
    );
  }
}

export default Playlists;
