import {
  BadgeIndianRupeeIcon,
  CircleGauge,
  DollarSignIcon,
  GitPullRequestArrowIcon,
  HeadsetIcon,
  IndianRupeeIcon,
  LayoutDashboard,
  ListOrderedIcon,
  LogOutIcon,
  MessageCircle,
  MessageSquareIcon,
  PackageOpenIcon,
  PlusIcon,
  Shield,
  ShoppingBasket,
  UserRoundCogIcon,
} from "lucide-react";
import type { ROLES } from "~/types";

export const LinksData = {
  admin: [
    {
      id: 1,
      icon: CircleGauge,
      label: "Dashboard",
      link: "/admin/dashboard",
      role: ["admin"],
    },

    {
      id: 2,
      icon: ShoppingBasket,
      label: "Orders",
      link: "/admin/orders",
      role: ["admin"],
    },

    {
      id: 3,
      icon: LayoutDashboard,
      label: "Categories",
      link: "/admin/categories",
      role: ["admin"],
    },

    {
      id: 4,
      icon: UserRoundCogIcon,
      label: "Sellers",
      link: "/admin/seller",
      role: ["admin"],
    },

    {
      id: 5,
      icon: DollarSignIcon,
      label: "Payment Request",
      link: "/admin/payment-request",
      role: ["admin"],
    },

    {
      id: 6,
      icon: Shield,
      label: "Manage Sellers",
      link: "/admin/manage-sellers",
      role: ["admin"],
    },

    {
      id: 9,
      icon: GitPullRequestArrowIcon,
      label: "Sellers Requests",
      link: "/admin/seller-requests",
      role: ["admin"],
    },

    {
      id: 7,
      icon: MessageCircle,
      label: "Live Chat",
      link: "/admin/live-chat",
      role: ["admin"],
    },

    {
      id: 8,
      icon: LogOutIcon,
      label: "Logout",
      link: "/admin/logout",
      role: ["admin"],
    },
  ],

  seller: [
    {
      id: 1,
      icon: CircleGauge,
      label: "Dashboard",
      link: "/seller/dashboard",
    },
    {
      id: 2,
      icon: PlusIcon,
      label: "Add Product",
      link: "/seller/add-product",
    },
    {
      id: 3,
      icon: ListOrderedIcon,
      label: "All Products",
      link: "/seller/products",
    },
    {
      id: 4,
      icon: BadgeIndianRupeeIcon,
      label: "Discount Products",
      link: "/seller/discount-products",
    },
    {
      id: 5,
      icon: PackageOpenIcon,
      label: "Orders",
      link: "/seller/orders",
    },
    {
      id: 6,
      icon: IndianRupeeIcon,
      label: "Payments",
      link: "/seller/payments",
    },
    {
      id: 7,
      icon: MessageSquareIcon,
      label: "Chat Customer",
      link: "/seller/chat-customer",
    },
    {
      id: 8,
      icon: HeadsetIcon,
      label: "Chat Support",
      link: "/seller/support",
    },
    {
      id: 9,
      icon: LogOutIcon,
      label: "Logout",
      link: "/seller/logout",
    },
  ],
};

export const getNavData = (role: ROLES) => {
  return LinksData[role];
};
