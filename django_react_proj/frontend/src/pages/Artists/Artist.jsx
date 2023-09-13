import React, { Component } from "react";
import ArtistsList from "../../components/ArtistsList";
import axios from "axios";

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
        <div style={{ marginTop: "100px" }}>
          <ArtistsList
            artists={this.state.artists}
            resetState={this.resetState}
          />
        </div>
      </>
    );
  }
}

export default Artists;