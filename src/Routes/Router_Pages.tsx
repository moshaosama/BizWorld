import { createBrowserRouter, RouterProvider } from "react-router";
import { Error, Home } from "../Pages";
import Layout from "../Layout/Layout";
import About from "../Pages/About";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";
import Faq from "../Pages/Faq";
import Services from "../Pages/Services";
import Shop from "../Pages/Shop";

const Router_Pages = () => {
  const Router = createBrowserRouter([
    {
      path: "",
      errorElement: <Error />,
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/faq",
          element: <Faq />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
      ],
    },
  ]);

  return <RouterProvider router={Router} />;
};
export default Router_Pages;
