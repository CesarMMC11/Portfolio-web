import { useState } from 'react';
import '../styles/form.css';
import {
FaPhone,
FaLinkedin,
FaGithub,
FaEnvelope,
FaMapMarkerAlt,
} from 'react-icons/fa';

const ContactForm = () => {
const [submitted, setSubmitted] = useState(false);

return (
<div className="form">
    <div className="titulo-contacto">
    <h2>¡Genial! <br />¿Qué tienes en mente?</h2>
    </div>

    <div className="form-container">
    <form action="https://formspree.io/f/xovwwrwp" method="POST">
        <label>Nombre y Apellido</label>
        <input
        type="text"
        name="name"
        placeholder="¡Deja tu nombre y apellido aqui"
        required
        />

        <label>Email</label>
        <input
        type="email"
        name="email"
        placeholder="¡Deja tu email!"
        required
        />

        <label>Asunto</label>
        <input
        type="text"
        name="asunto"
        placeholder="¿Alguna Idea? ¡Hagámoslo!"
        required
        />

        <label>Mensaje para el Dev</label>
        <textarea
        name="message"
        placeholder="Describe el asunto aquí :)"
        required
        ></textarea>

        <button type="submit">Enviar al Dev</button>
    </form>

    <div className="location-form">
        <div className="info-item">
        <FaPhone className="icon-form" />
        <span> +58 0424-2853055</span>
        </div>

        <div className="info-item">
        <FaEnvelope className="icon-form" />
        <span> cesardeveloper11@gmail.com</span>
        </div>

        <div className="info-item">
        <FaMapMarkerAlt className="icon-form" />
        <span> Caracas, Venezuela.</span>
        </div>
    </div>
    </div>
</div>
);
};

export default ContactForm;
