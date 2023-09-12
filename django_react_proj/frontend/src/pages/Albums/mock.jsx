import React, { Component } from "react";
import AlbumsList from "./components/AlbumsList"

import axios from "axios";


class Albums extends Component {
    state = {
        songs: [],
        currentSong: null,
        albums: []
    };

    handleSongSelect = (song) => {
        this.setState({ currentSong: song });
    };

    componentDidMount() {
        this.resetState();
    }


    getSongs = () => {
        axios.get("http://localhost:8000/api/songs/").then(res => this.setState({ songs: res.data }));
    };

    getAlbums = () => {
        axios.get("http://localhost:8000/api/albums/").then(res => this.setState({ album: res.data }));
    };


    resetState = () => {
        this.getStudents();
        this.getSongs();
        this.getAlbums();
    };

    render() {
        return (
            <>
                <AlbumsList
                    albums={this.state.albums}
                    resetState={this.resetState}
                />


            </>
        );
    }
}

export default Albums;