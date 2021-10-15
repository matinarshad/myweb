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
          <TimeLineItem
            title="Specialization Course"
            date="2010"
            location="Apple Inc"
            description="Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor."
          />
          <TimeLineItem
            title="Specialization Course"
            date="2010"
            location="Apple Inc"
            description="Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor."
          />
        </div>
        <div className="resume_content_experience">
          <h2>Experience</h2>
          <TimeLineItem
            title="BioSilico"
            date="2019"
            location="Clitheroe"
            description="lorem Mauris magna sapien, pharetra consectetur fringilla vitae"
          />
          <TimeLineItem
            title="BioSilico"
            date="2019"
            location="Clitheroe"
            description="lorem Mauris magna sapien, pharetra consectetur fringilla vitae"
          />
        </div>
      </div>
    </div>
  );
}

export default Resume;
