import React from "react";
import "./Navbar.css"

const Navbar = () => {

    return (
        <>
        <nav className='syle1'>
            <div className='content'>
                <img className='logo' src='https://firebasestorage.googleapis.com/v0/b/imagenes-b9423.appspot.com/o/Blue%20Purple%20Futuristic%20Technology%20Presentation%20(1).png?alt=media&token=24d0991a-f392-46a6-9c70-f1f2e047131e' alt="" style={{ width: '15%', height: 'auto' }} />
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