import React from "react";
import "./Skill.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function Skill() {
  return (
    <Container className="proyects">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h2>Habilidades técnicas y blandas en una tabla con iconos</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Skill;
