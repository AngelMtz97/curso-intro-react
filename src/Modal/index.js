import React from "react";
import ReactDOM from 'react-dom';
import './Modal.css';
import { TodoContext } from "../TodoContext";

function Modal({children}){
    const { 
        openModal
      } = React.useContext(TodoContext);

  return ReactDOM.createPortal(
    <div className="modal-bg" style={{display: openModal ? 'block' : 'none'}}>
        <div className="modal-content">
        <div className="modal-header">
          <div></div>
          <span className="close" onClick={()=>{
            const modal = document.getElementsByClassName('modal-bg')[0];
            if(modal){
              modal.style.display = "none";
            }
            
          }}>&times;</span>
        </div>
        
        {children}
        </div>
    </div>,
    document.getElementById('modal')
  );
}

export {Modal};