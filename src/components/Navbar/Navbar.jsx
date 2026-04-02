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

      <ul className={click ? 'navbar_menu active ' : 'navbar_menu'}>
        <Link
          to='/servicios'
          className='navbar_menu_link'
          onClick={closeMobileMenu}>
          <li>Servicios</li>
          {/* {dropdown && <Dropdown />} */}
        </Link>

        <Link
          to='/nosotros'
          className='navbar_menu_link'
          onClick={closeMobileMenu}>
          <li>Nosotros</li>
        </Link>

        <Link to='/faq' className='navbar_menu_link' onClick={closeMobileMenu}>
          <li>Preguntas Frecuentes</li>
        </Link>
        <Link
          to='/contacto'
          className='navbar_menu_button navbar_menu_link'
          onClick={closeMobileMenu}>
          <li>Contacto</li>
        </Link>
        <a
          onClick={closeMobileMenu}
          className='btn-navbar'
          href='tel:6643824379'>
          {' '}
          <i className='fas fa-phone-square-alt'></i> (664) 382-4379
        </a>
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
      </ul>
      <div className='navbar-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
    </nav>
  );
}

export default Navbar;
