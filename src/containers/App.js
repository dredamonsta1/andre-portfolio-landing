import React, { Component } from "react";
import {hot} from "react-hot-loader";
import LandingPageCircle from "../components/LandingPageCircle/LandingPageCircle";
import LandingPageContainer from "../components/LandigPageContainer/LandingPageContainer";
import Modal from "../components/Modal/Modal";
import img from '../image/nyc.JPG';
import "./App.css";

function App() {
    return(
      <div className="app-background" style={{ backgroundImage:`url(${img} )`, backgroundRepeat: "no-repeat", width: '100%', height: '100%' }}>
      

        <LandingPageCircle />
        < LandingPageContainer />
        < Modal />
      </div>
    );
  
}

export default hot(module)(App);