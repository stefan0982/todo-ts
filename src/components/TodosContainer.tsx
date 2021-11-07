import React, { useCallback, useContext } from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { AppContext } from "../context/AppContext";

const TodosContainer: React.FC = () => {
    const { todos } = useContext( AppContext )

    const filterTodos = useCallback( () => {
        return [ ...todos.filter( todo => !todo.completed ), ...todos.filter( todo => todo.completed ) ]
    }, [ todos ] )

    const filteredTodos = filterTodos()

    return (
        <>
            <TodoForm add={ true } />
            <TodoList
                todos={ filteredTodos }
            />
        </>
    );
};

export default TodosContainer;
