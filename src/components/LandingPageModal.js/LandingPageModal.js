import React from "react";

import Modal from "../Modal/Modal";




function LandingPageModal() {
    return (
        <div className="modal-btn-container">
            <button className="intro" onClick={() => setShow(true) }>INTRO</button>
            <button className="work">WORK</button>
            <button className="about">ABOUT</button>
            <button className="contact">CONTACT</button>
        </div>  
    );      
}
    
    // < Modal onClose={() => setShow(false)} show={show}/>




export default LandingPageModal;