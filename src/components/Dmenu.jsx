import React from "react";
import "../components/Demenu.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import { FaShapes } from "react-icons/fa";
import { LiaGripVerticalSolid } from "react-icons/lia";

const Dmenu = () => {
  const [activeItem, setActiveItem] = useState("home");

  useEffect(() => {
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          // Logic to determine the active item based on scroll position
          const homeSection = document.getElementById("home");
          const aboutSection = document.getElementById("about");
          const skillsSection = document.getElementById("skills");
          const projectsSection = document.getElementById("projects");
          // ...

          const scrollPosition = window.scrollY;

          if (
            scrollPosition > homeSection.offsetTop &&
            scrollPosition < aboutSection.offsetTop
          ) {
            setActiveItem("home");
          } else if (
            scrollPosition > aboutSection.offsetTop &&
            scrollPosition < skillsSection.offsetTop
          ) {
            setActiveItem("about");
          } else if (
            scrollPosition > skillsSection.offsetTop &&
            scrollPosition < projectsSection.offsetTop
          ) {
            setActiveItem("skills");
          }

          isScrolling = false;
        });
      }

      isScrolling = true;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <ul className="dmenu scroll-nav d-flex">
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
            className={`scroll-to flex items-center justify-center gap-5 my-4 ${
              activeItem === "about" ? "active" : ""
            }`}
            href="#about"
          >
            <span>About</span>
            <AiOutlineUser className="dmenu-icons"></AiOutlineUser>
          </a>
        </li>
        <li>
          <a
            className={`scroll-to flex items-center justify-center gap-5 my-4 ${
              activeItem === "skills" ? "active" : ""
            }`}
            href="#skills"
          >
            <span>Skills</span>
            <FaShapes className="dmenu-icons"></FaShapes>
          </a>
        </li>
        <li>
          <a
            className={`scroll-to flex items-center justify-center gap-5 my-4 ${
              activeItem === "projects" ? "active" : ""
            }`}
            href="#projects"
          >
            <span>Projects</span>
            <LiaGripVerticalSolid className="dmenu-icons"></LiaGripVerticalSolid>
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
