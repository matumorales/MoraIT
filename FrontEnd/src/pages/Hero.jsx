import React from 'react';

function Hero() {
  return (
    <section id="home" className="bg-light text-center py-6">
      <div className="container">
        <h1 className="display-4 fw-bold text-morado">Soluciones digitales accesibles para pequeñas empresas.</h1>
        <p className="lead mb-4">
          Diseño web, identidad visual y comunicación estratégica para tu crecimiento.
          Transformá tu presencia online con estrategias claras y resultados medibles.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href="#services" className="btn btn-morado btn-lg">
            Ver servicios
          </a>
          <a href="#contact" className="btn btn-outline-morado btn-lg">
            Solicitá tu propuesta
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;