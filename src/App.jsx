
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomeContenedor from './components/HomeContenedor/HomeContenedor';

function App() {
  return (
    <>
    <Navbar />
    <div className="containerH">
      <HomeContenedor />
    </div>
    </>
  );
}

export default App;
