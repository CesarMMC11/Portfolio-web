// SkillBar.js
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/skillbar.css"

gsap.registerPlugin(ScrollTrigger);

export default function SkillBar({ Icon, nombre, nivel }) {
  const barRef = useRef(null);
  const percentRef = useRef(null);

  useEffect(() => {
    if (barRef.current && percentRef.current) {
      gsap.fromTo(
        barRef.current,
        { width: "0%" },
        {
          width: `${nivel}%`,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: barRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        percentRef.current,
        { innerText: 0 },
        {
          innerText: nivel,
          duration: 1.5,
          ease: "power3.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: percentRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [nivel]);

  return (
    <div className="skill-container">
      <div className="skill-header">
        <Icon className="icono" title={nombre} />
        <span className="etiqueta">{nombre}</span>
      </div>
      <div className="skill-bar">
        <div className="skill-progress" ref={barRef}>
          <span className="porcentaje" ref={percentRef}></span>
        </div>
      </div>
    </div>
  );
}
