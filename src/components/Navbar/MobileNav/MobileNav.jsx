import React from "react";
import "./MobileNav.css"

const MobileNav = ({ isOpen, toggleMenu }) => {
    return(
        <>
        <div
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
        >

        <div className="mobile-menu-container"> 
            <img className="logo" src="./images/logo-top.png" alt="" />
            
            <ul>
                <li>
                    <a className="menu-item">Home</a>
                </li>
                <li>
                    <a className="menu-item">Habilidades</a>
                </li>
                <li>
                    <a className="menu-item">Certificados</a>
                </li>
                <li>
                    <a className="menu-item">Contato</a>
                </li>

                <button className="contact-btn" onClick={() => {}}>
                contate-me
                </button>
            </ul>
        </div>
        </div>
        </>
    )
}

export default MobileNav