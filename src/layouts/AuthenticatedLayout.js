import React from "react";
import Header from "./Header";
import classes from "./index.module.scss"

const AuthenticatedLayout = ({ children }) => {
  return (
    <div>
      <Header isAuthenticated />
      <main className={classes.page_wrapper}>{children}</main>
    </div>
  );
};

export default AuthenticatedLayout;
