import ReactDOM from 'react-dom';
import './Modal.css';

function Modal(props){


  return ReactDOM.createPortal(
    <div className="modal-bg" style={{display: props.openModal ? 'block' : 'none'}}>
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
        
        {props.children}
        </div>
    </div>,
    document.getElementById('modal')
  );
}

export {Modal};