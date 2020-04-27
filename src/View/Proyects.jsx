import React from 'react';
import './Proyects.css';
import insert from '../images/burger.png';
import red from '../images/red.png';
import peliculas from '../images/peliculas.png';
import { Container, Card, CardDeck } from 'react-bootstrap';

function Proyects() {
  return (
    <Container className='opacity'>
      <CardDeck>
        <Card>
          <Card.Img variant='top' src={insert} alt='' />
          <Card.Body>
            <Card.Title>Proyecto Burger Queen</Card.Title>
            <Card.Text>
              Insert Quest es una aplicación para tablets diseñada para el pub
              gamer Insert Coin, donde se puedan tomar órdenes y mandar comandas
              a cocina sin necesidad de recurrir al papel y lápiz.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href='https://github.com/revaldivieso/SCL012-burger-queen'>
              <i className='fab fa-github'></i>
              Repositorio
            </Card.Link>
            <Card.Link href='https://burger-queen-5875f.firebaseapp.com'>
              <i className='fas fa-link'></i>
              Demo
            </Card.Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src={red} alt='' />
          <Card.Body>
            <Card.Title>Proyecto Red Social</Card.Title>
            <Card.Text>
              Bitácora es la red social diseñada en mobile first para personas
              que practiquen trekking, aquí pueden encontrar información
              actualizada aportada por otros usuarios sobre excursiones en
              Santiago y sus alrededores.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href='https://github.com/revaldivieso/SCL012-Social-Network'>
              <i className='fab fa-github'></i>
              Repositorio
            </Card.Link>
            <Card.Link href='https://bitacora-v1.web.app/#/singIn'>
              <i className='fas fa-link'></i>
              Demo
            </Card.Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src={peliculas} alt='' />
          <Card.Body>
            <Card.Title>Proyecto películas</Card.Title>
            <Card.Text>
              I am Oscar es una página web con información de las películas
              nominadas al Oscar para amantes del cine que quieran saber todo
              acerca de éstas antes de la premiación en febrero de este año
              2020.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href='https://github.com/revaldivieso/SCL012-proyecto-peliculas'>
              <i className='fab fa-github'></i>
              Repositorio
            </Card.Link>
            <Card.Link href='https://tamaramunoz.github.io/SCL012-proyecto-peliculas/src/index.html'>
              <i className='fas fa-link'></i>
              Demo
            </Card.Link>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Container>
  );
}
export default Proyects;
