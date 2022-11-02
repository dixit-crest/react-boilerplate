import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import Header from "./Header";
import classes from "./index.module.scss";

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
