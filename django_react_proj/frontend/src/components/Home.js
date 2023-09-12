import React, { Component } from "react";
// import { Col, Container, Row } from "reactstrap";
// import StudentList from "./StudentList";
// import NewStudentModal from "./NewStudentModal";
import SongsList from "./SongsList";
import PlayerBox from "./PlayerBox/PlayerBox";
import ProgressCircle from "./ProgressCircle/ProgressCircle";

import axios from "axios";


class Home extends Component {
  state = {
    students: [],
    songs: [],
    currentSong: null,
  };

  handleSongSelect = (song) => {
    this.setState({ currentSong: song });
  };

  componentDidMount() {
    this.resetState();
  }

  getStudents = () => {
    axios.get("http://localhost:8000/api/usersq/").then(res => this.setState({ students: res.data }));
  };

  getSongs = () => {
    axios.get("http://localhost:8000/api/songs/").then(res => this.setState({ songs: res.data }));
  };

  getAlbumImg = () => {
    axios.get("http://localhost:8000/api/albums/").then(res => this.setState({ album: res.data }));
  };

  
  resetState = () => {
    this.getStudents();
    this.getSongs();
  };

  render() {
    const { currentSong } = this.state;
    return (
      <>
        <ProgressCircle
          percentage={100}
          isPlaying={true}
          size={300}
          color={"#333333"}
          image={"https://upload.wikimedia.org/wikipedia/en/d/d9/Imagine_Dragons_Mercury_album_cover_2022.webp"}
        />
        <PlayerBox />

        <SongsList
          onSongSelect={this.handleSongSelect}
          songs={this.state.songs}
          resetState={this.resetState}
        />
        <PlayerBox currentSong={currentSong} />

      </>
    );
  }
}

export default Home;
