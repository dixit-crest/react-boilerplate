import { isPageAccessAllowed } from "../utils/helpers";
import Signin from "../views/auth/Signin";
import Signup from "../views/auth/Signup";
import HomePage from "../views/home";

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
];
