import "./App.css";
import Home from "./components/Home";

import AnimatedCursor from "react-animated-cursor";
import { Sugar } from "react-preloaders";
import Ribbon from "./components/Ribbon";

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
    </>
  );
}

export default App;
