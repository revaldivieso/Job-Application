import React from "react";
import "./Sidebar.css";

function SideBar() {
  return (
    <div className="w3-sidebar w3-bar-block w3-xxlarge">
      <div id="home">
        <a href="#" class="w3-bar-item w3-button">
          <i class="fa fa-home"></i>
        </a>
      </div>
      <div id="about-me">
        <a href="#" class="w3-bar-item w3-button">
          <i class="far fa-address-card"></i>
        </a>
      </div>
      <div id="proyects">
        <a href="#" class="w3-bar-item w3-button">
          <i class="fas fa-code"></i>
        </a>
      </div>
      <div id="skill">
        <a href="#" class="w3-bar-item w3-button">
          <i class="fas fa-cubes"></i>
        </a>
      </div>
      <div id="contact">
        <a href="#" class="w3-bar-item w3-button">
          <i class="fa fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}

export default SideBar;
