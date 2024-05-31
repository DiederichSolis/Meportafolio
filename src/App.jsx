import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomeContenedor from './components/HomeContenedor/HomeContenedor';
import Habilidades from './components/Habilidades/Habilidades';
import cards from './components/Habilidades/CardsHabilidad/CardsHabilidad';

function App() {
  return (
    <>
    <Navbar />
    <div className="containerH">
      <HomeContenedor />
      <Habilidades />
      <cards />
    </div>
    </>
  );
}

export default App;
