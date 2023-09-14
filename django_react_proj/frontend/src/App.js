import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Albums from "./pages/Albums/Albums";
import AlbumSongs from "./pages/AlbumSongs/AlbumSongs";
import Genres from "./pages/Genres/Genres";
import Playlist from "./pages/Playlist/Playlist";
import Playlists from "./pages/Playlists/Playlists";
import Discover from "./pages/Discover/Discover";
import AuthPage from './pages/AuthPage/AuthPage';
import { getUser } from './utilities/users-service';
import Artists from "./pages/Artists/Artists";
import StandardLayoutWithNav from './pages/Layouts/StandardLayoutWithNav';
import StandardLayoutWithOutNav from './pages/Layouts/StandardLayoutWithOutNav';
import './App.css';
import ArtistSongs from "./pages/ArtistSongs/ArtistSongs";
import GenreSongs from "./pages/GenreSongs/GenreSongs";
import "typeface-oswald";

export default function App() {
  // const [currentSong, setCurrentSong] = useState(null);
  const [user, setUser] = useState(getUser());

  // const handlePlay = (song) => {
  //   setCurrentSong(song);
  // };

  return (
    <Router>


      {user ? (
        <>
          <Routes>

            <Route path="/" element={<StandardLayoutWithNav />} >
              <Route index element={<Discover />} />
            </Route>
            <Route path="/Albums" element={<StandardLayoutWithNav />} >
              <Route index element={<Albums />} />
            </Route>
            <Route path="/albums/:albumId/songs" element={<StandardLayoutWithNav />} >
              <Route index element={<AlbumSongs />} />
            </Route>
            <Route path="/Artists" element={<StandardLayoutWithNav />} >
              <Route index element={<Artists />} />
            </Route>
            <Route path="/artists/:artistId/songs" element={<StandardLayoutWithNav />} >
              <Route index element={<ArtistSongs />} />
            </Route>
            <Route path="/Genres" element={<StandardLayoutWithNav />} >
              <Route index element={<Genres />} />
            </Route>
            <Route path="/genres/:genreId/songs" element={<StandardLayoutWithNav />} >
              <Route index element={<GenreSongs />} />
            </Route>
            <Route path="/Playlists" element={<StandardLayoutWithNav />} >
              <Route index element={<Playlists  user={user}/>} />
            </Route>
            <Route path="/Playelist" element={<StandardLayoutWithNav />} >
              <Route index element={<Playlist />} />
            </Route>
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/Auth" element={<StandardLayoutWithOutNav />} >
              <Route index element={<AuthPage setUser={setUser} />} />
            </Route>
            <Route path="/" element={<StandardLayoutWithNav />} >
              <Route index element={<Discover />} />
            </Route>
            <Route path="/Albums" element={<StandardLayoutWithNav />} >
              <Route index element={<Albums />} />
            </Route>
            <Route path="/albums/:albumId/songs" element={<StandardLayoutWithNav />} >
              <Route index element={<AlbumSongs />} />
            </Route>
            <Route path="/Artists" element={<StandardLayoutWithNav />} >
              <Route index element={<Artists />} />
            </Route>
            <Route path="/artists/:artistId/songs" element={<StandardLayoutWithNav />} >
              <Route index element={<ArtistSongs />} />
            </Route>
            <Route path="/Genres" element={<StandardLayoutWithNav />} >
              <Route index element={<Genres />} />
            </Route>
            <Route path="/genres/:genreId/songs" element={<StandardLayoutWithNav />} >
              <Route index element={<GenreSongs />} />
            </Route>
          </Routes>

        </>
      )}

    </Router>
  );
}