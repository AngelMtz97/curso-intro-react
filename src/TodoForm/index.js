import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";

function TodoForm(){
  const {
    addTodo,
    editTodo,
    editValue,
    setEditValue,
    setOpenModal} = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState(editValue);

  const onSubmit = () => {

    addTodo(newTodoValue);
    setOpenModal(false);
    const listItems = document.getElementsByClassName('item-container');
    const lastItem = listItems[listItems.length - 1];
    if(lastItem){
      lastItem.scrollIntoView({behavior: "smooth"});
    }
    
  }

  const onSaveEdit = () => {
      editTodo(newTodoValue);
      setEditValue('');
      setOpenModal(false);
  }

  const onCancel = () => {
    setOpenModal(false);
    setEditValue("");
  }

  const onChange = (event) =>{
    setNewTodoValue(event.target.value);
  }

  return (
    <div className="form-container">
        <label>{editValue ? "Editar TODO" : "Nuevo TODO"}</label>
        <textarea 
           placeholder="Escribe un TODO"
           value={newTodoValue}
           onChange={onChange}
           required
        />
        
        <div className="TodoForm-buttonContainer">
            <button type="button"
            onClick={onCancel}
            className="TodoForm-button TodoForm-button--cancel"
            >Cancelar</button>

            {editValue 
               ? <button onClick={onSaveEdit} className="TodoForm-button TodoForm-button--add">Guardar</button>
               : <button onClick={onSubmit} className="TodoForm-button TodoForm-button--add">Añadir</button>
            }
            
        </div>
    </div>
  );
}

export { TodoForm };