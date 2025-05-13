import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Contact from "./Contact/Form";
import Home from './Home/Home'
// import StarFooter from "./Layout/StarFoter";
import Recognized from "./Home/Recognized";

const AppRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Contact />} />
      {/* <Route path="/star" element={<StarFooter />}/> */}
      <Route path="/reco" element={<Recognized />}/>
      <Route path="/hero" element={<Home/>}/>
      </Route>
    </Routes>
    </>
  );
};

export default AppRoutes;
