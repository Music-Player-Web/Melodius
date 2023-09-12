import React from "react";
import * as MUI from '@mui/material';




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
    <MUI.Container style={{ marginTop: "100px"}}>
 <MUI.Grid container>
            <MUI.Grid xs={12}>
            <div className="jumbotron"></div>

            <h2>NEW HIT</h2>
              <div style={{ width: '30%', textAlign: 'center' }}>
                <img src={data.newHit.image} alt={data.newHit.title} style={{ width: '50%' }} />
                <p>{data.newHit.title}</p>
                <p>{data.newHit.artist}</p>
              </div>
            </MUI.Grid>
            <MUI.Grid xs={12}>
            <h2>TOP ARTISTS</h2>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {data.topArtists.map((artist) => (
                  <div key={artist.name} style={{ width: '30%', textAlign: 'center' }}>
                    <img src={artist.image} alt={artist.name} style={{ width: '50%' }} />
                    <p>{artist.name}</p>
                  </div>
                ))}
              </div>
            </MUI.Grid>

            <MUI.Grid xs={12}>
            <h2>RECOMMENDED TRACKS</h2>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {data.recommendedTracks.map((track) => (
                  <div key={track.name} style={{ width: '30%', textAlign: 'center' }}>
                    <img src={track.image} alt={track.name} style={{ width: '50%' }} />
                    <p>{track.name}</p>
                  </div>
                ))}
              </div>
            </MUI.Grid>

          </MUI.Grid>

      </MUI.Container>
  );
}

export default Discover;







