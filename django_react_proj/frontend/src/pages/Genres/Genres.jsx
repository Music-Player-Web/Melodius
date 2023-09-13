import React, { Component } from "react";
import GenresList from "../../components/GenresList";
import axios from "axios";

class Genres extends Component {
  state = {
    genres: []
  };

  componentDidMount() {
    this.resetState();
  }

  getGenres = () => {
    axios.get("http://localhost:8000/api/genres/").then(res => this.setState({ genres: res.data }));
  };

  resetState = () => {
    this.getGenres();
  };

  render() {
    return (
      <>
      <h1>Genres</h1>
        <div style={{ marginTop: "100px" }}>
          <GenresList
            genres={this.state.genres}
            resetState={this.resetState}
          />
        </div>
      </>
    );
  }
}

export default Genres;