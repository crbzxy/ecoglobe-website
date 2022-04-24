import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Cotizador from "../components/Form/Cotizador";
import Nosotros2 from "../img/nosotros-home2.png";
import Sistema from "../img/sistema.png";
function PanelesSolares() {
  return (
    <>
      <section className="paneles-solares">
        <div className="cabecera">
          <h2>Paneles solares</h2>
          <p>
            Genera energía para tu propiedad con paneles solares y deja de
            pagarle la tarifa más alta a CFE
          </p>
        </div>
        <div className="contenedor ">
          <div className="row mt-5">
            <div className="col">
              {" "}
              <LazyLoadImage
                effect="blur"
                className="img-responsive"
                src={Sistema}
                alt="img"
              />
            </div>
            <div className="col">
              {" "}
              <p className="titulo">¿Cómo se si soy candidato?</p>
              <p className="mt-2">
                Cualquiera puede ser candidato a paneles solares,
                independientemente de que tu gasto de luz sea muy alto o no. Lo
                que varía es el ahorro inmediato que se verá reflejado en tu
                recibo de CFE.
              </p>
              <p className="mt-2">
                Sin embargo, si actualmente te encuentras pagando más de $2,000
                - $2,500 pesos, es probable que seas parte de la Tárifa DAC o
                tarifa de alto consumo, lo que resulta en que CFE te cobre un
                costo más alto por Kilowatt consumido de luz.
                <br />
              </p>
              <p>
                {" "}
                Los paneles solares te ayudaran a bajar nuevamente de tárifa y
                volver a pagar un costo más bajo por Kilowatt, resultando en
                recibos de menos de $100 pesos bimestrales.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col ">
              {" "}
              <p className="titulo mt-5">¿Cómo obtener tus paneles solares?</p>
              <ol className="mt-2">
                <li>Llena el formulario</li>
                <li>Mandanos tu recibo de CFE </li>
                <li>
                  Te mandaremos una cotización personalizada con la cantidad de
                  paneles adecuados para cubrir tu necesidad de energía y bajar
                  tu tarifa
                </li>
                <li>
                  Elige tu forma de pago
                  <ul>
                    <li>CONTADO</li>
                    <li>TARJETA DE CRÉDITO</li>
                    <li>
                      FINANCIAMIENTO SUNBANK: Tú eliges el porcentaje de
                      enganche
                    </li>
                    <li>
                      PLANES DE PAGO SUNBANK: 6, 12, 24, 48, hasta 60 meses.{" "}
                    </li>
                    <li>CRÉDITO PERSONALIZADO ECO GLOBE</li>
                  </ul>
                </li>
                <li>Se programa visita para instalación</li>
              </ol>
            </div>
            <div className="col ">
              <LazyLoadImage effect="blur" className="img-responsive" src={Nosotros2} alt="" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <Cotizador />
            </div>
            <div className="col"><p className="titulo">¿Que incluye?</p>
              <ul>
                <li>
                  Sistema calculado a medida a tus consumos de energía para cubrir
                  tus necesidades
                </li>
                <li>Servicio de ingeniería.</li>
                <li>
                  Servicio técnico, instalación y mantenimiento profesional.
                </li>
                <li>Garantía de calidad en materiales y marcas utilizadas.</li>
                <li>
                  Servicio de monitoreo durante la vida del sistema, para detectar
                  posibles fallas.
                </li>
                <li>Póliza de mantenimientos gratis el primer año.</li>
              </ul>

              <p>Paneles solares Residencial / Comercial / Industrial</p></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PanelesSolares;
