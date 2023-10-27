import React from "react";
import "./Projects.css";
import { projectDetails } from "../../utils/data";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="project-heading">Projects</h2>

      <div className="project-row">
        {projectDetails &&
          projectDetails.map((project) => (
            <div
              className="each-project"
              key={project.id}
              data-aos="zoom-in-up"
              data-aos-duration="1500"
            >
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
              >
                <img
                  src={project.src}
                  alt="project_img"
                  className="project-img"
                />
              </a>
              <p className="project-name">{project.name}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Projects;
