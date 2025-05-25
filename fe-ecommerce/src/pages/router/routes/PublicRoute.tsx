import { lazy } from "react";

const AdminLogin = lazy(() => import("~/pages/auth/AdminLogin"));
const Login = lazy(() => import("~/pages/auth/Login"));
const SignUp = lazy(() => import("~/pages/auth/SignUp"));
const Home = lazy(() => import("~/pages/home"));

const PublicRoutes = [
  {
    path: "/",
    element: <Home />,
    index: true,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
];

export default PublicRoutes;
