import React from "react";
//import "./Skill.css";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

function Skill() {
  return (
    <Container fliud="md" className="proyects">
      <Row className="justify-content-md-center">
        <Col>
          <Card style={{ width: "14rem" }}>
            <Card.Body>
              <Card.Title>Habilidades técnicas</Card.Title>
            </Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>ECMAScript v6</ListGroup.Item>
              <ListGroup.Item>HTML5</ListGroup.Item>
              <ListGroup.Item>CSS</ListGroup.Item>
              <ListGroup.Item>Firebase</ListGroup.Item>
              <ListGroup.Item>React</ListGroup.Item>
              <ListGroup.Item>Git</ListGroup.Item>
              <ListGroup.Item>GitHub</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "14rem" }}>
            <Card.Body>
              <Card.Title>Habilidades soft</Card.Title>
            </Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>Planificación</ListGroup.Item>
              <ListGroup.Item>Trabajo en equipo</ListGroup.Item>
              <ListGroup.Item>Metodologías ágiles</ListGroup.Item>
              <ListGroup.Item>
                Resolución colaborativa de problemas
              </ListGroup.Item>
              <ListGroup.Item>Capacidad para adaptarse</ListGroup.Item>
              <ListGroup.Item>Habilidades interpersonales</ListGroup.Item>
              <ListGroup.Item>Comunicación</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Skill;
