import React from "react";
import "../components/Demenu.css";
import { AiOutlineHome } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";

const Dmenu = () => {
  const [activeItem, setActiveItem] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Logic to determine the active item based on scroll position
      const homeSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");
      const projectsSection = document.getElementById("projects");
      // ...

      const scrollPosition = window.scrollY;

      if (
        scrollPosition >= homeSection.offsetTop &&
        scrollPosition < aboutSection.offsetTop
      ) {
        setActiveItem("home");
      } else if (
        scrollPosition >= aboutSection.offsetTop &&
        scrollPosition < projectsSection.offsetTop
      ) {
        setActiveItem("about");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <ul className="dmenu scroll-nav d-flex">
        {/* <li>
          <a className="scroll-to active" href="#home">
            <AiOutlineHome className="dmenu-icons"></AiOutlineHome>
          </a>
        </li> */}
        <li>
          <a
            className={`scroll-to flex items-center justify-center gap-5 my-4 ${
              activeItem === "home" ? "active" : ""
            }`}
            href="#home"
          >
            <span>Home</span>
            <AiOutlineHome className="dmenu-icons"></AiOutlineHome>
          </a>
        </li>
        <li>
          <a
            className="scroll-to flex items-center justify-center gap-5 my-4"
            href="#resume"
          >
            <span>Resume</span>
            <AiOutlineHome className="dmenu-icons"></AiOutlineHome>
          </a>
        </li>
        <li>
          <a
            className="scroll-to flex items-center justify-center gap-5 my-4"
            href="#services"
          >
            <span>Services</span>
            <AiOutlineHome className="dmenu-icons"></AiOutlineHome>
          </a>
        </li>
        <li>
          <a
            className="scroll-to flex items-center justify-center gap-5 my-4"
            href="#skills"
          >
            <span>Skills</span>
            <AiOutlineHome className="dmenu-icons"></AiOutlineHome>
          </a>
        </li>
        <li>
          <a
            className="scroll-to flex items-center justify-center gap-5 my-4"
            href="#portfolio"
          >
            <span>Portfolio</span>
            <AiOutlineHome className="dmenu-icons"></AiOutlineHome>
          </a>
        </li>
        <li>
          <a
            className="scroll-to flex items-center justify-center gap-5 my-4"
            href="#testimonial"
          >
            <span>Testimonial</span>
            <AiOutlineHome className="dmenu-icons"></AiOutlineHome>
          </a>
        </li>
        <li>
          <a
            className="scroll-to flex items-center justify-center gap-5 my-4"
            href="#contact"
          >
            <span>Contact</span>
            <AiOutlineHome className="dmenu-icons"></AiOutlineHome>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dmenu;