import React from "react";
import "../components/Demenu.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import { FaShapes } from "react-icons/fa";
import { LiaGripVerticalSolid } from "react-icons/lia";
import { BsEnvelope } from "react-icons/bs";

import { HashLink } from "react-router-hash-link";

const Dmenu = () => {
  return (
    <div>
      <ul className="dmenu scroll-nav d-flex">
        <li>
          <HashLink
            smooth
            to="/#home"
            activeClassName="active"
            activeStyle={{ color: "red" }}
            className="scroll-to flex items-center justify-center gap-5 my-4"
          >
            <span>Home</span>
            <AiOutlineHome className="dmenu-icons"></AiOutlineHome>
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#about"
            activeClassName="active"
            activeStyle={{ color: "red" }}
            className="scroll-to flex items-center justify-center gap-5 my-4"
          >
            <span>About</span>
            <AiOutlineUser className="dmenu-icons"></AiOutlineUser>
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#skills"
            activeClassName="active"
            activeStyle={{ color: "red" }}
            className="scroll-to flex items-center justify-center gap-5 my-4"
          >
            <span>Skills</span>
            <FaShapes className="dmenu-icons"></FaShapes>
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#projects"
            activeClassName="active"
            activeStyle={{ color: "red" }}
            className="scroll-to flex items-center justify-center gap-5 my-4"
          >
            <span>Projects</span>
            <LiaGripVerticalSolid className="dmenu-icons"></LiaGripVerticalSolid>
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#contact"
            activeClassName="active"
            activeStyle={{ color: "red" }}
            className="scroll-to flex items-center justify-center gap-5 my-4"
          >
            <span>Contact</span>
            <BsEnvelope className="dmenu-icons"></BsEnvelope>
          </HashLink>
        </li>
        <li>
          <a
            className="scroll-to flex items-center justify-center gap-5 my-4"
            href="#testimonial"
          >
            <span>Testimonial</span>
            <AiOutlineHome className="dmenu-icons"></AiOutlineHome>
          </a>
        </li>
        <li>
          <a
            className="scroll-to flex items-center justify-center gap-5 my-4"
            href="#contact"
          >
            <span>Contact</span>
            <AiOutlineHome className="dmenu-icons"></AiOutlineHome>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dmenu;
