import { lazy } from "react";
import EditProduct from "~/pages/seller/allProducts/editProduct/EditProduct";
import OrderDetails from "~/pages/seller/orders/components/OrderDetails";

const MainLayout = lazy(() => import("~/layout/mainLayout"));
const AddProduct = lazy(() => import("~/pages/seller/addProduct"));
const AllProducts = lazy(() => import("~/pages/seller/allProducts"));
const ChatCustomer = lazy(() => import("~/pages/seller/chatCustomer"));
const ChatSupport = lazy(() => import("~/pages/seller/chatSupport"));
const SellerDashboard = lazy(() => import("~/pages/seller/dashboard"));
const DiscountProduct = lazy(() => import("~/pages/seller/discountProduct"));
const Orders = lazy(() => import("~/pages/seller/orders"));
const Payments = lazy(() => import("~/pages/seller/payments"));
const Profile = lazy(() => import("~/pages/seller/profile"));

const SellerRoutes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/dashboard",
        roles: ["seller"],
        element: <SellerDashboard />,
      },
      {
        path: "/seller/orders",
        roles: ["seller"],
        element: <Orders />,
      },
      {
        path: "/seller/orders/details/:id",
        roles: ["seller", "seller"],
        element: <OrderDetails />,
      },
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
        path: "/seller/:productId/edit",
        roles: ["seller"],
        element: <EditProduct />,
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
      {
        path: "/seller/profile",
        roles: ["seller"],
        element: <Profile />,
      },
    ],
  },
];

export default SellerRoutes;
