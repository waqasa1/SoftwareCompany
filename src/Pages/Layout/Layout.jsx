import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <div style={{  maxWidth:'1500px', mx:'auto' }}>
        <Navbar />
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
