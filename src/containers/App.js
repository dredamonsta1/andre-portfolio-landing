import React, { Component } from "react";
import {hot} from "react-hot-loader";
import LandingPageCircle from "../components/LandingPageCircle/LandingPageCircle";
import LandingPageContainer from "../components/LandigPageContainer/LandingPageContainer";
// import img from './image/IMG_5161.JPG';
// import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <p>help</p>
        <LandingPageCircle />
        < LandingPageContainer />
      </div>
    );
  }
}

export default hot(module)(App);