import React, { Component } from "react";
import * as MUI from "@mui/material";
import axios from "axios";
import TopArtist from "../../components/TopArtists/TopArtists";
import NewHit from "../../components/NewHit/NewHit";
import RecommendedSongs from "../../components/RecommendedSongs/RecommendedSongs";
import PlayerBox from "../../components/PlayerBox/PlayerBox";

class Discover extends Component {
  state = {
    songs: [],
    artists: [],
    currentSong: null,
  };

  handlePlay = (song) => {
    this.props.onSongSelect(song);
    this.setState({ currentSong: song });
  };

  // Fetching process

  componentDidMount() {
    this.resetState();
  }

  getSongs = () => {
    axios.get("http://localhost:8000/api/songs/").then((res) => this.setState({ songs: res.data }));
  };

  getArtists = () => {
    axios.get("http://localhost:8000/api/artists/").then((res) => this.setState({ artists: res.data }));
  };

  resetState = () => {
    this.getSongs();
    this.getArtists();
  };

  handleSongSelect = (song) => {
    this.setState({ currentSong: song });
  };

  render() {
    const { songs, artists, currentSong } = this.state;

    return (
      <MUI.Container style={{ marginTop: "100px" }}>
        <PlayerBox songs={songs} currentSong={currentSong} />
        <NewHit songs={songs} onSongSelect={this.handleSongSelect} resetState={this.resetState} />
        <TopArtist artists={artists} resetState={this.resetState} />
        <RecommendedSongs songs={songs} onSongSelect={this.handleSongSelect} resetState={this.resetState} />
      </MUI.Container>
    );
  }
}

export default Discover;