import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre_apellido: '',
    correo: '',
    mensaje: ''
  });
  
  const [toastMessage, setToastMessage] = useState(null);
  const [toastType, setToastType] = useState(null); // "success" o "error"
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setToastMessage(null);

    try {
      const response = await fetch('http://localhost:3000/api/v1/mensajes/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)      
      });

      if (response.ok) {
        setToastMessage('✅ Tu mensaje fue enviado correctamente. ¡Gracias por contactarnos!');
        setToastType('success');
        setFormData({ nombre_apellido: '', correo: '', mensaje: '' });
      } else {
        setToastMessage('❌ Hubo un error al enviar tu mensaje. Intenta nuevamente.');
        setToastType('error');
      }
    } catch (error) {
      setToastMessage('⚠️ No se pudo conectar con el servidor. Revisa tu conexión.');
      setToastType('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-6 bg-white">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold text-morado">Contacto</h2>
        <p className="text-center mb-5">
          ¿Tenés un proyecto en mente? Escribinos y te responderemos a la brevedad.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre_apellido" className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre_apellido"
                  value={formData.nombre_apellido}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea
                  className="form-control"
                  id="mensaje"
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí..."
                  required
                ></textarea>
              </div>
              <div className="text-center">
               <button type="submit" className="btn btn-morado btn-lg" disabled={isLoading}>
                  {isLoading ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Toast flotante */}
      {toastMessage && (
        <div 
          className="toast-container position-fixed top-0 end-0 p-3"
          style={{ zIndex: 1055 }}
        >
          <div 
            className={`toast align-items-center text-white border-0 show 
              ${toastType === 'success' ? 'bg-success' : 'bg-danger'}`}
            role="alert"
          >
            <div className="d-flex">
              <div className="toast-body">
                {toastMessage}
              </div>
              <button 
                type="button" 
                className="btn-close btn-close-white me-2 m-auto" 
                onClick={() => setToastMessage(null)}
              ></button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ContactForm;