import React, { useEffect, useRef } from 'react';
import '../styles/services.css';
import { FaLaptopCode, FaPaintBrush, FaTools, FaMobileAlt } from "react-icons/fa";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
const cardsRef = useRef([]);

useEffect(() => {
cardsRef.current.forEach((card) => {
    gsap.fromTo(
    card,
    { opacity: 0, y: 100 },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none',
        },
    }
    );
});
}, []);

return (
<section id='servicios' className='services'>
    <div className='services-title'>
    <h2>02. Mis Servicios</h2>
    </div>

    <div className='services-container'>
    <div className='card' ref={el => cardsRef.current[0] = el}>
        <div className='card-inner'>
        <div className='card-front'>
            <FaLaptopCode className='card-icon' />
            <h2>Desarrollo Web</h2>
        </div>
        <div className='card-back'>
            <p>
            Creación de sitios web modernos y optimizados para todos los dispositivos. Implementación de React, Vite y GSAP para una experiencia fluida y dinámica.
            </p>
        </div>
        </div>
    </div>

    <div className='card' ref={el => cardsRef.current[1] = el}>
        <div className='card-inner'>
        <div className='card-front'>
            <FaPaintBrush className='card-icon' />
            <h2>Diseño Web</h2>
        </div>
        <div className='card-back'>
            <p>
            Interfaces atractivas con diseño visual balanceado. Hover effects, animaciones CSS y GSAP para experiencias envolventes.
            </p>
        </div>
        </div>
    </div>

    <div className='card' ref={el => cardsRef.current[2] = el}>
        <div className='card-inner'>
        <div className='card-front'>
            <FaTools className='card-icon' />
            <h2>Mantenimiento Web</h2>
        </div>
        <div className='card-back'>
            <p>
            Optimización de código, mejoras de rendimiento y gestión de Git workflows para actualizaciones seguras y eficientes.
            </p>
        </div>
        </div>
    </div>

    <div className='card' ref={el => cardsRef.current[3] = el}>
        <div className='card-inner'>
        <div className='card-front'>
            <FaMobileAlt className='card-icon' />
            <h2>App's Móviles</h2>
        </div>
        <div className='card-back'>
            <p>
            Creación de apps móviles con tecnologías modernas. Integración de React Native y herramientas para experiencias interactivas.
            </p>
        </div>
        </div>
    </div>
    </div>
</section>
);
};

export default Services;
