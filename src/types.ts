import React from "react";

export interface ITodo {
    title: string;
    id: string
    completed: boolean
}

export interface TodoFormProps {
    add?: boolean,
    edit?: boolean
    value?: string
    id?: string
    handleEditable?: () => void
}

export type TodoListProps = {
    todos: ITodo[]
}

export interface TodoContext {
    todos: ITodo[],
    addTodo: (title: string) => void
    toggleTodo: (id: string) => void
    deleteTodo: (id: string) => void
    editTodo: (id: string, title: string) => void
}

export interface TodoItemProps {
    title: string
    id: string
    removeHandler: (event: React.MouseEvent, id: string) => void
    completed: boolean
}

export enum ActionTypes {
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
    EDIT_TODO = 'EDIT_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
}

export type Actions =
    | { type: ActionTypes.ADD_TODO; payload: string }
    | { type: ActionTypes.DELETE_TODO; payload: string }
    | { type: ActionTypes.TOGGLE_TODO; payload: string}
    | { type: ActionTypes.EDIT_TODO; payload: { id: string, title: string } };

