import React from 'react';
import { TodoListProps } from "./types";
import { todosApi } from "../api";
import { Link } from "react-router-dom";

const TodoList: React.FC<TodoListProps> = ( { todos } ) => {

  if ( todos.length === 0 ) {
    return <p className="note note-warning mt-3">Still no tasks</p>
  }

  const removeHandler = ( event: React.MouseEvent, id: number ) => {
    todosApi.delete( `/todos/${ id }` )
  }

  return (
    <ol className="list-group list-group-numbered mt-3">
      { todos.map( todo =>
        <li key={ todo.id } className="list-group-item d-flex justify-content-between ps-2 p-2">
          <div className="ms-2 me-auto">
            <Link to={`/todo/${todo.id}`}>
              { todo.name }
            </Link>
          </div>
          <i
            onClick={ ( event ) => removeHandler( event, todo.id ) }
            className="far fa-trash-alt fa-lg mt-1 me-2"
          />
        </li>
      ) }
    </ol>
  );
};

export default TodoList;
