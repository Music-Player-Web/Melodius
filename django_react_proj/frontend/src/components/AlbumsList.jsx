import React, { Component } from "react";


class AlbumsList extends Component {

    render() {
        const albums = this.props.albums;

        return (
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>realse date</th>
                        <th>total song</th>
                        {/* <th></th> */}
                    </tr>
                </thead>
                <tbody>
                    {!albums || albums.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>Ops, no one here yet</b>
                            </td>
                        </tr>
                    ) : (
                        albums.map((album) => (
                            <tr key={album.pk}>
                                <td>{album.name}</td>
                                <td>{album.release_date}</td>
                                <td>{album.image_url }</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        );
    }
}

export default AlbumsList;