import React from 'react';
import '../styles/proyects.css';

const ProyectsComponents = () => {
  return (
    <section id='proyectos' className='proyectos'>
      <h2>03. Proyectos Destacados</h2>

      <div className='project-container'>

        <div className='project-card'>
          <img src="/image/proyecto1.png" alt="imagen" />
          <h3>Club de Pádel CP3</h3>
          <p>Página web desarrollada con React.js y 
          Node.js para un club de pádel, en el cual se maneja 
          la gestión de reservas e inscripciones.</p>

          {/* Agrupamos los botones */}
          <div className="btn-group">
            <button className='btn-proyect'>
              <a href="https://clubdepadelcp.netlify.app/home">Ver demo</a>
            </button>
            <button className='btn-proyect'>
              <a href="https://github.com/CesarMMC11/ProyectoFinal">Código</a>
            </button>
          </div>
        </div>

        <div className='project-card'>
          <img src="/image/portfolio.png" alt="imagen" />
          <h3>Portafolio Web</h3>
          <p>Desarrollado con React.js + Vite, donde muestro distintas habilidades
          para el desarrollo de páginas web.</p>

          <div className="btn-group-1">
            <button className='btn-proyect'>
              <a href="https://github.com/CesarMMC11/Portfolio-web">Código</a>
            </button>
          </div>
        </div>

        <div className='project-card'>
          <img src="/image/neodev.png" alt="imagen" />
          <h3>NeoDev Solutions</h3>
          <p>Página web desarrollada con React.js + Vite y CSS 
          puro para una empresa de desarrollo de software 
          que se encuentra en crecimiento.</p>

          <div className="btn-group">
            <button className='btn-proyect'>
              <a href="https://github.com/CesarMMC11/NeoDev">Código</a>
            </button>
          </div>
        </div>

        <div className='project-card'>
          <img src="/image/crypto-app.png" alt="imagen" />
          <h3>Crypto Exchange App</h3>
          <p>Desarrollada con React.js + Vite, es una aplicación
              que muestra los distintos valores de las criptomonedas
              según su valor en el mercado.
          </p>

          <div className="btn-group">
            <button className='btn-proyect'>
              <a href="https://crypto-exchange-appv1.netlify.app/register">Ver demo</a>
            </button>
            <button className='btn-proyect'>
              <a href="https://github.com/CesarMMC11/Crypto-Exchange-App">Código</a>
            </button>
          </div>
        </div>

        <div className='project-card'>
          <img src="/image/landing.png" alt="imagen" />
          <h3>EL Rincón del Barista</h3>
          <p>Desarrollada con React.js + Vite, es una landing page
              sencilla, cuenta con Menú, galería de imágenes y otras
              secciones adaptadas a la idea principal.</p>

          <div className="btn-group">
            <button className='btn-proyect'>
              <a href="https://github.com/CesarMMC11/ERDB-landing">Código</a>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProyectsComponents;
