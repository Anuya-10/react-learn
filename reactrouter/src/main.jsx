import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Layout from "./layout.jsx";
import Home from "./component/home/home.jsx";
import About from "./component/about/about.jsx";
import Contact from "./component/contactus/contactus.jsx";
import User from "./component/user/user.jsx";
import Github, { githubinfoloader } from "./component/github/github.jsx";

// ✅ Create a data router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contactus", element: <Contact /> },
      { path: "user/:userid", element: <User /> },
      {
        path: "github",
        element: <Github />,
        loader: githubinfoloader, // ✅ loader works here
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
