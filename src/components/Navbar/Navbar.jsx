import React, { useState } from 'react';
import MobileNav from './MobileNav/MobileNav'
import './Navbar.css'
import 'material-symbols/outlined.css'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return(
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className='logo' src="./images/logo-top.png" alt=" Gabriel"/>

                    <ul>
                        <li>
                            <a className='menu-item'>Home</a>
                        </li>
                        <li>
                            <a className='menu-item'>Habilidades</a>
                        </li>
                        <li>
                            <a className='menu-item'>Certificações</a>
                        </li>
                        <li>
                            <a className='menu-item'>Contato</a>
                        </li>

                        <button className="contact-btn" onClick={() => {}}>
                        Contate-me
                        </button>
                    </ul>

                    <button class="menu-btn" onClick={toggleMenu}>
                        <span
                            class={"material-symbols-outlined"}
                            style={{ fontSize: "1.8rem" }}
                        >
                        {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
    
};

export default Navbar;