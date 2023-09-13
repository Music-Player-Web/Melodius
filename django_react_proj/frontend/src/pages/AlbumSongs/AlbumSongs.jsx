import React, { useState, useEffect } from "react";
import axios from "axios";
import SongsList from "../../components/SongsList";
import PlayerBox from "../../components/PlayerBox/PlayerBox";
import Grid from '@mui/material/Grid';
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
        <Grid container>
          <Grid item xs={12} md={8} order={{xs:2, md:1}}>
            {/* Place your ProgressCircle component here */}
            <PlayerBox currentSong={currentSong}/>
          </Grid>
          <Grid item xs={12} md={8} order={{xs:1, md:2}}>
            {/* Your SongsList component */}
            <SongsList
              songs={albumSongs}
              resetState={() => setAlbumSongs([])}
              onSongSelect={handleSongSelect}
              albumId={albumId}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default AlbumSongs;