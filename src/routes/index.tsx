import { MainLayout } from "@components/general/layouts";
import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./home";
import { About } from "./about";
import { Blogs } from "./blogs";
import { Contact } from "./contact";

const AppRouter: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AppRouter;
