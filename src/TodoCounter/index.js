import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';

function TodoCounter(){
  const { 
    completedTodos: completed,
    totalTodos: total} = React.useContext(TodoContext);

    return (
      <>
      {completed === total && total === 0 ? <h1>No tienes TODOS pendientes</h1> : <h1> Has completado <span>{completed}</span> de <span>{total}</span> TODOS</h1>}
      </>
    );
  }

  export { TodoCounter };