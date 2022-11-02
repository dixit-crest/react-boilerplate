import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import Header from "./Header";
import classes from "./index.module.scss";

/**
 * This components wraps around the pages which are only accessible by authenticated users.
 * You could put sidebar, footer ect here
 * 
 * @param {React.ReactNode} children - Child compoenents 
 */
const AuthenticatedLayout = ({ children }) => {
  const { state } = useContext(ThemeContext);

  return (
    <div>
      <Header isAuthenticated />
      <main
        className={`${classes.page_wrapper} ${
          state.darkMode ? "bg-dark" : "bg-light"
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default AuthenticatedLayout;
