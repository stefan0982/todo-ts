import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { AddTodoBody, EditTodoBody, ITodo } from "../../components/types";

export interface TodoState {
  todos: ITodo[],
  loading: boolean,
  error: string | undefined
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: undefined
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    getAllTodosTrigger: (state) => {
      state.loading = true
      state.error = undefined
    },
    getAllTodosSuccess: (state, action: PayloadAction<ITodo[]>) => {
      state.loading = false
      state.todos = action.payload
    },
    getAllTodosError: (state) => {
      state.loading = false
      state.error = 'error happen'
    },
    addTodoTrigger: (state, action: PayloadAction<AddTodoBody>) => {
      state.loading = true
      state.error = undefined
    },
    addTodoSuccess: (state, action: PayloadAction<ITodo>) => {
      state.loading = false
      state.todos = [...state.todos, action.payload]
    },
    addTodoError: (state) => {
      state.loading = false
      state.error = 'error happen'
    },
    removeTodoTrigger: (state, action: PayloadAction<number>) => {
      state.loading = true
      state.error = undefined
    },
    removeTodoSuccess: (state, action: PayloadAction<ITodo>) => {
      state.loading = false
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    removeTodoError: (state) => {
      state.loading = false
      state.error = 'error happen'
    },
    editTodoTrigger: (state, action: PayloadAction<EditTodoBody>) => {
      state.loading = true
      state.error = undefined
    },
    editTodoSuccess: (state, action: PayloadAction<ITodo>) => {
      state.loading = false
      state.todos = state.todos.map(todo => todo.id === action.payload.id ? {...todo, name: action.payload.name} : todo)
    },
    editTodoError: (state) => {
      state.loading = false
      state.error = 'error happen'
    },
  }
})

export const {
  getAllTodosError,
  getAllTodosSuccess,
  getAllTodosTrigger,
  addTodoSuccess,
  addTodoTrigger,
  addTodoError,
  removeTodoTrigger,
  removeTodoSuccess,
  removeTodoError,
  editTodoSuccess,
  editTodoTrigger,
  editTodoError
} = todoSlice.actions

export const selectTodo = (state: RootState) => state.todos.todos

export default todoSlice.reducer
