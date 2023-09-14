import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const SongsList = ({ songs, onSongSelect }) => {
  const [artistName, setArtistName] = useState({});
  const handlePlay = (song) => {
    if (typeof onSongSelect === 'function') {
      onSongSelect(song);
    }
  };

  useEffect(() => {
    const fetchArtistNames = async () => {
      const artistIds = songs.map((song) => song.artist.id); // Update here to access the artist ID
      const artistNamePromises = artistIds.map((artistId) =>
        axios.get(`http://localhost:8000/api/artists/${artistId}`)
      );

      try {
        const artistNameResponses = await Promise.all(artistNamePromises);
        const artistNameMap = {};

        artistNameResponses.forEach((response) => {
          const artist = response.data;
          artistNameMap[artist.id] = artist.full_name;
        });

        setArtistName(artistNameMap);
      } catch (error) {
        console.error("Error fetching artist names:", error);
      }
    };

    fetchArtistNames();
  }, [songs]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {!songs || songs.length <= 0 ? (
        <Typography variant="body1" align="center">
          <b>Oops, no songs here yet!</b>
        </Typography>
      ) : (
        songs.slice(0, 3).map((song, index) => (
          <Card
            key={index}
            style={{ marginBottom: "10px", flex: "1 0 300px", marginRight: "10px" }}
          >
            <CardContent>
              <Typography variant="h6" component="h2">
                {song.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {artistName[song.artist.id]}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => handlePlay(song)} size="small" color="primary">
                Play
              </Button>
            </CardActions>
          </Card>
        ))
      )}
    </div>
  );
};

export default SongsList;