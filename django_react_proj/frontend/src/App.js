import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favourites from "./pages/Favourites/Favourites";
import Albums from "./pages/Albums/Albums";
import Genres from "./pages/Genres/Genres";
import Playlist from "./pages/Playlist/Playlist";
import Playlists from "./pages/Playlists/Playlists";
import Recent from "./pages/Recent/Recent";
import Discover from "./pages/Discover/Discover";
import './App.css';
export default function App() {
  const [currentSong, setCurrentSong] = useState(null);

  const handlePlay = (song) => {
    setCurrentSong(song);
  };

  return (
    
    // <Fragment>
    //   <NavBar />
    //   <SideBar />
    //   <Footer />
    // </Fragment>
    <Router>
      <div className="main-body">
        <NavBar />
        <SideBar />
        <Home />
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/Playlists" element={<Playlists />} />
          <Route path="/Albums" element={<Albums />} />
          <Route path="/Playelist" element={<Playlist />} />
          <Route path="/Favourites" element={<Favourites />} />
          <Route path="/Recent" element={<Recent />} />
          <Route path="/Genres" element={<Genres />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

