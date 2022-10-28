import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import UnauthenticatedLayout from "../layouts/UnauthenticatedLayout";
import { getDefaultRoute, LocalUtils } from "../utils";
import Signin from "../views/auth/Signin";
import { getProtectedRoutes, publicRoutes } from "./index";
import RouteProtection from "./RouteProtecttion";

function RootRoutes() {
  const { permissions, role } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        {publicRoutes.map(({ component: Component, path, title }, key) => (
          <Route
            path={path}
            element={(function () {
              const token = LocalUtils.getToken();
              if (!!token) {
                return <Navigate to={getDefaultRoute(role)} />;
              } else {
                return (
                  <UnauthenticatedLayout title={title}>
                    <Component />
                  </UnauthenticatedLayout>
                );
              }
            })()}
            key={key}
          />
        ))}

        {getProtectedRoutes(permissions).map(
          ({ component: Component, path, title, pageAccess = false }, key) => (
            <Route
              path={path}
              element={
                <AuthenticatedLayout title={title}>
                  <RouteProtection pageAccess={pageAccess}>
                    <Component />
                  </RouteProtection>
                </AuthenticatedLayout>
              }
              key={key}
            />
          )
        )}

        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default RootRoutes;
