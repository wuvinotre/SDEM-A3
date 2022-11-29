import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/aines",
  //   element: <AinesPage />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/anticoncepcionais",
  //   element: <AnticoncepcionaisPage />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/atitireoidianos",
  //   element: <AtitireoidianosPage />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/corticoides",
  //   element: <CorticoidesPage />,
  //   errorElement: <ErrorPage />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
