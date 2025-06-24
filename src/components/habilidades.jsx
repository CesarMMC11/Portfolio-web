import React, { useEffect, useRef } from 'react';
import '../styles/habilidades.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaDatabase, FaGithub, FaTerminal } from "react-icons/fa";
import { DiPhp } from "react-icons/di";
import { SiVite, SiGreensock, SiNodedotjs, SiLaravel, SiFigma, SiAngular, SiPostman, SiNotion } from "react-icons/si";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Habilidades = () => {
const iconosRef = useRef([]);

useEffect(() => {
iconosRef.current.forEach(icono => {
    gsap.fromTo(
    icono,
    { opacity: 0, y: 80 },
    {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
        trigger: icono,
        start: 'top 90%',
        toggleActions: 'play none none none',
        },
    }
    );
});
}, []);

const agregarRef = (el) => {
if (el && !iconosRef.current.includes(el)) {
    iconosRef.current.push(el);
}
};

return (
<section className="habilidades">
    <h2 className="habilidades-title">Habilidades Técnicas</h2>

    <div className="habilidades-grupo">
    <h3>Lenguajes</h3>
    <div className="iconos-grupo">
        {[
        { Icon: FaHtml5, nombre: 'HTML5' },
        { Icon: FaCss3Alt, nombre: 'CSS3' },
        { Icon: FaJs, nombre: 'JavaScript' },
        { Icon: DiPhp, nombre: 'PHP' },
        { Icon: FaDatabase, nombre: 'SQL' },
        ].map(({ Icon, nombre }, i) => (
        <div className='icono-container' key={i} ref={agregarRef}>
            <Icon className="icono" title={nombre} />
            <span className='etiqueta'>{nombre}</span>
        </div>
        ))}
    </div>
    </div>

    <div className="habilidades-grupo">
    <h3>Frameworks / Librerías</h3>
    <div className="iconos-grupo">
        {[
        { Icon: FaReact, nombre: 'React.Js' },
        { Icon: SiVite, nombre: 'Vite' },
        { Icon: SiGreensock, nombre: 'GSAP' },
        { Icon: SiNodedotjs, nombre: 'Node.Js' },
        { Icon: SiLaravel, nombre: 'Laravel' },
        { Icon: SiAngular, nombre: 'Angular' },
        ].map(({ Icon, nombre }, i) => (
        <div className='icono-container' key={i} ref={agregarRef}>
            <Icon className="icono" title={nombre} />
            <span className='etiqueta'>{nombre}</span>
        </div>
        ))}
    </div>
    </div>

    <div className="habilidades-grupo">
    <h3>Herramientas</h3>
    <div className="iconos-grupo">
        {[
        { Icon: FaGitAlt, nombre: 'Git' },
        { Icon: FaGithub, nombre: 'Github' },
        { Icon: FaTerminal, nombre: 'Terminal' },
        { Icon: SiFigma, nombre: 'Figma' },
        { Icon: SiPostman, nombre: 'Postman' },
        { Icon: SiNotion, nombre: 'Notion' },
        ].map(({ Icon, nombre }, i) => (
        <div className='icono-container' key={i} ref={agregarRef}>
            <Icon className="icono" title={nombre} />
            <span className='etiqueta'>{nombre}</span>
        </div>
        ))}
    </div>
    </div>
</section>
);
};

export default Habilidades;
