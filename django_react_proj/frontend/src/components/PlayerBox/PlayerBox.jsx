import React from "react";
import { Grid, Box, IconButton, Slider } from "@mui/material";
import { PlayArrow, Pause, SkipNext, SkipPrevious } from "@mui/icons-material";
import ProgressCircle from "../ProgressCircle/ProgressCircle";
import "../PlayerBox/PlayerBox.css";



function PlayerBox({ currentSong }) {
  const [playing, setPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const audioRef = React.useRef();

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
    <Grid container  className="progressCircle" alignItems="center" columnSpacing={2}>
      <Grid item xs={12} md={4} order={{ xs: 2, md: 3 }}>
        {/* Your ProgressCircle component */}
        <ProgressCircle
          percentage={100}
          isPlaying={true}
          size={290}
          color={"#333333"}
          image={"https://upload.wikimedia.org/wikipedia/en/d/d9/Imagine_Dragons_Mercury_album_cover_2022.webp"}
        />
      </Grid>
      <Grid  item xs={12} md={6} order={{ xs: 1, md: 2 }}>
        <Box className="playerBoxContainer" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2>Music Player</h2>
          {currentSong && (
            <div>
              {/* <img className="album-cover" src={album.image_url} alt="Album Cover" /> */}
              <h3>Title: {currentSong.title}</h3>
              <h4>Artist: {currentSong.artist}</h4>
              {/* Render the audio element without controls */}
              <audio
                ref={audioRef}
                src={currentSong.audio_file}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setPlaying(false)}
              />
              {/* Render custom play/pause button */}
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
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
      </Grid>
    </Grid>
  );
}

export default PlayerBox;