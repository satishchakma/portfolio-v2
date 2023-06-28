import "./Portfolio.css";
import { LiaGripVerticalSolid } from "react-icons/lia";
import ProjectBanner from "./ProjectBanner";
import project1 from "../assets/main-1.png";

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
        <img className="project1" src={project1} alt="" />
      </div>
    </section>
  );
};

export default Portfolio;
