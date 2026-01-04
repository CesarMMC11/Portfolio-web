import react from "react";
import Navbar from '../src/components/navbar'
import Header from '../src/components/header'
import CV from '../src/components/textcv'
import Services from '../src/components/services'
import ProyectsComponents from '../src/components/proyectos'
import Habilidades from "../src/components/habilidades";
import ContactForm from '../src/components/contacto'



const Home = () => {
    return (
        <>
        <Navbar />
        <Header />
        <CV />
        <Habilidades />
        <Services />
        <ProyectsComponents />
        <ContactForm />
        </>
    )
}

export default Home;