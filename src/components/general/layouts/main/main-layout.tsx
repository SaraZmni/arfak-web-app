import { FC } from "react";
import { Outlet } from "react-router";
import { Navbar } from "../navbar";
import { Footer } from "@components/general/footer";

const MainLayout: FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
