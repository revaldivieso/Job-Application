import React from "react";
import "./Proyects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function Proyects() {
  return (
    <Container className="proyects">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h2>proyectos con screen en carrusel</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Proyects;
