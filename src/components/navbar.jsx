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
        <nav className={`buttons-nav ${menuOpen ? "open" : ""}`}>
        <a href="#habilidades" className="button-nav">Habilidades</a>
        <a href="#servicios" className="button-nav">Servicios</a>
        <a href="#proyectos" className="button-nav">Proyectos</a>
        <a href="#about" className="button-nav">Sobre Mi</a>
        <a href="#contacto" className="button-nav">Contacto</a>
</nav>

    </nav>
    </div>
</>
);
};

export default Navbar;
