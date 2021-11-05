import React, { useState } from "react";

import Modal from "../Modal/Modal";


function LandingPageModal(props) {
    // const [modal, setModal] = useState(false);
    // < Modal onClose={() => setShow(false)} show={show}/>

    const handleClick = (event) =>{
        event.preventDefault();
        // event.listen.target
        console.log("you pressed landinPageModal");
    }

    return (
        <div className="modal-btn-container">
        <button className="intro" onClick={handleClick}>INTRO</button>

            <button className="work" onClick={handleClick}>WORK</button>
            <button className="about" onClick={handleClick}>ABOUT</button>
            <button className="contact" onClick={handleClick}>CONTACT</button>
            </div>  
            );      
        }
        // <Modal />
        
        
        
        
        
        export default LandingPageModal;