import { lazy } from "react";
import MainLayout from "~/layout/mainLayout";

const AdminDashboard = lazy(() => import("~/pages/dashboard/AdminDashboard"));
const Orders = lazy(() => import("~/pages/orders"));
const Categories = lazy(() => import("~/pages/categories"));
const Seller = lazy(() => import("~/pages/seller"));
const PaymentRequests = lazy(() => import("~/pages/payment-requests"));

const AdminRoutes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/admin/dashboard",
        roles: ["admin", "seller"],
        element: <AdminDashboard />,
      },
      {
        path: "/admin/orders",
        roles: ["admin", "seller"],
        element: <Orders />,
      },
      {
        path: "/categories",
        roles: ["admin", "seller"],
        element: <Categories />,
      },

      {
        path: "/seller",
        roles: ["admin", "seller"],
        element: <Seller />,
      },
      {
        path: "/payment-request",
        roles: ["admin", "seller"],
        element: <PaymentRequests />,
      },
    ],
  },
];

export default AdminRoutes;
