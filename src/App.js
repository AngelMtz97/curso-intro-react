import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import './App.css';
import { TodoItem } from './TodoItem';
import { TodoButtonCreate } from './TodoButtonCreate';

function App() {
  return (
    <div className="App">

      <TodoCounter/>
      <TodoSearch />

      
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>

      <TodoButtonCreate value="Add" />

    </div>
  );
}



export default App;
