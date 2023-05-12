import "./TodoButtonCreate.css";

function TodoButtonCreate(props){
    return (
        <div className="btn-container">
          <button>{props.value}</button>
        </div>
    );
}

export {TodoButtonCreate};