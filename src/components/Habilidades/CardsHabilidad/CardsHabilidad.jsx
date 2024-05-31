import React from 'react'
import './CardsHabilidad.css'

const CardsHabilidad = ({titulo, urlico, activo, onClick}) => {
    return (
        <div
        className={`cardHabilidades ${activo ? "active" :  ""}` }
        onClick={() => onClick()}
        >

            <div className='iconoHabilidades'>
                <img src={urlico} alt={titulo} />
            </div>

        <span>{titulo}</span>
        </div>
    );
};


export default CardsHabilidad;