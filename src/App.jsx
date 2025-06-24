import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import ProyectsComponents from '../pages/proyectos';
import Contactos from '../pages/contacto';
import About from '../pages/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/proyectos" element={<ProyectsComponents />} />
          <Route path="/contacto" element={<Contactos />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
