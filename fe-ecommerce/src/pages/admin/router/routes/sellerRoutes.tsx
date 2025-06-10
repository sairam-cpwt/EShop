import { lazy } from "react";

const MainLayout = lazy(() => import("~/layout/mainLayout"));
const AddProduct = lazy(() => import("~/pages/seller/addProduct"));
const AllProducts = lazy(() => import("~/pages/seller/allProducts"));
const ChatCustomer = lazy(() => import("~/pages/seller/chatCustomer"));
const ChatSupport = lazy(() => import("~/pages/seller/chatSupport"));
const SellerDashboard = lazy(() => import("~/pages/seller/dashboard"));
const DiscountProduct = lazy(() => import("~/pages/seller/discountProduct"));
const Orders = lazy(() => import("~/pages/seller/orders"));
const Payments = lazy(() => import("~/pages/seller/payments"));
const SellerRoutes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        roles: ["admin"],
        element: <SellerDashboard />,
      },
      {
        path: "/seller/orders",
        roles: ["admin"],
        element: <Orders />,
      },
      // {
      //   path: "/admin/order/details/:id",
      //   roles: ["admin"],
      //   element: <OrderDetails />,
      // },
      {
        path: "/seller/add-product",
        roles: ["seller"],
        element: <AddProduct />,
      },
      {
        path: "/seller/products",
        roles: ["seller"],
        element: <AllProducts />,
      },
      {
        path: "/seller/discount-products",
        roles: ["seller"],
        element: <DiscountProduct />,
      },
      {
        path: "/seller/payments",
        roles: ["seller"],
        element: <Payments />,
      },
      {
        path: "/seller/chat-customer",
        roles: ["seller"],
        element: <ChatCustomer />,
      },
      {
        path: "/seller/support",
        roles: ["seller"],
        element: <ChatSupport />,
      },
    ],
  },
];

export default SellerRoutes;
