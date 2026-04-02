import React from 'react';

function Marcas() {
  return (
    <div className='marcas'>
      <br />
      <h3
        style={{
          textAlign: 'center',
          color: '#2bd600',
          fontWeight: 'bolder',
        }}
      >
        Marcas con las que trabajamos
      </h3>
      <br />
      <ul className='contenedor-marcas'>
        <li>
          <img src='/logos/canadian-solar.png' alt='Canadian Solar' />
        </li>
        <li>
          <img src='/logos/enphase-energy.png' alt='Enphase Energy' />
        </li>
        <li>
          <img src='/logos/first-solar.png' alt='First Solar' />
        </li>
        <li>
          <img src='/logos/outback.png' alt='Outback' />
        </li>
      </ul>
    </div>
  );
}

export default Marcas;
