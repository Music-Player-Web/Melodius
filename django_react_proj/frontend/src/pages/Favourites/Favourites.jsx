import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Favourites() {
  // Replace with your actual data
  const songs = [
    { title: 'Song 1', artist: 'Artist 1', duration: '3:45', embedData: '<iframe ... />' },
    { title: 'Song 2', artist: 'Artist 2', duration: '4:30', embedData: '<iframe ... />' },
    // Add more songs as needed
  ];

  return (
    <main role="main" style={{ marginTop: 50 }}>
      <div sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        height: 'calc(100vh - 50px)', // Adjust for the top margin
        width: '100%', 
        maxWidth: 360, 
        bgcolor: '#f5f5f5',
        margin: 'auto' // Center the div horizontally
      }}>
        <h1>Favourites</h1>
        <List>
          {songs.map((song, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${song.title} - ${song.artist}`}
                secondary={`Duration: ${song.duration}`}
              />
              <div dangerouslySetInnerHTML={{ __html: song.embedData }} />
            </ListItem>
          ))}
        </List>
      </div>
    </main>
  );
}
