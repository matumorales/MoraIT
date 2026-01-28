import React from 'react';

function Portfolio() {
  return (
    <section id="portfolio" className="py-6 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold text-morado">Portafolio</h2>
        <div className="row g-4">
          {/* Proyecto 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://via.placeholder.com/400x250"
                className="card-img-top"
                alt="Proyecto 1"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Proyecto Institucional</h5>
                <p className="card-text">
                  Sitio web para una institución educativa, con diseño claro y comunicación motivacional.
                </p>
              </div>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://via.placeholder.com/400x250"
                className="card-img-top"
                alt="Proyecto 2"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Landing Page</h5>
                <p className="card-text">
                  Página de presentación para un evento escolar, optimizada para móviles y tablets.
                </p>
              </div>
            </div>
          </div>

          {/* Proyecto 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://via.placeholder.com/400x250"
                className="card-img-top"
                alt="Proyecto 3"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">E-commerce Educativo</h5>
                <p className="card-text">
                  Plataforma de venta de materiales escolares con carrito de compras y pasarela de pago.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
