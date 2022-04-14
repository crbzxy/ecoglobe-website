import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SliderData } from "./SliderData";
//import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import * as FaIcons from "react-icons/fa";

const SliderHero = ({ slides }) => {
  
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const segundos = 10000;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setTimeout(() => nextSlide(),segundos)
    //console.log(current);
    
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    //console.log(current);
    setTimeout(() => prevSlide(),segundos)
    
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  
  }

  
 
  //setTimeout(() => nextSlide(),segundos)

  return (
    <section className="Slider">
      <FaIcons.FaChevronLeft
        className="left-arrow btn-slider"
        onClick={prevSlide}
      />
      <FaIcons.FaChevronRight
        className="right-arrow btn-slider"
        onClick={nextSlide}
      />
      {SliderData.map((slider, index) => {
        return (
          <div
            className={index === current ? "slide oculto active" : "slide"}
            key={index}
          >
            <div className="contenedor-slider">
              <div className="col">{index === current && (
                <h1 className="titulo-hero">{slider.contenido}</h1>
              )}
              {index === current && (
                <p className="descripcion-hero">{slider.descripcion}</p>
              )}
              {index === current && (
                <Link className="btn-hero" to={slider.url} key={index}>
                  {" "}
                  ¡Cotiza ahora!
                </Link>
              )}</div>
              <div className="col"></div>
            </div>

            {index === current && (
              <img src={slider.image} alt={slider.alt} className="image" />
            //   <LazyLoadImage
            //   effect="blur"
            //   src={slider.image}
            //   alt={slider.alt}
            //   className="image"
            // />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default SliderHero;
