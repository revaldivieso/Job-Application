import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Container className="red">
      <Row>
        <Col>
          <Link to="/contact/email" className="btn btn-email">
            <i class="fab fa-google"></i>
          </Link>
          <Link to="/contact/phone" className="btn btn-phone">
            <i class="fab fa-whatsapp"></i>
          </Link>
          <Link
            to="https://www.linkedin.com
/in/vianny-reyes-65b919157"
            className="btn btn-linkedin"
          >
            <i class="fab fa-linkedin"></i>
          </Link>
          <Link to="/contact/github" className="btn btngithub">
            <i class="fab fa-github"></i>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
