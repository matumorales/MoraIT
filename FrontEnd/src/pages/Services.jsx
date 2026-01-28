import React from 'react';

function Services() {
  return (
    <section id="services" className="py-6 bg-white">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold text-morado">Nuestros Servicios</h2>
        <div className="row g-4">
          {/* Diseño Web */}
          <div className="col-md-4 text-center">
            <img 
              src="/disenio_desarrolloweb2.png" 
              alt="Diseño Web" 
              className="img-fluid mb-3 rounded shadow"
            />
          </div>

          {/* Identidad Visual */}
          <div className="col-md-4 text-center">
            <img 
              src="/identidad_visual2.png" 
              alt="Identidad Visual" 
              className="img-fluid mb-3 rounded shadow"
            />
          </div>

          {/* Contenidos para RRSS */}
          <div className="col-md-4 text-center">
            <img 
              src="/rrss.png" 
              alt="Contenidos para RRSS" 
              className="img-fluid mb-3 rounded shadow"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;
