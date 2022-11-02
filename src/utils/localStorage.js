import { initialThemeState } from "../contexts/ThemeProvider";
import { LOCAL_STORAGE_THEME, LOCAL_STORAGE_USER } from "./constants";

export const LocalUtils = {
  /**
   *
   * @param {String} newToken - newToken
   * Set the token in localstorage
   */
  setToken: (newToken) => {
    const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER));
    if (!user || !newToken) return null;
    user.token = newToken;
    localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(user));
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

  /**
   * @return {Object|null} Theme object
   * Returns the theme object from localstorage
   */
  getThemeData: () => {
    const theme = JSON.parse(localStorage.getItem(LOCAL_STORAGE_THEME));
    if (!theme) return null;
    return theme;
  },

  /**
   * @param {Object|null} Theme object - Theme object
   * 
   * Sets the theme object in localstorage
   */
  setThemeData: (theme) => {
    try {
      if (!theme) return null; 
      localStorage.setItem(LOCAL_STORAGE_THEME, JSON.stringify(theme));
    } catch (error) {
      console.log(error);
      localStorage.setItem(LOCAL_STORAGE_THEME, JSON.stringify(initialThemeState));
    }
  },
};
