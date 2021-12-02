import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { todosApi } from "../api";
import { ITodo } from "./types";

interface TodoRouteParam {
  id: string;
}

const TodoPage = () => {
  const { id } = useParams<TodoRouteParam>()
  const [ todo, setTodo ] = useState<ITodo>( { completed: false, createdAt: "", id: 0, name: "", updatedAt: "" } );

  useEffect( () => {
    todosApi.get(`/todos/${+id}`).then(res => setTodo(res.data))
  }, [id] );

  return (
    <div>
      { todo.name }
    </div>
  );
};

export default TodoPage;
