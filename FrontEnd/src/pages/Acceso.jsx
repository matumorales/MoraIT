import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    usuario: '',
    password: ''
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
      const response = await fetch('http://localhost:3000/api/v1/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setToastMessage('✅ Bienvenido, acceso concedido.');
        setToastType('success');
        setFormData({ usuario: '', password: '' });
      } else {
        setToastMessage('❌ Usuario o contraseña incorrectos.');
        setToastType('error');
      }
    } catch (error) {
      setToastMessage('⚠️ No se pudo conectar con el servidor.');
      setToastType('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="login" className="py-6 bg-white">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold text-morado">Login</h2>
        <p className="text-center mb-5">
          Ingresá tus credenciales para acceder al sistema.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="usuario" className="form-label">Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  id="usuario"
                  value={formData.usuario}
                  onChange={handleChange}
                  placeholder="Tu usuario"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Tu contraseña"
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-morado btn-lg" disabled={isLoading}>
                  {isLoading ? 'Validando...' : 'Ingresar'}
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

export default LoginForm;