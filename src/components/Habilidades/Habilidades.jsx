import React, { useState } from 'react';
import { HABILIDADES } from '../../utils/data';
import CardsHabilidad from './CardsHabilidad/CardsHabilidad';
import './Habilidades.css';

const Habilidades = () => {

    const [selectedSkill, setSelectedSkill] = useState(HABILIDADES[0]);
    const handleSelectedSkill = (data) =>{
        setSelectedSkill(data);
    }

    return (
        <section className='contenidoPrincipal'>
            <h4>Habilidades</h4>

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

            <div className='informacion'>

            </div>
            </div>
        </section>
        
    );
};


export default Habilidades;