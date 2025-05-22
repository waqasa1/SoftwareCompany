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
import Node from "../Company/Node";
import ReactServices from "../Company/React";
import Shopify from "../Company/Shopify.jsx";
import Php from "../Company/Php.jsx";
import AboutUs from "./Contact/AboutUs.jsx";

const AppRoutes = () => {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/slick" element={<Slick/>}/>
      <Route index element={<Home/>}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/slider" element={<Testimonials/>} />
      <Route path="/case-studies" element={<Case/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/solution" element={<Solution />}/>
      <Route path="/herodev" element={<Hero/>} />
      <Route path="/otter" element={<Otters />} />
      <Route path="/performance" element={<Performance />} />
      <Route path="/node" element={<Node />}/>
      <Route path="/react" element={<ReactServices />} />
      <Route path="/shopify" element={<Shopify />}/>
      <Route path="/php" element={<Php />} />
      <Route path="/about" element={<AboutUs />} />
      </Route>
    </Routes>
    </>
  );
};

export default AppRoutes;
