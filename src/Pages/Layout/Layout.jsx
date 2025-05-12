import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Navbar />
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
