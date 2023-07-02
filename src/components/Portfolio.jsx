import "./Portfolio.css";
import { LiaGripVerticalSolid } from "react-icons/lia";
import ProjectBanner from "./ProjectBanner";
import project1 from "../assets/main-1.png";
import project2 from "../assets/main-2.png";

import {
  BiLogoReact,
  BiLogoMongodb,
  BiLogoTailwindCss,
  BiLogoFirebase,
  BiLogoFigma,
  BiLogoWordpress,
  BiLogoGit,
} from "react-icons/bi";
import { SiExpress, SiAxios, SiAdobexd, SiShopify } from "react-icons/si";
import { Link } from "react-router-dom";

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
      <div className="hello-summer" data-aos="fade-up" data-aos-duration="3000">
        <ProjectBanner text={"Hello Summer"}></ProjectBanner>
        <div className="bg">
          {/* <img className="project1" src={project1} alt="" /> */}
          <div className="my-div">
            <div className="overlay h-full text-white flex justify-center items-center gap-4">
              <a href="Link">Live Link</a>
              <a href="Link">Github Client Side</a>
              <a href="Link">Github Server Side</a>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000">
          <h1 className="font-bold text-3xl text-white bigilla">01</h1>
          <h1 className=" text-5xl text-white my-4">Hello Summer</h1>
          <p className="text-justify">
            The web application features a user-specific dashboard. Upon
            registration, all users are assigned the role of students by
            default. Only an admin has the ability to manage users and uploaded
            classes. The admin can appoint instructors, approve or deny classes,
            and provide feedback when necessary. Instructors, on the other hand,
            can add new classes and access class details through their
            dashboard. Students can select multiple classes and view their
            selected classes on their dashboard. They also have the option to
            make payments or remove classes from their selection.
          </p>
          <div className="my-8 grid grid-cols-10 ">
            <BiLogoReact className="w-10 h-10 stacks"></BiLogoReact>
            <SiExpress className="w-10 h-10 stacks"></SiExpress>
            <BiLogoMongodb className="w-10 h-10 stacks"></BiLogoMongodb>
            <BiLogoFirebase className="w-10 h-10 stacks"></BiLogoFirebase>
            <BiLogoMongodb className="w-10 h-10 stacks"></BiLogoMongodb>
          </div>
          <div className="flex gap-4">
            <Link className="link"> Live Link</Link>
            <Link className="link"> Github Client Side</Link>
            <Link className="link"> Github Server Side</Link>
          </div>
        </div>
      </div>
      <div className="toy-man" data-aos="fade-up" data-aos-duration="3000">
        <ProjectBanner text={"ToyMan"}></ProjectBanner>
        <div className="bg2">
          <div className="my-div">
            <div className="overlay h-full text-white flex justify-center items-center gap-4">
              <a href="Link">Live Link</a>
              <a href="Link">Github Client Side</a>
              <a href="Link">Github Server Side</a>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000">
          <h1 className="font-bold text-3xl text-white bigilla">02</h1>
          <h1 className=" text-5xl text-white my-4">ToyMan</h1>
          <p className="text-justify">
            The web application features a user-specific dashboard. Upon
            registration, all users are assigned the role of students by
            default. Only an admin has the ability to manage users and uploaded
            classes. The admin can appoint instructors, approve or deny classes,
            and provide feedback when necessary. Instructors, on the other hand,
            can add new classes and access class details through their
            dashboard. Students can select multiple classes and view their
            selected classes on their dashboard. They also have the option to
            make payments or remove classes from their selection.
          </p>
          <div className="my-8 grid grid-cols-10 ">
            <BiLogoReact className="w-10 h-10 stacks"></BiLogoReact>
            <SiExpress className="w-10 h-10 stacks"></SiExpress>
            <BiLogoMongodb className="w-10 h-10 stacks"></BiLogoMongodb>
            <BiLogoFirebase className="w-10 h-10 stacks"></BiLogoFirebase>
            <BiLogoMongodb className="w-10 h-10 stacks"></BiLogoMongodb>
          </div>
          <div className="flex gap-4">
            <Link className="link"> Live Link</Link>
            <Link className="link"> Github Client Side</Link>
            <Link className="link"> Github Server Side</Link>
          </div>
        </div>
      </div>
      <div className="chefs-table" data-aos="fade-up" data-aos-duration="3000">
        <ProjectBanner text={"Chefs Table"}></ProjectBanner>
        <div className="bg3">
          <div className="my-div">
            <div className="overlay h-full text-white flex justify-center items-center gap-4">
              <a href="Link">Live Link</a>
              <a href="Link">Github Client Side</a>
              <a href="Link">Github Server Side</a>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000">
          <h1 className="font-bold text-3xl text-white bigilla">03</h1>
          <h1 className=" text-5xl text-white my-4">Chef's Table</h1>
          <p className="text-justify">
            The web application features a user-specific dashboard. Upon
            registration, all users are assigned the role of students by
            default. Only an admin has the ability to manage users and uploaded
            classes. The admin can appoint instructors, approve or deny classes,
            and provide feedback when necessary. Instructors, on the other hand,
            can add new classes and access class details through their
            dashboard. Students can select multiple classes and view their
            selected classes on their dashboard. They also have the option to
            make payments or remove classes from their selection.
          </p>
          <div className="my-8 grid grid-cols-10 ">
            <BiLogoReact className="w-10 h-10 stacks"></BiLogoReact>
            <SiExpress className="w-10 h-10 stacks"></SiExpress>

            <BiLogoFirebase className="w-10 h-10 stacks"></BiLogoFirebase>
            <BiLogoMongodb className="w-10 h-10 stacks"></BiLogoMongodb>
          </div>
          <div className="flex gap-4">
            <Link className="link"> Live Link</Link>
            <Link className="link"> Github Client Side</Link>
            <Link className="link"> Github Server Side</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
