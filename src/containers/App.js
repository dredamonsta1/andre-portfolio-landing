import React, { useState } from "react";
import {hot} from "react-hot-loader";
import LandingPageCircle from "../components/LandingPageCircle/LandingPageCircle";
import LandingPageContainer from "../components/LandigPageContainer/LandingPageContainer";
// import Modal from "../components/Modal/Modal";
import LandingPageModal from "../components/LandingPageModal.js/LandingPageModal";
import LandingPageFooter from "../components/LandingPageFooter/LandingPageFooter";
import img from '../image/nyc.JPG';
import "./App.css";

// const [show, setShow] = useState(false);
function App() {
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
              <LandingPageContainer />
              <div className="contact-icons" alt="social media icons">
              
              <LandingPageModal />
              <LandingPageFooter />
              </div>
            </div>
          </div>
      </div>
    );
  }
        
export default hot(module)(App);
        