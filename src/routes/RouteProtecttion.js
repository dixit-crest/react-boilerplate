import React from "react";
import UnauthorizedAccess from "../components/utils/UnauthorizedAccess";
import { Navigate } from "react-router-dom";
import { LOCAL_STORAGE_USER } from "../utils";

/**
 * This HOC components takes childrena and pageAccess variable as props and shows children
 * according to page access variable. It will redirect or shows unauthorized component is page access
 * is false.
 * 
 * @param {React.ReactNode} children - React components to show 
 * @param {Boolean} pageAccess - Is user allowed to access this page or not 
 * @returns {JSX.Element} children
 */
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
