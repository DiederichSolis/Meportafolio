import React from "react";
import './Experiencia.css';
import ExperienceCard from "./ExperieneCard/ExperienceCard";
import { EXPERIENCIA_W } from '../../utils/data';

const Experiencia = () =>{

    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed:500,
        slidesToShow:2,
        slidesToScroll:1,
        arrows:false,
        responsive:[
            {
                breakpoint: 769,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ],
    };
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