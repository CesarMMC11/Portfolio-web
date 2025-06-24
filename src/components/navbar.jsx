import React, { useState } from "react";
import "../styles/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => setMenuOpen(!menuOpen);

return (
<>
    <div className="navbar">
    <div className="logo-nav">
        <img src="/image/logo.jpg" alt="logo" />
        <h2>Portfolio Web</h2>
    </div>

    <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
    </div>

    <nav className={`buttons-nav ${menuOpen ? "open" : ""}`}>
        <div>
        <button className="button-nav">
            <a href="/home">Home</a>
        </button>
        </div>
        <div>
        <button className="button-nav">
            <a href="/proyectos">Proyectos</a>
        </button>
        </div>
        <div>
        <button className="button-nav">
            <a href="/contacto">Contacto</a>
        </button>
        </div>
        <div>
        <button className="button-nav">
            <a href="/about">Sobre Mí</a>
        </button>
        </div>
    </nav>
    </div>
</>
);
};

export default Navbar;
