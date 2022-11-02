import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import Header from "./Header";
import classes from "./index.module.scss";

/**
 * This HOC components wraps around the pages which are accessible by unauthenticated users.
 * i.e Authentication pages
 * 
 * @param {React.ReactNode} children - Child compoenents 
 */
const UnauthenticatedLayout = ({ children }) => {
  const { state } = useContext(ThemeContext);

  return (
    <div>
      <Header />
      <main className={`${classes.page_wrapper} ${
          state.darkMode ? "bg-dark" : "bg-light"
        }`}>{children}</main>
    </div>
  );
};

export default UnauthenticatedLayout;
