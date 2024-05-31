import React from 'react';
import { HABILIDADES } from '../../utils/data';
import CardsHabilidad from './CardsHabilidad/CardsHabilidad';

const Habilidades = () => {
    return (
        <section className='contenidoPrincipal'>
            <h5>Habilidades</h5>

            <div className='styleContenido'>
            <div className='styleHabilidades'>
                {HABILIDADES.map((item) =>(
                
                    <CardsHabilidad
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