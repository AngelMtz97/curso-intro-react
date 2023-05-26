import './TodoCounter.css';

function TodoCounter({total, completed}){
    return (
      <h1>
        Has completado <span>{completed}</span> de <span>{total}</span> TODOS
        </h1>
    );
  }

  export { TodoCounter };