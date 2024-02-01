import React from "react";
import "./ContactForm.css"

const ContactForm = () => {
    return (
        <div className="contact-form-content">
            <form>
                <div className="name-container">
                    <input type="text" name="primeironome" placeholder="Nome"/>
                    <input type="text" name="sobrenome" placeholder="Sobrenome"/>
                </div>
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="mensagem" placeholder="Mensagem" />

                <button>Enviar</button>
            </form>
        </div>
    );
};

export default ContactForm;