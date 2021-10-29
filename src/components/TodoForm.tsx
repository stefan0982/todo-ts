import React, { useState } from 'react';
import { ITodoFormProps } from "./types";


const TodoForm: React.FC<ITodoFormProps> = (props) => {
    const [title, setTitle] = useState<string>('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const keyPressHandler = ( event: React.KeyboardEvent<HTMLInputElement> ) => {
        if ( event.key === 'Enter' ) {
            props.onAdd(title)
            setTitle('')
        }
    }

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.onAdd(title)
        setTitle('')
    }

    return (
        <div className="input-group mt-5">
            <input
                value={title}
                onChange={changeHandler}
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
                onClick={clickHandler}
            >
                Add task
            </button>
        </div>
    );
};

export default TodoForm;
