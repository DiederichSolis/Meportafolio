import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import './ContactoForm.css';

const ContactoForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s6y5t7f', 'template_utccofz', form.current, '6_mUCgYlMrhZbY8XG')
            .then((result) => {
                console.log(result.text);
                alert('Mensaje enviado correctamente!');
                form.current.reset();  // Limpiar los campos del formulario
            }, (error) => {
                console.log(error.text);
                alert('Ocurrió un error, por favor intente nuevamente.');
            });
    };

    return (
        <div className="contacto-form">
            <form ref={form} onSubmit={sendEmail}>
                <div className="name-cont">
                    <input type="text" name="firstname" placeholder="First Name" required />
                    <input type="text" name="lastname" placeholder="Last Name" required />
                </div>
                <input type="email" name="email" placeholder="Email" required />
                <textarea name="message" placeholder="Message" rows={3} required />
                <button type="submit">ENVIAR</button>
            </form>
        </div>
    );
};

export default ContactoForm;
