import React, { useState, useEffect } from "react";
import axios from "axios";
import SongsList from "../../components/SongsList";
import PlayerBox from "../../components/PlayerBox/PlayerBox";
import { useParams } from 'react-router-dom';

function AlbumSongs() {
  const [albumSongs, setAlbumSongs] = useState([]);
  const { albumId } = useParams();
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    const getAlbumSongs = () => {
      axios.get(`http://localhost:8000/api/albums/${albumId}/songs`).then(res => setAlbumSongs(res.data))
    };

    getAlbumSongs();
  }, [albumId]);

    function handleSongSelect(song) {
      setCurrentSong(song);
    }


  return (
    <>
   <h1>ALBUM SONGS</h1>
   <div className="albumsongs-container">
      <SongsList
        songs={albumSongs}
        resetState={() => setAlbumSongs([])}
        onSongSelect={handleSongSelect}
      />
      </div>
      <PlayerBox currentSong={currentSong}/>
    </>
  );
};

export default AlbumSongs;