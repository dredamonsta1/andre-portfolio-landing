import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faTwitter, faLinkedin  } from '@fortawesome/free-solid-svg-icons'
// import Modal from '../Modal/Modal';



function LandingPageFooter() {


    const element = <FontAwesomeIcon icon={faCoffee} rotation={90}/>
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    const linkedin = <FontAwesomeIcon icon={faLinkedin} />
    
    

    return (
        <div className="contact-icons">
        
        
        
        <a href="https://www.linkedin.com/in/andre-wilkinson/">{element}</a>
        <a href="https://www.youtube.com/watch?v=6Us5s49NBwY">{element}</a>
        <a href="https://www.ninebyfour.tech/"><i className="fa fa-laptop">Website</i></a>
        <a href="https://github.com/dredamonsta1"><i className="fa fa-github"></i>github</a>
        <a href="https://twitter.com/dredamonsta1">{twitter}</a>
        <div><i className="fa fa-spinner fa-spin">no spinner but why</i></div>;
        
        </div>
        ); 
        
    } 
    
    
    export default LandingPageFooter;
    
    
    
