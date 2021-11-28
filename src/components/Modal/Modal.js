import React, { useState } from "react";



function Modal(props) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    


    // const handleClick = (event) =>{
    //     event.preventDefault();
    //     // event.listen.target
    //     console.log("you pressed landinPageModal");
    // }

    return (
        <div className="list-work">
            <div className="modal">
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
            <button className="button" onClick={() => toggle()}>close</button>
            {
                modal ? <div className="modal">
                This is the modal
                </div> : null
            }
        </div>


        
    );
}


export default Modal;