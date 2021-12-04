import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/todo/todoSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    todos: counterReducer,
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
