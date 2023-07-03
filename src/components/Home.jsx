import "./Home.css";
import illustration from "../assets/illutration.png";
import { TbBrandFiverr, TbBrandUpwork, TbSettings } from "react-icons/tb";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BiCloudDownload } from "react-icons/bi";
import CustomConatiner from "./CustomConatiner";
import Dmenu from "./Dmenu";
import resumePdf from "../assets/Satish Chakma Resume.pdf";
import Ribbon from "./Ribbon";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
  return (
    <div
      className="lg:flex block"
      data-aos="fade-right"
      data-aos-duration="6000"
    >
      <div className="left-sidebar ">
        <span className="setting-toggle absolute top-14 lg:left-[-20px] left-[-6px]">
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

        <div className="relative py-4 my-4 myAnimations">
          <svg
            className="absolute svg1 top-[-20px] left-[50%] translate-x-[-50%]"
            width="81"
            height="81"
            viewBox="0 0 81 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.3125 50.625C23.9063 50.625 22.7104 50.1323 21.7249 49.1468C20.7394 48.1613 20.2478 46.9665 20.25 45.5625V42.1875H25.3125V45.5625H30.375V30.375H35.4375V45.5625C35.4375 46.9688 34.9448 48.1646 33.9593 49.1501C32.9738 50.1356 31.779 50.6273 30.375 50.625H25.3125ZM43.875 50.625C42.9188 50.625 42.1166 50.301 41.4686 49.653C40.8206 49.005 40.4978 48.204 40.5 47.25V43.875H45.5625V45.5625H52.3125V42.1875H43.875C42.9188 42.1875 42.1166 41.8635 41.4686 41.2155C40.8206 40.5675 40.4978 39.7665 40.5 38.8125V33.75C40.5 32.7938 40.824 31.9916 41.472 31.3436C42.12 30.6956 42.921 30.3728 43.875 30.375H54C54.9563 30.375 55.7584 30.699 56.4064 31.347C57.0544 31.995 57.3773 32.796 57.375 33.75V37.125H52.3125V35.4375H45.5625V38.8125H54C54.9563 38.8125 55.7584 39.1365 56.4064 39.7845C57.0544 40.4325 57.3773 41.2335 57.375 42.1875V47.25C57.375 48.2063 57.051 49.0084 56.403 49.6564C55.755 50.3044 54.954 50.6273 54 50.625H43.875Z"
              fill="white"
            />
          </svg>
          <svg
            className="absolute svg2 top-[50px] left-[30px] "
            width="31"
            height="34"
            viewBox="0 0 31 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L0.133707 1.50804L2.64971 28.7755L2.74028 29.7239L3.68342 29.9817L15.096 33.0405L15.4554 33.126L15.8594 33.0405L27.272 30.0244L28.2151 29.7666L28.3043 28.8183L30.8663 1.50804L31 0.0427327H29.4286L1.57286 0H0ZM3.14428 2.75694L27.8557 2.79967L25.5194 27.6121L15.5 30.2849L5.436 27.6107L3.14428 2.75694ZM6.60486 6.89234L7.548 17.1881H19.8577L19.4537 21.624L15.5 22.6579H15.4554L11.5017 21.624L11.2774 18.7816H7.68315L8.17628 24.2528L15.4569 26.1909H15.5L22.7791 24.2528L23.7669 13.7847H10.7829L10.468 10.2958H24.0817L24.3951 6.89234H6.60486Z"
              fill="white"
            />
          </svg>
          <svg
            className="absolute svg3 top-[35px] right-[35px]"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9824 32.6034L5.93207 29.5356L3.42002 1.35913H30.5799L28.0654 29.5308L16.9824 32.6034Z"
              stroke="#ECECEC"
              strokeWidth="2"
            />
            <path
              d="M17.0002 13.6608H21.8617L22.1975 9.89877H17.0002V6.22491H26.2126L26.1245 7.21065L25.2213 17.3347H17.0002V13.6608Z"
              fill="white"
            />
            <path
              d="M17.022 23.2021L17.0058 23.2069L12.9144 22.1021L12.6527 19.172H8.96533L9.47985 24.9406L17.0053 27.0292L17.022 27.0244V23.2021Z"
              fill="#EBEBEB"
            />
            <path
              d="M21.5493 17.1793L21.1068 22.0992L17.0093 23.2053V27.0276L24.5408 24.9403L24.5961 24.3196L25.2352 17.1793H21.5493Z"
              fill="white"
            />
            <path
              d="M17.0128 6.22491V9.89877H8.13878L8.0652 9.07321L7.89786 7.21065L7.80994 6.22491H17.0128ZM17.0003 13.6614V17.3352H12.9604L12.8868 16.5097L12.7192 14.6471L12.6316 13.6614H17.0003Z"
              fill="#EBEBEB"
            />
          </svg>

          <img className="me my-6" src={illustration} alt="Satish" />
        </div>
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
            <a
              href="https://www.linkedin.com/in/satishchakma/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center"
            >
              <FaLinkedinIn></FaLinkedinIn>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/satishchakma"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center"
            >
              <FaGithub></FaGithub>
            </a>
          </li>
          <li>
            <a
              href="https://www.fiverr.com/satishchakma"
              className="flex justify-center items-center"
              target="_blank"
              rel="noreferrer"
            >
              <TbBrandFiverr></TbBrandFiverr>
            </a>
          </li>
          <li>
            <a
              href="https://www.upwork.com/freelancers/satishchakma"
              className="flex justify-center items-center"
              target="_blank"
              rel="noreferrer"
            >
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
    </div>
  );
};

export default Home;
