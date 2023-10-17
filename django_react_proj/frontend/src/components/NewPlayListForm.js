import React, { useState } from "react";
import { Button, TextField, FormControl, FormLabel } from "@mui/material";
import axiosInstance from "axios";

const NewPlayListForm = ({ user }) => {
  const [pk, setPk] = useState(0);
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleImageChange = (e) => {
    setImageURL(e.target.files[0]);
  };

  function PlaylistHandle() {
    window.location.reload();
  }

  const createPlaylist = async (e) => {
    e.preventDefault();

    let form_data = new FormData();
    if (imageURL) {
      form_data.append("name", name);
      form_data.append("image_url", imageURL);
      form_data.append("user", user.id);
    }

    try {
      const response = await axiosInstance.post(
        "http://localhost:8000/api/playlists/",
        form_data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
        
      );
      // TODO: What do you want to happen after successful upload
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  return (
    <form onSubmit={createPlaylist}>
      <FormControl>
        <FormLabel>Playlist Name</FormLabel>
        <TextField
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={defaultIfEmpty(name)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Image</FormLabel>
        <input
          type="file"
          name="image_url"
          onChange={handleImageChange}
        />
      </FormControl>
      <input type="hidden" name="user" value={user.id} />
      <Button type="submit" variant="contained" color="primary" onClick={PlaylistHandle}>
        Create
      </Button>
    </form>
  );
};

export default NewPlayListForm;