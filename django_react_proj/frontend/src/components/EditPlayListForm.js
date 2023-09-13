import * as MUI from "@mui/material";
import React from "react";
import axios from "axios";
import { Button, TextField, FormControl, FormLabel } from "@mui/material";

class NewPlayListForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    image_url: "",
  };


  componentDidMount() {
    if (this.props.playlist) {
      const { pk, name, image_url } = this.props.playlist;
      this.setState({ pk, name, image_url });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createPlaylist = e => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/playlists/", this.state).then(() => {
      this.props.resetState();
    });
  };

  editPlaylist = e => {
    e.preventDefault();
    axios.put("http://localhost:8000/api/playlists/" + this.state.pk, this.state).then(() => {
      this.props.resetState();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <form onSubmit={this.props.playlist ? this.editPlaylist : this.createPlaylist}>
        <FormControl>
          <FormLabel>Playlist Name</FormLabel>
          <TextField
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Image</FormLabel>
          <TextField
            type="file"
            name="image_url"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.image_url)}
          />
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>
    );
  }
}

export default NewPlayListForm;
