import React from 'react';
import Grid from '@mui/material/Grid';
import Footer from "../../components/Footer/Footer";
import Home from "../Home";

import { Outlet, Link } from 'react-router-dom';

const StandardLayoutWithNav = function(props){
    return(
        <div className="main-body">

        <div className="musicOuterContainer">

              <Outlet></Outlet>
              <Home />
            
        </div>

        <Footer />
      </div>
    );
}

export default StandardLayoutWithNav