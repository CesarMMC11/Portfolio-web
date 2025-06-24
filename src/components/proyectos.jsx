import React from 'react';
import '../styles/proyects.css';

const ProyectsComponents = () => {
return (
<div className='proyectos'>
    <h2>Proyectos</h2>

    <div className='project-container'>

    <div className='project-card'>
        <img src="/image/proyecto1.png" alt="imagen" />
        <h3>Club de Pádel CP3</h3>
        <p>Página web desarrollada con React.js y 
        Node.js para un club de pádel, en el cual se maneja la gestión de reservas e inscripciones.</p>

        <button className='btn-proyect'>
        <a href="https://clubdepadelcp.netlify.app/home">Ver demo</a>
        </button>
    </div>

    <div className='project-card'>
        <img src="/image/portfolio.png" alt="imagen" />
        <h3>Portafolio Web</h3>
        <p>Desarrollado con React.js + Vite, donde muestro distintas habilidades
        para el desarrollo de páginas web.</p>
    </div>

    <div className='project-card'>
        <img src="/image/neodev.png" alt="imagen" />
        <h3>NeoDev Solutions</h3>
        <p>Página web desarrollada con React.js + Vite y CSS 
        puro para una empresa de desarrollo de software 
        que se encuentra en crecimiento.</p>
    </div>

    </div>
</div>
);
};

export default ProyectsComponents;
