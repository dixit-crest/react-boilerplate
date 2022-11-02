// auth
import Signin from "../views/auth/Signin";
import Signup from "../views/auth/Signup";
import RequestResetPassword from "../views/auth/RequestResetPassword";

// home
import HomePage from "../views/home";

import { isPageAccessAllowed } from "../utils/helpers";
import ResetPassword from "../views/auth/ResetPassword";
import ListNotes from "../views/notes";

export const publicRoutes = [
  {
    title: "Sign in",
    component: Signin,
    path: "/signin",
  },
  {
    title: "Sign up",
    component: Signup,
    path: "/signup",
  },
  {
    title: "Reset password",
    component: RequestResetPassword,
    path: "/request-reset-password",
  },
  {
    title: "Reset password",
    component: ResetPassword,
    path: "/reset-password/:token",
  },
];

export const getProtectedRoutes = (permissions) => [
  {
    title: "Home Page",
    component: HomePage,
    path: "/",
    icon: "bi bi-speedometer2",
    isSidebarMenu: true,
    pageAccess: isPageAccessAllowed("dashboard", permissions),
  },
  {
    title: "Notes",
    component: ListNotes,
    path: "/notes",
    icon: "bi bi-speedometer2",
    isSidebarMenu: true,
    pageAccess: isPageAccessAllowed("dashboard", permissions),
  },
];
