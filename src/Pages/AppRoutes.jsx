import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Contact from "./Contact/Form";

const AppRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
};

export default AppRoutes;
