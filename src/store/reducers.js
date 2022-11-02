import { combineReducers } from "redux";
import authReducer from "./auth/reducers";

/**
 * Here we combine all the reducer functions into one `rootReducer` that can be
 * connected with redux store
 */
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
