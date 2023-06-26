import "./Home.css";
import illustration from "../assets/illutration.svg";
import { TbBrandFiverr, TbBrandUpwork, TbSettings } from "react-icons/tb";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BiCloudDownload } from "react-icons/bi";
import CustomConatiner from "./CustomConatiner";
import Dmenu from "./Dmenu";
import resumePdf from "../assets/Satish Chakma Resume.pdf";

const Home = () => {
  return (
    <div className="flex ">
      <div className="left-sidebar ">
        <span className="setting-toggle absolute top-14 left-[-20px]">
          <TbSettings className="setting"></TbSettings>
        </span>
        <div className="sidebar-header flex items-center justify-between">
          <h1 className="family-inter font-extrabold text-4xl text-white">
            Satish
          </h1>
          <span className="designation text-white text-[14px]">
            MERN Developer
          </span>
        </div>
        <img className="me my-6" src={illustration} alt="Satish" />
        <a
          href="mailto: satishchakma.gd@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="email">satishchakma.gd@gmail.com</h2>
        </a>
        <a
          href="https://goo.gl/maps/j1uFivfyD2YVmPwu5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="address">Based in Chattogram, Bangladesh</h2>
        </a>
        <p className="copyright my-6">© 2023 Satish. All Rights Reserved</p>
        <ul className="social-profile flex items-center wrap justify-center gap-4 my-6">
          <li>
            <a href="#" className="flex justify-center items-center">
              <FaLinkedinIn></FaLinkedinIn>
            </a>
          </li>
          <li>
            <a href="#" className="flex justify-center items-center">
              <FaGithub></FaGithub>
            </a>
          </li>
          <li>
            <a href="#" className="flex justify-center items-center">
              <TbBrandFiverr></TbBrandFiverr>
            </a>
          </li>
          <li>
            <a href="#" className="flex justify-center items-center">
              <TbBrandUpwork></TbBrandUpwork>
            </a>
          </li>
        </ul>
        <a href={resumePdf} className="theme-btn gap-5" download>
          <BiCloudDownload className="text-4xl"></BiCloudDownload>
          Resume!
        </a>
      </div>
      <CustomConatiner></CustomConatiner>
      <Dmenu></Dmenu>
    </div>
  );
};

export default Home;
