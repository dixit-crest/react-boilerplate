import { LOCAL_STORAGE_USER } from "./constants";

export const LocalUtils = {
  /**
   *
   * @param {}
   * @return {String|null} TOKEN
   */
  getToken: () => {
    const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER));
    if (!user) return null;
    return user.token;
  },
 
  /**
   *
   * @param {}
   * @return {Object|null} User object
   */
  getToken: () => {
    const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER));
    if (!user) return null;
    return user;
  },
};
