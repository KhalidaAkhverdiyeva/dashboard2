import { createBrowserRouter } from "react-router-dom";

import Layout from "../Featured/layout";
import Home from "../pages/Home";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "gadgets",
        element: <Gadget />,
      },
    ],
  },
]);
