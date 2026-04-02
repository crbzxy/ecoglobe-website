import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Carrousel() {
  return (
    <>
      <Carousel className='Carousel-hero '>
        <Carousel.Item>
          <img
            className='d-block w-100 slider'
            src='/hero/hero.png'
            alt='Hero Ecoglobe'
          />
          <img
            className='d-block  h-50 w-100 slider-r'
            src='/hero/hero.png'
            alt='Hero Ecoglobe responsive'
          />
          <Carousel.Caption>
            <h1>JUNTOS CONSTRUÍMOS UN NUEVO FUTURO ENERGÉTICO</h1>
            <Link to='/servicios'>
              <button className='btn-primario'>¡Cotiza ahora!</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 slider'
            src='/hero/hero_2.png'
            alt='Hero Ecoglobe 2'
          />
          <img
            className='d-block  h-50 w-100 slider-r'
            src='/hero/hero_2.png'
            alt='Hero Ecoglobe 2 responsive'
          />

          <Carousel.Caption>
            <h2>Deja de preocuparte por tu gasto de luz con PANELES SOLARES</h2>
            <Link to='/servicios'>
              <button className='btn-primario'>¡Cotiza ahora!</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 slider'
            src='/hero/hero_3.png'
            alt='Hero Ecoglobe 3'
          />
          <img
            className='d-block  h-50 w-100 slider-r'
            src='/hero/hero_3.png'
            alt='Hero Ecoglobe 3 responsive'
          />

          <Carousel.Caption>
            <h2>Somos pioneros en Energía Solar en Baja California </h2>
            <Link to='/servicios'>
              <button className='btn-primario'>¡Cotiza ahora!</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Carrousel;