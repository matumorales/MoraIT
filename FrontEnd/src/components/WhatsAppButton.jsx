import React, { useEffect } from 'react';
import { Tooltip } from 'bootstrap';
import logo from "../assets/logo1.png"; // importa tu logo

function WhatsAppButton() {
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl));
  }, []);

  return (
    <a
      href="https://wa.me/5493454046418?text=Hola%20Morait,%20quiero%20más%20información%20sobre%20sus%20servicios"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      data-bs-toggle="tooltip"
      data-bs-placement="left"
      title="Escríbenos por WhatsApp"
    > 
    <i className="bi bi-whatsapp"></i>
    </a>
  );
}

export default WhatsAppButton;