import React from "react";
import Header from "./Header";

const UnauthenticatedLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default UnauthenticatedLayout;
