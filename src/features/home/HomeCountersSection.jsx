import React from 'react';
import Count from '../../components/Contador/Contador';
import data from '../../components/Contador/counterData';

const HomeCountersSection = () => {
  return (
    <section className='contador' data-aos='fade-up'>
      <h5 className='titulob'>Nuestro compromiso con el medio ambiente</h5>
      <div className='contadores'>
        {data.counts.map((count) => (
          <Count key={count.label} data={count} />
        ))}
      </div>
    </section>
  );
};

export default HomeCountersSection;

