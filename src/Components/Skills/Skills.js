import React from "react";
import "./Skills.css";
import { skills } from "../../utils/data";

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div>
        <p className="skills-title">What I Know</p>

        <div className="skill-card">
          {skills.map(({ id, src, title, style }) => (
            <div key={id} className="skill-desc">
              <div>{title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
