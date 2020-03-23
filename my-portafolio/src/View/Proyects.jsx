import React from "react";
import "./Proyects.css";
import "react-responsive-carousel/lib/styles/carousel.min";
import { Carousel } from "react-responsive-carousel";
import coche from "../images/coche.jpg";
import fondo1 from "../images/fondo1.jpg";
import oronegro from "../images/oronegro.jpg";

function Proyects() {
  return (
    <div className="proyects-img">
      <Carousel>
        <div>
          <img src={coche} />
          <h2>Proyecto peliculas</h2>
        </div>
        <div>
          <img src={fondo1} />
          <h2>Proyecto peliculas</h2>
        </div>
        <div>
          <img src={oronegro} />
          <h2>Proyecto peliculas</h2>
        </div>
      </Carousel>
    </div>
  );
}
export default Proyects;
