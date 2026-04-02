import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import Aire from '../../img/sunac.png';

const HomePromoSection = () => {
  return (
    <section className='contenedor servicios-home' data-aos='fade-up'>
      <div className='paneles'>
        <div className='col'>
          <LazyLoadImage
            effect='blur'
            src={Aire}
            alt='Aire acondicionado Ecoglobe alimentado con paneles solares'
            className='Paneles solares + Aire acondicionado'
          />
        </div>
        <div className='col'>
          <h5 className='paneles-titulo'>
            Paneles solares + Aire acondicionado
          </h5>
          <p>
            Aprovecha nuestra promoción de verano, y cámbiate a energía solar.
          </p>
          <Link className='btn-secundario' to='/aire-acondicionado/#airepanel'>
            ¡Conoce más!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePromoSection;

