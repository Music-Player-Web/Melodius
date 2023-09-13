import React, { useState, useEffect } from "react";
import axios from "axios";
import SongsList from "../../components/TopSongsList";
import { useParams } from 'react-router-dom';

const AlbumSongs = () => {
  const [albumSongs, setAlbumSongs] = useState([]);
  const { albumId } = useParams();

  useEffect(() => {
    const getAlbumSongs = () => {
      axios.get(`/api/albums/${albumId}/songs`).then(res => setAlbumSongs(res.data))
    };

    getAlbumSongs();
  }, [albumId]);

  return (
    <>
      <br />
      <br />
      <br />
      <SongsList
        songs={albumSongs}
        resetState={() => setAlbumSongs([])}
      />
    </>
  );
};

export default AlbumSongs;