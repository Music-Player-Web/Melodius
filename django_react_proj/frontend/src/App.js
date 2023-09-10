import React, { Fragment } from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";
import './App.css';
export default function App() {
  return (
    <Fragment>
      <NavBar />
      <SideBar />
      <Footer />
    </Fragment>
  );
}

