import React from "react";
import "./contactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
    return (
        <section className="contact-container">
            <h5>Contate-me</h5>

            <div className="contact-content">
                <div style={{flex: 1}}>
                    <ContactInfoCard
                    iconUrl="./images/email.png"
                    text="meuemail@gmail.com"
                    />
                    <ContactInfoCard
                    iconUrl="./images/github.png"
                    text="https://github.com/GabrielAlema022"
                    />
                </div>

                <div style={{flex: 1}}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactMe