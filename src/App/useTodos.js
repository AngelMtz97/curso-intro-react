import React from "react";
import { useLocalStorage } from './useLocalStorage';

function useTodos(){

    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error} = useLocalStorage('TODOS_V1', []);
     
     const [searchValue, setSearchValue] = React.useState('');
     const [editValue, setEditValue] = React.useState('');
     const [openModal, setOpenModal] = React.useState(false);
   
     const completedTodos = todos.filter(item => {
       return item.completed === true; 
     }).length;
   
     const totalTodos = todos.length;
   
     const searchedTodos = todos.filter((item) =>{ 
         const todoText = item.text.toLocaleLowerCase();
         const searchText = searchValue.toLocaleLowerCase();
         // searchValue.trim() !== '' && searchValue.length > 0 && 
         return todoText.includes(searchText);
     });

     const addTodo = (texto) => {
            const newTodos = [...todos];
            newTodos.push({
                text: texto,
                completed: false
            });
           saveTodos(newTodos);
     }

     const editTodo = (newTexto) => {

        const newTodos = [...todos];
          
        let itemIndex = newTodos.findIndex((item) => {
          return item.text.toLocaleLowerCase() === editValue.toLocaleLowerCase();
        })

        newTodos[itemIndex] = {text: newTexto, completed:  newTodos[itemIndex].completed};

        saveTodos(newTodos);

     }

     const itemEditHandler = (newEditValue) => {
        setOpenModal(true);
        setEditValue(newEditValue);
     }
   
     const itemDeleteHandler = (value) => {
          const result = todos.filter((item) => {
               return item.text !== value;
          });
   
          saveTodos(result);
     }
   
     const itemDoneHandler = (value) => {
          const result = todos.map((item)=>{
               return item.text === value ? {text : item.text, completed: !item.completed} : item;
          })
   
          saveTodos(result);
     }
   
     const allTodosCompleted = () => {
        return (completedTodos === totalTodos) && totalTodos !== 0;
     }

    return {loading,
            error,
            allTodosCompleted,
            completedTodos,
            totalTodos,
            searchValue,
            editValue,
            setEditValue,
            setSearchValue,
            searchedTodos,
            itemEditHandler,
            itemDeleteHandler,
            itemDoneHandler,
            openModal,
            setOpenModal,
            addTodo,
            editTodo};
}


export {
useTodos
};