import React, { useState } from 'react';
import { todosApi } from "../../api";


const TodoForm: React.FC = () => {
  const [ title, setTitle ] = useState<string>( '' );

  const changeHandler = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setTitle( event.target.value )
  }

  const keyPressHandler = ( event: React.KeyboardEvent<HTMLInputElement> ) => {
    if ( event.key === 'Enter' && title.length > 1 ) {
      todosApi.post( '/todos', { name: title } )
      setTitle( '' )
    }
  }

  const clickHandler = ( event: React.MouseEvent<HTMLButtonElement> ) => {
    todosApi.post( '/todos', { name: title } )
    setTitle( '' )
  }

  return (
    <div className="input-group mt-5">
      <input
        value={ title }
        onChange={ changeHandler }
        type="text"
        className="form-control"
        placeholder="Create a task"
        aria-label="Create a task"
        aria-describedby="button-addon2"
        onKeyPress={ keyPressHandler }
      />
      <button
        className="btn btn-outline-primary"
        type="button"
        id="button-addon2"
        data-mdb-ripple-color="dark"
        onClick={ clickHandler }
        disabled={ title.length < 1 }
      >
        Add task
      </button>
    </div>
  );
};

export default TodoForm;
