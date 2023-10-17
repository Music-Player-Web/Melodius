import React, { useState, useEffect } from "react";
import { Button, TextField, FormControl, FormLabel } from "@mui/material";
import axiosInstance from "axios";

const EditPlayListForm = ({ user, playlist }) => {
  const [pk, setPk] = useState(0);
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    if (playlist) {
      const { pk, name, image_url } = playlist;
      setPk(pk);
      setName(name);
      setImageURL(image_url);
    }
  }, [playlist]);

  const handleImageChange = (e) => {
    setImageURL(e.target.files[0]);
  };

  const handlePlaylistUpdate = () => {
    window.location.reload();
  };

  const updatePlaylist = async (e) => {
    e.preventDefault();

    let form_data = new FormData();
    form_data.append("name", name);
    if (imageURL) {
      form_data.append("image_url", imageURL);
    }
    form_data.append("user", user.id);

    try {
      const response = await axiosInstance.put(
        `http://localhost:8000/api/playlists/${pk}/`,
        form_data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // TODO: Handle success
      console.log(response.data);
    } catch (error) {
      // TODO: Handle error
      console.error(error);
    }
  };

  const defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  return (
    <form onSubmit={updatePlaylist}>
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
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handlePlaylistUpdate}
      >
        Update
      </Button>
    </form>
  );
};

export default EditPlayListForm;