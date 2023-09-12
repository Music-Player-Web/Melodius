import React from 'react';
import Grid from '@mui/material/Grid';
import Footer from "../../components/Footer/Footer";

import { Outlet, Link } from 'react-router-dom';

const StandardLayoutWithOutNav = function(props){
    return(
        <div className="main-body">

        <div className="musicOuterContainer">
          <Grid container>
            <Grid xs={12}>
              <Outlet></Outlet>
            </Grid>
            
          </Grid>
        </div>

        <Footer />
      </div>
    );
}

export default StandardLayoutWithOutNav