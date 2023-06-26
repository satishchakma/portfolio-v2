import React from "react";
import "./HeroSection.css";
import { AiOutlineHome } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { BsArrowDown } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="right-side">
          <h4 className="subtitle scroll-animation  gap-4">
            <AiOutlineHome></AiOutlineHome>
            INTRODUCE
          </h4>
        </div>
        <h1 className="scroll-animation text-white font-bold text-5xl leading-[70px] mb-4">
          Hi, I'm<span> Satish</span>, <br></br>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "MERN Stack Developer",
              1000,
              "Javascript Developer",
              1000,
              "Designer",
              1000,
              "Freelancer",
              1000,
            ]}
            speed={40}
            style={{
              width: "600px",
              display: "block",
            }}
            repeat={Infinity}
          />
        </h1>
        <p data-aos="fade-up">
          With a keen eye for detail and a strong focus on user-centric design,
          I strive to deliver seamless and engaging solutions. I bring a
          versatile skill set and a commitment to client satisfaction. Let's
          collaborate and bring your ideas to life!
        </p>
        <a
          href="#portfolio"
          className="go-to-project-btn scroll-to scroll-animation my-[50px]"
        >
          <img
            decoding="async"
            src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/round-text.png"
            alt="Rounded Text"
          />
          <BsArrowDown className="arrow"></BsArrowDown>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
