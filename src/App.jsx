import "./App.css";
import Home from "./components/Home";

import AnimatedCursor from "react-animated-cursor";
import { Sugar } from "react-preloaders";
import Ribbon from "./components/Ribbon";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useState } from "react";
import { useEffect } from "react";
// ..
AOS.init();

function App() {
  const [activeItem, setActiveItem] = useState("home");

  useEffect(() => {
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
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
    <>
      <Home></Home>

      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        showSystemCursor={true}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
      />
      <Sugar time={2000} background="#28e98c" color={"#1f1f1f"}></Sugar>
      {/* <Ribbon></Ribbon> */}
    </>
  );
}

export default App;
