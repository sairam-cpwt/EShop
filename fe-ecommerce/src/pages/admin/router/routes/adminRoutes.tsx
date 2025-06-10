import { lazy } from "react";
import MainLayout from "~/layout/mainLayout";

const AdminDashboard = lazy(
  () => import("~/pages/admin/dashboard/AdminDashboard")
);
const Orders = lazy(() => import("~/pages/admin/orders"));
const Categories = lazy(() => import("~/pages/admin/categories"));
const Seller = lazy(() => import("~/pages/admin/seller"));
const PaymentRequests = lazy(() => import("~/pages/admin/payment-requests"));
const ManageSellers = lazy(() => import("~/pages/admin/manageSellers"));
const SellerRequest = lazy(() => import("~/pages/admin/sellerRequest"));
const ViewSeller = lazy(
  () => import("~/pages/admin/sellerRequest/components/ViewSeller")
);
const LiveChat = lazy(() => import("~/pages/admin/live-chat"));
const OrderDetails = lazy(
  () => import("~/pages/admin/orders/components/OrderDetails")
);

const AdminRoutes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/dashboard",
        roles: ["admin"],
        element: <AdminDashboard />,
      },
      {
        path: "/admin/orders",
        roles: ["admin"],
        element: <Orders />,
      },
      {
        path: "/admin/order/details/:id",
        roles: ["admin"],
        element: <OrderDetails />,
      },
      {
        path: "/admin/categories",
        roles: ["admin"],
        element: <Categories />,
      },

      {
        path: "/admin/seller",
        roles: ["admin"],
        element: <Seller />,
      },
      {
        path: "/admin/payment-request",
        roles: ["admin"],
        element: <PaymentRequests />,
      },
      {
        path: "/admin/manage-sellers",
        roles: ["admin"],
        element: <ManageSellers />,
      },

      {
        path: "/admin/seller-requests",
        roles: ["admin"],
        element: <SellerRequest />,
      },
      {
        path: "/admin/seller/view/:id",
        roles: ["admin"],
        element: <ViewSeller />,
      },
      {
        path: "/admin/live-chat",
        roles: ["admin"],
        element: <LiveChat />,
      },
    ],
  },
];

export default AdminRoutes;
