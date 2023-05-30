import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoButtonCreate } from '../TodoButtonCreate';
import React from 'react';

function AppUI({
    loading,
    error,
    allTodosCompleted,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    itemDeleteHandler,
    itemDoneHandler
}){
    return (
        <React.Fragment>

        { allTodosCompleted() ? <h1>Felicidades has completado todos los TODOs 💚</h1> : <TodoCounter completed={completedTodos} total={totalTodos}/>}

        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />

        
        <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

        {searchedTodos.map(todo => {
            return <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    ondelete={itemDeleteHandler}
                    oncomplete={itemDoneHandler}/>
        })}
        </TodoList>

        <TodoButtonCreate value="Add" />

        </React.Fragment>
    );
}

export { AppUI };