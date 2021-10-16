import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import Modal from '../Modal/Modal';



function LandingPageFooter() {


    const element = <FontAwesomeIcon icon={faCoffee} />

    return (
        <div className="contact-icons">
        
        
        
        <a href="https://www.linkedin.com/in/andre-wilkinson/"><i className="fa fa-linkedin"></i>linkedin</a>
        <a href="https://www.youtube.com/watch?v=6Us5s49NBwY">youtube {element}</a>
        <a href="https://www.ninebyfour.tech/"><i className="fa fa-laptop">Website</i></a>
        <a href="https://github.com/dredamonsta1"><i className="fa fa-github"></i>github</a>
        <a href="https://twitter.com/dredamonsta1"><i className="fa fa-twitter"></i>twitter</a>
        
        </div>
        ); 
        
    } 
    
    
    export default LandingPageFooter;
    
    
    
