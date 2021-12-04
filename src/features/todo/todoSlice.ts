import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { ITodo } from "../../components/types";

interface TodoState {
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
  }
})

export const { getAllTodosError, getAllTodosSuccess, getAllTodosTrigger } = todoSlice.actions

export const selectTodo = (state: RootState) => state.todos.todos

export default todoSlice.reducer
