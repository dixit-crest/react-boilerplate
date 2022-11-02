import { LOCAL_STORAGE_USER } from "../../utils";
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./actionTypes";

/**
 * These are the function that needs to be called with dispatch instance of react-redux
 */

// LOGIN
/**
 *
 * @param {{email: string, password: string}} payload - For login
 * @param {Function} navigate - navigate function of react-router-dom
 * @param {Function} dispatch - dispatch function of the react-redux
 * @returns
 */
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
