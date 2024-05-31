import React from 'react'
import './cards.css'

const cardsHabilidades = ({titulo, urlico, activo, onClick}) => {
    return (
        <div
        className={`cardhabilidades ${activo ? "activo" :  ""}` }
        onClick={() => onClick()}
        >

            <div className='icono'>
                <img src={urlico} alt={titulo} />
            </div>

        <span>{titulo}</span>
        </div>
    );
};


export default cardsHabilidades;