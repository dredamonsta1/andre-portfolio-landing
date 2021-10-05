import React, { Component } from "react";
import {hot} from "react-hot-loader";
import LandingPageCircle from "./LandingPageCircle";
// import img from './image/IMG_5161.JPG';
// import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <p>help</p>
        <LandingPageCircle />
      </div>
    );
  }
}

export default hot(module)(App);