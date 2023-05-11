import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import './App.css';
import { TodoItem } from './TodoItem';
import { TodoButtonCreate } from './TodoButtonCreate';
import React from 'react';

const defaultTodos = [
   {text: 'Aprender React', completed: false},
   {text: 'Llorar con la llorona', completed: false},
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
