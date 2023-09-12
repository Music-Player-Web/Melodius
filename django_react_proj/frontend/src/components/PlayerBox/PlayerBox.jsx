
import React from "react";
import ProgressCircle from "../ProgressCircle/ProgressCircle";
import React, { useEffect, useState } from "react";
import { Box, IconButton, Slider } from '@mui/material';
import { PlayArrow, Pause, SkipNext, SkipPrevious } from '@mui/icons-material';

const MusicPlayer = ({ currentSong }) => {
  const [playing, setPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  // const [album, setAlbum] = useState(null);
  const audioRef = React.useRef();

  // useEffect(() => {
  //   // Replace 'http://localhost:8000/albums/' with your Django API endpoint
  //   fetch('http://localhost:8000/albums/')
  //     .then(response => response.json())
  //     .then(data => {
  //       // Find the album that matches the current song
  //       const album = data.find(album => album.name === currentSong.album);
  //       setAlbum(album);
  //     });
  // }, [currentSong]);

  const handlePlayPause = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleTimeUpdate = () => {
    const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(progress);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Music Player</h2>
      {currentSong && (
        <div>
          <ProgressCircle
          percentage={100}
          isPlaying={true}
          size={300}
          color={"#333333"}
          image={"https://upload.wikimedia.org/wikipedia/en/d/d9/Imagine_Dragons_Mercury_album_cover_2022.webp"}
        />
          {/* <img className="album-cover" src={album.image_url} alt="Album Cover" /> */}
          <h3>Title: {currentSong.title}</h3>
          <h4>Artist: {currentSong.artist}</h4>
          {/* Render the audio element without controls */}
          <audio ref={audioRef} src={currentSong.audio_file} onTimeUpdate={handleTimeUpdate} onEnded={() => setPlaying(false)} />
          {/* Render custom play/pause button */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconButton>
              <SkipPrevious />
            </IconButton>
            <IconButton onClick={handlePlayPause}>
              {playing ? <Pause /> : <PlayArrow />}
            </IconButton>
            <IconButton>
              <SkipNext />
            </IconButton>
          </Box>
          {/* Render progress slider */}
          <Slider value={progress} onChange={(e, newValue) => setProgress(newValue)} />
        </div>
      )}
    </Box>
  );
};

export default MusicPlayer;





// import React, { useEffect, useState } from "react";


// const MusicPlayer = ({ currentSong }) => {
//   const [album, setAlbum] = useState(null);

//   useEffect(() => {
//     // Replace 'http://localhost:8000/albums/' with your Django API endpoint
//     fetch('http://localhost:8000/albums/')
//       .then(response => response.json())
//       .then(data => {
//         // Find the album that matches the current song
//         const album = data.find(album => album.name === currentSong.album);
//         setAlbum(album);
//       });
//   }, [currentSong]);

//   return (
//     <div className="music-player">
//       <h2>Music Player</h2>
//       {currentSong && album && (
//         <div>
//           <img className="album-cover" src={album.image_url} alt="Album Cover" />
//           <h3>Title: {currentSong.title}</h3>
//           <h4>Artist: {currentSong.artist}</h4>
//           {/* Render the audio player with the source of the current song */}
//           <audio controls src={currentSong.audio_file} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default MusicPlayer;
