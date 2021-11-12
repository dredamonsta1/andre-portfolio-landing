import React, { useState } from "react";
import styles from "./LandingPageModal.module.css"
// import Modal from "../../../../src/components/Modal/Modal";


function LandingPageModal(props) {
    const [modal, setModal] = useState(false);
    // < Modal onClose={() => setShow(false)} show={show}/>
    const toggle = () => setModal(!modal);

    const handleClick = (event) =>{
        event.preventDefault();
        // event.listen.target
        console.log("you pressed landinPageModal");
    }

    return (
        <div className={styles.modalBtnContainer}>
            <button className={styles.intro} onClick={() => toggle()}>INTRO</button>
            <button className={styles.work} onClick={handleClick}>WORK</button>
            <button className={styles.about} onClick={handleClick}>ABOUT</button>
            <button className={styles.contact} onClick={handleClick}>CONTACT</button>
            </div>  
        );      
    }
        // <Modal />
        
        
        
        
        
export default LandingPageModal;