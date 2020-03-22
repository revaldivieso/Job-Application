import React from "react";
import "./AboutMe.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function AboutMe() {
  return (
    <Container className="about">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h2>
                Mi formación profesional se especializa en el área de desarrollo
                web, a través del uso de herramientas como ES6, React, CSS, HTML
                5, Firesbase, GitHub y Git; necesarias para la creación y uso de
                App y páginas web. Competente, proactiva con fortalezas en
                comunicación y trabajo colaborativo.
              </h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
