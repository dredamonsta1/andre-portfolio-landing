import React from "react";

import Modal from "../Modal/Modal";




function LandingPageModal() {
    return (
        <div className="modal-buttons">
            <button className="intro" onClick={() => setShow(true) }>INTRO</button>
            <button className="work">WORK</button>
            <button className="about">ABOUT</button>
            <button className="contact">CONTACT</button>
            < Modal onClose={() => setShow(false)} show={show}/>
        </div>  
    );      
}
    




export default LandingPageModal;