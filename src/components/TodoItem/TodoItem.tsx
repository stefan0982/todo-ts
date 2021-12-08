import React, { FC, useState } from 'react';
import { TodoItemProps } from "../types";
import TodoForm from "../TodoForm";
import { removeTodoTrigger } from "../../features/todo/todoSlice";
import { useAppDispatch } from "../../app/hooks";

const TodoItem: FC<TodoItemProps> = ( ({ name, id, handleEditItem }) => {
  const [editable, setEditable] = useState<boolean>(false);
  const dispatch = useAppDispatch()

  const toggleEditable = (): void => {
    setEditable(prevState => !prevState)
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    dispatch(removeTodoTrigger(id))
  }

  return (
    <li
      className="list-group-item d-flex justify-content-between ps-2 p-2"
    >
      <div className={`ms-2 me-auto`}>
        {editable ? <TodoForm
          handleFormSubmit={handleEditItem}
          toggleEditable={toggleEditable}
          edit
          id={id}
          value={name}
        /> : name}
      </div>
      <i
        onClick={toggleEditable}
        className="far fa-edit fa-lg mt-1 me-2"
        data-testid="edit"
      />
      <i
        onClick={(event) => removeHandler(event, id)}
        className="far fa-trash-alt fa-lg mt-1 me-2"
        data-testid="remove"
      />
    </li>
  );
} )

export default TodoItem;
