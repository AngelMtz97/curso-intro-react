import "./TodoSearch.css";

function TodoSearch(){
    return (
        <div className="search-container">
        <input id="search" placeholder="Search a TODO" type="text"/>
        </div>
    );
}

export {TodoSearch};