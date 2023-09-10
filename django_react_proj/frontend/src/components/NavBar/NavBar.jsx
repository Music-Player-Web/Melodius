import * as React from 'react';
import { styled, createTheme, ThemeProvider, useTheme } from '@mui/material/styles'; // Add useTheme import
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
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
    secondary: {
      main: '#fff'
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
            {/* <Typography variant="h6" noWrap component="div"> */}
            <img style={{ width: "40px"}}
            src="./images/logo.png" 
            alt="Logo"
            className="logo"
            id="SideBar-logo"
        />
        {/* </Typography> */}
        <TextField
        label="Search"
        value={searchQuery}
        onChange={handleSearchChange}
        InputLabelProps={{
        style: { color: 'black'},
      }}
      style={{background: 'white', margin:'10px'}}
        />
      
          </Toolbar>
        </AppBar >
        <Drawer className={"moo"} variant="permanent" open={open}>
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
          <List style={{background: '#333333'}}>
            <React.Fragment>

              <ListItemButton style={{fontSize:"20px", color: 'white'}}>
                <Link style={{ textDecoration: "none" }} to="/"> 
                  <ListItemIcon>
                    <LibraryMusicIcon color="secondary" />                    
                  </ListItemIcon>
                  Discover
                </Link>
              </ListItemButton>
              <ListItemButton style={{color: 'white'}}>
                <Link style={{ textDecoration: "none" }} to="/Albums">
                  <ListItemIcon>
                    <AlbumIcon color="secondary" />
                  </ListItemIcon>
                  Albums
                </Link>
              </ListItemButton>
              <ListItemButton style={{color: 'white'}}>
                <Link style={{ textDecoration: "none" }} to="/Genres">
                  <ListItemIcon>
                    <ClassIcon color="secondary" />
                  </ListItemIcon>
                  Genres
                </Link>
              </ListItemButton>
              <ListItemButton style={{fontSize:"20px", color: 'white'}}>
                {/* <Link style={{ textDecoration: "none" }} to="/"> */}
                  <ListItemIcon>
                    <LibraryBooksIcon color="secondary" />                    
                  </ListItemIcon>
                  Your Library
                {/* </Link> */}
              </ListItemButton>

              <ListItemButton style={{color: 'white'}}>
                <Link style={{ textDecoration: "none" }} to="/Recent">
                  <ListItemIcon>
                    <PlaylistPlayIcon color="secondary"/>
                  </ListItemIcon>
                  Recent
                </Link>
              </ListItemButton>

    
                <React.Fragment>
                  <ListItemButton style={{color: 'white'}}>
              
                      <Link style={{ textDecoration: "none" }} to="/Playlists">
                        <ListItemIcon>
                          <SubscriptionsIcon color="secondary"/>
                        </ListItemIcon>
                        PlayLists
                      </Link>
      
                  </ListItemButton>
                  <ListItemButton style={{color: 'white'}}>
              
                      <Link style={{ textDecoration: "none" }} to="/Favourites">
                        <ListItemIcon>
                          <StarIcon color="secondary"/>
                        </ListItemIcon>
                        Favourites
                      </Link>
   
                  </ListItemButton>

                  <ListItemButton style={{fontSize:"20px", color: 'white'}}>
              {/* <Link style={{ textDecoration: "none" }} to="/Playlists"> */}
                <ListItemIcon >
                  <QueueMusicIcon color="secondary"/>
                </ListItemIcon>
                Your Playlists
              {/* </Link> */}

          </ListItemButton>
          <ListItemButton>
            
                    
            
                  </ListItemButton>
                  <Divider />
                  <ListItemButton style={{color: 'white'}}>
                      <ListItemIcon>
                        <LogoutIcon color="secondary"/>
                      </ListItemIcon>
                      Log Out
                  </ListItemButton>
                </React.Fragment>
            
            </React.Fragment>
          </List>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}