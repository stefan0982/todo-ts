import React, { useEffect } from 'react';
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import { useAppDispatch } from "../../app/hooks";
import { addTodoTrigger, editTodoTrigger, getAllTodosTrigger } from "../../features/todo/todoSlice";

const TodosContainer: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect( () => {
    dispatch( getAllTodosTrigger() )
  }, [ dispatch ] );

  const handleFormSubmit = (payload: any) => {
    if (!payload.id) {
      dispatch(addTodoTrigger(payload))
    }
    if (payload.id) {
      dispatch(editTodoTrigger({ name: payload.name, id: payload.id  }))
    }
  }

  return (
    <>
      <TodoForm handleFormSubmit={handleFormSubmit}/>
      <TodoList handleEditItem={handleFormSubmit}/>
    </>
  );
};

export default TodosContainer;
