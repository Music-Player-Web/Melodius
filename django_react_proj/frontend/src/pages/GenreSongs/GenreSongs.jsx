import React, { useState, useEffect } from "react";
import axios from "axios";
import SongsList from "../../components/SongsListV2";
import PlayerBox from "../../components/PlayerBox/PlayerBox";
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';

function GenreSongs() {
  const [genreSongs, setGenreSongs] = useState([]);
  const { genreId } = useParams();
  
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    const getGenreSongs = () => {
      axios.get(`http://localhost:8000/api/genres/${genreId}/songs`).then(res => setGenreSongs(res.data))
    };

    getGenreSongs();
  }, [genreId]);

  function handleSongSelect(song) {
    setCurrentSong(song);
  }

  return (
    <>
      <h1>GENRE SONGS</h1>
      <div className="genresongs-container">
        <Grid container>
          <Grid item xs={12} md={8} order={{xs:2, md:1}}>
            {/* Place your ProgressCircle component here */}
            <PlayerBox currentSong={currentSong}/>
          </Grid>
          <Grid item xs={12} md={8} order={{xs:1, md:2}}>
            {/* Your SongsList component */}
            <SongsList
              songs={genreSongs}
              resetState={() => setGenreSongs([])}
              onSongSelect={handleSongSelect}
              genreId={genreId}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default GenreSongs;