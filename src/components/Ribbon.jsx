import React from "react";
import "./Ribbon.css";
import profile from "../assets/illutration.svg";

const Ribbon = () => {
  return (
    <footer className="wrapper">
      <div className="ribbon" style={{ opacity: "1", transform: "none" }}>
        <div className="ribbon__invisible">SATISH CHAKMA</div>
        <div className="ribbon__text text--2">
          <h2 className="anime--1 bar--68">
            <span>
              CODER - DESIGNER - ABSTRACT THINKER - DEVELOPER - CODER - DESIGNER
              - ABSTRACT THINKER - DEVELOPER -CODER - DESIGNER - ABSTRACT
              THINKER - DEVELOPER -CODER - DESIGNER - ABSTRACT THINKER -
              DEVELOPER -CODER - DESIGNER - ABSTRACT THINKER - DEVELOPER -
            </span>
          </h2>
        </div>
        <div className="photo">
          <div className="photo__img photo--in">
            {/* <img src={profile} alt="profile" /> */}
          </div>
        </div>
        <div className="ribbon__text text--1">
          <h2 className="anime--2 bigBold--68">
            <span> ABSTRACT THINKER -</span>
            <span> DEVELOPER -</span>
            <span> CODER -</span>
            <span> DESIGNER -</span>
            <span> ABSTRACT THINKER -</span>
            <span> DEVELOPER -</span>
            <span> CODER -</span>
            <span> DESIGNER -</span>
            <span> ABSTRACT THINKER -</span>
            <span> DEVELOPER -</span>
            <span> CODER -</span>
            <span> DESIGNER -</span>
            <span> ABSTRACT THINKER -</span>
            <span> DEVELOPER -</span>
            <span> CODER -</span>
            <span> DESIGNER -</span>
            <span> ABSTRACT THINKER -</span>
            <span> DEVELOPER -</span>
            <span> CODER -</span>
            <span> DESIGNER -</span>
            <span> ABSTRACT THINKER -</span>
            <span> DEVELOPER -</span>
            <span> CODER -</span>
            <span> DESIGNER -</span>
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Ribbon;
