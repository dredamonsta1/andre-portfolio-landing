import React, { useState } from "react";
import styles from "./LandingPageModal.module.css"
import Modal from "../Modal/Modal";
import ModalWork from "../ModalWork/ModalWork";
import ModalIntro from "../ModalIntro/ModalIntro";


function LandingPageModal(props) {
    const [modal, setModal] = useState(false);
   
    const toggle = () => setModal(!modal);

    

    return (
        <div className={styles.modalBtnContainer}>
        
        
        <ModalIntro />
        <ModalWork />
        <button className={styles.about} onClick={() => toggle()}>ABOUT</button>
        <button className={styles.contact} onClick={() => toggle()}>CONTACT</button>
        
        <Modal show={modal} close={toggle} title="props">
        
        This is the enter modal lets seeee
        </Modal>
        </div>  
        );      
    }
    
    
    
    export default LandingPageModal;
    // <button className={styles.intro} onClick={() => toggle()}>INTRO</button>
    // <button className={styles.work} onClick={() => toggle()}>WORK</button>