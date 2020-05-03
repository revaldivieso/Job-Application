import React from 'react';
import { Container, Col, Card } from 'react-bootstrap';
import './Home.css';

export const Home = () => {
  return (
    <Container className='opacity home'>
      <Col className='col-home'>
        <Card.Body>
          <h1>¡Hola!</h1>

          <h1>Soy Vianny Reyes</h1>

          <h2>Desarrolladora Front-End</h2>
        </Card.Body>
        <div className='img-vianny'></div>
      </Col>
    </Container>
  );
};

export default Home;
