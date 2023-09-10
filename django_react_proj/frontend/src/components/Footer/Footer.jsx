import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LinkUI from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {'Copyright © '} Designed &amp; Developed by {' '}
      <LinkUI color="inherit" href="/">
         Melodius-Team
      </LinkUI>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '60vh',
        }}
      >
        <CssBaseline />
      
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: "#333333",
          }}
        >
          <Container maxWidth="sm">
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}