import React, { Component } from "react";



function Modal(props) {
    if (!props.show) {
        return null
        console.log("hello modal")
    }

    const handleClick = (event) =>{
        event.preventDefault();
        // event.listen.target
        console.log("you pressed landinPageModal");
    }

    return (
        
        <div className="list-work">
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Enter</h4>
                    </div>
                    <div className="modal-body">
                        This is Modal Contentssss
                    </div>
                    <div className="modal-footer">
                        <button className="button" onClick={handleClick}>close</button>
                    </div>
                </div>
            </div>
        </div>


        
    );
}


export default Modal;