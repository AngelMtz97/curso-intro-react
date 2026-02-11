import "./TodoButtonCreate.css";
function TodoButtonCreate({ 
    openModal, setOpenModal, value
  }){
    
    return (
        <div className="btn-container">
          <button onClick={(event)=>{
             setOpenModal(!openModal);
            // console.log(event.target)
          }}>{value}</button>
        </div>
    );
}

export {TodoButtonCreate};