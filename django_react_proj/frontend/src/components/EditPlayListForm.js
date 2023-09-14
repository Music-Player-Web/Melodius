import React from "react";
import { Button, TextField, FormControl, FormLabel } from "@mui/material";
import axiosInstance from "axios";

class EditPlayListForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    user: this.props.user.id,
  };

  componentDidMount() {
    if (this.props.playlist) {
      const { pk, name } = this.props.playlist;
      this.setState({ pk, name });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updatePlaylist = async (e) => {
    e.preventDefault();

    const { pk, name, user } = this.state;

    const updatedPlaylist = {
      pk,
      name,
      user,
    };

    try {
      await axiosInstance.put(`http://localhost:8000/api/playlists/${pk}`, updatedPlaylist);
      // TODO: Handle success
    } catch (error) {
      // TODO: Handle error
    }
  };

  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <form onSubmit={this.updatePlaylist}>
        <FormControl>
          <FormLabel>Playlist Name</FormLabel>
          <TextField
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormControl>
        <input type="hidden" name="user" value={this.state.user} />
        <Button type="submit" variant="contained" color="primary">
          Update
        </Button>
      </form>
    );
  }
}

export default EditPlayListForm;