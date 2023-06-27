import React from "react";
import About from "./About";
import "./CustomContainer.css";
import HeroSection from "./HeroSection";
import Ribbon from "./Ribbon";

const CustomConatiner = () => {
  return (
    <div className="custom-container">
      <div className="content-width">
        <HeroSection></HeroSection>
        <About></About>
        <Ribbon></Ribbon>
      </div>
    </div>
  );
};

export default CustomConatiner;
