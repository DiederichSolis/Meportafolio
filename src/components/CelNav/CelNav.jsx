import React from "react";
import "./CelNav.css"

const CelNav = ({isOpen, toggleMenu}) => {

    return (
        <>
        <div
        className={`menu ${isOpen ? "active": ""}`}
        onClick={toggleMenu}
        >
            <div className="contenedor">
                <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/imagenes-b9423.appspot.com/o/Blue%20Purple%20Futuristic%20Technology%20Presentation%20(3).png?alt=media&token=ba45b64c-aa00-4932-85ff-8b2f101a7b06" alt="" />
                <ul>
                    <li>
                        <a className="catalogo">Home</a>
                    </li>
                    <li>
                        <a className="catalogo">Skills</a>
                    </li>
                    <li>
                        <a className="catalogo">Experience</a>
                    </li>
                    <li>
                        <a className="catalogo">Contact Me</a>
                    </li>

                    <button className="contactarme" onClick={()=>{}}>
                        Contactarme
                    </button>

                </ul>
            </div>


        </div>

        </>
    )
}
export default CelNav