import React from 'react';
import Energi from '../img/energy.svg';
import Motivation from '../img/motivation.svg';
import Plusvalia from '../img/home.svg';
import Sistema from '../img/sistema.png';
import Diagnostico from '../img/diagnostico.png';
import Reparacion from '../img/reparacion.png';
import Aire from '../img/sunac.png';
import { Link } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import Marcas from '../components/Marcas';

function Servicios() {
  return (
    <div className=' contenedor Servicios'>
      <div className='cabecera'>
        <h1 className='titulo-v'>NUESTROS SERVICIOS </h1>

        <a className='btn-secundario' href='https://wa.me/+5216643642748'>
          <i className='fab fa-whatsapp' /> Escríbenos
        </a>
      </div>
      <div className='servicios'>
        <div className='card-servicios'>
          <LazyLoadImage effect='blur' src={Sistema} alt='img' />
          <div className='contenedor-card'>
            <p className='titulo'>
              Paneles Solares interconectados a la RED de CFE
            </p>
            <p>
              Genera energía para tu propiedad con paneles solares y deja de
              pagarle la tarifa más alta a CFE
            </p>
            <Link to='/paneles-solares'>
              <button className='btn-primario'>Saber más </button>
            </Link>
          </div>
        </div>
        <div className='card-servicios'>
          <LazyLoadImage effect='blur' src={Diagnostico} alt='img' />
          <div className='contenedor-card'>
            <p className='titulo'> Paneles Solares Autónomos </p>
            <p>
              Funcionan con baterías para lugares en donde no hay conexión al
              sistema de luz, generas tu propia energía de una manera autónoma.
            </p>
            <Link to='/paneles-solares-autonomos'>
              <button className='btn-primario'>Saber más </button>
            </Link>
          </div>
        </div>
        <div className='card-servicios'>
          <LazyLoadImage effect='blur' src={Reparacion} alt='img' />
          <div className='contenedor-card'>
            <p className='titulo'>SOLUCIONES EN ELECTRICIDAD </p>
            <p>
              Nos encargamos de diseñar tu proyecto eléctrico personalizado,
              adecuado a tus necesidades y realizamos todo el proceso de
              instalación e ingenería.
            </p>
            <Link to='/soluciones-en-electricidad'>
              <button className='btn-primario'>Saber más </button>
            </Link>
          </div>
        </div>
        <div className='card-servicios'>
          <LazyLoadImage effect='blur' src={Aire} alt='img' />
          <div className='contenedor-card'>
            <p className='titulo'>Aire Acondicionado </p>
            <p>Diseño e instalación de servicio de aire acondicionado.</p>
            <Link to='/aire-acondicionado'>
              <button className='btn-primario'>Saber más </button>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <Marcas />
      <hr />
      <div className='centro'>
        <h2>
          Monitoreo de desempeño postventa y mantenimiento incluido el primer
          año{' '}
        </h2>
      </div>
      <div className='cards-porque'>
        <div className='card'>
          <LazyLoadImage effect='blur' src={Motivation} alt='img' />
          <p className='titulo'>Estándares de calidad</p>
          <p>
            Como empresa contamos con todas las certificaciones solares
            necesarias y trabajamos solamente con marcas certificadas en el
            sector solar para garantizar siempre el más alto estándar de
            calidad.
          </p>
        </div>
        <div className='card'>
          <LazyLoadImage effect='blur' src={Energi} alt='img' />
          <p className='titulo'>Garantía de instalación</p>
          <p>
            Nuestros sistemas y materiales están diseñados para soportar 20 años
            en óptimas condiciones.
          </p>
        </div>

        <div className='card'>
          <LazyLoadImage effect='blur' src={Plusvalia} alt='img' />
          <p className='titulo'>Mantenimiento y Monitoreo </p>
          <p>
            Aparte de ofrecer mantenimiento gratuito durante el primer año,
            constantemente nos encontramos monitoreando nuestros sistemas para
            detectar y atacar cualquier falla que se llegué a detectar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
