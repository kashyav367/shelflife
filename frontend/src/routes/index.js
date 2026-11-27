
import { lazy } from "react";

export const routes = [
  {
    path: "/",
    Component: lazy(() =>
      import("@/components/joinHouseHold/JoinHouseHold.jsx")
    ),
    isProtected: false,
  },
  {
    path: "/items",
    Component: lazy(() =>
      import("@/components/dashboard/items/Items.jsx")
    ),
    isProtected: true,
  },
  {
    path: "/members",
    Component: lazy(() =>
      import("@/components/dashboard/members/Members.jsx")
    ),
    isProtected: true,
  },
];
