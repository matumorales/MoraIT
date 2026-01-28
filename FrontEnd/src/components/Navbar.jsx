import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Collapse } from 'bootstrap';
import logo from '../assets/logo1.png';

function Navbar() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          new Collapse(navbarCollapse).hide(); 
        }
      });
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-morado fixed-top">
      <div className="container">
        {/* Logo + nombre */}
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img 
            src={logo} 
            alt="Morait Logo" 
            width="40" 
            height="40" 
            className="me-2 d-inline-block align-text-top rounded"
          />
          <span className="fw-bold">Morait</span>
        </a>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <HashLink smooth to="/#home" className="nav-link">Inicio</HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth to="/#services" className="nav-link">Servicios</HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth to="/#portfolio" className="nav-link">Portafolio</HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth to="/#contact" className="nav-link">Contacto</HashLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-morado text-white" to="/login">
                Acceder
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;