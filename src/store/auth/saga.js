import { takeLatest, call, put } from "redux-saga/effects";
import { LOCAL_STORAGE_USER, USER_TYPES } from "../../utils";
import { loginApiCall } from "./apiCalls";
import { userLoginFailure, userLoginSuccess } from "./actions";
import { USER_LOGIN_REQUEST } from "./actionTypes";
import { toast } from "react-toastify";

/**
 * In this file we write all the sagas, Sagas are the generator functions which which listen for 
 * every action watcher tells them to listen to and then run `worker` functions accordint to 
 * action that has been perfomed.
 */

/**
 * @param {Object} payload - Payload returned by object 
 */

function* authWorker({ payload }) {
  try {
    const response = yield call(loginApiCall, payload.payload);
    if (!response.data) return null;
    localStorage.setItem(
      LOCAL_STORAGE_USER,
      JSON.stringify(response.data.data)
    );
    yield put(userLoginSuccess(response.data.data));
    if (response.data?.data?.role === USER_TYPES.ADMIN) {
      return payload.navigate("/billing");
    } else if (response.data?.data?.role === USER_TYPES.CUSTOMER) {
      return payload.navigate("/user");
    }
    payload.navigate("/");
  } catch (error) {
    console.log(error.message);
    toast.error(error?.response?.data?.message || error.message);
    yield put(userLoginFailure({ error }));
  }
}

export function* authWatcher() {
  yield takeLatest(USER_LOGIN_REQUEST, authWorker);
}
