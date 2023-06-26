import React from "react";
import About from "./About";
import "./CustomContainer.css";
import HeroSection from "./HeroSection";

const CustomConatiner = () => {
  return (
    <div className="custom-container">
      <div className="content-width">
        <HeroSection></HeroSection>
        <About></About>
      </div>
    </div>
  );
};

export default CustomConatiner;
