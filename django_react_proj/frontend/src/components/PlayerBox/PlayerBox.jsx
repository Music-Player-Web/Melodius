import React from "react";

const MusicPlayer = ({ currentSong }) => {
  return (
    <div>
      <h2>Music Player</h2>
      {currentSong && (
        <div>
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