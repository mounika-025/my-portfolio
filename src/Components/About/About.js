import React from "react";
import "./About.css";

import girlImg from "../../assets/womanImg.png";

const About = () => {
  return (
    <section id="about" className="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Mounika</span>
          <br />
          Software Developer
        </span>
        <p className="introPara">
          Having in-depth knowledge of{" "}
          <span className="introName">Full Stack</span> development <br /> and
          total experience of <span className="introName">2.5 Years</span> in
          the software industry.
        </p>
        <div>
          <a href={`mailto:im.mounika025@gmail.com`}>
            <button className="btn">Hire Me</button>
          </a>
          <a
            href={"https://mounikaa-resume.tiiny.site"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">Resume</button>
          </a>
        </div>
      </div>
      <img src={girlImg} alt="Profile" className="bgImg" />
    </section>
  );
};

export default About;
