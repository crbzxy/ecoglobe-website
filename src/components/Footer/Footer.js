import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo-f.png";
import { ExternalLink } from "react-external-link";
import * as FaIcons from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenedor">
        <div className="col">
          <Link to="/">
            <img src={Logo} alt="EcoGlobe" />
          </Link>
          <p className="descripcion">
            En <strong>Eco Globe</strong> ofrecemos Soluciones Innovadoras en Ahorro de Energía con especialidad en Paneles Solares.</p>
        </div>

        <div className="col">
          <ul>
            <Link to="/servicios">
              <li>Servicios</li>
            </Link>
            <Link to="/nosotros">
              <li>Nosotros</li>
            </Link>
            <Link to="/faq">
              <li>Preguntas Frecuentes</li>
            </Link>
            <Link to="/aviso">
              <li>Aviso de Privacidad</li>
            </Link>

          </ul>
        </div>
        <div className="col">
          <ul>
            <Link to="/contacto">
              <li>Contacto</li>
            </Link>
            <li> <a className="btn-navbar" href="tel:6643824379"> <i className="fas fa-phone-square-alt"></i> (664) 382-4379</a></li>

            <li><a href="mailto:info@ecoglobe.mx"> <i className="fas fa-envelope"></i> info@ecoglobe.mx</a></li>

            <div className="redes">
            <ExternalLink href='https://www.facebook.com/ecoglobe.mx'>
          <li>
            <FaIcons.FaFacebook />
          </li>
        </ExternalLink>
        <ExternalLink href='https://www.instagram.com/ecoglobe.mx/'>
          <li>
            <FaIcons.FaInstagram />
          </li>
        </ExternalLink>
        <ExternalLink href='https://www.linkedin.com/company/eco-globe-energ%C3%ADa-solar/'>
          <li>
            <FaIcons.FaLinkedinIn />
          </li>
        </ExternalLink>
           </div>
          </ul>
        </div>
      </div>
      <div className="mini-footer">
        <small>Copyright<sup>©</sup> 2022 EcoGlobe, todos los derechos reservados.</small>
      </div>
    </footer>
  );
}

export default Footer;
