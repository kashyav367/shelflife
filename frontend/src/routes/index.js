
import { lazy } from "react";

export const routes = [
  {
    path: "/",
    Component: lazy(() => import("@/components/JoinHouseHold")),
    isProtected: false,
  },
  {
    path: "/items",
    Component: lazy(() => import("@/components/dashboard/items/Items")),
    isProtected: true,
  },
  {
    path: "/members",
    Component: lazy(() => import("@/components/dashboard/members/Members")),
    isProtected: true,
  },
];