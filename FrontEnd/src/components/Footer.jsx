import React from "react";
import logo from "../assets/logo1.png";

function Footer() {
  return (
    <footer className="bg-morado text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          
          {/* 1. Logo + descripción */}
          <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
            <img
              src={logo}
              alt="Morait Logo"
              width="60"
              height="60"
              className="mb-3 rounded"
            />
            <p className="text-light">
              Soluciones digitales para microemprendedores: diseño web, identidad visual y contenido para redes.
            </p>
          </div>

          {/* 2. Servicios */}
          <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
            <h3 className="fw-bold mb-3">Servicios</h3>
            <ul className="list-unstyled text-light">
              <li>Diseño Web</li>
              <li>Publicaciones en RRSS</li>
              <li>Asesoría informática</li>
            </ul>
          </div>

          {/* 3. Contacto */}
          <div className="col-md-4 text-center text-md-start">
            <h3 className="fw-bold mb-3">Contacto</h3>
            <ul className="list-unstyled text-light">
              <li>Morales Ignacio</li>
              <li>
                <a href="mailto:contacto@morait.com" className="text-light text-decoration-none">
                  contacto@morait.com
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/morait/" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://wa.me/5493454046418?text=Hola%20MoraIT%2C%20quiero%20consultar%20sobre%20un%20proyecto" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer inferior */}
        <div className="border-top pt-3 text-center">
          <p className="text-light mb-0">
            © 2026 MoraIT - Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


/*
import React from 'react';

function Footer() {
  return (
    <footer className="bg-morado text-white py-4 mt-5">
       <div className="container text-center">
        <h5 className="fw-bold">Morait</h5>
        <p className="mb-2">
          Desarrollo web moderno y responsive. Contenido para RRSS e identidad visual.
        </p>
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a href="#services" className="text-white text-decoration-none">Servicios</a>
          <a href="#portfolio" className="text-white text-decoration-none">Portafolio</a>
          <a href="#contact" className="text-white text-decoration-none">Contacto</a>
        </div>
        <p className="small mb-0">&copy; 2026 Morait - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;*/