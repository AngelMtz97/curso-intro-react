import React from "react";
import ReactDOM from 'react-dom';
import './Modal.css';
import { TodoContext } from "../TodoContext";

function Modal({children}){
    const { 
        openModal
      } = React.useContext(TodoContext);

  return ReactDOM.createPortal(
    <div className="modal" style={{display: openModal ? 'block' : 'none'}}>
        <div className="modal-content">
        <span class="close" onClick={()=>{
           const modal = document.getElementsByClassName('modal')[0];
           modal.style.display = "none";
        }}>&times;</span>
        {children}
        </div>
    </div>,
    document.getElementById('modal')
  );
}

export {Modal};