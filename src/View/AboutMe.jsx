import React from 'react';
import './AboutMe.css';
import { Container, Row, Col } from 'react-bootstrap';

function AboutMe() {
  return (
    <Container className='opacity about'>
      <Row>
        <Col className='about-me'>
          <p className='about'>
            Soy una persona con mucha curiosidad, ganas de aprender y
            comprometida con mi equipo por alcanzar los objetivos. Mi formación
            profesional se especializa en el área de desarrollo web, a través
            del uso de herramientas como ES6, React, CSS, Bootstrap, HTML 5,
            firebase, Github y Git. Siempre busco que los productos sean de
            calidad y adecuados a la necesidad del usuario.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
