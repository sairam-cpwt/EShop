import { lazy } from "react";
import MainLayout from "~/layout/mainLayout";

const AdminDashboard = lazy(() => import("~/pages/dashboard/AdminDashboard"));
const Orders = lazy(() => import("~/pages/orders"));
const Categories = lazy(() => import("~/pages/categories"));
const Seller = lazy(() => import("~/pages/seller"));
const PaymentRequests = lazy(() => import("~/pages/payment-requests"));
const ManageSellers = lazy(() => import("~/pages/manageSellers"));
const SellerRequest = lazy(() => import("~/pages/sellerRequest"));
const ViewSeller = lazy(
  () => import("~/pages/sellerRequest/components/ViewSeller")
);
const LiveChat = lazy(() => import("~/pages/live-chat"));
const OrderDetails = lazy(
  () => import("~/pages/orders/components/OrderDetails")
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
        path: "/order/details/:id",
        roles: ["admin", "seller"],
        element: <OrderDetails />,
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
      {
        path: "/manage-sellers",
        roles: ["admin", "seller"],
        element: <ManageSellers />,
      },

      {
        path: "/seller-requests",
        roles: ["admin", "seller"],
        element: <SellerRequest />,
      },
      {
        path: "/seller/view/:id",
        roles: ["admin", "seller"],
        element: <ViewSeller />,
      },
      {
        path: "/live-chat",
        roles: ["admin", "seller"],
        element: <LiveChat />,
      },
    ],
  },
];

export default AdminRoutes;
