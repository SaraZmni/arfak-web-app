import { FC } from "react";
import { Outlet } from "react-router";
import { Navbar } from "../navbar";

const MainLayout: FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
