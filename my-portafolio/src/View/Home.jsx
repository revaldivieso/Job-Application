import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Home.css";

export const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h1>Hola,</h1>
              <br></br>
              <h1>soy Vianny Reyes</h1>
              <br></br>
              <h2>Desarrolladora Front-End</h2>
              <br></br>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
