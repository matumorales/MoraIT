import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Hero from './pages/Hero.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import ContactForm from './pages/contactForm.jsx';
import Acceso from './pages/Acceso.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero id="home"/>
            <Services id="services"/>
            <Portfolio id="portfolio"/>
            <ContactForm id="contact" />
            <Footer />
            <WhatsAppButton />
          </>
        } />
        <Route path="/login" element={<Acceso />} />
      </Routes>
    </Router>
  );
}

export default App;