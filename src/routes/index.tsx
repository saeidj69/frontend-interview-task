import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Bookmarks from "../pages/Bookmarks";
import Feed from "../pages/Feed";

import type { ReactElement } from "react";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Feed />,
    },
    {
      path: "bookmarks",
      element: <Bookmarks />,
    },
  ],
  { future: { v7_partialHydration: true, v7_relativeSplatPath: true } }
);

export default function Routes(): ReactElement {
  return (
    <RouterProvider future={{ v7_startTransition: true }} router={router} />
  );
}
