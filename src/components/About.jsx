import React from "react";
import "./About.css";
import { AiOutlineUser } from "react-icons/ai";

const About = () => {
  return (
    <section id="about" className="my-[90px]">
      <h4 className="subtitle scroll-animation  gap-4">
        <AiOutlineUser></AiOutlineUser>
        ABOUT
      </h4>
      <div className="section-header ">
        <h1>
          &quot;Clean code always looks like it was written by
          <span> someone who cares</span>
          &quot;
        </h1>
      </div>
      <div>
        <p>
          Over the past three years, I have had the privilege of working with
          top e-commerce businesses and startups, gaining invaluable expertise
          in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.
          Additionally, I am proficient in Figma, Adobe XD, Photoshop,
          WordPress, and Shopify. My experience extends beyond technical
          expertise—I have successfully managed a team of four freelancers and
          collaborated with various dropshipping companies, playing a crucial
          role in their growth. Through these experiences, I have honed my team
          and communication skills, which I believe are vital for fostering a
          collaborative work environment.
        </p>
      </div>
    </section>
  );
};

export default About;
