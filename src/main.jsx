import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import ErrorPage from "./pages/error.jsx";
import Dashboard from "./pages/dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/localstorage-mobile/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/localstorage-mobile/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
