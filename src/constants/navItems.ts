import type { navItem } from "@/types/navItem";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import {
  CreditCard,
  Database,
  HomeIcon,
  LayoutGrid,
  LogOut,
  MessageSquare,
  Minus,
  Settings,
  Users,
} from "lucide-react";

export const CNavItem: navItem[] = [
  {
    id: 1,
    title: " Dashboard",
    url: "/c/dashboard",
    icon: LayoutGrid,
    image: undefined,
  },
  {
    id: 2,
    title: "Payment Track",
    url: "/c/paytrack",
    icon: CreditCard,
    image: undefined,
  },
  {
    id: 3,
    title: " Users",
    url: "/c/allUsers",
    icon: Users,
    image: undefined,
  },
  {
    id: 4,
    title: " Orders",
    url: "/c/orders",
    icon: undefined,
    image: "/icons/order.png",
  },

  {
    id: 5,
    title: "Payment",
    url: "/c/allpayments",
    icon: undefined,
    image: "/icons/payments.png",
  },
  {
    id: 6,
    title: "Agency",
    url: "/c/agency",
    icon: GiHamburgerMenu,
    image: undefined,
  },
  {
    id: 7,
    title: "Return",
    url: "/c/withdraw",
    icon: GiHamburgerMenu,
    image: undefined,
  },
  {
    id: 6,
    title: "Home",
    url: "/c/services",
    icon: HomeIcon,
    image: undefined,
  },
  {
    id: 7,
    title: "Menu",
    // url: "/c/company",
    url: "/c/category",
    icon: GiHamburgerMenu,
    image: undefined,
  },
  {
    id: 8,
    title: "Footer",
    // url: "/c/category",
    url: "/c/footer",
    icon: Minus,
    image: undefined,
  },
  //{
  //   id: 9,
  //  title: " Email box",
  // url: "/c/email",
  //  icon: BsFillChatLeftTextFill,
  // image: undefined
  //},

  {
    id: 10,
    title: " Live Chat",
    url: "/c/liveChat",
    icon: MessageSquare,
    image: undefined,
  },
  // {
  //   id: 11,
  //   title: " Account Suspended",
  //   url: "/c/suspended",
  //   icon: BsFillPersonFill,
  // },
  {
    id: 12,
    title: " Create Admin",
    url: "/c/createAdmin",
    icon: Database,
    image: undefined,
  },
  {
    id: 14,
    title: "Settings",
    url: "/settings",
    icon: Settings,
    image: undefined,
  },
  {
    id: 15,
    title: " Logout",
    url: "/logout",
    icon: LogOut,
    image: undefined,
  },
];

export const CAUVNavItem: navItem[] = [
  {
    id: 1,
    title: " Profile",
    url: "/profile",
    icon: BsPerson,
    image: undefined,
  },
  {
    id: 2,
    title: "Orders",
    url: "/orders",
    icon: undefined,
    image: "/icons/order.png",
  },
  {
    id: 3,
    title: " Payments",
    url: "/payments",
    icon: undefined,
    image: "/icons/payments.png",
  },
  {
    id: 4,
    title: " Settings",
    url: "/settings",
    icon: undefined,
    image: "/icons/settings.png",
  },
];
