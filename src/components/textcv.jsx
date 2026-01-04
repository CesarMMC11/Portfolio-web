import React from 'react';
import '../styles/textcv.css'

const CV = () => {
    return (
        <>
        <section id='about' className='textcv'>
            <div className='text'>
                <p>Soy desarrollador Full-Stack y Diseñador UX/UI 
                    con amplio conocimiento en el mundo del desarrollo web. 
                    Me apasiona crear soluciones digitales modernas, 
                    escalables y centradas en el usuario, 
                    combinando código limpio con experiencias 
                    visuales auténticas. Estoy listo para ayudarte 
                    a potenciar tu presencia online y transformar 
                    tus ideas en proyectos sólidos y memorables.</p>
            </div>

            <a href="/Curriculum Vitae.pdf" download="Curriculum Vitae.pdf" className='btn-descargar-1'>
                Descargar CURRICULUM
            </a>
        </section>
        </>
    )
}

export default CV;