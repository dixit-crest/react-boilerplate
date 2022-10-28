import React from "react";
import UnauthorizedAccess from "../components/utils/UnauthorizedAccess";
import { Navigate } from "react-router-dom";
import { LOCAL_STORAGE_USER } from "../utils";

const RouteProtection = ({ children, pageAccess }) => {
  let isAutheticated;
  try {
    const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER));
    if (!user) {
      isAutheticated = false;
    } else {
      isAutheticated = true;
    }
  } catch (error) {
    isAutheticated = false;
  }

  return (
    <React.Fragment>
      {(function () {
        if (isAutheticated) {
          if (pageAccess) {
            return children;
          } else {
            return <UnauthorizedAccess />;
          }
        } else {
          return <Navigate to={"/signin"} />;
        }
      })()}
    </React.Fragment>
  );
};

export default RouteProtection;
