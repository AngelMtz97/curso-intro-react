import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import React from 'react';
import { TodoItem } from './TodoItem';
import { TodoButtonCreate } from './TodoButtonCreate';
/* import './App.css'; */

/* const defaultTodos = [
   {text: 'Aprender React', completed: false},
   {text: 'Llorar con la llorona', completed: true},
   {text: 'Deploy react', completed: false},
   {text: 'Build React App', completed: false},
] */

function useLocalStorage(itemName, initialValue){
     
     
     const localStorageTodos = localStorage.getItem(itemName);
     
     let parsedItem;

     if(!localStorageTodos){
          localStorage.setItem(itemName, JSON.stringify([]));
     }else {
          parsedItem = JSON.parse(localStorageTodos);
     }

     const [item, setItem] = React.useState(parsedItem);

     const saveItem = (newItem) => {
     
          localStorage.setItem(itemName, JSON.stringify(newItem));
          setItem(newItem);
     }

     return [item, saveItem];
}

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
      <React.Fragment>

      { allTodosCompleted() ? <h1>Felicidades has completado todos los TODOs 💚</h1> : <TodoCounter completed={completedTodos} total={totalTodos}/>}

      <TodoSearch 
       searchValue={searchValue}
       setSearchValue={setSearchValue}
      />

      
      <TodoList>
        {searchedTodos.map(todo => {
          return <TodoItem 
                  key={todo.text} 
                  text={todo.text}
                  completed={todo.completed}
                  ondelete={itemDeleteHandler}
                  oncomplete={itemDoneHandler}/>
        })}
      </TodoList>

      <TodoButtonCreate value="Add" />

      </React.Fragment>
  );
}



export default App;
