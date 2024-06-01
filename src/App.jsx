import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomeContenedor from './components/HomeContenedor/HomeContenedor';
import Habilidades from './components/Habilidades/Habilidades';
import Experiencia from './components/Experiencia/Experiencia';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="containerH">
        <section id="home">
          <HomeContenedor />
        </section>
        <section id="skills">
          <Habilidades />
        </section>
        <section id="experience">
          <Experiencia />
        </section>
        <section id="contact">
          <Contacto />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
