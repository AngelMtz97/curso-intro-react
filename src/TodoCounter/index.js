import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos}){

    return (
      <>
      {completedTodos === totalTodos && totalTodos === 0 ? <h1>No tienes TODOS pendientes</h1> : <h1> Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS</h1>}
      </>
    );
  }

  export { TodoCounter };