import React, { useRef } from "react";
import './Experiencia.css';
import ExperienceCard from "./ExperieneCard/ExperienceCard";
import { EXPERIENCIA_W } from '../../utils/data';
import Slider from "react-slick";

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


    const derecha = () => {
        sliderRef.current.slickNext();
    }

    const izquierda = () => {
        sliderRef.current.slickPrev();
    }


    return(
        <section className="exp-contenedor">
            <h5>Work Experience</h5>

            <div className="exp-cont">

                <div className="arrow-right" onClick={derecha}>  
                    <span className="material-symbols-outlined">chevron_right</span>
                </div>

                <div className="arrow-left" onClick={izquierda}>
                    <span className="material-symbols-outlined">chevron_left</span>
                </div>
                <Slider ref={sliderRef} {...settings}>

                {EXPERIENCIA_W.map((item) =>(
                    <ExperienceCard key={item.title} detalles={item}/>
                ))}
                </Slider>
            </div>
        </section>
    )
}

export default Experiencia;