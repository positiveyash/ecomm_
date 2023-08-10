import React from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productscontext";

const About = () => {
const {myName}=useProductContext();

  const data = {
    name: "Thapa Ecommerce",
  };

  return 
  <>
   {myName}
   <HeroSection myData={data} />;
  </>
 
};

export default About;
