import React, {useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Pages/AppRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  
  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true,     
  });
}, []);
  
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
