import { call, put, takeEvery } from 'redux-saga/effects'
import { addTodo, editTodo, getAllTodos, removeTodo } from "./api";
import {
  addTodoSuccess,
  addTodoTrigger, editTodoSuccess, editTodoTrigger,
  getAllTodosSuccess,
  getAllTodosTrigger,
  removeTodoSuccess,
  removeTodoTrigger
} from "./todoSlice";
import { AddTodoBody, EditTodoBody } from "../../components/types";

function* getAllTodosWorker(): Generator {
  try {
    const { data }: any = yield call(getAllTodos)
    yield put(getAllTodosSuccess(data))
  } catch ( e ) {
    console.log(e)
  }
}

interface AddTodoAction {
  type: string;
  payload: AddTodoBody
}

function* addTodoWorker(action: AddTodoAction): Generator {
  try {
    // @ts-ignore
    const { data } = yield call(addTodo, action.payload)
    yield put(addTodoSuccess(data))
  } catch ( e ) {
    console.log(e)
  }
}

interface removeTodoAction {
  type: string;
  payload: number
}

function* removeTodoWorker(action: removeTodoAction): Generator {
  try {
    // @ts-ignore
    const { data } = yield call(removeTodo, action.payload)
    yield put(removeTodoSuccess(data))
  } catch ( e ) {
    console.log(e)
  }
}

interface EditTodoAction {
  type: string;
  payload: EditTodoBody
}

function* editTodoWorker(action: EditTodoAction): Generator {
  try {
    // @ts-ignore
    const { data } = yield call(editTodo, action.payload.name, action.payload.id)
    yield put(editTodoSuccess(data))
  } catch ( e ) {
    console.log(e)
  }
}

export default function* watchTodos (): Generator {
  yield takeEvery(getAllTodosTrigger.type, getAllTodosWorker)
  yield takeEvery(addTodoTrigger.type, addTodoWorker)
  yield takeEvery(removeTodoTrigger.type, removeTodoWorker)
  yield takeEvery(editTodoTrigger.type, editTodoWorker)
}
