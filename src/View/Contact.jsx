import React from "react";
import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Container className="red">
      <Row>
        <Col className="contact">
          <a href="mailto:reyesvi92@gmail.com" className="btn btn-email">
            <i className="skills fab fa-google"></i>
          </a>
          <a href="/contact/phone" className="btn btn-phone">
            <i className="skills fab fa-whatsapp"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/vianny-reyes-65b919157"
            className="btn btn-aedin"
          >
            <i className="skills fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/revaldivieso" className="btn btngithub">
            <i className="skills fab fa-github"></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
