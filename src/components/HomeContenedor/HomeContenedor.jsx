import React from 'react';
import './HomeContenedor.css';

const HomeContenedor = ({ language }) => {
  return (
    <section className='contenedorprincipal'>
      <div className='contenedorhome'>
        <h1>{language === 'es' ? 'Soy Diederich Solis Programador Jr' : 'Hi!, Im Diederich Solis Jr Developer '}</h1>
        <p>
          {language === 'es' ? 'Programador Junior con experiencia en desarrollo web | Apasionado por aprender y aplicar nuevas tecnologías. Habilidad para trabajar en equipo y resolver problemas con soluciones eficientes y creativas.' : 'Junior Developer with experience in web development | Passionate about learning and applying new technologies. Team player and problem-solver with efficient and creative solutions.'}
        </p>
      </div>
      <div className='styleimg'>
        <div>
          <div className='tecnologias1'>
            <a href="https://www.uvg.edu.gt/carreras/computacion-y-tecnologias-de-la-informacion/" target="_blank" rel="noopener noreferrer">
              <img src="https://www.uvg.edu.gt/wp-content/uploads/Logo_AF_CAMPUSCENTRAL-07.png" alt="Logo UVG" />
            </a>
          </div>
          <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-b9423.appspot.com/o/cvimage.jpeg?alt=media&token=463e0a9f-3ee7-4dee-a25b-bbb44e8a7421" alt="UVG logo" />
        </div>
        <div>
          <div className='tecnologias'>
            <a href="https://www.instagram.com/diederich_18?igsh=MWdyems3OG55c2Z0cg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png" alt="Instagram Logo" />
            </a>
          </div>
          <div className='tecnologias'>
            <a href="https://www.facebook.com/diederichjosueemidio.solislopez" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="Facebook Logo" />
            </a>
          </div>
          <div className='tecnologias'>
            <a href="https://github.com/DiederichSolis" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="GitHub Logo" />
            </a>
          </div>
          <div className='tecnologias'>
            <a href="https://www.linkedin.com/in/diederich-solis-53a363286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="LinkedIn Logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContenedor;
