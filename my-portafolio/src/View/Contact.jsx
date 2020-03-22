import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Container className="red">
      <Row>
        <Col>
          <Link to="/email" class="btn btn-email">
            <i class="fab fa-google"></i>
          </Link>
          <Link to="/phone" class="btn btn-phone">
            <i class="fab fa-whatsapp"></i>
          </Link>
          <Link to="/linkedin" class="btn btn-linkedin">
            <i class="fab fa-linkedin"></i>
          </Link>
          <Link to="/github" class="btn btngithub">
            <i class="fab fa-github"></i>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
