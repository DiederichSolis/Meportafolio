import React from "react";
import './Experiencia.css';
import ExperienceCard from "./ExperieneCard/ExperienceCard";
import { EXPERIENCIA_W } from '../../utils/data';

const Experiencia = () =>{
    return(
        <section className="exp-contenedor">
            <h5>Work Experience</h5>

            <div className="exp-cont">
                {EXPERIENCIA_W.map((item) =>(
                    <ExperienceCard key={item.title} detalles={item}/>
                ))}
            </div>
        </section>
    )
}

export default Experiencia;