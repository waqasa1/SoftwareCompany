import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import StarFooter from "./StarFoter";

const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Outlet />
      <div>
        <StarFooter />
      </div>
    </>
  );
};

export default Layout;
