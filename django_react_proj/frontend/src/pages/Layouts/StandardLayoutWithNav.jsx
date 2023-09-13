import React from 'react';
import Grid from '@mui/material/Grid';
import Footer from "../../components/Footer/Footer";
import Home from "../Home";

import { Outlet, Link } from 'react-router-dom';

const StandardLayoutWithNav = function(props){
    return(
        <div className="main-body">

        <div className="musicOuterContainer">
          <Grid container>
            <Grid xs={12} md={8} order={{xs: 3, md:2}}>
              <Outlet></Outlet>
            </Grid>
            <Grid xs={12} md={4} order={{xs: 2, md:3}}>
              <Home />
            </Grid>
          </Grid>
        </div>

        <Footer />
      </div>
    );
}

export default StandardLayoutWithNav