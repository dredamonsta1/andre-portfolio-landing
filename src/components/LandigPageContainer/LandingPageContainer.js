import React, { Component } from "react";
import styles from "./LandingPageContainer.module.css";




function LandingPageContainer() {
    return (
        <div>
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