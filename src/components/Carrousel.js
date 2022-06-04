import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Carrousel() {
  return (
    <>

      <Carousel className="Carousel-hero ">
        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src="https://firebasestorage.googleapis.com/v0/b/ecoglobe-bucket.appspot.com/o/hero.png?alt=media&token=98b008bf-b0f3-42b2-a597-f510216656f1"
            alt="Second slide"
          />
          <img
            className="d-block  h-50 w-100 slider-r"
            src="https://firebasestorage.googleapis.com/v0/b/ecoglobe-bucket.appspot.com/o/hero%E2%80%93r.png?alt=media&token=2ff752ef-44bf-4f16-bf0c-1f8330cfba4f"
            alt="First slide responsive"
          />
          <Carousel.Caption>
            <h1>JUNTOS CONSTRUÍMOS UN NUEVO FUTURO ENERGÉTICO</h1>
            <Link to="servicios"><button className="btn-primario">¡Cotiza ahora!</button></Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src="https://firebasestorage.googleapis.com/v0/b/ecoglobe-bucket.appspot.com/o/hero_2.png?alt=media&token=276837c2-eba4-4fee-8802-ee8e36e9dfe4"
            alt="Second slide"
          />
          <img
            className="d-block  h-50 w-100 slider-r"
            src="https://firebasestorage.googleapis.com/v0/b/ecoglobe-bucket.appspot.com/o/hero%E2%80%93r2.png?alt=media&token=dc01babf-dca1-49ab-be70-0cdd05c555ed"
            alt="First slide responsive"
          />

          <Carousel.Caption>
            <h2>Deja de preocuparte por tu gasto de luz con PANELES SOLARES</h2>
            <Link to="servicios"><button className="btn-primario">¡Cotiza ahora!</button></Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src="https://firebasestorage.googleapis.com/v0/b/ecoglobe-bucket.appspot.com/o/hero_3.png?alt=media&token=2c4e7dc2-66d3-4d0d-8e5c-6c6b5d313a67"
            alt="Second slide"
          />
          <img
            className="d-block  h-50 w-100 slider-r"
            src="https://firebasestorage.googleapis.com/v0/b/ecoglobe-bucket.appspot.com/o/hero%E2%80%93r3.png?alt=media&token=f8f42be1-bb22-42d5-b457-7fcada61e7ef"
            alt="First slide responsive"
          />

          <Carousel.Caption>
            <h2>Somos pioneros en Energía Solar en Baja California </h2>
            <Link to="servicios"><button className="btn-primario">¡Cotiza ahora!</button></Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </>
  )
}

export default Carrousel