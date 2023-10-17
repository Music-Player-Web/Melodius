import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogActions } from "@mui/material";
import axios from "axios";

const DeletePlaylistForm = ({ resetState, playlist }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((previousOpen) => !previousOpen);
    window.location.reload();
  };

  const deletePlaylist = (pk) => {
    axios.delete(`http://localhost:8000/api/playlists/${pk}`).then(() => {
        resetState();
        toggle();
      }).catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Button color="error" onClick={toggle}>
        Remove
      </Button>
      <Dialog open={open} onClose={toggle}>

        <DialogActions>
          <Button color="primary" onClick={deletePlaylist(playlist.pk)}>
          <DialogTitle>Successfully Deleted</DialogTitle>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeletePlaylistForm;