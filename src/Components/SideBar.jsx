import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div id="sidebar" className="sidebar  w3-bar-block w3-xxlarge">
      <div id="home">
        <Link to="/" className="w3-bar-item w3-button">
          <i className="fa fa-home"></i>
        </Link>
      </div>
      <div id="about-me">
        <Link to="/AboutMe" className="w3-bar-item w3-button">
          <i className="far fa-address-card"></i>
        </Link>
      </div>

      <div id="proyects">
        <Link to="/proyects" className="w3-bar-item w3-button">
          <i className="fas fa-code"></i>
        </Link>
      </div>
      <div id="skill">
        <Link to="/skill" className="w3-bar-item w3-button">
          <i className="fas fa-cubes"></i>
        </Link>
      </div>
      <div id="contact">
        <Link to="/contact" className="w3-bar-item w3-button">
          <i className="fa fa-envelope"></i>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
