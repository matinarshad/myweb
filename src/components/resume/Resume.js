import React from "react";
import "./resume.css";
import TimeLineItem from "./TimeLineItem";

function Resume() {
  return (
    <div className="resume_wrapper">
      <div className="resume_banner">
        <h1>Resume</h1>
      </div>

      <div className="resume_content">
        <div className="resume_content_education">
          <h2>Education</h2>
          <TimeLineItem />
          <TimeLineItem />
        </div>
        <div className="resume_content_experience">
          <h2>Experience</h2>
          <TimeLineItem />
          <TimeLineItem />
        </div>
      </div>
    </div>
  );
}

export default Resume;
