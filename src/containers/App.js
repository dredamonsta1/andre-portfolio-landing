import React, { useState } from "react";
import {hot} from "react-hot-loader";
import LandingPageCircle from "../components/LandingPageCircle/LandingPageCircle";
import LandingPageContainer from "../components/LandigPageContainer/LandingPageContainer";
import Modal from "../components/Modal/Modal";
import img from '../image/nyc.JPG';
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
    return(
      <div 
        className="app-background" 
        style={{ 
          backgroundImage:`url(${img} )`, 
          backgroundRepeat: "no-repeat", 
          width: '100%', 
          height: '100%' }}>
          <div className="filter-shade">
          <div className="small-container">
          
          <LandingPageCircle />
          < LandingPageContainer />
          <button className="intro" onClick={() => setShow(true) }>Show Modal</button>
          <button className="work">WORK</button>
          <button className="about">ABOUT</button>
          <button className="contact">CONTACT</button>
          < Modal onClose={() => setShow(false)} show={show}/>
          </div>
          </div>
      </div>
    );
}

export default hot(module)(App);