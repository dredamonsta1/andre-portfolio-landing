import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



function LandingPageFooter() {

    
    const element = <FontAwesomeIcon icon={faCoffee} />
    const dreTweet = <FontAwesomeIcon icon={['fab', 'twitter']} />
    const dreGit = <FontAwesomeIcon icon={['fab', 'github']} />
    const dreYoutube = <FontAwesomeIcon icon={['fab', 'youtube']} />
    const dreLinkedin = <FontAwesomeIcon icon={['fab', 'linkedin']} />


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



