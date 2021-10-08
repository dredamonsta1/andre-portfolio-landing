import React, { Component } from "react";
import {hot} from "react-hot-loader";
import LandingPageCircle from "../components/LandingPageCircle/LandingPageCircle";
import LandingPageContainer from "../components/LandigPageContainer/LandingPageContainer";
import Modal from "../components/Modal/Modal";
import img from '../image/aurora.jpg';
import "./App.css";

function App() {
    return(
      <div className="app-background" styles={{ backgroundImage:'url(' +img + ')' }}>
      

        <LandingPageCircle />
        < LandingPageContainer />
        < Modal />
      </div>
    );
  
}

export default hot(module)(App);