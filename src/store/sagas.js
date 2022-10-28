import { all, fork } from "redux-saga/effects";
import { authWatcher } from "./auth/saga";

function* rootSaga() {
  yield all([fork(authWatcher)]);
}

export default rootSaga;
