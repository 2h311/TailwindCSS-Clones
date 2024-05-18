import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./output.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TeamSection, ContactSection, ContentSection } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "meet-the-team",
    element: <TeamSection />,
  },
  {
    path: "contact-us",
    element: <ContactSection />,
  },
  {
    path: "blog",
    element: <ContentSection />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
