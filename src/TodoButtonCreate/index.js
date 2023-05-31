import "./TodoButtonCreate.css";
import React from "react";
import { TodoContext } from "../TodoContext";


function TodoButtonCreate(props){
  const { 
    openModal, setOpenModal
  } = React.useContext(TodoContext);
    
    return (
        <div className="btn-container">
          <button onClick={(event)=>{
             setOpenModal(!openModal);
            // console.log(event.target)
          }}>{props.value}</button>
        </div>
    );
}

export {TodoButtonCreate};