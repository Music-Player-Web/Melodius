import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import NewPlaylistForm from "../../components/NewPlayListForm";
import YourPlaylists from "../../components/YourPlaylists/YourPlaylists";
import axios from "axios";

const Playlists = (props) => {
  const [playlists, setPlaylists] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  const getPlaylists = () => {
    axios.get("http://localhost:8000/api/playlists/").then(res => setPlaylists(res.data));
  };

  const resetState = () => {
    getPlaylists();
  };

  useEffect(() => {
    resetState();
  }, []);

  return (
    <>
      <Container style={{ marginTop: "100px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>PlayLists</h1>
            <Button
              resetState={resetState}
              onClick={handleOpenDialog}
              style={{ color: 'white', fontSize: '20px' }}>
              <AddIcon />Create New Playlist
            </Button>
            <YourPlaylists
              playlists={playlists}
              resetState={resetState}
              user={props.user}
            />
          </Grid>
        </Grid>
        <Dialog open={isOpen} onClose={handleCloseDialog}>
          <DialogTitle>Create Playlist</DialogTitle>
          <DialogContent>
            <NewPlaylistForm user={props.user} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
};

export default Playlists;