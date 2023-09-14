import React, { useState, useEffect } from "react";
import axios from "axios";
import SongsList from "../../components/SongsListV2";
import PlayerBox from "../../components/PlayerBox/PlayerBox";
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';

function ArtistSongs() {
  const [artistSongs, setArtistSongs] = useState([]);
  const { artistId } = useParams();
  
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    const getArtistSongs = () => {
      axios.get(`http://localhost:8000/api/artists/${artistId}/songs`).then(res => setArtistSongs(res.data))
    };

    getArtistSongs();
  }, [artistId]);

  function handleSongSelect(song) {
    setCurrentSong(song);
  }

  return (
    <>
      <h1>ARTIST SONGS</h1>
      <div className="artistsongs-container">
        <Grid container>
          <Grid item xs={12} md={8} order={{xs:2, md:1}}>
            {/* Place your ProgressCircle component here */}
            <PlayerBox songs={artistSongs} currentSong={currentSong}/>
          </Grid>
          <Grid item xs={12} md={8} order={{xs:1, md:2}}>
            {/* Your SongsList component */}
            <SongsList
              songs={artistSongs}
              resetState={() => setArtistSongs([])}
              onSongSelect={handleSongSelect}
              artistId={artistId}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ArtistSongs;