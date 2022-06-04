import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import * as FaIcons from "react-icons/fa";

import Logo from "../../img/logo.png";
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  useEffect(() => {
    navegador();
  });
  const navegador = () => {
    var navScr = document.getElementById("navScr");
    window.onscroll = function () {
      if (
        document.body.scrollTop >= 30 ||
        document.documentElement.scrollTop >= 30
      ) {
        navScr.classList.add("nav-colored");
        navScr.classList.remove("nav-transparent");
      } else {
        navScr.classList.add("nav-transparent");
        navScr.classList.remove("nav-colored");
      }
    };
  };



  return (
    <nav id="navScr" className="navbar ">
      <Link to="/" className="navbar_logo" onClick={closeMobileMenu}>
        <img src={Logo} alt="EcoGlobe" />
      </Link>

      <ul className={click ? "navbar_menu active " : "navbar_menu"}>
        <Link
          to="servicios"
          className="navbar_menu_link"
          onClick={closeMobileMenu}

        >
          <li>Servicios</li>
          {/* {dropdown && <Dropdown />} */}
        </Link>

        <Link
          to="nosotros"
          className="navbar_menu_link"
          onClick={closeMobileMenu}
        >
          <li>Nosotros</li>
        </Link>


        <Link
          to="faq"
          className="navbar_menu_link"
          onClick={closeMobileMenu}
        >
          <li>Preguntas Frecuentes</li>
        </Link>
        <Link
          to="contacto"
          className="navbar_menu_button navbar_menu_link"
          onClick={closeMobileMenu}
        >
          <li>Contacto</li>
        </Link>
        <a
          onClick={closeMobileMenu}
          className="btn-navbar"
          href="tel:6643824379"
        >
          {" "}
          <i className="fas fa-phone-square-alt"></i> (664) 382-4379
        </a>
        <ExternalLink href="https://www.facebook.com/ecoglobe.mx">
          <li>
            <FaIcons.FaFacebook />
          </li>
        </ExternalLink>
      </ul>
      <div className="navbar-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
    </nav>
  );
}

export default Navbar;
