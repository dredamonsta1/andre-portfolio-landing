import React, { Component } from "react";
import "./LandingPageContainer.css";




function LandingPageContainer() {
    return (
        <div>
            <h1> is the container section.</h1>
            <div className="line-under-circle" />
            <div className="downline-top" />
            <div className="inner-paragraph">
                <h1>Andre Wilkinson</h1>
                <p>Fullstack trained frontend dev just enjoing learning everyday, embracing the chaos</p>
            </div>
            <div className="downline-bottom" />
        </div>
        );
}

export default LandingPageContainer;