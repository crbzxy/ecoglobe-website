import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Proyectos from '../../img/proyectos.png';
import Asesorias from '../../img/asesorias.png';
import Manto from '../../img/manto.png';

const HomeServicesCardsSection = () => {
  return (
    <>
      <div className='nuestros-servicios'>
        <div className='col'>
          <p className='titulo'>nuestros servicios</p>
          <h3>Empieza a ahorrar con paneles solares ☀️☀️</h3>
        </div>
        <div className='col'>
          <Link to='/servicios'>
            <button className='btn-secundario'>¡Conoce más!</button>
          </Link>
        </div>
      </div>
      <section className='contenedor-cards'>
        <div className='card'>
          <LazyLoadImage
            effect='blur'
            src={Asesorias}
            alt='Paneles solares interconectados instalados en vivienda'
            className='imag-card'
          />
          <div className='texto'>
            <p className='titulo'>
              Paneles solares interconectados a la RED de CFE
            </p>
            <p className='descripcion'>
              Genera energía para tu propiedad con paneles solares y deja de
              pagarle la tarifa más alta a CFE
            </p>
            <br />
            <Link to='/paneles-solares' className='btn-primario'>
              {' '}
              Cotiza tu proyecto
            </Link>
          </div>
        </div>

        <div className='card'>
          <LazyLoadImage
            effect='blur'
            src={Proyectos}
            alt='Sistema de paneles solares autónomos en zona remota'
            className='imag-card'
          />
          <div className='texto'>
            <p className='titulo'> Paneles solares autónomos</p>
            <p className='descripcion'>
              Funcionan con baterías para lugares en donde no hay conexión al
              sistema de luz, generas tu propia energía de una manera autónoma.
            </p>
            <br />
            <Link to='/paneles-solares-autonomos' className='btn-primario'>
              {' '}
              Cotiza tu proyecto
            </Link>
          </div>
        </div>

        <div className='card'>
          <LazyLoadImage
            effect='blur'
            src={Manto}
            alt='Equipo Ecoglobe realizando instalación eléctrica'
            className='imag-card'
          />
          <div className='texto'>
            <p className='titulo'>SOLUCIONES EN ELECTRICIDAD</p>
            <p className='descripcion'>
              Nos encargamos de diseñar tu proyecto eléctrico personalizado,
              adecuado a tus necesidades y realizamos todo el proceso de
              instalación e ingeniería.
            </p>
            <br />
            <Link to='/soluciones-en-electricidad' className='btn-primario'>
              {' '}
              Cotiza tu proyecto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeServicesCardsSection;

