import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
// import StudentList from "./StudentList";
// import NewStudentModal from "./NewStudentModal";
import SongsList from "./SongsList";
import PlayerBox from "./PlayerBox/PlayerBox";

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
    axios.get("http://localhost:8000/api/users/").then(res => this.setState({ students: res.data }));
  };

  getSongs = () => {
    axios.get("http://localhost:8000/api/songs/").then(res => this.setState({ songs: res.data }));
  };

  resetState = () => {
    this.getStudents();
    this.getSongs();
  };

  render() {
    const { currentSong } = this.state;
    return (
      <Container style={{ marginTop: "20px" }}>
        <PlayerBox />
        <Row>
          {/* <Col>
            <StudentList
              students={this.state.students}
              resetState={this.resetState}
            />
          </Col> */}
          <Col>
            <SongsList
              onSongSelect={this.handleSongSelect}
              songs={this.state.songs}
              resetState={this.resetState}
            />
            <PlayerBox currentSong={currentSong} />
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <NewStudentModal create={true} resetState={this.resetState} />
          </Col>
        </Row> */}
      </Container>
    );
  }
}

export default Home;