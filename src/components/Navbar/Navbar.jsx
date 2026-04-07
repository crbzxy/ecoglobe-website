import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import * as FaIcons from 'react-icons/fa';
import { useNavbarScroll } from './useNavbarScroll';

import Logo from '../../img/logo.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const { isScrolled } = useNavbarScroll();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const navbarClassName = isScrolled
    ? 'navbar nav-colored'
    : 'navbar nav-transparent';

  return (
    <nav id='navScr' className={navbarClassName}>
      <Link to='/' className='navbar_logo' onClick={closeMobileMenu}>
        <img src={Logo} alt='EcoGlobe' />
      </Link>

      <ul
        className={click ? 'navbar_menu active' : 'navbar_menu'}
        id='navbar-navigation'>
        <li>
          <Link
            to='/servicios'
            className='navbar_menu_link'
            onClick={closeMobileMenu}>
            Servicios
          </Link>
        </li>

        <li>
          <Link
            to='/nosotros'
            className='navbar_menu_link'
            onClick={closeMobileMenu}>
            Nosotros
          </Link>
        </li>

        <li>
          <Link
            to='/faq'
            className='navbar_menu_link'
            onClick={closeMobileMenu}>
            Preguntas Frecuentes
          </Link>
        </li>

        <li>
          <Link
            to='/contacto'
            className='navbar_menu_button navbar_menu_link'
            onClick={closeMobileMenu}>
            Contacto
          </Link>
        </li>

        <li>
          <a
            onClick={closeMobileMenu}
            className='btn-navbar'
            href='tel:6643824379'>
            <i className='fas fa-phone-square-alt' /> (664) 382-4379
          </a>
        </li>

        <li className='navbar_menu_social'>
          <ExternalLink href='https://www.facebook.com/ecoglobe.mx'>
            <FaIcons.FaFacebook aria-label='Facebook EcoGlobe' />
          </ExternalLink>
        </li>
        <li className='navbar_menu_social'>
          <ExternalLink href='https://www.instagram.com/ecoglobe.mx/'>
            <FaIcons.FaInstagram aria-label='Instagram EcoGlobe' />
          </ExternalLink>
        </li>
        <li className='navbar_menu_social'>
          <ExternalLink href='https://www.linkedin.com/company/eco-globe-energ%C3%ADa-solar/'>
            <FaIcons.FaLinkedinIn aria-label='LinkedIn EcoGlobe' />
          </ExternalLink>
        </li>
      </ul>

      <button
        type='button'
        className='navbar-icon'
        onClick={handleClick}
        aria-expanded={click}
        aria-controls='navbar-navigation'
        aria-label={click ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} aria-hidden />
      </button>
    </nav>
  );
}

export default Navbar;
