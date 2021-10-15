import React from "react";
import "../skills/skills.css";
import TopBanner from "../topBanner/TopBanner";
import background from "../../images/skills_img.jpeg";
import Skill from "./Skill";
import { FaHtml5 } from "react-icons/fa";

function Skills() {
  return (
    <>
      <TopBanner
        image={background}
        h1_text=" Code is like humor."
        h2_text="When you have to explain it, it’s bad"
      />

      <div className="skills_wrapper">
        <div className="skills_content_container">
          <Skill logo={FaHtml5} />
        </div>
      </div>
    </>
  );
}

export default Skills;
