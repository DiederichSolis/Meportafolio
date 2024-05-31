import React from 'react'
import './HomeContenedor.css'

const HomeContenedor = () =>{
    return(
        <section className='contenedorprincipal'>
            <div className='contenedorhome'>
                <h1>Soy Diederich Solis Programador Junior</h1>
                <p>
                Programador Junior con experiencia en desarrollo web | 
                Apasionado por aprender y aplicar nuevas tecnologías. Habilidad para trabajar en equipo y resolver problemas con soluciones eficientes y creativas.
                </p>
             
            </div>
            <div className='styleimg'>
                <div>
                  
                    <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-b9423.appspot.com/o/WhatsApp%20Image%202024-05-31%20at%201.46.12%20AM.jpeg?alt=media&token=de1fd017-80cf-4801-a1d2-df89a00f8690" alt="" />
                </div>

                <div>
                    <div className='tecnologias'>
                        <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-b9423.appspot.com/o/png-clipart-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-Photoroom.png-Photoroom.png?alt=media&token=50586ddb-2a5a-4beb-aa95-dd3b4d3f6da1" alt="" />
                    </div>
                    <div className='tecnologias'>
                        <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-b9423.appspot.com/o/png-clipart-web-development-html-cascading-style-sheets-css3-bootstrap-minimalist-resume-blue-angle-Photoroom.png-Photoroom.png?alt=media&token=1a83e22e-789e-4c4e-bb14-0178ca5b79b5" alt="" />
                    </div>
                    <div className='tecnologias'>
                        <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-b9423.appspot.com/o/Remove-bg.ai_1717139594909.png?alt=media&token=1a8abe9b-ad6d-4b4e-8d7b-10429157cdf3" alt="" />
                    </div>
                </div>

                
            </div>

        </section>
    )
}

export default HomeContenedor;