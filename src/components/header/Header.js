import React, { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaWindowClose } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  return (
    <div className="header_wrpper">
      <div className="header">
        <div className="header_logo">Matin Arshad</div>

        <div className={`header_nav ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/resume">Resume</NavLink>
            </li>
            {/* <li>Services</li> */}
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      {menuOpen ? (
        <FaWindowClose
          className="menu_bar"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      ) : (
        <FaBars className="menu_bar" onClick={() => setMenuOpen(!menuOpen)} />
      )}
    </div>
  );
}

export default Header;
