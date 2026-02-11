import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoButtonCreate } from '../TodoButtonCreate';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoHeader } from '../TodoHeader';

import { useTodos } from './useTodos';
/* import './App.css'; */


function App() {

   const {
          loading,
          error,
          allTodosCompleted,
          searchedTodos,
          totalTodos,
          itemDeleteHandler,
          itemDoneHandler,
          itemEditHandler,
          openModal,
          completedTodos,
          searchValue,
          setSearchValue,
          addTodo,
          editTodo,
          editValue,
          setEditValue,
          setOpenModal
      } = useTodos();
  
 
  return (
          <React.Fragment>
  
                      <TodoHeader>
  
                          { !loading && (allTodosCompleted() ? <h1>Felicidades has completado todos los TODOs 💚</h1> 
                          : <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>) }
  
                      {!loading && <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>}
  
                      </TodoHeader>
  
                      <TodoList>
                          {loading && <TodosLoading />}
                          {error && <TodosError />}
                          {(!loading && searchedTodos.length === 0 && totalTodos > 0) && <EmptyTodos message={"No se encontró el TODO 😕"}/> }
                          {(!loading && totalTodos === 0) &&<EmptyTodos message={"Crea un nuevo TODO 😏"} />}
  
                          {
                           searchedTodos.map(todo => {
                                  return <TodoItem 
                                          key={todo.text} 
                                          text={todo.text}
                                          completed={todo.completed}
                                          ondelete={itemDeleteHandler}
                                          onedit={itemEditHandler}
                                          oncomplete={itemDoneHandler}/>
                              })
                          }
                      </TodoList>
                      
  
          {!loading && <TodoButtonCreate value="Agregar" openModal={openModal} setOpenModal={setOpenModal}/>}
  
          {openModal && 
            (<Modal openModal={openModal}>
                <TodoForm addTodo={addTodo} editTodo={editTodo} editValue={editValue} setEditValue={setEditValue} setOpenModal={setOpenModal}/>
             </Modal>)
  }
          
  
          </React.Fragment>
      );
  
}



export default App;
