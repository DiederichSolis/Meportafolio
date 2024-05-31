import React from 'react'
import './Habilidades.css'
import { HABILIDADES } from '../../utils/data';
import cardsHabilidades from './cards/cards';

const Habilidades = () => {
    return (
        <section className='contenidoPrincipal'>
            <h5>Habilidades</h5>

            <div className='contenido'>
            <div className='habilidades'>
                {HABILIDADES.map((item) =>(
                    <cardsHabilidades
                    key={item.titulo}
                    urlico={item.urlicono}
                    titulo={item.titulo}
                    />
                ) )}

            </div>

            <div className='informacion'></div>
            </div>
        </section>
        
    );
};


export default Habilidades;