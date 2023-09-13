import * as MUI from "@mui/material";
import React from "react";
import axios from "axios";
import { Button, TextField, FormControl, FormLabel } from "@mui/material";
import axiosInstance from "axios";

class NewPlayListForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    user: this.props.user.id,
  };

handleImageChange = (e) => {
    this.setState({
      image_url: e.target.files[0],
    });
  };

//   handleImageChange = (e) => {
//     this.setState({
//       image_url: e.target.files[0],
//     });
// };

  // componentDidMount() {
  //   // if (this.props.playlist) {
  //   //   const { pk, name, image_url } = this.props.playlist;
  //   //   this.setState({ pk, name, image_url });
  //   // }
  //   this.resetState();
  // }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  

  createPlaylist = async e => {
    e.preventDefault();

    let submission = this.state;
    if ('image_url' in submission && submission['image_url'] == "") {
      delete submission.image_url;
    }

    let form_data = new FormData();
    if (this.state.image_url)
      form_data.append("name", this.state.name);
      form_data.append("image_url", this.state.image_url);
      form_data.append("user", this.state.user);

    const myNewModel = await axiosInstance
        .post("http://localhost:8000/api/playlists/", form_data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((res) => {
          // TODO What do you want to happen after successfull upload 
          
            return res;
        }).catch((error) => {
            return error.response;
        });

  }

  //   axios.post("http://localhost:8000/api/playlists/", submission).then(() => {
  //     this.props.resetState();
  //   });
  // };

  // editPlaylist = e => {
  //   e.preventDefault();
  //   axios.put("http://localhost:8000/api/playlists/" + this.state.pk, this.state).then(() => {
  //     this.props.resetState();
  //   });
  // };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    console.log(this.props.user);
    return (
      <form onSubmit={this.createPlaylist}>
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
          <input
            type="file"
            name="image_url"
            // onChange={this.onChange}
            // value={this.defaultIfEmpty(this.state.image_url)}
            onChange={(e) => {
              this.handleImageChange(e);
          }}
          />
        </FormControl>
        <input type="hidden" name="user" value={this.state.user} />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>
    );
  }
}

export default NewPlayListForm;
