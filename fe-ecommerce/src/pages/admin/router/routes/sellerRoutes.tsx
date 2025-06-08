import { lazy } from "react";

const Home = lazy(() => import("~/pages/admin/home"));

const SellerRoutes = [
  {
    path: "/",
    element: <Home />,
    roles: ["admin", "seller"],
  },
];

export default SellerRoutes;
