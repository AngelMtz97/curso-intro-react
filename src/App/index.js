import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
/* import './App.css'; */

/* const defaultTodos = [
   {text: 'Aprender React', completed: false},
   {text: 'Llorar con la llorona', completed: true},
   {text: 'Deploy react', completed: false},
   {text: 'Build React App', completed: false},
] */



function App() {
 
  return (
   <TodoProvider>
      <AppUI/>
   </TodoProvider>
  );
  
}



export default App;
