import React from "react";
import './EmptyTodos.css';

function EmptyTodos({message}){
    return (
       <h3>{message}</h3>
    );
}

export { EmptyTodos };