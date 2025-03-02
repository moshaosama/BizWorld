import { createBrowserRouter, RouterProvider } from "react-router";
import { Error, Home } from "../Pages";
import Layout from "../Layout/Layout";

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
      ],
    },
  ]);

  return <RouterProvider router={Router} />;
};
export default Router_Pages;
