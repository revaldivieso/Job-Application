import React from "react";
import { Container, Col, Card } from "react-bootstrap";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import miFoto from "../images/miFoto.jpeg";

export const Home = () => {
  return (
    <Container fliud className="home">
      <Col className="col-12 col-md-6 align-self-center text-left col-home">
        <Card.Body>
          <h1>¡Hola!</h1>

          <h1>soy Vianny Reyes</h1>

          <h2>Desarrolladora Front-End</h2>
        </Card.Body>
      </Col>
      <Col className="col-12 col-md-6 align-self-center text-left col-home">
        <img src={miFoto} className="img-vianny" alt="vianny" />
      </Col>
    </Container>
  );
};

export default Home;
