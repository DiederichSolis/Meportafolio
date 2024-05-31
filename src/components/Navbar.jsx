import React from "react";
import "./Navbar.css"

const Navbar = () => {

    return (
        <>
        <nav className='syle1'>
            <div className='content'>
                <img className='logo' src='https://firebasestorage.googleapis.com/v0/b/imagenes-b9423.appspot.com/o/logo.png?alt=media&token=2a649acb-b33d-4171-8b76-a589451872af' alt="" style={{ width: '15%', height: 'auto' }} />
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

        </nav>
        </>
    )
}
export default Navbar