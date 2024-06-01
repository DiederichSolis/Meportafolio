import React from "react";
import './ContactoForm.css'

const ContactoForm = () => {
    return(
        <div className="contacto-form">
            <form>
                <div className="name-cont">
                    <input type="text" name="firstname" placeholder="First Name" />
                    <input type="text" name="lastname" placeholder="Last Name" />
                </div>
                <input type="text" name="email" placeholder="Email" />
                <textarea type="text" name="message" placeholder="Message" rows={3} />

                <button>ENVIAR</button>
            </form>
        </div>
    )
}

export default ContactoForm;