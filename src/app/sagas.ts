import { all, fork } from 'redux-saga/effects'
import watchTodos from "../features/todo/saga";

export default function* rootSaga( ): Generator {
  yield all([watchTodos].map(fork))
}
