import React from 'react';
import Carrousel from '../../components/Carrousel';

const HomeHeroSection = () => {
  return (
    <section className='Home'>
      <div className='contenedor hero' data-aos='fade-in'>
        <Carrousel />
      </div>
    </section>
  );
};

export default HomeHeroSection;

