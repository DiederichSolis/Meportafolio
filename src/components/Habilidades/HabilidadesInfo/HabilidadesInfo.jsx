import React from "react";
import './HabilidadesInfo.css'

const HabilidadesInfo = ({heading, skills}) =>{
    return <div className="habilidadesinfocard">
        <h6>{heading}</h6>

        <div className="habilidadesinfocontenedor">
            {skills.map((item,index) =>(
                <React.Fragment key={`skill_${index}`}>
                    <div className="habilidad.info">
                        <p>{item.habilidad}</p>
                        <p className="medida">{item.medida}</p>
                    </div>

                    <div className="habilidadprogreso-bg">
                        <div className="habilidadprogreso" style={{width: item.medida}} />
                    </div>
                </React.Fragment>
            ))}
        </div>
        </div>;
    
};

export default HabilidadesInfo