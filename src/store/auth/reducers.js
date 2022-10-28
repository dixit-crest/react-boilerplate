import { LOCAL_STORAGE_USER } from "../../utils";
import { USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS } from "./actionTypes";

const initialState = {
  id: null,
  firstName: "",
  lastName: "",
  email: "",
  token: "",
  role: "",
  permissions: null,

  loading: false,
  failed: false,
  ...JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER)),
  error: null,
};

function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        error: null,
        failed: false,
        loading: false,
      };

    case USER_LOGIN_FAILURE:
      return { ...state, failed: true, loading: false, error: payload.error };

    default:
      return state;
  }
}

export default authReducer;
