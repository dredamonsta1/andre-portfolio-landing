import React, { Component } from "react";



function Modal(props) {
    if (!props.show) {
        return null
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
                    </div>
                    </div>
                    </div>
                    </div>
                    
                    
                    
                    );
                    // <button className="button" onClick={props.onClise}>close</button>
}


export default Modal;