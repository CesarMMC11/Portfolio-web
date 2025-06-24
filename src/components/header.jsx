import React, { useLayoutEffect, useRef } from 'react';
import '../styles/header.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { gsap } from 'gsap';

const Header = () => {
const textRef = useRef(null);
const imgRef = useRef(null);

useLayoutEffect(() => {
const ctx = gsap.context(() => {
    gsap.from(textRef.current, {
    x: -150,
    opacity: 0,
    duration: 2.5,
    ease: 'power3.out',
    });

    gsap.from(imgRef.current, {
    x: 150,
    opacity: 0,
    duration: 2.5,
    ease: 'power3.out',
    });
});

return () => ctx.revert(); // Limpieza para evitar duplicados
}, []);

return (
<div className='header'>
    <div className='contenedor'>
    <div className='Text-header' ref={textRef}>
        <p>¡Hola! Soy</p>
        <h1>César Montilla</h1>
        <h3>Desarrollador Full Stack y Diseñador UX/UI</h3>
        <br />
        <h2>¿Listo para crear algo increíble? ¡Vamos!</h2>
    </div>

    <div className='imagen-header' ref={imgRef}>
        <img src="/image/logome.png" alt="imagen" />
    </div>
    </div>

    <div className='Text-header-2'>
    <a href="https://www.linkedin.com/in/cesar-montilla-ve/">
        <FaLinkedin className='icon-header' />
    </a>

    <a href="https://github.com/CesarMMC11">
        <FaGithub className='icon-header' />
    </a>

    <a href="/Curriculum Vitae.pdf" download="Curriculum Vitae.pdf" className='btn-descargar-1'>
        Descargar CV
    </a>
    </div>
</div>
);
};

export default Header;
