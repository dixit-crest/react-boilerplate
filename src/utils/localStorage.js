import { LOCAL_STORAGE_USER } from "./constants";

export const LocalUtils = {
  /**
   *
   * @param {String} newToken - newToken
   * Set the token in localstorage
   */
  setToken: (newToken) => {
    const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER));
    if (!user || !newToken) return null;
    user.token = newToken
    localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(user))    
  },
 
  /**
   *
   * @param {}
   * @return {Object|null} User object
   * Returns the token from localstorage
   */
  getToken: () => {
    const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER));
    if (!user) return null;
    return user?.token;
  },
};
