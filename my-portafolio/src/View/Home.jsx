import React from "react";
import { Container, Col, Card } from "react-bootstrap";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Home = () => {
  return (
    <Container fliud="md">
      <Col className="col-home">
        <Card.Body>
          <h1>¡Hola!</h1>

          <h1>soy Vianny Reyes</h1>

          <h2>Desarrolladora Front-End</h2>
        </Card.Body>
      </Col>
    </Container>
  );
};

export default Home;
