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
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { Link, useNavigate } from 'react-router-dom';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AlbumIcon from '@mui/icons-material/Album';
import ClassIcon from '@mui/icons-material/Class';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LogoutIcon from '@mui/icons-material/Logout';
import { logOut } from '../../utilities/users-service';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { Typography } from '@mui/material';
import "typeface-lato";


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
    third:{
    main: "red"
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

export default function MiniDrawer({user, setUser}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  function handleLogOut() {
    logOut();
    setUser(null);
    navigate('/');
  }


  // const [searchQuery, setSearchQuery] = React.useState('');

  // const handleSearchChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };

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
            <Box component="img" src="/images/logo.png" alt="Logo" sx={{ width: "60px" , margin: "10px"}} />
            <Typography variant='h4' fontFamily="Lato">
              Melodius
            </Typography>
            {/* </Typography> */}
            { !user ? (
              <List sx={{flexGrow: 1}}>
              <ListItem>
            <ListItemButton style={{ color: 'white', display:'grid',justifyContent:'end' }} className='log'>
            <Link  style={{ textDecoration: "none" , color: "white"}} to="/Auth">
              {/* <ListItemIcon>
                <LoginIcon color="secondary" />
              </ListItemIcon> */}
              <ListItemText primary="Login"/>
              </Link>
          </ListItemButton>
          </ListItem>
          </List>
            ) : null}

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
          <List style={{ background: '#333333', marginTop:"20px" }}>
            <React.Fragment>

              <ListItemButton style={{ fontSize: "20px", color: 'white' }}>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  <ListItemIcon>
                    <LibraryMusicIcon color="third" />
                  </ListItemIcon>
                  </Link>
              <Link style={{color:'red', textDecoration: 'none'}}>Discover</Link>

              </ListItemButton>
              <ListItemButton style={{ color: 'white' }}>
                <Link  style={{ textDecoration: "none", color: "white"}} to="/Albums">
                  <ListItemIcon>
                    <AlbumIcon color="secondary" />
                  </ListItemIcon>
                  Album
                  </Link>
              </ListItemButton>
            
              <ListItemButton style={{ color: 'white' }}>
                <Link style={{ textDecoration: "none", color: "white" }} to="/Artists">
                  <ListItemIcon>
                    <AccessibilityNewIcon color="secondary" />
                  </ListItemIcon>
                  Artist
                  </Link>
              </ListItemButton>
              <ListItemButton style={{ color: 'white' }}>
                <Link style={{ textDecoration: "none" , color: "white"}} to="/Genres">
                  <ListItemIcon>
                    <ClassIcon color="secondary" />
                  </ListItemIcon>
                  Genres
                </Link>
              </ListItemButton>
            
           
             
              <React.Fragment>
              {user ? (
                <ListItemButton style={{ color: 'white' }}>

                  <Link style={{ textDecoration: "none", color: "white" }} to="/Playlists">
                    <ListItemIcon>
                      <SubscriptionsIcon color="secondary" />
                    </ListItemIcon>
                    PlayLists
                  </Link>
                  
                </ListItemButton>
                ) : null }
                
                
               
            
                <Divider />
                { user ? (
                 
                <ListItemButton style={{ color: 'white'}}>
                <Link style={{ textDecoration: "none" , color: "white"}} to="/" onClick={handleLogOut}>
              <ListItemIcon>
                    <LogoutIcon color="secondary" />
                  </ListItemIcon>
                   Log Out
                  
                  </Link>
                </ListItemButton>
               
                ) : null }
                
              </React.Fragment>

            </React.Fragment>
          </List>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}