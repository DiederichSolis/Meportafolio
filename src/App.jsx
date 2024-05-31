import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomeContenedor from './components/HomeContenedor/HomeContenedor';
import Habilidades from './components/Habilidades/Habilidades';

function App() {
  return (
    <>
    <Navbar />
    <div className="containerH">
      <HomeContenedor />
      <Habilidades />
    </div>
    </>
  );
}

export default App;
