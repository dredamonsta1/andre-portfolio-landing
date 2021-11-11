import React, { Component }from "react";
import styles from './LandingPageCircle.module.css';



function LandingPageCircle(props) {
    const Andre = "aw";
    return (
        <div className="circle">
            <span className="aw-span"><h1>aw{props.Andre}</h1> </span> 
        </div>
    );

}

export default LandingPageCircle;