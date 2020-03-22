import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div id="sidebar" className="sidebar  w3-bar-block w3-xxlarge">
      <div id="home">
        <Link to="/" class="w3-bar-item w3-button">
          <i class="fa fa-home"></i>
        </Link>
      </div>
      <div id="about-me">
        <Link to="/AboutMe" class="w3-bar-item w3-button">
          <i class="far fa-address-card"></i>
        </Link>
      </div>

      <div id="proyects">
        <Link to="/proyects" class="w3-bar-item w3-button">
          <i class="fas fa-code"></i>
        </Link>
      </div>
      <div id="skill">
        <Link to="/skill" class="w3-bar-item w3-button">
          <i class="fas fa-cubes"></i>
        </Link>
      </div>
      <div id="contact">
        <Link to="/contact" class="w3-bar-item w3-button">
          <i class="fa fa-envelope"></i>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
