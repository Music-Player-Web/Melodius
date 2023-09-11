import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Albums() {
  // Replace with your actual data
  const albums = [
    { title: 'Album 1', coverImage: 'https://via.placeholder.com/150' },
    { title: 'Album 2', coverImage: 'https://via.placeholder.com/150' },
    // Add more albums as needed
  ];

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 2fr))',
      gap: '1rem',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh - 50px)', // Adjust for the top margin
      width: '100%', 
      maxWidth: 360, 
      margin: 'auto' // Center the div horizontally
    }}>
      <h1>Albums</h1>
      {albums.map((album, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={album.coverImage}
            alt={album.title}
          />
          <Typography gutterBottom variant="h5" component="div">
            {album.title}
          </Typography>
        </Card>
      ))}
    </div>
  );
}