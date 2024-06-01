import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomeContenedor from './components/HomeContenedor/HomeContenedor';
import Habilidades from './components/Habilidades/Habilidades';
import cards from './components/Habilidades/CardsHabilidad/CardsHabilidad';
import Experiencia from './components/Experiencia/Experiencia';
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <>
    <Navbar />
    <div className="containerH">
      <HomeContenedor />
      <Habilidades />
      <Experiencia />
      <Contacto />
    </div>
    </>
  );
}

export default App;
