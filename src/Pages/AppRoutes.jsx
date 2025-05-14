import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Contact from "./Contact/Form";
import Home from './Home/Home'
import Slick from "./Home/Slick";
import Testimonials from './Home/Testimonials'

const AppRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Contact />} />
      <Route path="/slick" element={<Slick/>}/>
      <Route path="/hero" element={<Home/>}/>
      <Route path="/slider" element={<Testimonials/>} />
      </Route>
    </Routes>
    </>
  );
};

export default AppRoutes;
