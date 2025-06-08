import {
  CircleGauge,
  DollarSignIcon,
  GitPullRequestArrowIcon,
  LayoutDashboard,
  LogOutIcon,
  MessageCircle,
  Shield,
  ShoppingBasket,
  UserRoundCogIcon,
} from "lucide-react";

export const LinksData = [
  {
    id: 1,
    icon: CircleGauge,
    label: "Dashboard",
    link: "/admin/dashboard",
    role: ["admin", "seller"],
  },

  {
    id: 2,
    icon: ShoppingBasket,
    label: "Orders",
    link: "/admin/orders",
    role: ["admin", "seller"],
  },

  {
    id: 3,
    icon: LayoutDashboard,
    label: "Categories",
    link: "/categories",
    role: ["admin", "seller"],
  },

  {
    id: 4,
    icon: UserRoundCogIcon,
    label: "Sellers",
    link: "/seller",
    role: ["admin", "seller"],
  },

  {
    id: 5,
    icon: DollarSignIcon,
    label: "Payment Request",
    link: "/payment-request",
    role: ["admin", "seller"],
  },

  {
    id: 6,
    icon: Shield,
    label: "Manage Sellers",
    link: "/manage-sellers",
    role: ["admin", "seller"],
  },

  {
    id: 9,
    icon: GitPullRequestArrowIcon,
    label: "Sellers Requests",
    link: "/seller-requests",
    role: ["admin", "seller"],
  },

  {
    id: 7,
    icon: MessageCircle,
    label: "Live Chat",
    link: "/live-chat",
    role: ["admin", "seller"],
  },

  {
    id: 8,
    icon: LogOutIcon,
    label: "Logout",
    link: "/logout",
    role: ["admin", "seller"],
  },
];

export const getNavData = (role: string) => {
  const constructedLinks = [];

  for (let i = 0; i <= LinksData.length; i++) {
    const currentRole = LinksData[i]?.role;

    for (let j = 0; j <= currentRole?.length; j++) {
      if (role === currentRole[j]) {
        constructedLinks.push(LinksData[i]);
      }
    }
  }

  return constructedLinks;
};
