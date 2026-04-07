import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Nosotros from '../../img/nosotros-home.png';

const HomeAboutSection = () => {
  return (
    <section className='contenedor-nosotros'>
      <div className='col'>
        <LazyLoadImage
          effect='blur'
          src={Nosotros}
          alt='Equipo de Ecoglobe frente a instalación de paneles solares'
        />
      </div>
      <div className='col'>
        <div className='texto'>
          <p className='titulo'>¿Quiénes somos?</p>
          <h2>Sobre Ecoglobe</h2>
          <p>
            Pioneros en Energía Solar en Baja California, con más de 10 años de
            experiencia en el sector, estamos comprometidos con la transición a
            una economía de energía limpia en la región. Nuestra prioridad es
            ofrecerte las mejores soluciones en ahorro de energía, con la mejor
            relación calidad-precio en el mercado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;

