import React from "react";

import Iframe from "react-iframe";
import ContactForm from "../components/Form/ContactForm.js";

function Contacto() {
  return (
    <div className=" contenedor Contacto">
      <hr />
      <div className="contenedor-form">
        <div className="col">
          <p className="titulo">🌎 Eco Globe</p>
          <p>En Eco Globe estamos comprometidos con la transición a una economía de energía limpia en la región. Nuestra prioridad es ofrecer la mejor calidad-precio en soluciones de ahorro de energía.  </p>{" "}
          <ul>
            <li>
              {" "}
              <p>
                <i className="fa fa-map-marker" ></i>
                Ubicación:
              </p>
              <a href="https://www.google.com/maps/place/Eco+Globe/@32.5309138,-116.9704432,15z/data=!4m5!3m4!1s0x0:0xca32e0dd79ca0262!8m2!3d32.5309138!4d-116.9704432">
                Rtno. de la Brisa #2011, Altabrisa, 22427 Tijuana, B.C
              </a>
            </li>
            <li>
              <p>
                <i className="fas fa-envelope" />
                Escríbenos:
              </p>
              <a href="mailto:info@ecoglobe.mx"> info@ecoglobe.mx</a>
            </li>
            <li>
              {" "}
              <p>
                <i className="fas fa-phone-square-alt" /> Llámanos
                <br />
                <a href="tel:6643824379">
                  {" "}
                  (664) 382-4379
                </a>

              </p>


            </li>
          </ul>
          <a className="btn-secundario" href="https://wa.me/+5216643642748">
            {" "}
            <i className="fab fa-whatsapp" /> Mándanos un Whatsapp{" "}
          </a>
        </div>

        <div className="col form">
          {" "}
          <ContactForm />
        </div>
      </div>

      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13455.286035201218!2d-116.9704432!3d32.5309138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xca32e0dd79ca0262!2sEco%20Globe!5e0!3m2!1ses-419!2smx!4v1623997584112!5m2!1ses-419!2smx"
        width="100%"
        height="280"


        loading="lazy"
      />
    </div>
  );
}

export default Contacto;
