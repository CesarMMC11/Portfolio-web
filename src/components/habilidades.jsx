import React from 'react';
import '../styles/habilidades.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaDatabase, FaGithub, FaTerminal } from "react-icons/fa";
import { DiPhp } from "react-icons/di";
import { SiPython, SiNestjs, SiExpress, SiVite, SiGreensock, SiNodedotjs, SiLaravel, SiFigma, SiAngular, SiPostman, SiNotion } from "react-icons/si";
import SkillBar from '../components/skillbar';

const Habilidades = () => {
  return (
    <section id='habilidades' className="habilidades">
      <h2 className="habilidades-title">01. Habilidades Técnicas</h2>
    <h3 className="habilidades-title-1">Mis conocimientos de Software </h3>


      {/* Lenguajes */}
      <div className="habilidades-grupo">
        <h3>Lenguajes</h3>
        <div className="iconos-grupo">
          {[
            { Icon: FaHtml5, nombre: 'HTML5', nivel: 90 },
            { Icon: SiPython, nombre: 'Python', nivel: 75 },
            { Icon: FaJs, nombre: 'JavaScript', nivel: 85 },
            { Icon: SiNodedotjs, nombre: 'Node.Js', nivel: 90 },
            { Icon: DiPhp, nombre: 'PHP', nivel: 65 },
            { Icon: FaDatabase, nombre: 'SQL', nivel: 80 },
          ].map(({ Icon, nombre, nivel }, i) => (
            <SkillBar key={i} Icon={Icon} nombre={nombre} nivel={nivel} />
          ))}
        </div>
      </div>

      {/* Frameworks / Librerías */}
      <div className="habilidades-grupo">
        <h3>Frameworks / Librerías</h3>
        <div className="iconos-grupo">
          {[
            { Icon: FaReact, nombre: 'React.Js', nivel: 85 },
            { Icon: SiVite, nombre: 'Vite', nivel: 70 },
            { Icon: SiGreensock, nombre: 'GSAP', nivel: 75 },
            { Icon: SiLaravel, nombre: 'Laravel', nivel: 60 },
            { Icon: SiAngular, nombre: 'Angular', nivel: 55 },
            { Icon: SiNestjs, nombre: "Nest", nivel: 75 },
            { Icon: SiExpress, nombre: "Express", nivel: 70 },
          ].map(({ Icon, nombre, nivel }, i) => (
            <SkillBar key={i} Icon={Icon} nombre={nombre} nivel={nivel} />
          ))}
        </div>
      </div>

      {/* Herramientas */}
      <div className="habilidades-grupo">
        <h3>Herramientas</h3>
        <div className="iconos-grupo">
          {[
            { Icon: FaGitAlt, nombre: 'Git', nivel: 85 },
            { Icon: FaGithub, nombre: 'Github', nivel: 80 },
            { Icon: FaTerminal, nombre: 'Terminal', nivel: 75 },
            { Icon: SiFigma, nombre: 'Figma', nivel: 70 },
            { Icon: SiPostman, nombre: 'Postman', nivel: 75 },
            { Icon: SiNotion, nombre: 'Notion', nivel: 60 },
          ].map(({ Icon, nombre, nivel }, i) => (
            <SkillBar key={i} Icon={Icon} nombre={nombre} nivel={nivel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
