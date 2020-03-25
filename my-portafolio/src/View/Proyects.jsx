import React from "react";
import "./Proyects.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import burger from "../images/burger.png";
import redSocial from "../images/redSocial.png";
import peliculas from "../images/peliculas.png";
import { Container } from "react-bootstrap";

function Proyects() {
  return (
    <Container fliud="md" className="proyects-img">
      <Carousel className="slider-images">
        <div>
          <img src={burger} />
          <h2>Proyecto Burger Queen</h2>
          <p>Hola</p>
        </div>
        <div>
          <img src={redSocial} />
          <h2>Proyecto Red Social</h2>
        </div>
        <div>
          <img src={peliculas} />
          <h2>Proyecto peliculas</h2>
        </div>
      </Carousel>
    </Container>
  );
}
export default Proyects;
