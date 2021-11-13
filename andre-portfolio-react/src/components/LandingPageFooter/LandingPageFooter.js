import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { faTwitter, faYoutube, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import styles from "./LandingPageFooter.module.css";



function LandingPageFooter() {
    const element = <FontAwesomeIcon icon={faCoffee} size="3x" flip="horizontal" color="tan"/>
    const dreTweet = <FontAwesomeIcon icon={faTwitter} size="3x" spin color="lightblue"/>
    const dreGit = <FontAwesomeIcon icon={faGithub} size="3x" spin color="yellow"/>
    const dreYoutube = <FontAwesomeIcon icon={faYoutube} size="3x" color="red"/>
    const dreLinkedin = <FontAwesomeIcon icon={faLinkedin} size="3x" spin color="gray"/>


    return (
        <div className={styles.contactIcons}>
            
            <a href="https://www.linkedin.com/in/andre-wilkinson/">{dreLinkedin}</a>
            <a href="https://www.youtube.com/watch?v=6Us5s49NBwY">{dreYoutube}</a>
            <a href="https://www.ninebyfour.tech/">{element}</a>
            <a href="https://github.com/dredamonsta1">{dreGit}</a>
            <a href="https://twitter.com/dredamonsta1">{dreTweet}</a>
        
        </div>
    ); 
} 
export default LandingPageFooter;



