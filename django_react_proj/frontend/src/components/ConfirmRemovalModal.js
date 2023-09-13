import React, { Component, Fragment } from "react";
import { Button, Dialog, DialogTitle, DialogActions } from "@mui/material";
import axios from "axios";

class ConfirmRemovalModal extends Component {
  state = {
    open: false
  };

  toggle = () => {
    this.setState(previous => ({
      open: !previous.open
    }));
  };

  deletePlaylist= pk => {
    axios.delete("http://localhost:8000/api/playlists/"+ pk).then(() => {
      this.props.resetState();
      this.toggle();
    });
  };

  render() {
    return (
      <Fragment>
        <Button color="error" onClick={() => this.toggle()}>
          Remove
        </Button>
        <Dialog open={this.state.open} onClose={this.toggle}>
          <DialogTitle>
            Do you really wanna delete the playlist?
          </DialogTitle>

          <DialogActions>
            <Button onClick={() => this.toggle()}>
              Cancel
            </Button>
            <Button
              color="primary"
              onClick={() => this.deletePlaylist(this.props.pk)}
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default ConfirmRemovalModal;
