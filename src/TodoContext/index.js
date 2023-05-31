import React from "react";
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({children}){

    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error} = useLocalStorage('TODOS_V1', []);
     
     const [searchValue, setSearchValue] = React.useState('');
     const [openModal, setOpenModal] = React.useState(false);
   
     const completedTodos = todos.filter(item => {
       return item.completed === true; 
     }).length;
   
     const totalTodos = todos.length;
   
     console.log('Log 1');
     
   /*   React.useEffect(() => {
        console.log('Log 2');
     }, []) */
   
     React.useEffect(() => {
        console.log('Log 2');
     }, [totalTodos])
   
     console.log('Log 3');
   
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
   
     const itemDeleteHandler = (value) => {
          const result = todos.filter((item) => {
               return item.text !== value;
          });
   
          saveTodos(result);
     }
   
     const itemDoneHandler = (value) => {
          const result = todos.map((item)=>{
               return item.text === value ? {text : item.text, completed: true} : item;
          })
   
          saveTodos(result);
     }
   
     const allTodosCompleted = () => {
        return (completedTodos === totalTodos) && totalTodos !== 0;
     }

    return (
        <TodoContext.Provider value={
            {loading,
            error,
            allTodosCompleted,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            itemDeleteHandler,
            itemDoneHandler,
            openModal,
            setOpenModal,
            addTodo}}>
            {children}
        </TodoContext.Provider>
    )
}


export {
    TodoContext,
    TodoProvider
};