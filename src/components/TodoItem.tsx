import React, { FC, memo, useContext, useState } from 'react';
import TodoForm from "./TodoForm";
import { TodoItemProps } from "../types";
import { AppContext } from "../context/AppContext";

const TodoItem: FC<TodoItemProps> = memo(( { title, id, removeHandler, completed } ) => {

    const { toggleTodo } = useContext(AppContext)

    const [ editable, setEditable ] = useState<boolean>( false );

    const handleEditable = (): void => {
        setEditable( prevState => !prevState )
    }

    return (
        <li
            className="list-group-item d-flex justify-content-between ps-2 p-2"
        >
            <input
                className="form-check-input me-1"
                type="checkbox"
                checked={ completed }
                onChange={ () => toggleTodo(id) }
            />
            <div className={ `ms-2 me-auto ${ completed && 'checked' }` }>
                { editable ? <TodoForm
                    handleEditable={ handleEditable }
                    edit
                    id={ id }
                    value={ title }
                /> : title }
            </div>
            <i
                onClick={ handleEditable }
                className="far fa-edit fa-lg mt-1 me-2"
            />
            <i
                onClick={ ( event ) => removeHandler( event, id ) }
                className="far fa-trash-alt fa-lg mt-1 me-2"
            />
        </li>
    );
})

export default TodoItem;
