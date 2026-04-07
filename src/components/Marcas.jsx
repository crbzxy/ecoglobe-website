import React from 'react';
import canadianSolar from '../assets/brands/canadian-solar.svg';
import enphaseEnergy from '../assets/brands/enphase-energy.svg';
import firstSolar from '../assets/brands/first-solar.svg';
import outback from '../assets/brands/outback.svg';

const brandLogos = [
  { src: canadianSolar, label: 'Canadian Solar' },
  { src: enphaseEnergy, label: 'Enphase Energy' },
  { src: firstSolar, label: 'First Solar' },
  { src: outback, label: 'OutBack Power' },
];

function Marcas() {
  return (
    <div className='marcas'>
      <h3 className='marcas-titulo'>
        Marcas con las que trabajamos
      </h3>
      <ul className='contenedor-marcas'>
        {brandLogos.map(({ src, label }) => (
          <li key={label}>
            <img src={src} alt={label} loading='lazy' />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Marcas;
