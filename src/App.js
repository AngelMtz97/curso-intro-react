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
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(item => {
    return item.completed === true; 
  }).length;

  const totalTodos = todos.length;

  console.log('Los usuarios buscan TODOS de '+searchValue)

  return (
      <React.Fragment>

      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch 
       searchValue={searchValue}
       setSearchValue={setSearchValue}
      />

      
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
