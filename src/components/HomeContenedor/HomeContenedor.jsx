import React from 'react';
import './HomeContenedor.css';

const HomeContenedor = () => {
    return (
        <section className='contenedorprincipal'>
            <div className='contenedorhome'>
                <h1>Soy Diederich Solis Programador Jr</h1>
                <p>
                    Programador Junior con experiencia en desarrollo web | 
                    Apasionado por aprender y aplicar nuevas tecnologías. Habilidad para trabajar en equipo y resolver problemas con soluciones eficientes y creativas.
                </p>
            </div>

           
            <div className='styleimg'>
                <div>
                    <div className='tecnologias1'>
                        <a href="https://www.uvg.edu.gt/carreras/computacion-y-tecnologias-de-la-informacion/" target="_blank" rel="noopener noreferrer">
                            <img src="https://www.uvg.edu.gt/wp-content/uploads/Logo_AF_CAMPUSCENTRAL-07.png" alt="Logo UVG" />
                        </a>
                    </div>
                    
                        <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-b9423.appspot.com/o/WhatsApp%20Image%202024-05-31%20at%201.46.12%20AM.jpeg?alt=media&token=de1fd017-80cf-4801-a1d2-df89a00f8690" alt="UVG logo" />
                   
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
                        <a href="" target="_blank" rel="noopener noreferrer">
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
}

export default HomeContenedor;
