import React from "react";
import Grid from '@mui/material/Grid';



function Discover() {
  const data = {
    newHit: { 
      title: "It's Yours", 
      artist: "Artist Name", 
      image: "https://via.placeholder.com/150" 
    },
    topArtists: [
      { name: "Isabel LaRosa", image: "https://via.placeholder.com/150" },
      { name: "Mr.Kitty", image: "https://via.placeholder.com/150" },
      { name: "Stephan Sanchez", image: "https://via.placeholder.com/150" },
    ],
    recommendedTracks: [
      { name: "Track 1", image: "https://via.placeholder.com/150" },
      // Add more tracks as needed
    ],
  };

  return (
      <main role="main">
 <Grid container>
            <Grid xs={12}>
            <div className="jumbotron"></div>

            <h2>NEW HIT</h2>
              <div style={{ width: '30%', textAlign: 'center' }}>
                <img src={data.newHit.image} alt={data.newHit.title} style={{ width: '50%' }} />
                <p>{data.newHit.title}</p>
                <p>{data.newHit.artist}</p>
              </div>
            </Grid>
            <Grid xs={12}>
            <h2>TOP ARTISTS</h2>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {data.topArtists.map((artist) => (
                  <div key={artist.name} style={{ width: '30%', textAlign: 'center' }}>
                    <img src={artist.image} alt={artist.name} style={{ width: '50%' }} />
                    <p>{artist.name}</p>
                  </div>
                ))}
              </div>
            </Grid>

            <Grid xs={12}>
            <h2>RECOMMENDED TRACKS</h2>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {data.recommendedTracks.map((track) => (
                  <div key={track.name} style={{ width: '30%', textAlign: 'center' }}>
                    <img src={track.image} alt={track.name} style={{ width: '50%' }} />
                    <p>{track.name}</p>
                  </div>
                ))}
              </div>
            </Grid>

          </Grid>

      </main>
  );
}

export default Discover;







