import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header_wrpper">
      <div className="header">
        <div className="header_logo">Matin Arshad</div>
        <div className="header_nav">
          <ul>
            <li>Home</li>
            <li>Resume</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
