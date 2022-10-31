import React from "react";
import Header from "./Header";
import classes from "./index.module.scss";

const UnauthenticatedLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className={classes.page_wrapper}>{children}</main>
    </div>
  );
};

export default UnauthenticatedLayout;
