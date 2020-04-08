import React from "react";
//import "./Skill.css";
import { Container, Row, Col } from "react-bootstrap";

function Skill() {
  return (
    <Container fliud className="skills-direction">
      <Row className="justify-content-md-center skills-container">
        <Col className="skills-content">
          <h2 className="col-home">Habilidades técnicas</h2>
          <a
            href="https://developer.mozilla.org/es/docs/Web/JavaScript"
            className="btn btn-js"
          >
            <i class="fab fa-js"></i>
          </a>
          <a href="https://es.reactjs.org" className="btn btn-react">
            <i class="fab fa-react"></i>
          </a>
          <a
            href="https://developer.mozilla.org/es/docs/Web/HTML"
            className="btn btn-html"
          >
            <i class="fab fa-html5"></i>
          </a>
          <a
            href="https://developer.mozilla.org/es/docs/Web/CSS"
            className="btn btn-css"
          >
            <i class="fab fa-css3-alt"></i>
          </a>
          <a
            href="https://firebase.google.com/?hl=es"
            className="btn btn-firebase"
          >
            <i class="fas fa-fire"></i>
          </a>
          <a href="https://nodejs.org/es/" className="btn btn-node">
            <i class="fab fa-node"></i>
          </a>
          <a href="https://git-scm.com/" className="btn btn-git">
            <i class="fab fa-git-alt"></i>
          </a>{" "}
          <a href="https://github.com/revaldivieso" className="btn btngithub">
            <i className="fab fa-github"></i>
          </a>{" "}
          <a href="https://getbootstrap.com" className="btn btn-bootstrap">
            <i class="fab fa-bootstrap"></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Skill;
