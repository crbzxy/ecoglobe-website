import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
//import Cotizador from "../components/Form/Cotizador";
import Nosotros2 from '../img/nosotros-home2.png';
import Sistema from '../img/sistema.png';
function PanelesSolaresAutonomos() {
  return (
    <>
      <section className='paneles-solares'>
        <div className='cabecera'>
          <h2>Paneles Solares Autónomos</h2>
          <p>
          Funcionan con baterías para lugares en donde no hay conexión al sistema de luz, generas tu propia energía de una manera autónoma.
          </p>
        </div>
        <div className='contenedor container '>
          <div className='row mt-5 p-4 '>
            <div className='col'>
              {' '}
              <LazyLoadImage
                effect='blur'
                className='img-responsive'
                src={Sistema}
                alt='img'
              />
            </div>
            <div className='col'>
              {' '}
              <p className='titulo'>¿Cómo se si soy candidato?</p>
              <p className='mt-2'>
              Vives en una zona en donde tu propiedad no está conectada al sistema de luz de la región (CFE).
              </p>
              <p className='mt-2'>
              Te interesa generar tu propia luz/energía, de forma autónoma sin necesidad de conectarte al sistema de luz.
                <br />
              </p>
              <p>
                {' '}
                Los paneles solares te ayudaran a bajar nuevamente de tárifa y
                volver a pagar un costo más bajo por Kilowatt, resultando en
                recibos de menos de $100 pesos bimestrales.
              </p>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col '>
              {' '}
              <p className='titulo mt-5'>¿Cómo obtener tus paneles solares con baterías? </p>
              <ol className='mt-2'>
                <li>Llena el formulario</li>
                <li>Descarga la tabla de consumo para nosotros determinar tus necesidades </li>
                <li>
                Con base en eso te mandaremos una cotización personalizada con la cantidad de paneles adecuados para cubrir tu necesidad de energía

                </li>
                <li>
                  Elige tu forma de pago
                </li>
                <li>Se programa visita para instalación</li>
              </ol>
            </div>
            <div className='col '>
              <LazyLoadImage
                effect='blur'
                className='img-responsive'
                src={Nosotros2}
                alt=''
              />
            </div>
          </div>
          <div className='row mt-5 d-flex'>
            <div className='col'>
              <p className='titulo'>¿Que incluye?</p>
              <ul>
                <li>
                Sistema calculado a medida y necesidades del cliente.

                </li>
                <li>Servicio de ingeniería.</li>
                <li>
                  Servicio técnico, instalación y mantenimiento profesional.
                </li>
                <li>Servicio de monitoreo durante la vida del sistema, para detectar posibles fallas.
</li>
                
                <li>Póliza de mantenimientos gratis el primer año.</li>
              </ul>

              <p>Paneles solares Residencial / Comercial / Industrial</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PanelesSolaresAutonomos;
