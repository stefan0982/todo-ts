import React, { useEffect, useRef, useState } from 'react';
import { TodoFormProps } from "../types";

const TodoForm: React.FC<TodoFormProps> = ({
  edit = false,
  value = '',
  id = 0,
  handleFormSubmit,
  toggleEditable = () => {
  }
}) => {
  const [name, setName] = useState<string>(value);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    edit && inputRef.current!.focus()
  }, [edit]);

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (edit) {
      handleFormSubmit({name, id})
      toggleEditable()
    } else {
      handleFormSubmit({name})
      setName('')
    }
  }

  return (
    <div className={`input-group ${!edit && 'mt-5'}`}>
      <input
        ref={inputRef}
        value={name}
        onChange={changeHandler}
        type="text"
        className="form-control"
        placeholder="Create a task"
        aria-label="Create a task"
        aria-describedby="button-addon2"
      />
      <button
        className="btn btn-outline-primary"
        type="button"
        data-mdb-ripple-color="dark"
        onClick={clickHandler}
        disabled={name.length < 1}
      >
        {!edit ? 'Add task' : 'Edit task'}
      </button>
    </div>
  );
};

export default TodoForm;
