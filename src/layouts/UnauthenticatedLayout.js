import React from "react";
import Header from "./Header";
import classes from "./index.module.scss";

/**
 * This components wraps around the pages which are accessible by unauthenticated users.
 * i.e Authenticated pages
 * 
 * @param {React.ReactNode} children - Child compoenents 
 */
const UnauthenticatedLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className={classes.page_wrapper}>{children}</main>
    </div>
  );
};

export default UnauthenticatedLayout;
