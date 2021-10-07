import React, { Component } from "react";
import {hot} from "react-hot-loader";
import LandingPageCircle from "../components/LandingPageCircle/LandingPageCircle";
import LandingPageContainer from "../components/LandigPageContainer/LandingPageContainer";
import Modal from "../components/Modal/Modal";
// import img from '../image/IMG_5161.JPG';
// import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App" style={{ backgroundImage: 'url(../image/IMG_5161.JPG)'}}>

        <LandingPageCircle />
        < LandingPageContainer />
        < Modal />
      </div>
    );
  }
}

export default hot(module)(App);