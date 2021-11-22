import ReactDOM from "react-dom";
import styles from "./Modal.module.css";



const Modal = ({show, close, title, children}) => {
    return ReactDOM.createPortal(
        <> {show ? 
            <div className={styles.listWork} onClick={() => close()}>
                <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.intro}>
                    <header className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>{title}</h2>
                    <button claseName={styles.topClose} onClick={() => close()}>X</button>
                        </header>
                        <main className={styles.modalContent}>{children}</main>
                        <footer className={styles.modalFooter}>
                            <button className={styles.modalClose} onClick={() => close()}>Close</button>
                            <button className={styles.submit}>submit</button>
    
                        </footer>
                    </div>
                </div>
            </div>
            
            : null}</>, 
            document.getElementById("modal")

    );
        
};
    
    
    export default Modal;
