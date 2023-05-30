import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch(){

    const { 
        searchValue, setSearchValue} = React.useContext(TodoContext);
   
    return (
        <div className="search-container">
        <input 
            id="search" 
            placeholder="Search a TODO" 
            type="text"
            value={searchValue}
            onChange={(event)=>{
                setSearchValue(event.target.value);
            }}  
        />
        </div>
    );
}

export {TodoSearch};