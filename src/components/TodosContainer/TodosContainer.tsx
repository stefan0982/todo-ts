import React, { useEffect } from 'react';
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllTodosTrigger, selectTodo } from "../../features/todo/todoSlice";

const TodosContainer: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect( () => {
    dispatch(getAllTodosTrigger())
  }, [dispatch] );

  const todos = useAppSelector(selectTodo)

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
