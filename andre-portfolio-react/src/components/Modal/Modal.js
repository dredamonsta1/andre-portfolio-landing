import React from "react";
import styles from "./Modal.module.css";



const Modal = ({
    show
}) => {
    return <> {show ? 
        // <div className={styles.listWork}>
            <div className={styles.modal}>
                <div className={styles.intro}>
                    <div className="modal-header">
                        <h1 className="modal-title">INTRO</h1>
                    </div>
                    <div className="modal-body">
                        <h3>This is Modal Content</h3>
                    </div>
                    <div className="modal-footer">
                        <button className="modal-close">Close</button>
                        <button className="submit">submit</button>

                    </div>
                </div>
            </div>
        // </div>
        
        : null}</>;
        
    };
    
    
    export default Modal;
