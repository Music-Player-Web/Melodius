import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Genres() {
  // Replace with your actual data
  const genres = [
    { name: 'Genre 1', image: 'https://via.placeholder.com/150' },
    { name: 'Genre 2', image: 'https://via.placeholder.com/150' },
    // Add more genres as needed
  ];

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '1rem',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh - 50px)', // Adjust for the top margin
      width: '100%', 
      maxWidth: 360, 
      margin: 'auto' // Center the div horizontally
    }}>
      <h1>Genres</h1>
      {genres.map((genre, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={genre.image}
            alt={genre.name}
          />
          <Typography gutterBottom variant="h5" component="div">
            {genre.name}
          </Typography>
        </Card>
      ))}
    </div>
  );
}
