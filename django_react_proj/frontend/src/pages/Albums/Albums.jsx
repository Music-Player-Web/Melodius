import React, { Component } from "react";
import AlbumsList from "../../components/AlbumsList"
import axios from "axios";
import "./Albums.css";


class Albums extends Component {
  state = {
    albums: []
  };


  componentDidMount() {
    this.resetState();
  }


  getAlbums = () => {
    axios.get("http://localhost:8000/api/albums/").then(res => this.setState({ albums: res.data }));
  };


  resetState = () => {
    this.getAlbums();
  };

  render() {
    return (
      <>
      <h1>ALBUMS</h1>
        <div className="albums-container">
        <AlbumsList className="albums-box"
          albums={this.state.albums}
          resetState={this.resetState}
        />
        </div>
      </>
    );
  }
}

export default Albums;