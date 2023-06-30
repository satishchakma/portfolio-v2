import "./Portfolio.css";
import { LiaGripVerticalSolid } from "react-icons/lia";
import ProjectBanner from "./ProjectBanner";
import project1 from "../assets/main-1.png";
import project2 from "../assets/main-2.png";

import { useRef } from "react";
import { useEffect } from "react";

const Portfolio = () => {
  return (
    <section
      id="projects"
      className="my-[90px]"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <h4 className="subtitle scroll-animation  gap-4">
        <LiaGripVerticalSolid></LiaGripVerticalSolid>
        MY PROJECTS
      </h4>
      <div className="section-header ">
        <h1>
          Featured
          <span> Projects</span>
        </h1>
      </div>
      <ProjectBanner></ProjectBanner>
      <div className="bg">
        <div className="my-div">
          <img className="project1" src={project1} alt="" />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Portfolio;
