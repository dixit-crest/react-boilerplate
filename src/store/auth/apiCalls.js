import { REACT_APP_BACK_BASE_URL } from "../../utils";
import axios from "axios";

/**
 * In this file, We put api calls for redux saga.
 */

/**
 * @param {Object} payload - Payload needs to be sent to login 
 * @returns 
 */
export const loginApiCall = (payload) => {
  return axios.post(`${REACT_APP_BACK_BASE_URL}/api/v1/auth/signin`, payload);
};
