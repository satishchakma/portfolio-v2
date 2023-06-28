import "./App.css";
import Home from "./components/Home";

import AnimatedCursor from "react-animated-cursor";
import { Sugar } from "react-preloaders";
import Ribbon from "./components/Ribbon";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useState } from "react";
import { useEffect } from "react";
import Dmenu from "./components/Dmenu";
// ..
AOS.init();

function App() {
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
      <Dmenu></Dmenu>
    </>
  );
}

export default App;
