import React, { useEffect, useState } from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { ITodo } from "./types";

const TodosContainer: React.FC = () => {
    const [ todos, setTodos ] = useState<ITodo[]>( [] );

    useEffect( () => {
        const saved = JSON.parse( localStorage.getItem( 'todos' ) || '[]' ) as ITodo[]
        setTodos( saved )
    }, [] )

    useEffect( () => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) )
    }, [ todos ] );


    const addHandler = ( title: string ) => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false
        }
        setTodos( prevState => [ newTodo, ...prevState ] )
    }

    const removeHandler = ( id: number ) => {
        setTodos( prevState => prevState.filter( todo => todo.id !== id ) )
    }
    return (
        <>
            <TodoForm onAdd={ addHandler } />
            <TodoList
                todos={ todos }
                onRemove={ removeHandler }
            />
        </>
    );
};

export default TodosContainer;
