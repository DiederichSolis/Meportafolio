import React, { useState } from 'react';
import { HABILIDADES } from '../../utils/data';
import CardsHabilidad from './CardsHabilidad/CardsHabilidad';
import './Habilidades.css';
import HabilidadesInfo from './HabilidadesInfo/HabilidadesInfo';

const Habilidades = () => {

    const[seleccionH,setSeleccionH] = useState(HABILIDADES[0]);
    const handleSeleccion = (data) =>{
        setSeleccionH(data);
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
                    activo={seleccionH.titulo === item.titulo}
                    onClick={()=> {
                        handleSeleccion(item);
                    }}
                    
                    />
                ) )}

            </div>

            <div className='informacion'>
               <HabilidadesInfo
               heading={seleccionH.titulo}
               skills={seleccionH.habilidades}
               />
               
            </div>
            </div>
        </section>
        
    );
};


export default Habilidades;