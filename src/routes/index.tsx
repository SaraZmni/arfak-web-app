import { FC, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Lazy load the components
const Home = React.lazy(() => import("@routes/home/home"));
const About = React.lazy(() => import("@routes/about/about"));
const Blogs = React.lazy(() => import("@routes/blogs/blogs"));
const Contact = React.lazy(() => import("@routes/contact/contact"));
const MainLayout = React.lazy(
  () => import("@components/general/layouts/main/main-layout")
);

const AppRouter: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <MainLayout />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "/blogs",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Blogs />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
