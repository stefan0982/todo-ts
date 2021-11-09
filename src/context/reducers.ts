import { Actions, ActionTypes, ITodo, } from "../types";
import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    todos: ITodo[]
}

export default function reducers( state: InitialState, { type, payload }: Actions ) {
    switch ( type ) {
        case ActionTypes.ADD_TODO:
            return {
                todos: state.todos.every( todo => todo.title !== payload ) ?
                    [ {
                        title: payload,
                        id: uuidv4(),
                        completed: false
                    }, ...state.todos ]
                    : state.todos
            };
        case ActionTypes.DELETE_TODO:
            return {
                todos: state.todos.filter( todo => todo.id !== payload )
            }
        case ActionTypes.TOGGLE_TODO:
            return {
                todos: state.todos.map( todo => todo.id === payload ? { ...todo, completed: !todo.completed } : todo )
            }
        case ActionTypes.EDIT_TODO:
            return {
                todos: state.todos.map( todo => typeof payload !== "string" && state.todos.every( todo => todo.title !== payload.title ) && todo.id === payload.id ? {
                    ...todo,
                    title: payload.title
                } : todo )
            }
        default:
            return state;
    }
};
