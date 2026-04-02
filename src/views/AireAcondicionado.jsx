import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Cotiazdor from '../components/Form/Cotizador';
//import Cotizador from "../components/Form/Cotizador";
//import Nosotros2 from "../img/nosotros-home2.png";
import Aire from '../img/Aire.png';
import AireP from '../img/AireP.png';
function AireAcondicionado() {
  return (
    <>
      <section className='paneles-solares'>
        <div className='cabecera'>
          <h2>Aire Acondicionado</h2>
          <p>
            Diseño, instalación de servicio de aire acondicionado residencial e
            industrial.
          </p>
        </div>
        <div className='contenedor container '>
          <div className='row mt-5 p-4  d-flex wrap'>
            <div className='col '>
              {' '}
              <LazyLoadImage
                effect='blur'
                className='img-responsive'
                src={Aire}
                alt='img'
                style={{ maxWidth: '400px' }}
              />
            </div>
            <div className='col'>
              <h2 className='titulo'>¿Que incluye?</h2>
              <ul>
                <li>Diseño</li>
                <li>Servicio técnico</li>
                <li>Instalación</li>
                <li>Mantenimiento profesional</li>
              </ul>
            </div>
          </div>

          <hr />
          <div className='row mt-5 d-flex' id='airepanel'>
            <h2 style={{ maxWidth: '740px', textAlign: 'center' }}>
              Paquete de aire acondicionado + paneles solares
            </h2>
          </div>
          <div className='row mt-5 p-4 '>
            <div className='col  text-center'>
              {' '}
              <LazyLoadImage
                effect='blur'
                className='img-responsive '
                src={AireP}
                alt='img'
                style={{ maxWidth: '300px' }}
              />
            </div>
            <div className='col'>
              <p>
                Si quieres instalar aires acondicionados pero te preocupa que el
                pago de la luz se incremente, la combinación perfecta es paneles
                solares y aires acondicionado para minimizar tu pago de luz y
                priorizar tu comodidad.
              </p>
              <p>
                Te diseñamos un proyecto estético y seguro, considerando una
                sola instalación eléctrica con capacidad para paneles y aires.{' '}
              </p>
            </div>
          </div>
          <div className='row '>
            <Cotiazdor />
          </div>
        </div>
      </section>
    </>
  );
}

export default AireAcondicionado;
