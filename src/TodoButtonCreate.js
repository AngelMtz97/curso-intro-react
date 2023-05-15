import "./TodoButtonCreate.css";

function TodoButtonCreate(props){
    return (
        <div className="btn-container">
          <button onClick={(event)=>{
            console.log('le diste click')
            console.log("event target")
            console.log(event.target)
          }}>{props.value}</button>
        </div>
    );
}

export {TodoButtonCreate};