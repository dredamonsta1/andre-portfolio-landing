import React, { useState } from "react";
import {hot} from "react-hot-loader";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
// import LandingPageCircle from "../../andre-portfolio-react/src/components/LandingPageCircle/LandingPageCircle";
// import LandingPageContainer from "../../andre-portfolio-react/src/components/LandigPageContainer/LandingPageContainer";
import Modal from "../components/Modal/Modal";
// import LandingPageModal from "../../andre-portfolio-react/src/components/LandingPageModal/LandingPageModal";
// import LandingPageFooter from "../../andre-portfolio-react/src/components/LandingPageFooter/LandingPageFooter";
import img from '../image/nyc.JPG';
import "./App.css";
import "../components/LandingPageCircle.module.css";


library.add(fab, faCheckSquare, faCoffee)
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
      
      // <LandingPageCircle />
      // <LandingPageContainer />
      <LandingPageModal />
      <div className="contact-icons" alt="social media icons">
      
      <LandingPageFooter />
      </div>
      </div>
      </div>
      </div>
      );
    }
    
    export default hot(module)(App);
    