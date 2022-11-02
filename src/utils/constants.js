/**
 * With this name we store user object in local storage, replace `appname` with the project name
 * to avoid conflict with other variable in browser
 */
export const LOCAL_STORAGE_USER = "appname-user";
/**
 * With this name we store theme object in local storage, replace `appname` with the project name
 * to avoid conflict with other variable in browser
 */
export const LOCAL_STORAGE_THEME = "appname-theme";

/**
 * The URL on which the frontend is going to run
 */
export const REACT_APP_BACK_BASE_URL = process.env.REACT_APP_BACK_BASE_URL;

/**
 * base url of jsonplaceholder to retrive mock data
 */
export const REACT_APP_PLACEHOLDER_API = process.env.REACT_APP_PLACEHOLDER_API;

/**
 * User types which can access the web app, we can add or remove according to our need.
 */
export const USER_TYPES = {
  SUPER_ADMIN: 1,
  ADMIN: 2,
  CUSTOMER: 3,
};

/**
 * Regex to validate email
 */
export const EMAIL_REGEX =
  /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;