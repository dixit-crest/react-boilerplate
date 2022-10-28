import { LOCAL_STORAGE_USER } from "../../utils";
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./actionTypes";

// LOGIN
export const userLoginRequest = (payload, navigate, dispatch) => {
  return {
    type: USER_LOGIN_REQUEST,
    payload: { payload, navigate, dispatch },
  };
};

export const userLoginSuccess = (payload) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload,
  };
};

export const userLoginFailure = (payload) => {
  return {
    type: USER_LOGIN_FAILURE,
    payload,
  };
};

/**
 * DSIPATCHING THIS IS NOT REQUIRED
 *
 * Clears the localstorage and replaces the url to `/signin`
 */
export const userLogout = async () => {
  localStorage.removeItem(LOCAL_STORAGE_USER);

  return window.location.replace("/signin");
};
