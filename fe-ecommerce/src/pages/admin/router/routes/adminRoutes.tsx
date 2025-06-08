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
        path: "/admin/order/details/:id",
        roles: ["admin", "seller"],
        element: <OrderDetails />,
      },
      {
        path: "/admin/categories",
        roles: ["admin", "seller"],
        element: <Categories />,
      },

      {
        path: "/admin/seller",
        roles: ["admin", "seller"],
        element: <Seller />,
      },
      {
        path: "/admin/payment-request",
        roles: ["admin", "seller"],
        element: <PaymentRequests />,
      },
      {
        path: "/admin/manage-sellers",
        roles: ["admin", "seller"],
        element: <ManageSellers />,
      },

      {
        path: "/admin/seller-requests",
        roles: ["admin", "seller"],
        element: <SellerRequest />,
      },
      {
        path: "/admin/seller/view/:id",
        roles: ["admin", "seller"],
        element: <ViewSeller />,
      },
      {
        path: "/admin/live-chat",
        roles: ["admin", "seller"],
        element: <LiveChat />,
      },
    ],
  },
];

export default AdminRoutes;
