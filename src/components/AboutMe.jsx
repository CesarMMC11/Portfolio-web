import React from 'react';
import '../styles/about.css';
import { FaPhone, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const AboutMe = () => {
return (
<>
    <div className="about-me">
    <h1>Sobre mí</h1>
    </div>

    <div className="about-me-content">
    <div className="about-me-content-img">
        <img src="/image/about.png" alt="about" />
    </div>

    <div className="about-me-content-text">
        <h2>César M. Montilla C. <br />Full Stack Developer</h2>
        <h3>
        Soy un programador con sólidos conocimientos en el desarrollo de aplicaciones web Full-Stack. 
        Enfocado en la buena experiencia del usuario. Apasionado por la resolución de problemas y el 
        aprendizaje continuo.
        </h3>

        <div className="location-form-2">
        <div className="info-item-2">
            <FaPhone className="icon-form-2" />
            <span> +58 0424-2853055</span>
        </div>

        <div className="info-item-2">
            <FaEnvelope className="icon-form-2" />
            <span> cesardeveloper11@gmail.com</span>
        </div>

        <div className="info-item-2">
            <FaMapMarkerAlt className="icon-form-2" />
            <span> Caracas, Venezuela.</span>
        </div>

        <div className="Text-header-1">
            <a href="https://www.linkedin.com/in/cesar-montilla-ve/">
            <FaLinkedin className="icon-header-2" />
            </a>

            <a href="https://github.com/CesarMMC11">
            <FaGithub className="icon-header-2" />
            </a>

            <a
            href="/Curriculum Vitae.pdf"
            download="Currículum Vitae.pdf"
            className="btn-descargar"
            >
            Descargar CV
            </a>
        </div>
        </div>
    </div>
    </div>
</>
);
};

export default AboutMe;
