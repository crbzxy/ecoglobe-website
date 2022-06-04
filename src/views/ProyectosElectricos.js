import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
//import Cotizador from "../components/Form/Cotizador";
import Nosotros2 from '../img/nosotros-home2.png';
import Sistema from '../img/pe.png';
function ProyectoElectricos() {
  return (
    <>
      <section className='paneles-solares'>
        <div className='cabecera'>
          <h2>Soluciones en electricidad</h2>
          <p>
            Nos encargamos de diseñar tu proyecto eléctrico personalizado desde
            de la planeación a la ejecucción
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
              <p className='titulo'>Nos especializamos en: </p>
              <ul>
                <li>Proyectos nuevos</li>
                <li>Remodelaciones</li>
                <li>Problemas Electricos</li>
                <li>Alumbrado público</li>
                <li>
                  Mantenimiento de:
                  <ul>
                    <li>Instalaciones eléctricas</li>
                    <li>Centros de carga</li>
                    <li>Subestaciones eléctricas</li>
                    <li>Plantas de emergencia</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className='row mt-5 d-flex'>
            <div className='col'>
              <p className='titulo'>¿Que incluye?</p>
              <ul>
                <li>Servicio de diseño e ingeniería.</li>
                <li>Solución de fallas detectadas.</li>
                <li>
                  Servicio técnico, instalación y mantenimiento profesional.
                </li>
                <li>
                  Servicio personalizado a los requerimientos del cliente.
                </li>
                <li>
                  Servicio de monitoreo durante la vida del sistema, para
                  detectar posibles fallas.
                </li>
                <li>Proyección de propuestas y soluciones integrales.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProyectoElectricos;
