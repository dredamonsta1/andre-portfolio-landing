import React from "react";
import styles from "./Modal.module.css";



const Modal = ({
    show
}) => {
    return <> {show ? 
        <div className={styles.listWork}>
            <div className={styles.modal}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Enter</h4>
                    </div>
                    <div className="modal-body">
                        <h1>This is Modal Content</h1>
                    </div>
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
        </div>
        
        : null}</>;
        
    };
    
    
    export default Modal;
