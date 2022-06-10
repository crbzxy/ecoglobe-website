import React from 'react';

function Marcas() {
  return (
    <div className='marcas'>
      <br />
      <h3 style={{ textAlig: 'center',color:'#2bd600', fontWeight:'bolder' }}>Marcas con las que trabajamos</h3>
      <br />
      <ul className='contenedor-marcas'>
        <li>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/ecoglobe-bucket.appspot.com/o/canadian-solar-logo-vector.png?alt=media&token=9596af37-ebee-44bd-9ff2-7fa3e7ebd998'
            alt='Canadian Solar'
          />
        </li>
        <li>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/ecoglobe-bucket.appspot.com/o/enphase-energy-inc-logo-vector.png?alt=media&token=f0af8daa-3e90-4b82-b2a3-ecfd770b876c'
            alt='Emphase Energy'
          />
        </li>
        <li>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/ecoglobe-bucket.appspot.com/o/First_Solar_logo.svg.png?alt=media&token=4c4419b6-7a0a-4ee6-8e8b-ca1d5ddd623c'
            alt=''
          />
        </li>
        <li>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/ecoglobe-bucket.appspot.com/o/outback.png?alt=media&token=333ea6c9-8a19-4312-b368-127a7d1968b8'
            alt=''
          />
        </li>
      </ul>
    </div>
  );
}

export default Marcas;
