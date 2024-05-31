import React, { useState } from "react";
import "./Navbar.css"
import CelNav from "./CelNav/CelNav";

const Navbar = () => {


    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () =>{
        setOpenMenu(!openMenu);
    }

    return (
        <>
        <CelNav isOpen={openMenu} toggleMenu={toggleMenu} />
        <nav className='syle1'>
            <div className='content'>
                <img className='logo' src='https://firebasestorage.googleapis.com/v0/b/imagenes-b9423.appspot.com/o/Blue%20Purple%20Futuristic%20Technology%20Presentation%20(2).png?alt=media&token=58cde758-b18c-45ff-8259-465dcc5acd53' alt="" style={{ width: '15%', height: 'auto' }} />
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

                <button className="opcionestyle" onClick={toggleMenu}>
                    <span
                    class={"material-symbols-outlined"}
                    style={{fontSize: "1.6rem"}}
                    >
                       {openMenu ? "close" : "menu"}
                    </span>

                </button>
              

            </div>

        </nav>
        </>
    )
}
export default Navbar