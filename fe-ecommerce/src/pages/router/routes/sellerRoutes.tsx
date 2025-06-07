import { lazy } from "react";

const Home = lazy(() => import("~/pages/home"));

const SellerRoutes = [
  {
    path: "/",
    element: <Home />,
    roles: ["admin", "seller"],
  },
];

export default SellerRoutes;
