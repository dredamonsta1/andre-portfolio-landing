import React, { useState } from "react";
import styles from "./Modal.module.css";



function Modal(props) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    


    // const handleClick = (event) =>{
    //     event.preventDefault();
    //     // event.listen.target
    //     console.log("you pressed landinPageModal");
    // }

    return (
        <div className={styles.listWork}>
            <div className={styles.modal}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Enter</h4>
                    </div>
                    <div className="modal-body">
                        This is Modal Content
                    </div>
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
            <button className="button" onClick={() => toggle()}>close me on modal</button>
            {
                modal ? <div className={styles.modal}>
                This is the modal
                </div> : null
            }
        </div>


        
    );
}


export default Modal;