
import "./TodoSearch.css";

function TodoSearch({searchValue, setSearchValue}){
   
    return (
        <div className="search-container">
        <input 
            id="search" 
            placeholder="Buscar un TODO" 
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