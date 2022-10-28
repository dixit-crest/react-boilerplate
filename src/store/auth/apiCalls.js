import { REACT_APP_BACK_BASE_URL } from "../../utils";
import axios from "axios";

export const loginApiCall = (payload) => {
  return axios.post(`${REACT_APP_BACK_BASE_URL}/api/v1/auth/signin`, payload);
};
