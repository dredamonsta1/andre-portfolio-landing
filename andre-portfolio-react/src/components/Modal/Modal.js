import React from "react";
import styles from "./Modal.module.css";



const Modal = ({
    show
}) => {
    return <> {show ? 
        <div className={styles.listWork}>
            <div className={styles.modal}>
                <div className={styles.intro}>
                <header className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>INTRO</h2>
                <button claseName={styles.topClose}>X</button>
                    </header>
                    <main className={styles.modalContent}>This is Modal Content</main>
                    <footer className={styles.modalFooter}>
                        <button className={styles.modalClose}>Close</button>
                        <button className={styles.submit}>submit</button>

                    </footer>
                </div>
            </div>
        </div>
        
        : null}</>;
        
};
    
    
    export default Modal;
