import * as React from 'react';
import { styled, createTheme, ThemeProvider, useTheme } from '@mui/material/styles'; // Add useTheme import
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import TextField from '@mui/material/TextField';
// import { Link } from 'react-router-dom';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AlbumIcon from '@mui/icons-material/Album';
import ClassIcon from '@mui/icons-material/Class';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import StarIcon from '@mui/icons-material/Star';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// ... Rest of the code remains the same

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#333333", // Set primary color to white
    },
    background: {
      default: "#333333", // Set default background color to white
    },
    typography: {
      fontFamily: "Trocchi, serif", // Set the desired font family
    },
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  color: "#333333",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,

    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  color: "#333333",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    const [searchQuery, setSearchQuery] = React.useState('');
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar position="fixed" open={open} >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
            <img style={{ width: "40px"}}
            src="./images/logo.png" 
            alt="Logo"
            className="logo"
            id="SideBar-logo"
        />
        </Typography>
        <TextField
        label="Search"
        value={searchQuery}
        onChange={handleSearchChange}
        InputLabelProps={{
        style: { color: 'white' },
      }}
        />
      
          </Toolbar>
        </AppBar >
        <Drawer variant="permanent" open={open}>
          <DrawerHeader >
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <React.Fragment>

              <ListItemButton style={{fontSize:"20px"}}>
                {/* <Link style={{ textDecoration: "none" }} to="/"> */}
                  <ListItemIcon>
                    <LibraryMusicIcon color="disabled" />                    
                  </ListItemIcon>
                  Discover
                {/* </Link> */}
              </ListItemButton>
              <ListItemButton>
                {/* <Link style={{ textDecoration: "none" }} to="/bookmark"> */}
                  <ListItemIcon>
                    <AlbumIcon color="disabled" />
                  </ListItemIcon>
                  Albums 
                {/* </Link> */}
              </ListItemButton>
              <ListItemButton>
                {/* <Link style={{ textDecoration: "none" }} to="/userbids"> */}
                  <ListItemIcon>
                    <ClassIcon color="disabled" />
                  </ListItemIcon>
                  Genres
                {/* </Link> */}
              </ListItemButton>
              <ListItemButton style={{fontSize:"20px"}}>
                {/* <Link style={{ textDecoration: "none" }} to="/"> */}
                  <ListItemIcon>
                    <LibraryBooksIcon color="disabled" />                    
                  </ListItemIcon>
                  Your Library
                {/* </Link> */}
              </ListItemButton>

              <ListItemButton>
                {/* <Link style={{ textDecoration: "none" }} to="/profile"> */}
                  <ListItemIcon>
                    <PlaylistPlayIcon color="disabled"/>
                  </ListItemIcon>
                  Recent
                {/* </Link> */}
              </ListItemButton>

    
                <React.Fragment>
                  <ListItemButton>
              
                      {/* <Link style={{ textDecoration: "none" }} to="/myauctions"> */}
                        <ListItemIcon>
                          <SubscriptionsIcon color="disabled"/>
                        </ListItemIcon>
                        PlayLists
                      {/* </Link> */}
      
                  </ListItemButton>
                  <ListItemButton>
              
                      {/* <Link style={{ textDecoration: "none" }} to="/newpost"> */}
                        <ListItemIcon>
                          <StarIcon color="disabled"/>
                        </ListItemIcon>
                        Favourites
                      {/* </Link> */}
   
                  </ListItemButton>

                  <ListItemButton style={{fontSize:"20px"}}>
              {/* <Link style={{ textDecoration: "none" }} to="/newpost"> */}
                <ListItemIcon >
                  <QueueMusicIcon color="disabled"/>
                </ListItemIcon>
                Your Playlists
              {/* </Link> */}

          </ListItemButton>
          <ListItemButton>
            
                    
            
                  </ListItemButton>
                  <Divider />
                  <ListItemButton>
                    <div className="nav-button">
                      <ListItemIcon>
                        <LogoutIcon color="disabled"/>
                      </ListItemIcon>
                      Log Out
                    </div>
                  </ListItemButton>
                </React.Fragment>
            
            </React.Fragment>
          </List>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}