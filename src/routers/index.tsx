import { createBrowserRouter } from "react-router-dom";

import Layout from "../Featured/layout";
import Home from "../pages/Home";
import ApplicationDataSales from "../pages/Sales/applicationDataSales";
import LongDetailsSales from "../pages/Sales/longDetailsSales";

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
        path: "application-data-sales",
        element: <ApplicationDataSales />,
      },
      {
        path: "long-details-sales",
        element: <LongDetailsSales />,
      },
    ],
  },
]);
