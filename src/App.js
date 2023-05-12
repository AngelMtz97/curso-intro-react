import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import React from 'react';
import { TodoItem } from './TodoItem';
import { TodoButtonCreate } from './TodoButtonCreate';
/* import './App.css'; */

const defaultTodos = [
   {text: 'Aprender React', completed: false},
   {text: 'Llorar con la llorona', completed: true},
   {text: 'Deploy react', completed: false},
   {text: 'Build React App', completed: false},
]

function App() {
  return (
      <React.Fragment>

      <TodoCounter completed={16} total={17}/>
      <TodoSearch />

      
      <TodoList>
        {defaultTodos.map(todo => {
          return <TodoItem 
                  key={todo.text} 
                  text={todo.text}
                  completed={todo.completed}/>
        })}
      </TodoList>

      <TodoButtonCreate value="Add" />

      </React.Fragment>
  );
}



export default App;
