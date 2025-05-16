import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Contact from "./Contact/Form";
import Home from './Home/Home'
import Slick from "./Home/Slick";
import Testimonials from './Home/Testimonials'
import Case from "./CaseStudies/Case";
import Blog from "./Home/Blog";
import ContactPage from './Contact/Contactp'
import Solution from "./Solution/Solution";
import Hero from './WebDev/Hero'
import Otters from "./WebDev/Otters";
import Performance from "./WebDev/Perfomance";
import ScrollToTop from "./ScrollToTop";

const AppRoutes = () => {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Contact />} />
      <Route path="/slick" element={<Slick/>}/>
      <Route path="/hero" element={<Home/>}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/slider" element={<Testimonials/>} />
      <Route path="/case-studies" element={<Case/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/solution" element={<Solution />}/>
      <Route path="/herodev" element={<Hero/>} />
      <Route path="/otter" element={<Otters />} />
      <Route path="/performance" element={<Performance />} />
      </Route>
    </Routes>
    </>
  );
};

export default AppRoutes;
