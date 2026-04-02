import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Panel from '../../img/panel.png';

const HomePanelsBenefitsSection = () => {
  return (
    <div className='contenedor ' data-aos='fade-up'>
      <h2>Paneles solares</h2>
      <h3 className='titulo'>¿Qué beneficios tienen los paneles solares?</h3>
      <div className='contenedor-energia'>
        <div className='col-energia'>
          <ul>
            <li>
              <h4>Ahorro en tu recibo de luz </h4>
            </li>
            <li>
              <h4> Cuidado del medio ambiente </h4>
            </li>
            <li>
              <h4>Plusvalía para tu propiedad</h4>
            </li>
          </ul>
        </div>
        <div className='col-energia'>
          <LazyLoadImage
            effect='blur'
            src={Panel}
            alt='Paneles solares Ecoglobe instalados en techo de vivienda'
          />
        </div>
        <div className='col-energia'>
          <ul>
            <li>
              <h4>Garantía de 20 años </h4>
            </li>
            <li>
              <h4>Inversión segura </h4>
            </li>
            <li>
              <h4>Congela tu tarifa eléctrica </h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePanelsBenefitsSection;

