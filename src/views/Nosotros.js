import React from "react";
import Iframe from "react-iframe";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Nosotrosi from "../img/nosotros-home.png";
import Nosotros2 from "../img/nosotros-home2.png";
import Energi from "../img/energy.svg";
import Motivation from "../img/motivation.svg";
import Plusvalia from "../img/home.svg";
import Count from "../components/Contador/Contador";
import data from '../components/Contador/data.json'
import Certificaciones from "../components/Certificaciones";
function Nosotros() {
  return (
    <div className=" contenedor Nosotros">
      <section className="contenedor-nosotros">
        <div className="col">
          <LazyLoadImage effect="blur" src={Nosotrosi} alt="img" />
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
        <div className="col">
          <p className="titulo">Nuestra especialidad</p>
          <h2>Paneles solares </h2>
          <p>
            Nuestra prioridad es ofrecerte las mejores soluciones en ahorro de energía, con la mejor relación calidad-precio en el mercado.
          </p>
        </div>
        <div className="col">
          <LazyLoadImage effect="blur" src={Nosotros2} alt="" />
        </div>
      </section>

      <Certificaciones />

      <div className="centro">
        <h3>Porqué Eco Globe </h3>
      </div>
      <div className="cards-porque">
        <div className="card">
          <LazyLoadImage effect="blur" src={Motivation} alt="img" />
          <p className="titulo">Estándares de calidad</p>
          <p>
            Como empresa contamos con todas las certificaciones solares necesarias y trabajamos solamente con marcas certificadas en el sector solar para garantizar siempre el más alto estándar de calidad.
          </p>
        </div>
        <div className="card">
          <LazyLoadImage effect="blur" src={Energi} alt="img" />
          <p className="titulo">Garantía de instalación</p>
          <p>
            Nuestros sistemas y materiales están diseñados para soportar 20 años en óptimas condiciones.
          </p>
        </div>

        <div className="card">
          <LazyLoadImage effect="blur" src={Plusvalia} alt="img" />
          <p className="titulo">Mantenimiento y Monitoreo </p>
          <p>
            Aparte de ofrecer mantenimiento gratuito durante el primer año, constantemente nos encontramos monitoreando nuestros sistemas para detectar y atacar cualquier falla que se llegué a detectar.
          </p>
        </div>
      </div>

      <div className="Nosotros-mision">
        <div className="col">
          <div className="titulo">MISIÓN</div>
          <p>
            Ofrecer soluciones innovadoras de ahorro de energía para satisfacer las necesidades de nuestros clientes y contrubuir en la transición hacia una economía de energía limpia en México.
          </p>
        </div>
        <div className="col">
          <div className="titulo">VISIÓN</div>
          <p>
            Ser la mejor opción y continuar siendo pioneros en soluciones innovadoras de ahorro de energía en el mercado de Baja California.
          </p>
        </div>

        <div className="col">
          <div className="titulo">VALORES</div>
          <ul>
            <li>Enfoque al cliente </li>
            <li>Responsabilidad ambiental</li>
            <li>Honestidad y etíca</li>
            <li>Calidad</li>
            <li>Capacitación constante</li>
            <li>Innovación</li>
          </ul>
        </div>
      </div>
      <Iframe
        width="580" height="600" src="https://www.youtube.com/embed/wFaa9e7auzM?controls=0&amp;start=106" title="Ecoglobe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
        className="videoi"
        loading="lazy"
      />
      <hr />

      <br />

      <section className="contador">
        <h5 className="titulob">Nuestro compromiso con el medio ambiente</h5>
        <br />
        <div className="contadores">
          {data.counts.map(count => <Count key={count.id} data={count} />)}
        </div>
      </section>
    </div>
  );
}

export default Nosotros;
