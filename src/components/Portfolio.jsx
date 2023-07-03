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
            <div className="overlay h-full text-white block lg:flex justify-center items-center gap-4">
              <a
                href="https://hello-summer-e56ae.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Link
              </a>
              <a
                href="https://github.com/satishchakma/Hello-Summer-Client"
                target="_blank"
                rel="noreferrer"
              >
                Github Client Side
              </a>
              <a
                href="https://github.com/satishchakma/Hello-Summer-Server"
                target="_blank"
                rel="noreferrer"
              >
                Github Server Side
              </a>
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
          <div className="my-8 grid lg:grid-cols-10 grid-cols-5 ">
            <BiLogoReact className="w-10 h-10 stacks"></BiLogoReact>
            <SiExpress className="w-10 h-10 stacks"></SiExpress>
            <BiLogoMongodb className="w-10 h-10 stacks"></BiLogoMongodb>
            <BiLogoFirebase className="w-10 h-10 stacks"></BiLogoFirebase>
            <BiLogoMongodb className="w-10 h-10 stacks"></BiLogoMongodb>
          </div>
          <div className="block lg:flex gap-4">
            <a
              href="https://hello-summer-e56ae.web.app/"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
            <a
              href="https://github.com/satishchakma/Hello-Summer-Client"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              Github Client Side
            </a>
            <a
              href="https://github.com/satishchakma/Hello-Summer-Server"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              Github Server Side
            </a>
          </div>
        </div>
      </div>
      <div className="toy-man" data-aos="fade-up" data-aos-duration="3000">
        <ProjectBanner text={"ToyMan"}></ProjectBanner>
        <div className="bg2">
          <div className="my-div">
            <div className="overlay h-full text-white block lg:flex justify-center items-center gap-4">
              <a
                href="https://toyman-32b27.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Link
              </a>
              <a
                href="https://github.com/satishchakma/ToyMan-Client"
                target="_blank"
                rel="noreferrer"
              >
                Github Client Side
              </a>
              <a
                href="https://github.com/satishchakma/ToyMan-Server"
                target="_blank"
                rel="noreferrer"
              >
                Github Server Side
              </a>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000">
          <h1 className="font-bold text-3xl text-white bigilla">02</h1>
          <h1 className=" text-5xl text-white my-4">ToyMan</h1>
          <p className="text-justify">
            ToyMan is an exciting web-based project that combines the joy of
            toys with the convenience of an online platform. Powered by
            Firebase, it offers a secure login and registration page with
            options for Google and email login. Real-time data from a MongoDB
            database is loaded through a specially created API, ensuring the
            latest toy information is always available. Dynamic routing enables
            users to explore detailed toy pages, while private routes ensure
            privacy. Users can add their favorite toys and enjoy interactive
            notifications with Toastify. ToyMan features simple animations to
            enhance the visual experience. It also enables CRUD operations for
            effective toy management. With its secure authentication, real-time
            data, dynamic routing, private routes, favorite functionalities,
            animations, and CRUD operations, ToyMan provides an immersive and
            engaging platform for toy enthusiasts to explore and enjoy.
          </p>
          <div className="my-8 grid lg:grid-cols-10 grid-cols-5 ">
            <BiLogoReact className="w-10 h-10 stacks"></BiLogoReact>
            <SiExpress className="w-10 h-10 stacks"></SiExpress>
            <BiLogoMongodb className="w-10 h-10 stacks"></BiLogoMongodb>
            <BiLogoFirebase className="w-10 h-10 stacks"></BiLogoFirebase>
            <BiLogoMongodb className="w-10 h-10 stacks"></BiLogoMongodb>
          </div>
          <div className="block lg:flex gap-4">
            <a
              href="https://toyman-32b27.web.app/"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
            <a
              href="https://github.com/satishchakma/ToyMan-Client"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              Github Client Side
            </a>
            <a
              href="https://github.com/satishchakma/ToyMan-Server"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              Github Server Side
            </a>
          </div>
        </div>
      </div>
      <div className="chefs-table" data-aos="fade-up" data-aos-duration="3000">
        <ProjectBanner text={"Chefs Table"}></ProjectBanner>
        <div className="bg3">
          <div className="my-div">
            <div className="overlay h-full text-white block lg:flex justify-center items-center gap-4">
              <a
                href="https://chef-s-table-f7ef1.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Link
              </a>
              <a
                href="https://github.com/satishchakma/Chef-s-Table-Client"
                target="_blank"
                rel="noreferrer"
              >
                Github Client Side
              </a>
              <a
                href="https://github.com/satishchakma/Chef-s-Table-Server"
                target="_blank"
                rel="noreferrer"
              >
                Github Server Side
              </a>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000">
          <h1 className="font-bold text-3xl text-white bigilla">03</h1>
          <h1 className=" text-5xl text-white my-4">Chef's Table</h1>
          <p className="text-justify">
            Chef's Table is a web-based project that allows users to explore the
            world of renowned chefs and their culinary creations. Powered by
            Firebase, the project includes a login and register page for secure
            user authentication. Users can log in using their Google or GitHub
            accounts for added convenience. The project leverages a specially
            created API to load a vast database of chefs' profiles and recipes.
            Dynamic routing enables users to access detailed profiles of
            individual chefs. Private routes ensure privacy and personalized
            experiences. A standout feature is the ability to add chefs and
            recipes to favorites, with interactive notifications powered by
            Toastify. Chef's Table offers an immersive culinary experience,
            making it the ideal platform for food enthusiasts and aspiring
            chefs.
          </p>
          <div className="my-8 grid lg:grid-cols-10 grid-cols-5 ">
            <BiLogoReact className="w-10 h-10 stacks"></BiLogoReact>
            <SiExpress className="w-10 h-10 stacks"></SiExpress>

            <BiLogoFirebase className="w-10 h-10 stacks"></BiLogoFirebase>
            <BiLogoMongodb className="w-10 h-10 stacks"></BiLogoMongodb>
          </div>
          <div className="block lg:flex gap-4">
            <a
              href="https://chef-s-table-f7ef1.web.app/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Live Link
            </a>
            <a
              href="https://github.com/satishchakma/Chef-s-Table-Client"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Github Client Side
            </a>
            <a
              href="https://github.com/satishchakma/Chef-s-Table-Server"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Github Server Side
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
