import React, { createContext, FC, useMemo, useReducer } from 'react'
import {  ActionTypes,  TodoContext } from "../types";
import reducers from "./reducers";

const initialState: TodoContext = {
    todos: [
        {id: 'asd', title: 'to eat something', completed: false}
    ],
    addTodo: (title) => {},
    toggleTodo: (id) => {},
    deleteTodo: (id) => {},
    editTodo: (id, title) => {}
}

interface ProviderProps {
    children: React.ReactNode
}

export const AppContext = createContext<TodoContext>( initialState )

export const GlobalProvider: FC<ProviderProps> = ( { children } ) => {
    // @ts-ignore
    const [ state, dispatch ] = useReducer( reducers, initialState )

    const contextValue = useMemo( () => ( {
        todos: state.todos,
        addTodo: ( title: string ) => {
            // @ts-ignore
            dispatch( {
                type: ActionTypes.ADD_TODO,
                payload: title
            } );
        },
        deleteTodo: ( id: string ) => {
            // @ts-ignore
            dispatch( {
                type: ActionTypes.DELETE_TODO,
                payload: id
            } );
        },
        toggleTodo: ( id: string ) => {
            // @ts-ignore
            dispatch( {
                type: ActionTypes.TOGGLE_TODO,
                payload: id
            } );
        },
        editTodo: ( id: string, title: string ) => {
            // @ts-ignore
            dispatch( {
                type: ActionTypes.EDIT_TODO,
                payload: { id, title }
            } );
        },

    } ), [ state, dispatch ] );



    return (
        <AppContext.Provider
            value={contextValue}
        >
            { children }
        </AppContext.Provider>
    )
}
