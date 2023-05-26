import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';
/* import './App.css'; */

/* const defaultTodos = [
   {text: 'Aprender React', completed: false},
   {text: 'Llorar con la llorona', completed: true},
   {text: 'Deploy react', completed: false},
   {text: 'Build React App', completed: false},
] */



function App() {
 
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

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
     <AppUI 
          allTodosCompleted={allTodosCompleted}
          completedTodos={completedTodos}
          totalTodos={totalTodos}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchedTodos={searchedTodos}
          itemDeleteHandler={itemDeleteHandler}
          itemDoneHandler={itemDoneHandler}
     />
  );
  
}



export default App;
