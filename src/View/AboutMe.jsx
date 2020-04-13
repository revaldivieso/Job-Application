import React from "react";
import "./AboutMe.css";
import { Container, Row, Col } from "react-bootstrap";

function AboutMe() {
  return (
    <Container className="opacity about">
      <Row>
        <Col className="about-me">
          <h2>
            Mi formación profesional se especializa en el área de desarrollo
            web, a través del uso de herramientas como ES6, React, CSS, HTML 5,
            Firesbase, GitHub y Git. Con interés en el desarrollo de soluciones
            web, buscando que los productos sean de calidad y adecuados a la
            necesidad del usuario. Me considero curiosa por aprender y
            comprometida con mi equipo por alcanzar los objetivos.
          </h2>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
