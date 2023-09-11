import React, { Component } from "react";
import { Table } from "reactstrap";

class SongsList extends Component {
  handlePlay = (song) => {
    const { onSongSelect } = this.props;
    onSongSelect(song);
  };

  render() {
    const songs = this.props.songs;

    return (
      <Table dark>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Play</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!songs || songs.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            songs.map((song) => (
              <tr key={song.pk}>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>
                  <button onClick={() => this.handlePlay(song)}>
                    Play
                  </button>
                </td>
                <td>{song.audio_file}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default SongsList;