import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



function LandingPageFooter() {
    const element = <FontAwesomeIcon icon={faCoffee} size="3x" flip="horizontal" color="tan"/>
    const dreTweet = <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" spin color="blue"/>
    const dreGit = <FontAwesomeIcon icon={['fab', 'github']} size="3x" spin color="yellow"/>
    const dreYoutube = <FontAwesomeIcon icon={['fab', 'youtube']} size="3x" color="red"/>
    const dreLinkedin = <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" spin color="blue"/>


    return (
        <div className="contact-icons">
            
            <a href="https://www.linkedin.com/in/andre-wilkinson/">{dreLinkedin}</a>
            <a href="https://www.youtube.com/watch?v=6Us5s49NBwY">{dreYoutube}</a>
            <a href="https://www.ninebyfour.tech/">{element}</a>
            <a href="https://github.com/dredamonsta1">{dreGit}</a>
            <a href="https://twitter.com/dredamonsta1">{dreTweet}</a>
        
        </div>
    ); 

} 


export default LandingPageFooter;



