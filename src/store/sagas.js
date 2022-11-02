import { all, fork } from "redux-saga/effects";
import { authWatcher } from "./auth/saga";

/**
 * In this file we we combine all the saga functions from all the modules
 */
function* rootSaga() {
  yield all([fork(authWatcher)]);
}

export default rootSaga;
