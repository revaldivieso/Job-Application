import React from 'react';
import './Skill.css';
import { Container, Row, Col } from 'react-bootstrap';

function Skill() {
  return (
    <Container className='opacity skills-direction'>
      <Row className='justify-content-md-center skills-container'>
        <Col className='skills-content'>
          <h2 className='col-skills'>Habilidades técnicas</h2>
          <a
            href='https://developer.mozilla.org/es/docs/Web/JavaScript'
            className='btn btn-js'>
            <i className='skills fab fa-js'></i>
          </a>
          <a href='https://es.reactjs.org' className='btn btn-react'>
            <i className='skills fab fa-react'></i>
          </a>
          <a
            href='https://developer.mozilla.org/es/docs/Web/HTML'
            className=' btn btn-html'>
            <i className='skills fab fa-html5'></i>
          </a>
          <a
            href='https://developer.mozilla.org/es/docs/Web/CSS'
            className='btn btn-css'>
            <i className='skills fab fa-css3-alt'></i>
          </a>
          <a
            href='https://firebase.google.com/?hl=es'
            className='btn btn-firebase'>
            <i className='skills fas fa-fire'></i>
          </a>
          <a href='https://nodejs.org/es/' className='btn btn-node'>
            <i className='skills fab fa-node'></i>
          </a>
          <a href='https://git-scm.com/' className='btn btn-git'>
            <i className='skills fab fa-git-alt'></i>
          </a>
          <a href='https://github.com/revaldivieso' className='btn btngithub'>
            <i className='skills fab fa-github'></i>
          </a>

          <a href='https://getbootstrap.com' className='btn btn-bootstrap'>
            <i className='skills fab fa-bootstrap'></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Skill;
