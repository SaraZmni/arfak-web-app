import { FC } from "react";
import { Outlet } from "react-router";

const MainLayout: FC = () => {
  return (
    <>
      <div>MainLayout</div>
      <Outlet />
    </>
  );
};

export default MainLayout;
