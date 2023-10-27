import React from "react";
import "./Experience.css";
import { experienceData, experienceStyles } from "../../utils/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const renderJobExperience = () => {
    const { icon, content, arrowStyle } = experienceStyles;

    return experienceData.map((job) => (
      <VerticalTimelineElement
        key={job.id}
        className="vertical-timeline-element-work"
        contentStyle={content}
        contentArrowStyle={arrowStyle}
        date={job.date}
        iconStyle={icon}
        icon={
          <img className="timeline-logo" src={job.companyLogo} alt="icon" />
        }
      >
        <h3 className="vertical-timeline-element-title ">{job.jobTitle}</h3>
        <h4 className="vertical-timeline-element-subtitle">{job.company}</h4>
        <p className="vertical-timeline-element-tech">{job.skills}</p>
      </VerticalTimelineElement>
    ));
  };

  return (
    <section id="experience">
      <h2 className="worksTitle">Work Experience</h2>
      <div className="experience-container">
        <VerticalTimeline>{renderJobExperience()}</VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
