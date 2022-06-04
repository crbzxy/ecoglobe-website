import React, { useEffect } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import BannerCompleto from "../components/BannerCompleto/BannerCompleto";
import { Link } from "react-router-dom";
import Proyectos from "../img/proyectos.png";
import Asesorias from "../img/asesorias.png";
import Manto from "../img/manto.png";
import Panel from "../img/panel.png";
import Aire from "../img/sunac.png";
import Nosotros from "../img/nosotros-home.png";
import Count from "../components/Contador/Contador";
import data from '../components/Contador/data.json'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Carrousel from '../components/Carrousel';
import Marcas from '../components/Marcas';



function Home() {
  useEffect(() => {

    AOS.init({
      offset: 120,
      delay: 20,
      duration: 500,
      easing: 'ease-in-out',
      debounceDelay: 50,
      throttleDelay: 99,
      mirror: false,
      anchorPlacement: 'bottom-top',
    });
  }, [])
  return (

    <>
      <section className="Home">
        <div className="contenedor hero" data-aos="fade-in">
          <Carrousel />
          <br />
          <section className="contenedor-nosotros">
            <div className="col">
              <LazyLoadImage effect="blur" src={Nosotros} alt="img" />
            </div>
            <div className="col">
              <div className="texto">
                <p className="titulo">¿Quiénes somos?</p>
                <h2>Sobre Ecoglobe</h2>
                <p>
                  Pioneros en Energía Solar en Baja California, con más de 10 años de experiencia en el sector, estamos comprometidos con la transición a una economía de energía limpia en la región. Nuestra prioridad es ofrecerte las mejores soluciones en ahorro de energía, con la mejor relación calidad-precio en el mercado.
                </p>
              </div>
            </div>

          </section>

          <div className="nuestros-servicios">
            <div className="col">
              <p className="titulo">nuestros servicios</p>
              <h3>Empieza a ahorrar con paneles solares ☀️☀️</h3>
            </div>
            <div className="col">
              <Link to="/servicios">
                <button className="btn-secundario">
                  ¡Solicita tu cotización!
                </button>
              </Link>
            </div>
          </div>
          <section className="contenedor-cards">
            <div className="card">
              <LazyLoadImage
                effect="blur"
                src={Asesorias}
                alt="img"
                className="imag-card"
              />
              <div className="texto">
                <p className="titulo">
                  Paneles solares interconectados a la RED de CFE
                </p>
                <p className="descripcion">
                  Genera energía para tu propiedad con paneles solares y deja de pagarle la tarifa más alta a CFE
                </p>
                <Link to="/contacto"> Cotiza tu proyecto</Link>
              </div>
            </div>

            <div className="card">
              <LazyLoadImage
                effect="blur"
                src={Proyectos}
                alt="img"
                className="imag-card"
              />
              <div className="texto">
                <p className="titulo"> Paneles solares autónomos</p>
                <p className="descripcion">
                  Funcionan con baterías para lugares en donde no hay conexión al sistema de luz, generas tu propia energía de una manera autónoma.
                </p>
                <Link to="/contacto"> Cotiza tu proyecto</Link>
              </div>
            </div>

            <div className="card">
              <LazyLoadImage
                effect="blur"
                src={Manto}
                alt="img"
                className="imag-card"
              />
              <div className="texto">
                <p className="titulo">Proyectos Eléctricos</p>
                <p className="descripcion">
                  Nos encargamos de diseñar tu proyecto eléctrico personalizado, adecuado a tus necesidades y realizamos todo el proceso de instalación e ingenería.
                </p>
                <Link to="/contacto"> Cotiza tu proyecto</Link>
              </div>
            </div>
          </section>
        </div>
        <hr />
        <div className="contenedor " data-aos="fade-up">
          <h2>Paneles solares</h2>
          <h3 className="titulo">¿Qué beneficios tienen los paneles solares?</h3>
          <div className="contenedor-energia">
            <div className="col-energia">
              <ul>
                <li>
                  <h4>Ahorro en tu recibo de luz  </h4>
                </li>
                <li>
                  <h4> Cuidado del medio ambiente  </h4>
                </li>
                <li>
                  <h4>Plusvalía para tu propiedad</h4>
                </li>
              </ul>
            </div>
            <div className="col-energia">
              <LazyLoadImage effect="blur" src={Panel} alt="manto" />
            </div>
            <div className="col-energia">
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
      </section>
      <Marcas />
      <BannerCompleto data-aos="fade-up" />

      <section className="contenedor servicios-home" data-aos="fade-up">
        <div className="paneles">
          <div className="col">
            <LazyLoadImage
              effect="blur"
              src={Aire}
              alt="img"
              className="Paneles solares + Aire acondicionado"
            />
          </div>
          <div className="col">
            <h5 className="paneles-titulo">
              Paneles solares + Aire acondicionado
            </h5>
            <p>
              Aprovecha nuestra promoción de verano, y cámbiate a energía solar.
            </p>
            <Link className="btn-secundario" to="/contacto">
              ¡Conoce más!
            </Link>
          </div>
        </div>
      </section>
      <section className="contador" data-aos="fade-up">
        <h5 className="titulob">Nuestro compromiso con el medio ambiente</h5>
        <br />
        <div className="contadores">
          {data.counts.map(count => <Count key={count.id} data={count} />)}
        </div>
      </section>
    </>
  );
}

export default Home;
