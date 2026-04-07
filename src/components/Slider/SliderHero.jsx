import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SliderData } from './SliderData';
import * as FaIcons from 'react-icons/fa';

const SliderHero = ({ slides = SliderData, autoPlayIntervalMs = 10000 }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  useEffect(() => {
    if (length <= 1) {
      return;
    }

    const intervalId = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, autoPlayIntervalMs);

    return () => clearInterval(intervalId);
  }, [length, autoPlayIntervalMs]);

  return (
    <section className='Slider' aria-label='Promociones y mensajes destacados'>
      <button
        type='button'
        className='left-arrow btn-slider'
        onClick={prevSlide}
        aria-label='Ver slide anterior'>
        <FaIcons.FaChevronLeft />
      </button>
      <button
        type='button'
        className='right-arrow btn-slider'
        onClick={nextSlide}
        aria-label='Ver siguiente slide'>
        <FaIcons.FaChevronRight />
      </button>
      {slides.map((slider, index) => {
        const isActive = index === current;
        return (
          <div
            className={isActive ? 'slide active' : 'slide'}
            key={slider.id}>
            <div className='contenedor-slider'>
              <div className='col'>
                {isActive && (
                  <>
                    <p className='titulo'>Energía solar para tu futuro</p>
                    <h1 className='titulo-hero'>{slider.title}</h1>
                    {slider.subtitle && (
                      <p className='descripcion-hero'>{slider.subtitle}</p>
                    )}
                    <Link className='btn-hero' to={slider.ctaHref}>
                      {slider.ctaLabel}
                    </Link>
                  </>
                )}
              </div>
              <div className='col'></div>
            </div>

            {isActive && (
              <img src={slider.image} alt={slider.alt} className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default SliderHero;
