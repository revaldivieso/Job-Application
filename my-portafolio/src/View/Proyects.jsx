import React from "react";
//import "./Proyects.css";
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
          <img src={burger} alt="" />
          <h2>Proyecto Burger Queen</h2>
          <a
            href="https://github.com/revaldivieso/SCL012-burger-queen"
            Repositorio
          >
            <i className="fab fa-github"></i>
          </a>
          <a href="https://burger-queen-5875f.firebaseapp.com" Repositorio>
            <i class="fas fa-link"></i>
          </a>
        </div>
        <div>
          <img src={redSocial} alt="" />
          <h2>Proyecto Red Social</h2>
          <a
            href="https://github.com/revaldivieso/SCL012-Social-Network"
            Repositorio
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://revaldivieso.github.io/SCL012-Social-Network/src/index.html"
            Repositorio
          >
            <i class="fas fa-link"></i>
          </a>
        </div>
        <div>
          <img src={peliculas} alt="" />
          <h2>Proyecto peliculas</h2>
          <a
            href="https://github.com/revaldivieso/SCL012-proyecto-peliculas"
            Repositorio
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://tamaramunoz.github.io/SCL012-proyecto-peliculas/src/index.html"
            Repositorio
          >
            <i class="fas fa-link"></i>
          </a>
        </div>
      </Carousel>
    </Container>
  );
}
export default Proyects;
