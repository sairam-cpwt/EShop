import { lazy } from "react";
import MainLayout from "~/layout/mainLayout";

const AdminDashboard = lazy(() => import("~/pages/dashboard/AdminDashboard"));
const Orders = lazy(() => import("~/pages/orders"));
const Categories = lazy(() => import("~/pages/categories"));
const Seller = lazy(() => import("~/pages/seller"));

const AdminRoutes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/admin/dashboard",
        index: true,
        roles: ["admin", "seller"],
        element: <AdminDashboard />,
      },
      {
        path: "/admin/orders",
        index: true,
        roles: ["admin", "seller"],
        element: <Orders />,
      },
      {
        path: "/categories",
        index: true,
        roles: ["admin", "seller"],
        element: <Categories />,
      },

      {
        path: "/seller",
        index: true,
        roles: ["admin", "seller"],
        element: <Seller />,
      },
    ],
  },
];

export default AdminRoutes;
