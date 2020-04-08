import React from "react";
import { Container, Col, Card } from "react-bootstrap";
import "./Home.css";
import miFoto from "../images/miFoto.jpeg";

export const Home = () => {
  return (
    <Container className="home">
      <Col className=" col-home">
        <Card.Body>
          <h1>¡Hola!</h1>

          <h1>soy Vianny Reyes</h1>

          <h2>Desarrolladora Front-End</h2>
        </Card.Body>

        <img src={miFoto} className="img-vianny" alt="vianny" />
      </Col>
    </Container>
  );
};

export default Home;
