import React, { useContext, useEffect, useRef, useState } from 'react';
import { TodoFormProps } from "../types";
import { AppContext } from "../context/AppContext";

const TodoForm: React.FC<TodoFormProps> = ( {
                                                 add,
                                                 edit,
                                                 value = '',
                                                 id = '',
                                                 handleEditable = () => {}
                                             } ) => {
    const [ title, setTitle ] = useState<string>( value );

    const { addTodo, editTodo, todos } = useContext(AppContext)

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect( () => {
        edit && inputRef.current!.focus()
    }, [edit] );

    const noDuplicates = todos.every( todo => todo.title !== title )


    const changeHandler = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setTitle( event.target.value )
    }

    const addEditHandler = () => {
        if ( add ) {
            setTitle( '' )
            addTodo(title.trim())
        }
        if ( edit ) {
            editTodo( id, title.trim() )
            handleEditable()
        }
    }

    const keyPressHandler = ( event: React.KeyboardEvent<HTMLInputElement> ) => {
        if ( event.key === 'Enter' && title.length > 1 && noDuplicates) {
            addEditHandler()
        }
    }

    const clickHandler = () => {
       addEditHandler()
    }

    return (
        <div className={ `input-group ${add && 'mt-5'}` }>
            <input
                value={ title }
                onChange={ changeHandler }
                type="text"
                className="form-control"
                placeholder="Create a task"
                aria-label="Create a task"
                aria-describedby="button-addon2"
                onKeyPress={ keyPressHandler }
                ref={inputRef}
            />
            <button
                className="btn btn-outline-primary"
                type="button"
                id="button-addon2"
                data-mdb-ripple-color="dark"
                onClick={ clickHandler }
                disabled={ title.length < 1 || !noDuplicates }
            >
                { add ? 'Add task' : 'Edit task' }
            </button>
        </div>
    );
};

export default TodoForm;
