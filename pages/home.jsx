import react from "react";
import Navbar from '../src/components/navbar'
import Header from '../src/components/header'
import Services from '../src/components/services'
import Habilidades from "../src/components/habilidades";


const Home = () => {
    return (
        <>
        <Navbar />
        <Header />
        <Services />
        <Habilidades />
        </>
    )
}

export default Home;