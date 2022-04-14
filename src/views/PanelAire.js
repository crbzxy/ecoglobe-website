import React from "react";
import Energi from "../img/energy.svg";
import Motivation from "../img/motivation.svg";
import Plusvalia from "../img/home.svg";

import Aire from "../img/sunac.png";
//import { Link } from "react-router-dom";
//import * as FaIcons from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

import FormPanelAire from "../components/Form/FormPanelAire.js";

function PanelAire() {
  return (
    <div className=" contenedor PanelAire">
      <div className="cabecera-Panel">
        <div className="col">
          <LazyLoadImage
            effect="blur"
            src={Aire}
            alt="img"
            className="Paneles solares + Aire acondicionado"
          />
        </div>
        <div className="col">
          <h1 className="titulo-v">
            PANELES SOLARES + <br />
            AIRE ACONDICIONADO{" "}
          </h1>{" "}
          <p> CÁMBIATE A PANELES SOLARES Y EMPIEZA A AHORRAR </p>{" "}
        </div>
      </div>{" "}
      <section className="Contenedor-FormularioPanelAire">
        <div className="col">
          <h2>
            Paneles solares <strong>+</strong> <br /> Aire acondicionado
          </h2>
          <br />
          <p>
            El objetivo es el ahorro de energía y no sacrificar confort,
            gracias a la tecnología de los paneles solares podemos generar energía desde nuestro hogar o negocio para utilizar en cualquier temporada.
          </p>


          <div className="detalles">
            <p className="titulo">Incluye:</p>
            <ul>
              <li>MiniSplit (1 Tonelada Frio /Calor)</li>
              <li>Paneles Solares</li>
              <li>Microinversor</li>
              <li>Estructura Base</li>
              <li>Material Electrico</li>
              <li>Mano de Obra</li>
              <li>Tramite de contrato con CFE  (Medidor Bidirecional)</li>
            </ul>
          </div>
          <p className="titulo">Personaliza tu cotización</p>
          <p>Envíanos tu recibo de CFE en este formulario y tu plan de cuantos aires requieres para sumarlos al consumo y ver cuantos paneles necesitas.</p>

        </div>
        <FormPanelAire />
      </section>
      <hr />
      <div className="centro">
        <h2>
          Monitoreo de desempeño postventa y mantenimiento incluido el primer
          año{" "}
        </h2>
      </div>
      <div className="cards-porque">
        <div className="card">
          <LazyLoadImage effect="blur" src={Motivation} alt="img" />
          <p className="titulo"> Garantía de instalación </p>{" "}
          <p>
            Ofrecemos confiabilidad en los productos y PanelAire ofrecidos,
            Garantizamos nuestro trabajo para soportar 20 años en los sistemas
            fotovoltaicos.{" "}
          </p>{" "}
        </div>{" "}
        <div className="card">
          <LazyLoadImage effect="blur" src={Energi} alt="img" />
          <p className="titulo"> Retorno de inversión(ROI) </p>{" "}
          <p>
            Con nustros sistemas fotovoltaicos recuperas tu inversión en un
            plazo de 3 años o menos, dependiendo tu consumo medio.{" "}
          </p>{" "}
        </div>
        <div className="card">
          <LazyLoadImage effect="blur" src={Plusvalia} alt="img" />
          <p className="titulo"> Plusvalía para tu hogar. </p>{" "}
          <p>
            Los Sistemas Fotovoltaicos y la energía solar son una inversión
            inteligente, pues a pesar del compromiso a largo plazo que suponen,
            la plusvalía de una casa generalmente aumenta con el tiempo.{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default PanelAire;
