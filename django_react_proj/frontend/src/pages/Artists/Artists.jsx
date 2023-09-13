import React, { Component } from "react";
import ArtistsList from "../../components/ArtistsList";
import axios from "axios";
import "./Artists.css"


class Artists extends Component {
  state = {
    artists: []
  };

  componentDidMount() {
    this.resetState();
  }

  getArtists = () => {
    axios.get("http://localhost:8000/api/artists/").then(res => this.setState({ artists: res.data }));
  };

  resetState = () => {
    this.getArtists();
  };

  render() {
    return (
      <>
      <h1>ARTISTS</h1>
          <div className="artists-container">
          <ArtistsList className="artists-box"
            artists={this.state.artists}
            resetState={this.resetState}
          />
        </div>
      </>
    );
  }
}

export default Artists;