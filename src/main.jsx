import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Latestnews from "./Pages/Latestnews";
import Socroom from "./Pages/Socroom";
import Intro from "./Pages/Intro";
import Membership from "./Pages/Membership";
import Book from "./Pages/Book";
import Product from "./Pages/Product"
import Discount from "./Pages/Discount";
import Emag from "./Pages/Emag";
import Other from "./Pages/Other";
import Contact from "./Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/latestnews",
        element: <Latestnews />,
      },
      {
        path: "/socroom",
        element: <Socroom />,
      },
      {
        path: "/intro",
        element: <Intro />,
      },
      {
        path: "/membership",
        element: <Membership />,
      },
      {
        path: "/book",
        element: <Book />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/discount",
        element: <Discount />,
      },
      {
        path: "/emag",
        element: <Emag />,
      },
      {
        path: "/other",
        element: <Other />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
      

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
