import About from "./About";
import "./CustomContainer.css";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";
// import Ribbon from "./Ribbon";
import Skills from "./Skills";

const CustomConatiner = () => {
  return (
    <div className="custom-container">
      <div className="content-width">
        <HeroSection></HeroSection>
        <About></About>
        {/* <Ribbon></Ribbon> */}
        <Skills></Skills>
        <Portfolio></Portfolio>
      </div>
    </div>
  );
};

export default CustomConatiner;
