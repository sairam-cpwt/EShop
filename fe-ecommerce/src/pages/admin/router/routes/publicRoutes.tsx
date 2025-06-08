import { lazy } from "react";
const AdminLogin = lazy(() => import("~/pages/auth/AdminLogin"));
const Login = lazy(() => import("~/pages/auth/Login"));
const SignUp = lazy(() => import("~/pages/auth/SignUp"));

const PublicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
];

export default PublicRoutes;
