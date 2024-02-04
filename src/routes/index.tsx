import { MainLayout } from "@components/general/layouts";
import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./home";

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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AppRouter;
