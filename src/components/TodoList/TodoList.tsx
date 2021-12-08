import React from 'react';
import TodoItem from "../TodoItem";
import { useAppSelector } from "../../app/hooks";
import { selectTodo } from "../../features/todo/todoSlice";
import { TodoListProps } from "../types";

const TodoList: React.FC<TodoListProps> = ({handleEditItem}) => {
  const todos = useAppSelector(selectTodo)

  if (todos.length === 0) {
    return <p className="note note-warning mt-3">Still no tasks</p>
  }

  return (
    <ul className="list-group mt-3">
      {todos.map(todo =>
        <TodoItem
          handleEditItem={handleEditItem}
          key={todo.id}
          id={todo.id}
          name={todo.name}
        />
      )}
    </ul>
  );
};

export default TodoList;
