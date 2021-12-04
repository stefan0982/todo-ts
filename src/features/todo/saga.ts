import { call, put, takeEvery } from 'redux-saga/effects'
import { getAllTodos } from "./api";
import { getAllTodosSuccess, getAllTodosTrigger } from "./todoSlice";


function* getAllTodosWorker(): Generator {
  try {
    // @ts-ignore
    const { data } = yield call(getAllTodos)
    yield put(getAllTodosSuccess(data))
  } catch ( e ) {
    console.log(e)
  }
}

export default function* watchTodos (  ): Generator {
  yield takeEvery(getAllTodosTrigger.type, getAllTodosWorker)
}
