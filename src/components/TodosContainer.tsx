import React, { useEffect, useState } from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { ITodo } from "./types";
import { todosApi } from "../api";

const TodosContainer: React.FC = () => {
  const [ todos, setTodos ] = useState<ITodo[]>( [] );

  useEffect( () => {
    todosApi.get( '/todos' ).then( res => setTodos( res.data ) )
  }, [ todos ] );

  return (
    <>
      <TodoForm />
      <TodoList
        todos={ todos }
      />
    </>
  );
};

export default TodosContainer;
