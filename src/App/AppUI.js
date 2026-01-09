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
import React from 'react';
import { TodoContext } from '../TodoContext';


function AppUI(){
    const {
        loading,
        error,
        allTodosCompleted,
        searchedTodos,
        totalTodos,
        itemDeleteHandler,
        itemDoneHandler,
        itemEditHandler,
        openModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
                    { !loading && (allTodosCompleted() ? <h1>Felicidades has completado todos los TODOs 💚</h1> : <TodoCounter />) }

                    {!loading && <TodoSearch />}

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
                    

        {!loading && <TodoButtonCreate value="Agregar" />}

        {openModal && 
          (<Modal>
              <TodoForm />
           </Modal>)
}
        

        </React.Fragment>
    );
}

export { AppUI };