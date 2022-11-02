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

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialThemeState);

  return (
    <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export const ThemeContext = createContext();
