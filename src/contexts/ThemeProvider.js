import { createContext, useReducer } from "react";
import { LocalUtils } from "../utils";

export const initialThemeState = {
  darkMode: false,
  ...LocalUtils.getThemeData(),
};
const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      LocalUtils.setThemeData({ darkMode: false });
      return { darkMode: false };
    case "DARKMODE":
      LocalUtils.setThemeData({ darkMode: true });
      return { darkMode: true };
    default:
      return state;
  }
};

/**
 * 
 * @param {children} Children - React compoenets  
 * 
 * This context is reposible for providing theme values accross the app.
 * You can store other utility variables and share accross the app.
 */
export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialThemeState);

  return (
    <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export const ThemeContext = createContext();
