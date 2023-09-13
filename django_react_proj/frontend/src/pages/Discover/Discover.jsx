import React, { Component } from "react";
import * as MUI from "@mui/material";
import axios from "axios";
import TopSongsList from "../../components/TopSongsList";

class Discover extends Component {
  state = {
    data: {
      newHit: {
        title: "It's Yours",
        artist: "Artist Name",
        image: "https://via.placeholder.com/150"
      },
      topArtists: [
        { name: "Isabel LaRosa", image: "https://via.placeholder.com/150" },
        { name: "Mr.Kitty", image: "https://via.placeholder.com/150" },
        { name: "Stephan Sanchez", image: "https://via.placeholder.com/150" }
      ],
      recommendedTracks: [
        { name: "Track 1", image: "https://via.placeholder.com/150" }
        // Add more tracks as needed
      ]
    },
    songs: []
  };

  // fetching process

  componentDidMount() {
    this.resetState();
  }

  getSongs = () => {
    axios
      .get("http://localhost:8000/api/songs/")
      .then(res => {
        const songsWithArtistNames = res.data.map(song => {
          // Fetch the artist details for each song
          const artistId = song.artist;
          axios
            .get(`http://localhost:8000/api/artists/${artistId}`)
            .then(response => {
              // Replace the artist foreign key with the artist's name
              const artistName = response.data.name;
              song.artist = artistName;
              // Update the state with the modified song
              this.setState(prevState => ({
                songs: [...prevState.songs, song]
              }));
            })
            .catch(error => console.error(error));
          return null;
        });
        Promise.all(songsWithArtistNames); // Wait for all artist details to be fetched
      })
      .catch(error => console.error(error));
  };

  resetState = () => {
    this.getSongs();
  };


  render() {
    const { data } = this.state;

    return (
      <MUI.Container style={{ marginTop: "100px" }}>
        <MUI.Grid container>
          <MUI.Grid xs={12}>
            <div className="jumbotron"></div>
            <h2>NEW HIT</h2>
            <div style={{ width: "30%", textAlign: "center" }}>
              <img
                src={data.newHit.image}
                alt={data.newHit.title}
                style={{ width: "50%" }}
              />
              <p>{data.newHit.title}</p>
              <p>{data.newHit.artist}</p>
            </div>
          </MUI.Grid>
          <MUI.Grid xs={12}>
          <TopSongsList songs={this.state.songs}
          resetState={this.resetState} />
          </MUI.Grid>

          <MUI.Grid xs={12}>
            <h2>RECOMMENDED TRACKS</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap"
              }}
            >
              {data.recommendedTracks.map((track) => (
                <div
                  key={track.name}
                  style={{ width: "30%", textAlign: "center" }}
                >
                  <img
                    src={track.image}
                    alt={track.name}
                    style={{ width: "50%" }}
                  />
                  <p>{track.name}</p>
                </div>
              ))}
            </div>
          </MUI.Grid>
        </MUI.Grid>
      </MUI.Container>
    );
  }
}

export default Discover;