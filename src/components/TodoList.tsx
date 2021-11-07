import React, { memo, useContext } from 'react';
import { TodoListProps } from "../types";
import TodoItem from "./TodoItem";
import { AppContext } from "../context/AppContext";

const TodoList: React.FC<TodoListProps> = memo(( { todos } ) => {

    const { deleteTodo } = useContext(AppContext)

    if ( todos.length === 0 ) {
        return <p className="note note-warning mt-3">Still no tasks</p>
    }

    const removeHandler = ( event: React.MouseEvent, id: string ): void => {
        event.preventDefault()
        deleteTodo(id)
    }

    return (
        <ul className="list-group mt-3">
            { todos.map( todo =>
                <TodoItem
                    key={ todo.id }
                    id={ todo.id }
                    title={ todo.title }
                    completed={todo.completed}
                    removeHandler={ removeHandler }
                />
            ) }
        </ul>
    );
})

export default TodoList;
