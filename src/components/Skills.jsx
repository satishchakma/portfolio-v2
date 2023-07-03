import React from "react";
import "./Skills.css";
import { FaShapes } from "react-icons/fa";
import {
  BiLogoReact,
  BiLogoMongodb,
  BiLogoTailwindCss,
  BiLogoFirebase,
  BiLogoFigma,
  BiLogoWordpress,
  BiLogoGit,
} from "react-icons/bi";
import { DiJavascript1, DiCss3, DiSass } from "react-icons/di";
import { AiOutlineHtml5, AiFillGithub } from "react-icons/ai";
import { RiBootstrapLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress, SiAxios, SiAdobexd, SiShopify } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const Skills = () => {
  return (
    <section
      id="skills"
      className="my-[90px]"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <h4 className="subtitle scroll-animation  gap-4">
        <FaShapes></FaShapes>
        MY SKILLS
      </h4>
      <div className="section-header ">
        <h1>
          Tech
          <span> Stacks</span>
        </h1>
      </div>
      <div className="grid lg:grid-cols-6 grid-cols-3 gap-6">
        <div className="stacks flex flex-col justify-center items-center">
          <DiJavascript1 className="w-14 h-14 "></DiJavascript1>
          <h2>Javascript</h2>
        </div>
        <div className="stacks flex flex-col justify-center items-center">
          <BiLogoReact className="w-14 h-14 "></BiLogoReact>
          <h2>React JS</h2>
        </div>
        <div className="stacks flex flex-col justify-center items-center">
          <BiLogoMongodb className="w-14 h-14 "></BiLogoMongodb>
          <h2>Mongo DB</h2>
        </div>
        <div className="stacks flex flex-col justify-center items-center">
          <AiOutlineHtml5 className="w-14 h-14 "></AiOutlineHtml5>
          <h2>HTML5</h2>
        </div>
        <div className="stacks flex flex-col justify-center items-center">
          <DiCss3 className="w-14 h-14 "></DiCss3>
          <h2>CSS3</h2>
        </div>
        <div className="stacks flex flex-col justify-center items-center">
          <RiBootstrapLine className="w-14 h-14 "></RiBootstrapLine>
          <h2>Bootstrap</h2>
        </div>
        <div className="stacks flex flex-col justify-center items-center">
          <DiSass className="w-14 h-14 "></DiSass>
          <h2>Sass</h2>
        </div>
        <div className="stacks flex flex-col justify-center items-center">
          <BiLogoTailwindCss className="w-14 h-14 "></BiLogoTailwindCss>
          <h2>Tailwind</h2>
        </div>
        <div className="stacks flex flex-col justify-center items-center">
          <FaNode className="w-14 h-14 "></FaNode>
          <h2>Node JS</h2>
        </div>
        <div className="stacks flex flex-col justify-center items-center">
          <SiExpress className="w-14 h-14 "></SiExpress>
          <h2>Express JS</h2>
        </div>
        <div className="stacks flex flex-col justify-center items-center">
          <BiLogoFirebase className="w-14 h-14 "></BiLogoFirebase>
          <h2>Firebase</h2>
        </div>
        <div className="stacks flex flex-col justify-center items-center">
          <SiAxios className="w-14 h-14 "></SiAxios>
          <h2>Axios</h2>
        </div>
        <div className="stacks flex flex-col justify-center items-center">
          <BiLogoFigma className="w-14 h-14 "></BiLogoFigma>
          <h2>Figma</h2>
        </div>
        <div className="stacks flex flex-col justify-center items-center">
          <SiAdobexd className="w-14 h-14 "></SiAdobexd>
          <h2>Adobe XD</h2>
        </div>
        <div className="stacks flex flex-col justify-center items-center">
          <BiLogoWordpress className="w-14 h-14 "></BiLogoWordpress>
          <h2>Wordpress</h2>
        </div>
        <div className="stacks flex flex-col justify-center items-center">
          <SiShopify className="w-14 h-14 "></SiShopify>
          <h2>Shopify</h2>
        </div>
        <div className="stacks flex flex-col justify-center items-center">
          <BiLogoGit className="w-14 h-14 "></BiLogoGit>
          <h2>Git</h2>
        </div>
        <div className="stacks flex flex-col justify-center items-center">
          <AiFillGithub className="w-14 h-14 "></AiFillGithub>
          <h2>GitHub</h2>
        </div>
        <div className="stacks flex flex-col justify-center items-center">
          <TbBrandVscode className="w-14 h-14 "></TbBrandVscode>
          <h2>VS Code</h2>
        </div>
      </div>
    </section>
  );
};

export default Skills;
