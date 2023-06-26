import React from "react";
import "./CustomContainer.css";
import HeroSection from "./HeroSection";

const CustomConatiner = () => {
  return (
    <div className="custom-container">
      <div className="content-width">
        <HeroSection></HeroSection>
      </div>
    </div>
  );
};

export default CustomConatiner;
