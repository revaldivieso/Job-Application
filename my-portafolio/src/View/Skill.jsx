import React from "react";
import "./Skill.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function Skill() {
  return (
    <Container fliud="md" className="proyects">
      <Row className="justify-content-md-center">
        <Col className="col-md-6">
          <Card>
            <Card.Title>Habilidades técnicas</Card.Title>
            <Card.Text>
              <ul class="list-group">
                <li class="list-group-item">
                  ECMAScript v6<i class="fab fa-google"></i>
                </li>
                <li class="list-group-item">HTML5</li>
                <li class="list-group-item">CSS</li>
                <li class="list-group-item">Firebase</li>
                <li class="list-group-item">React</li>
                <li class="list-group-item">Git</li>
                <li class="list-group-item">GitHub</li>
              </ul>
            </Card.Text>
          </Card>
        </Col>
        <Col className="cold-md-6">
          <Card>
            <Card.Title>Habilidades soft</Card.Title>
            <Card.Text>
              <ul class="list-group">
                <li class="list-group-item">Planificación</li>
                <li class="list-group-item">Trabajo en equipo</li>
                <li class="list-group-item">Metodologías ágiles</li>
                <li class="list-group-item">
                  Resolución colaborativa de problemas
                </li>
                <li class="list-group-item">Capacidad para adaptarse</li>
                <li class="list-group-item">Habilidades interpersonales</li>
              </ul>
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Skill;
