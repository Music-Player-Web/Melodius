import React from "react";
// import ProgressCircle from "../ProgressCircle/ProgressCircle";
const MusicPlayer = ({ currentSong }) => {
  return (
    <div>
      <h2>Music Player</h2>
      {currentSong && (
        <div>
          {/* <ProgressCircle
          percentage={100}
          isPlaying={true}
          size={300}
          color={"#333333"}
          image={"https://upload.wikimedia.org/wikipedia/en/d/d9/Imagine_Dragons_Mercury_album_cover_2022.webp"}
        /> */}
          <h3>Title: {currentSong.title}</h3>
          <h4>Artist: {currentSong.artist}</h4>
          {/* Render the audio player with the source of the current song */}
          <audio controls src={currentSong.audio_file} />
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;